process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'biogy-test-secret';

const test = require('node:test');
const assert = require('node:assert/strict');
const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = require('../app');
const connectDB = require('../config/db');
const generateToken = require('../utils/generateToken');
const LabSubmission = require('../models/LabSubmission');
const User = require('../models/User');

let mongoServer;

test('teacher corrections are absent from public HTML and require a server-verified admin', async () => {
  const fs = require('node:fs');
  const html = fs.readFileSync(require('node:path').join(__dirname, '../../frontend/public/laboratoire/at5-metrologie-pipettes.html'), 'utf8');
  assert.doesNotMatch(html, /data-teacher-password|<div class="prof-(block|note)"/);
  assert.match(html, /data-teacher-slot/);
  const endpoint = '/api/lab/activities/at5-metrologie-pipettes/corrections';
  await request(app).get(endpoint).expect(401);
  const student = await createAuthHeader({ username: 'correction-student' });
  await request(app).get(endpoint).set('Authorization', student.authorization).expect(403);
  const teacher = await createAuthHeader({ username: 'correction-teacher', role: 'admin' });
  const response = await request(app).get(endpoint).set('Authorization', teacher.authorization).expect(200);
  assert.ok(Object.keys(response.body.corrections).length >= 15);
  assert.match(response.headers['cache-control'], /no-store/);
  await request(app).get('/api/lab/activities/unknown/corrections').set('Authorization', teacher.authorization).expect(404);
});

const createAuthHeader = async (overrides = {}) => {
  const user = await User.create({
    username: overrides.username || `user-${Date.now()}-${Math.random().toString(16).slice(2, 6)}`,
    password: overrides.password || 'password123',
    role: overrides.role || 'student',
  });

  return {
    user,
    authorization: `Bearer ${generateToken(user._id, user.role)}`,
  };
};

test.before(async () => {
  mongoServer = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongoServer.getUri();
  await connectDB();
});

test.after(async () => {
  await mongoose.connection.close();
  await mongoServer.stop();
});

test.beforeEach(async () => {
  await mongoose.connection.db.dropDatabase();
});

test('lab submissions require authentication and are upserted per student/activity', async () => {
  const basePayload = {
    activityId: 'at5-metrologie-pipettes',
    activityTitle: 'AT5 - Métrologie des pipettes',
    pagePath: '/laboratoire/at5-metrologie-pipettes.html',
    submissionHtml: '<!DOCTYPE html><html><body><h1>Copie</h1></body></html>',
    formState: {
      fields: {
        answer1: '0,9982 g',
      },
    },
    answerCount: 1,
    fieldCount: 1,
  };

  const guestResponse = await request(app)
    .post('/api/lab/submissions')
    .send(basePayload);

  assert.equal(guestResponse.statusCode, 401);

  const { authorization, user } = await createAuthHeader({
    username: 'eleve-at5',
  });

  const firstResponse = await request(app)
    .post('/api/lab/submissions')
    .set('Authorization', authorization)
    .send(basePayload);

  assert.equal(firstResponse.statusCode, 201);
  assert.equal(firstResponse.body.submission.activityId, basePayload.activityId);
  assert.equal(firstResponse.body.submission.version, 1);

  let storedSubmission = await LabSubmission.findOne({ user: user._id, activityId: basePayload.activityId });

  assert.ok(storedSubmission);
  assert.equal(storedSubmission.answerCount, 1);

  const secondResponse = await request(app)
    .post('/api/lab/submissions')
    .set('Authorization', authorization)
    .send({
      ...basePayload,
      submissionHtml: '<!DOCTYPE html><html><body><h1>Copie 2</h1><script>alert("x")</script></body></html>',
      formState: {
        fields: {
          answer1: '0,9982 g',
          answer2: 'Pipette conforme',
        },
      },
      answerCount: 2,
      fieldCount: 2,
    });

  assert.equal(secondResponse.statusCode, 200);
  assert.equal(secondResponse.body.submission.version, 2);

  storedSubmission = await LabSubmission.findOne({ user: user._id, activityId: basePayload.activityId });

  assert.ok(storedSubmission);
  assert.equal(storedSubmission.version, 2);
  assert.equal(storedSubmission.answerCount, 2);
  assert.equal(storedSubmission.review.status, 'submitted');
  assert.equal(storedSubmission.submissionHtml.includes('<script>'), false);
});

test('admin can list, inspect and review lab submissions', async () => {
  const { authorization: studentAuth } = await createAuthHeader({
    username: 'eleve-labo',
  });

  await request(app)
    .post('/api/lab/submissions')
    .set('Authorization', studentAuth)
    .send({
      activityId: 'at5-metrologie-pipettes',
      activityTitle: 'AT5 - Métrologie des pipettes',
      submissionHtml: '<!DOCTYPE html><html><body><h1>Copie élève</h1></body></html>',
      formState: {
        fields: {
          answer1: 'Réponse',
        },
      },
      answerCount: 1,
      fieldCount: 1,
    });

  const { authorization: adminAuth } = await createAuthHeader({
    username: 'prof-admin',
    role: 'admin',
  });

  const studentListResponse = await request(app)
    .get('/api/admin/lab-submissions')
    .set('Authorization', studentAuth);

  assert.equal(studentListResponse.statusCode, 403);

  const listResponse = await request(app)
    .get('/api/admin/lab-submissions')
    .set('Authorization', adminAuth);

  assert.equal(listResponse.statusCode, 200);
  assert.equal(listResponse.body.length, 1);

  const submissionId = listResponse.body[0]._id;

  const detailResponse = await request(app)
    .get(`/api/admin/lab-submissions/${submissionId}`)
    .set('Authorization', adminAuth);

  assert.equal(detailResponse.statusCode, 200);
  assert.match(detailResponse.body.submissionHtml, /Copie élève/);

  const reviewResponse = await request(app)
    .put(`/api/admin/lab-submissions/${submissionId}/review`)
    .set('Authorization', adminAuth)
    .send({
      status: 'reviewed',
      feedback: 'Copie complète. Pense à mieux justifier la conclusion.',
    });

  assert.equal(reviewResponse.statusCode, 200);
  assert.equal(reviewResponse.body.submission.review.status, 'reviewed');

  const storedSubmission = await LabSubmission.findById(submissionId);

  assert.ok(storedSubmission);
  assert.equal(storedSubmission.review.status, 'reviewed');
  assert.equal(storedSubmission.review.feedback, 'Copie complète. Pense à mieux justifier la conclusion.');
});

test('students can read only their own receipts and teacher feedback', async () => {
  const owner = await createAuthHeader({ username: 'receipt-owner' });
  const other = await createAuthHeader({ username: 'receipt-other' });
  await LabSubmission.create({ user: owner.user._id, usernameSnapshot: owner.user.username, activityId: 'at5-metrologie-pipettes', activityTitle: 'AT5', submissionHtml: '<p>Private answer</p>', formState: { fields: { private: 'answer' } }, review: { status: 'reviewed', feedback: 'Travail vérifié.' } });
  await request(app).get('/api/lab/submissions/mine').expect(401);
  const response = await request(app).get('/api/lab/submissions/mine').set('Authorization', owner.authorization).expect(200);
  assert.equal(response.body.length, 1);
  assert.equal(response.body[0].review.feedback, 'Travail vérifié.');
  assert.equal(response.body[0].submissionHtml, undefined);
  assert.equal(response.body[0].formState, undefined);
  assert.match(response.headers['cache-control'], /no-store/);
  const outsider = await request(app).get('/api/lab/submissions/mine').set('Authorization', other.authorization).expect(200);
  assert.deepEqual(outsider.body, []);
});
