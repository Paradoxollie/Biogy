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

const registerUser = async (username) => {
  const response = await request(app)
    .post('/api/auth/register')
    .send({
      username,
      password: 'password123',
    });

  return response.body;
};

const promoteToAdmin = async (userId) => {
  await User.findByIdAndUpdate(userId, { role: 'admin' });
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

test('admin can update a username through the admin API with a classroom-friendly full name', async () => {
  const adminUser = await registerUser('admin-user');
  const studentUser = await registerUser('student-user');

  await promoteToAdmin(adminUser._id);

  const response = await request(app)
    .put(`/api/admin/users/${studentUser._id}/username`)
    .set('Authorization', `Bearer ${adminUser.token}`)
    .send({ username: 'Marie Dupont' });

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.user.username, 'Marie Dupont');

  const storedUser = await User.findById(studentUser._id).select('username role');
  assert.equal(storedUser.username, 'Marie Dupont');
  assert.equal(storedUser.role, 'student');
});

test('admin username update rejects duplicates after trimming input', async () => {
  const adminUser = await registerUser('admin-user');
  const targetUser = await registerUser('target-user');
  await registerUser('existing-name');

  await promoteToAdmin(adminUser._id);

  const response = await request(app)
    .put(`/api/admin/users/${targetUser._id}/username`)
    .set('Authorization', `Bearer ${adminUser.token}`)
    .send({ username: '  existing-name  ' });

  assert.equal(response.statusCode, 400);
  assert.equal(response.body.message, 'Ce nom d\'utilisateur est deja pris');
});

test('admin can update a role through the admin API', async () => {
  const adminUser = await registerUser('admin-user');
  const studentUser = await registerUser('student-user');

  await promoteToAdmin(adminUser._id);

  const response = await request(app)
    .put(`/api/admin/users/${studentUser._id}/role`)
    .set('Authorization', `Bearer ${adminUser.token}`)
    .send({ role: 'admin' });

  assert.equal(response.statusCode, 200);
  assert.equal(response.body.user.role, 'admin');

  const storedUser = await User.findById(studentUser._id).select('role');
  assert.equal(storedUser.role, 'admin');
});
