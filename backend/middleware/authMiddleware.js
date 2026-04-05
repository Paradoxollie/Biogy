const jwt = require('jsonwebtoken');

const User = require('../models/User');
const { isAdminRole } = require('../utils/roles');

require('dotenv').config();

const extractBearerToken = (req) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    return req.headers.authorization.split(' ')[1];
  }

  return null;
};

const findUserFromRequest = async (req) => {
  const token = extractBearerToken(req);

  if (!token) {
    return null;
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return User.findById(decoded.id).select('-password');
};

const protect = async (req, res, next) => {
  try {
    const user = await findUserFromRequest(req);

    if (!user) {
      return res.status(401).json({
        message: 'Non autorise, pas de token valide fourni',
      });
    }

    req.user = user;
    return next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).json({
      message: 'Non autorise, token invalide',
    });
  }
};

const optionalAuth = async (req, res, next) => {
  try {
    const user = await findUserFromRequest(req);

    if (user) {
      req.user = user;
    }
  } catch (error) {
    console.warn('Optional auth skipped due to invalid token:', error.message);
  }

  return next();
};

const admin = (req, res, next) => {
  if (req.user && isAdminRole(req.user.role)) {
    return next();
  }

  return res.status(403).json({
    message: 'Acces refuse. Role administrateur requis.',
  });
};

module.exports = {
  protect,
  optionalAuth,
  admin,
};
