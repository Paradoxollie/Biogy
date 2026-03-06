process.env.NODE_ENV = 'test';
process.env.JWT_SECRET = process.env.JWT_SECRET || 'biogy-test-secret';

const test = require('node:test');
const assert = require('node:assert/strict');
const mongoose = require('mongoose');
const request = require('supertest');
const { MongoMemoryServer } = require('mongodb-memory-server');

const app = require('../app');
const connectDB = require('../config/db');
const User = require('../models/User');

let mongoServer;

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

test('register ignores any requested admin role and returns a stable auth payload', async () => {
  const response = await request(app)
    .post('/api/auth/register')
    .send({
      username: 'alice',
      password: 'password123',
      role: 'admin',
    });

  assert.equal(response.statusCode, 201);
  assert.equal(response.body.role, 'student');
  assert.ok(response.body.token);
  assert.ok(response.body._id);

  const storedUser = await User.findOne({ username: 'alice' }).select('+password');

  assert.ok(storedUser);
  assert.equal(storedUser.role, 'student');
});
