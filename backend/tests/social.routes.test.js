process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'biogy-test-secret';

const test = require('node:test');
const assert = require('node:assert/strict');
const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = require('../app');
const connectDB = require('../config/db');
const Profile = require('../models/Profile');

let mongoServer;

const registerUser = async (username) => {
  const response = await request(app)
    .post('/api/auth/register')
    .send({
      username,
      password: 'password123',
    });

  return response.body;
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

test('specific social routes are reachable before the dynamic profile route', async () => {
  const user = await registerUser('social-user');

  await request(app)
    .get('/api/social/profile')
    .set('Authorization', `Bearer ${user.token}`);

  const response = await request(app)
    .get('/api/social/profile/following')
    .set('Authorization', `Bearer ${user.token}`);

  assert.equal(response.statusCode, 200);
  assert.deepEqual(response.body, []);
});

test('a private profile stays private for guests but is readable by its owner', async () => {
  const user = await registerUser('private-owner');

  await request(app)
    .put('/api/social/profile')
    .set('Authorization', `Bearer ${user.token}`)
    .send({
      displayName: 'Owner',
      settings: {
        privateProfile: true,
      },
    });

  const profile = await Profile.findOne({ user: user._id });

  const guestResponse = await request(app).get(`/api/social/profile/${profile.user.toString()}`);
  assert.equal(guestResponse.statusCode, 403);

  const ownerResponse = await request(app)
    .get(`/api/social/profile/${profile.user.toString()}`)
    .set('Authorization', `Bearer ${user.token}`);

  assert.equal(ownerResponse.statusCode, 200);
  assert.equal(ownerResponse.body.user._id, profile.user.toString());
});

test('preset avatar route accepts multipart form fields for backward compatibility', async () => {
  const user = await registerUser('avatar-user');

  const avatarUrl = 'https://res.cloudinary.com/biogy/image/upload/v1/avatars/scientist1_3048122_rvbpzl';

  const response = await request(app)
    .post('/api/social/profile/avatar/preset')
    .set('Authorization', `Bearer ${user.token}`)
    .field('avatarUrl', avatarUrl);

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.avatar.url, avatarUrl);

  const profile = await Profile.findOne({ user: user._id });
  assert.equal(profile.avatar.url, avatarUrl);
  assert.equal(profile.avatar.cloudinaryPublicId, 'avatars/scientist1_3048122_rvbpzl');
});
