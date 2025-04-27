const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

// Middleware pour protéger les routes
const protect = async (req, res, next) => {
  let token;

  // Vérifier si le token est dans les en-têtes Authorization
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Extraire le token (Bearer <token>)
      token = req.headers.authorization.split(' ')[1];

      // Vérifier le token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Trouver l'utilisateur par ID depuis le payload du token (sans le mot de passe)
      // et l'attacher à l'objet req pour les routes suivantes
      req.user = await User.findById(decoded.id).select('-password');

      if (!req.user) {
        res.status(401);
        throw new Error('Non autorisé, utilisateur non trouvé');
      }

      next(); // Passer au prochain middleware/route
    } catch (error) {
      console.error('Token verification failed:', error);
      res.status(401); // Unauthorized
      next(new Error('Non autorisé, token invalide')); // Transmettre l'erreur
    }
  } else {
    res.status(401);
    next(new Error('Non autorisé, pas de token fourni'));
  }
};

// Middleware pour vérifier si l'utilisateur est un admin
const admin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // L'utilisateur est admin, continuer
  } else {
    res.status(403); // Forbidden
    next(new Error('Accès refusé. Rôle administrateur requis.'));
  }
};

module.exports = { protect, admin }; 