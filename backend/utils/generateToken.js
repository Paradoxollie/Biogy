const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (userId, role) => {
  return jwt.sign(
    { id: userId, role: role }, // Payload : inclure l'ID et le rôle
    process.env.JWT_SECRET,     // Clé secrète depuis .env
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '30d', // Durée de validité depuis .env ou 30 jours
    }
  );
};

module.exports = generateToken; 