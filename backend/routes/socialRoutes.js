const express = require('express');

const {
  updateProfile,
  uploadAvatar,
  getMyProfile,
  getProfileByUserId,
  followUser,
  getFollowing,
  getFollowers,
} = require('../controllers/profileController');
const { protect, optionalAuth } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const avatarRoutes = require('./avatarRoutes');

const router = express.Router();

router.use('/profile/avatar', avatarRoutes);

router.route('/profile')
  .get(protect, getMyProfile)
  .put(protect, updateProfile);

router.route('/profile/avatar')
  .post(protect, upload.single('avatar'), uploadAvatar);

router.route('/profile/following')
  .get(protect, getFollowing);

router.route('/profile/followers')
  .get(protect, getFollowers);

router.route('/profile/:userId/follow')
  .post(protect, followUser);

router.route('/profile/:userId')
  .get(optionalAuth, getProfileByUserId);

module.exports = router;
