const jwt = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (userId, role, tokenVersion = 0) => {
  return jwt.sign(
    { id: userId, role: role, tokenVersion }, // Payload : inclure l'ID, le rôle et la version de session
    process.env.JWT_SECRET,     // Clé secrète depuis .env
    {
      expiresIn: process.env.JWT_EXPIRES_IN || '30d', // Durée de validité depuis .env ou 30 jours
    }
  );
};

module.exports = generateToken; 
