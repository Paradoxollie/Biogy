process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'biogy-test-secret';

const test = require('node:test');
const assert = require('node:assert/strict');
const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = require('../app');
const connectDB = require('../config/db');

let mongoServer;

const createUserAndToken = async (username) => {
  const registerResponse = await request(app)
    .post('/api/auth/register')
    .send({
      username,
      password: 'password123',
    });

  return registerResponse.body;
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

test('forum discussions are escaped before being returned by the API', async () => {
  const user = await createUserAndToken('forum-user');

  const topicResponse = await request(app)
    .post('/api/forum/topics')
    .set('Authorization', `Bearer ${user.token}`)
    .send({
      title: 'Sujet test',
      content: 'Premier message',
      category: 'general',
    });

  assert.equal(topicResponse.statusCode, 201);

  const topicId = topicResponse.body._id;

  const discussionPayload = '<script>alert(1)</script>\nBonjour';

  const createDiscussionResponse = await request(app)
    .post(`/api/forum/topics/${topicId}/discussions`)
    .set('Authorization', `Bearer ${user.token}`)
    .field('content', discussionPayload);

  assert.equal(createDiscussionResponse.statusCode, 201);
  assert.match(createDiscussionResponse.body.content, /&lt;script&gt;alert\(1\)&lt;\/script&gt;<br \/>Bonjour/);

  const discussionsResponse = await request(app).get(`/api/forum/topics/${topicId}/discussions`);

  assert.equal(discussionsResponse.statusCode, 200);

  const unsafeDiscussion = discussionsResponse.body.discussions.find(
    (discussion) => discussion.content.includes('alert(1)'),
  );

  assert.ok(unsafeDiscussion);
  assert.doesNotMatch(unsafeDiscussion.content, /<script>/);
  assert.match(unsafeDiscussion.content, /&lt;script&gt;/);
});
