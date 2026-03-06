require('dotenv').config();

const app = require('./app');
const connectDB = require('./config/db');

let serverInstance;
let retryTimer;

const DB_RETRY_DELAY_MS = 5000;

const bootstrapDatabase = async () => {
  try {
    await connectDB();
  } catch (error) {
    console.error('Initial MongoDB connection failed:', error.message);
    retryTimer = setTimeout(() => {
      retryTimer = null;
      bootstrapDatabase().catch(() => {});
    }, DB_RETRY_DELAY_MS);
  }
};

const startServer = async () => {
  if (serverInstance) {
    return serverInstance;
  }

  const port = Number(process.env.PORT) || 4000;
  serverInstance = app.listen(port, () => {
    console.log(`Server ready on ${port}`);
  });

  if (!retryTimer) {
    bootstrapDatabase().catch(() => {});
  }

  return serverInstance;
};

if (require.main === module) {
  startServer().catch((error) => {
    console.error('Unable to start server:', error);
    process.exit(1);
  });
}

module.exports = {
  app,
  startServer,
};
