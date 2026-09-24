const router = require('express').Router();

const { registerUser, loginUser, getUserProfile, changePassword } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { authLimiter, authIpLimiter } = require('../middleware/rateLimitMiddleware');

router.post('/register', authIpLimiter, authLimiter, registerUser);
router.post('/login', authIpLimiter, authLimiter, loginUser);
router.post('/change-password', protect, authLimiter, changePassword);
router.get('/profile', protect, getUserProfile);

module.exports = router;
