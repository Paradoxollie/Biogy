const mongoose = require('mongoose');

let connectionPromise;
let listenersRegistered = false;

mongoose.set('bufferCommands', false);
mongoose.set('bufferTimeoutMS', 0);

const CONNECTION_OPTIONS = {
  appName: 'biogy-backend',
  family: 4,
  maxPoolSize: 10,
  minPoolSize: 0,
  serverSelectionTimeoutMS: 3000,
  socketTimeoutMS: 10000,
};

const registerConnectionListeners = () => {
  if (listenersRegistered) {
    return;
  }

  listenersRegistered = true;

  mongoose.connection.on('connected', () => {
    console.log('MongoDB connected');
  });

  mongoose.connection.on('disconnected', () => {
    console.warn('MongoDB disconnected');
  });

  mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error.message);
  });
};

const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!uri) {
    throw new Error('MongoDB URI not found in environment variables');
  }

  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  registerConnectionListeners();

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(uri, CONNECTION_OPTIONS)
      .then(() => mongoose.connection)
      .catch((error) => {
        connectionPromise = null;
        throw error;
      });
  }

  return connectionPromise;
};

const isDatabaseReady = () => mongoose.connection.readyState === 1;

module.exports = connectDB;
module.exports.isDatabaseReady = isDatabaseReady;
