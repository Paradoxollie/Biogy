const { isDatabaseReady } = require('../config/db');

const DATABASE_UNAVAILABLE_MESSAGE = 'Base de donnees indisponible. Le service redemarre ou la configuration de production doit etre corrigee.';

const markDatabaseUnavailable = (res) => {
  res.set('X-Biogy-Database-Unavailable', '1');
  res.set('Retry-After', '60');
};

const ensureDatabaseAvailable = (res) => {
  if (isDatabaseReady()) {
    return true;
  }

  markDatabaseUnavailable(res);
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

  markDatabaseUnavailable(res);
  res.status(statusCode).json(fallback);
  return true;
};

module.exports = {
  DATABASE_UNAVAILABLE_MESSAGE,
  ensureDatabaseAvailable,
  respondWithDatabaseFallback,
};
