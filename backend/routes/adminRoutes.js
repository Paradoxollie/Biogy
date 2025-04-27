const express = require('express');
const { getPendingPosts, getAllPosts, approvePost, rejectPost, deletePostAdmin, updateUserRole, findUserByUsername } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

const router = express.Router();

// Apply protection to all admin routes
router.use(protect);
router.use(admin);

// Get all pending posts
router.get('/posts/pending', getPendingPosts);

// Get all posts (for admin dashboard)
router.get('/posts', getAllPosts);

// Approve a post
router.put('/posts/:id/approve', approvePost);

// Reject a post
router.put('/posts/:id/reject', rejectPost);

// Delete a post (admin function)
router.delete('/posts/:id', deletePostAdmin);

// Trouver un utilisateur par nom d'utilisateur
router.get('/users/find/:username', findUserByUsername);

// Mettre à jour le rôle d'un utilisateur
router.put('/users/:id/role', updateUserRole);

module.exports = router; 