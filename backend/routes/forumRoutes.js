const express = require('express');
const {
  createTopic,
  getTopics,
  getTopicById,
  updateTopic,
  deleteTopic,
  likeTopic,
  createDiscussion,
  getDiscussions,
  updateDiscussion,
  deleteDiscussion,
  likeDiscussion
} = require('../controllers/forumController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Routes pour les sujets
router.route('/topics')
  .post(protect, createTopic)  // Créer un sujet (authentifié)
  .get(getTopics);             // Récupérer tous les sujets (public)

router.route('/topics/:id')
  .get(getTopicById)           // Récupérer un sujet par ID (public)
  .put(protect, updateTopic)   // Mettre à jour un sujet (authentifié)
  .delete(protect, deleteTopic); // Supprimer un sujet (authentifié)

router.route('/topics/:id/like')
  .post(protect, likeTopic);   // Liker/Unliker un sujet (authentifié)

// Routes pour les discussions
router.route('/topics/:id/discussions')
  .post(protect, createDiscussion) // Créer une discussion (authentifié)
  .get(getDiscussions);            // Récupérer les discussions d'un sujet (public)

router.route('/discussions/:id')
  .put(protect, updateDiscussion)   // Mettre à jour une discussion (authentifié)
  .delete(protect, deleteDiscussion); // Supprimer une discussion (authentifié)

router.route('/discussions/:id/like')
  .post(protect, likeDiscussion);   // Liker/Unliker une discussion (authentifié)

module.exports = router;
