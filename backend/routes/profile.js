const express = require('express');

const {
  getMyProfile,
  updateProfile,
  uploadAvatar,
} = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const avatarRoutes = require('./avatarRoutes');

const router = express.Router();

router.route('/')
  .get(protect, getMyProfile)
  .put(protect, updateProfile);

// Backward-compatible legacy profile endpoints.
router.post('/avatar', protect, upload.single('avatar'), uploadAvatar);
router.use('/avatar', avatarRoutes);

module.exports = router;
