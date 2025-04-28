const express = require('express');
const router = express.Router();
const forumController = require('../controllers/forumController');
const { protect, admin } = require('../middleware/authMiddleware');

// Routes publiques
router.get('/discussions', forumController.getDiscussions);
router.get('/discussions/:id', forumController.getDiscussionById);
router.get('/search', forumController.searchDiscussions);

// Routes protégées (nécessitent une authentification)
router.post('/discussions', protect, forumController.createDiscussion);
router.put('/discussions/:id', protect, forumController.updateDiscussion);
router.post('/discussions/:id/replies', protect, forumController.addReply);
router.put('/discussions/:discussionId/replies/:replyId', protect, forumController.updateReply);
router.post('/discussions/:id/like', protect, forumController.toggleLikeDiscussion);
router.post('/discussions/:discussionId/replies/:replyId/like', protect, forumController.toggleLikeReply);

// Routes admin
router.post('/discussions/:id/pin', protect, admin, forumController.togglePinDiscussion);
router.post('/discussions/:id/lock', protect, admin, forumController.toggleLockDiscussion);

module.exports = router; 