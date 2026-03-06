const rateLimit = require('express-rate-limit');

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === 'production' ? 10 : 100,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    message: 'Trop de tentatives d authentification, merci de reessayer plus tard.',
  },
});

module.exports = {
  authLimiter,
};
