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

const hasPasswordChangedSinceToken = (user, decoded) => {
  if (!user?.passwordChangedAt || !decoded?.iat) {
    return false;
  }

  return Math.floor(user.passwordChangedAt.getTime() / 1000) > decoded.iat;
};

const hasTokenVersionMismatch = (user, decoded) => {
  return (user?.tokenVersion || 0) !== (decoded?.tokenVersion || 0);
};

const isPasswordChangeAllowedRoute = (req) => {
  const route = `${req.baseUrl}${req.path}`;
  return route === '/api/auth/profile' || route === '/api/auth/change-password';
};

const findUserFromRequest = async (req) => {
  const token = extractBearerToken(req);

  if (!token) {
    return null;
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await User.findById(decoded.id).select('-password');

  return {
    user,
    decoded,
  };
};

const protect = async (req, res, next) => {
  try {
    const auth = await findUserFromRequest(req);

    if (!auth?.user) {
      return res.status(401).json({
        message: 'Non autorise, pas de token valide fourni',
      });
    }

    if (hasPasswordChangedSinceToken(auth.user, auth.decoded) || hasTokenVersionMismatch(auth.user, auth.decoded)) {
      return res.status(401).json({
        message: 'Session expiree. Reconnecte-toi.',
      });
    }

    if (auth.user.mustChangePassword && !isPasswordChangeAllowedRoute(req)) {
      return res.status(403).json({
        message: 'Changement de mot de passe requis',
        code: 'PASSWORD_CHANGE_REQUIRED',
      });
    }

    req.user = auth.user;
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
    const auth = await findUserFromRequest(req);

    if (
      auth?.user &&
      !hasPasswordChangedSinceToken(auth.user, auth.decoded) &&
      !hasTokenVersionMismatch(auth.user, auth.decoded)
    ) {
      req.user = auth.user;
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
