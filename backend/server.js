const backend = require('./index');

if (require.main === module) {
  backend.startServer().catch((error) => {
    console.error('Unable to start server:', error);
    process.exit(1);
  });
}

module.exports = backend;
