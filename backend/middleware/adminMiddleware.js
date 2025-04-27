const User = require('../models/User');

/**
 * Middleware to verify admin privileges
 * This middleware should be used after the protect middleware
 */
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next();
  } else {
    res.status(403);
    throw new Error('Accès non autorisé. Privilèges d\'administrateur requis.');
  }
};

module.exports = { admin }; 