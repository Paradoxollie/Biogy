const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Route pour enregistrer un nouvel utilisateur
router.post('/register', registerUser);

// Route pour connecter un utilisateur
router.post('/login', loginUser);

// Route pour obtenir le profil de l'utilisateur (protégée)
// Le middleware `protect` s'exécute avant `getUserProfile`
router.get('/profile', protect, getUserProfile);

module.exports = router; 