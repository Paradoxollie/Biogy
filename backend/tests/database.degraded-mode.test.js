const test = require('node:test');
const assert = require('node:assert/strict');
const mongoose = require('mongoose');
const request = require('supertest');

const app = require('../app');

test.beforeEach(async () => {
  await mongoose.disconnect();
  delete process.env.MONGO_URI;
  delete process.env.MONGODB_URI;
});

test('public posts endpoint falls back to an empty list when the database is unavailable', async () => {
  const response = await request(app)
    .get('/api/posts')
    .expect(200);

  assert.equal(response.headers['x-biogy-database-unavailable'], '1');
  assert.deepEqual(response.body, []);
});

test('public forum topics endpoint falls back to an empty payload when the database is unavailable', async () => {
  const response = await request(app)
    .get('/api/forum/topics?page=2&limit=5')
    .expect(200);

  assert.equal(response.headers['x-biogy-database-unavailable'], '1');
  assert.deepEqual(response.body, {
    topics: [],
    pagination: {
      page: 2,
      limit: 5,
      total: 0,
      pages: 0,
    },
    unavailable: true,
    message: 'Base de donnees indisponible. Le service redemarre ou la configuration de production doit etre corrigee.',
  });
});

test('login fails fast with a 503 when the database is unavailable', async () => {
  const response = await request(app)
    .post('/api/auth/login')
    .send({
      username: 'demo',
      password: 'motdepasse123',
    })
    .expect(503);

  assert.equal(response.headers['x-biogy-database-unavailable'], '1');
  assert.equal(response.body.code, 'DATABASE_UNAVAILABLE');
});
