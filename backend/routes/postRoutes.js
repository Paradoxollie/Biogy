const express = require('express');
const { createPost, getApprovedPosts, likePost, commentPost, deletePost, deleteComment } = require('../controllers/postController');
const { protect, admin } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware'); // Middleware pour gérer l'upload

const router = express.Router();

// Route pour récupérer tous les posts approuvés (accessible publiquement)
router.get('/', getApprovedPosts);

// Route pour créer un nouveau post (protégée, nécessite connexion)
// upload.single('file') : Middleware Multer pour traiter UN fichier du champ 'file'
router.post('/', protect, upload.single('file'), createPost);

// Route pour supprimer un post (protégée, nécessite connexion et auteur/admin)
router.delete('/:id', protect, deletePost);

// Route pour liker/unliker un post (protégée, nécessite connexion)
router.post('/:id/like', protect, likePost);

// Route pour commenter un post (protégée, nécessite connexion)
router.post('/:id/comment', protect, commentPost);

// Route pour supprimer un commentaire (protégée, nécessite être admin)
router.delete('/:id/comments/:commentId', protect, admin, deleteComment);

module.exports = router; 