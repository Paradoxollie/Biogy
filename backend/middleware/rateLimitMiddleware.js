const rateLimit = require('express-rate-limit');
const crypto = require('node:crypto');

// Pupils share the school's public IP. Limit failed attempts per account + IP.
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: process.env.NODE_ENV === 'production' ? 15 : 200,
  skipSuccessfulRequests: true,
  keyGenerator: (req) => {
    const username = typeof req.body?.username === 'string' ? req.body.username.trim().toLowerCase() : String(req.user?._id || 'anonymous');
    return `${req.ip}:${crypto.createHash('sha256').update(username).digest('hex')}`;
  },
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Trop de tentatives pour ce compte. Réessaie dans 15 minutes.' },
});
const authIpLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: 'Trop de demandes de connexion. Réessaie dans un instant.' },
});
module.exports = { authLimiter, authIpLimiter };
