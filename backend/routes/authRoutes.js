const router = require('express').Router();
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

// Routes d'authentification
router.post('/register', registerUser);
router.post('/login', loginUser);

// Route protégée pour le profil
router.get('/profile', protect, getUserProfile);

module.exports = router;