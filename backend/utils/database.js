const { isDatabaseReady } = require('../config/db');

const DATABASE_UNAVAILABLE_MESSAGE = 'Base de donnees indisponible. Le service redemarre ou la configuration de production doit etre corrigee.';

const ensureDatabaseAvailable = (res) => {
  if (isDatabaseReady()) {
    return true;
  }

  res.status(503).json({
    code: 'DATABASE_UNAVAILABLE',
    message: DATABASE_UNAVAILABLE_MESSAGE,
  });

  return false;
};

const respondWithDatabaseFallback = (res, fallback, statusCode = 200) => {
  if (isDatabaseReady()) {
    return false;
  }

  res.status(statusCode).json(fallback);
  return true;
};

module.exports = {
  DATABASE_UNAVAILABLE_MESSAGE,
  ensureDatabaseAvailable,
  respondWithDatabaseFallback,
};
