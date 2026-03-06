const { isAdminRole } = require('../utils/roles');

/**
 * Middleware to verify admin privileges
 * This middleware should be used after the protect middleware
 */
const admin = (req, res, next) => {
  if (req.user && isAdminRole(req.user.role)) {
    return next();
  }

  res.status(403);
  throw new Error('Acces non autorise. Privileges d administrateur requis.');
};

module.exports = { admin };
