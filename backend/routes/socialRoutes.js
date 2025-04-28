const express = require('express');
const router = express.Router();
const socialController = require('../controllers/socialController');
const { protect } = require('../middleware/authMiddleware');

// Routes publiques
router.get('/profile/:userId', socialController.getProfileByUserId);
router.get('/search-users', socialController.searchUsers);
router.get('/user/:userId/followers', socialController.getFollowers);
router.get('/user/:userId/following', socialController.getFollowing);

// Routes protégées (nécessitent une authentification)
router.put('/profile', protect, socialController.updateProfile);
router.put('/profile/image', protect, socialController.updateProfileImage);
router.put('/profile/cover', protect, socialController.updateCoverImage);
router.post('/follow/:targetUserId', protect, socialController.toggleFollow);
router.get('/notifications', protect, socialController.getNotifications);
router.post('/notifications/read', protect, socialController.markNotificationsAsRead);
router.get('/suggested-users', protect, socialController.getSuggestedUsers);

module.exports = router; 