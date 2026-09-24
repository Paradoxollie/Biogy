// Isolated browser-test fixture. Never uses the production database.
const { MongoMemoryServer } = require('mongodb-memory-server');
const crypto = require('node:crypto');

async function main() {
  if (process.env.NODE_ENV === 'production') throw new Error('Test fixtures are disabled in production.');
  process.env.NODE_ENV = 'test';
  process.env.JWT_SECRET = crypto.randomBytes(32).toString('hex');
  const mongo = await MongoMemoryServer.create();
  process.env.MONGO_URI = mongo.getUri();
  const connectDB = require('../config/db');
  await connectDB();
  const User = require('../models/User');
  await User.create([
    { username: 'test-student', password: 'Biogy-test-2026!', role: 'student' },
    { username: 'test-teacher', password: 'Biogy-test-2026!', role: 'admin' },
  ]);
  const app = require('../app');
  const server = app.listen(5000, '127.0.0.1', () => console.log('Isolated test API listening on http://127.0.0.1:5000'));
  const stop = async () => { server.close(); await require('mongoose').disconnect(); await mongo.stop(); process.exit(0); };
  process.on('SIGINT', stop);
  process.on('SIGTERM', stop);
}
main().catch((error) => { console.error(error); process.exit(1); });
