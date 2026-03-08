const router = require('express').Router();

const { registerUser, loginUser, getUserProfile, changePassword } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { authLimiter } = require('../middleware/rateLimitMiddleware');

router.post('/register', authLimiter, registerUser);
router.post('/login', authLimiter, loginUser);
router.get('/profile', protect, getUserProfile);
router.post('/change-password', protect, changePassword);

module.exports = router;
