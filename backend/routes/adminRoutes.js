const express = require('express');
const { getPendingPosts, getAllPosts, approvePost, rejectPost, deletePostAdmin, updateUserRole, findUserByUsername, getAllUsers, deleteUser, updateUsername } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const { admin } = require('../middleware/adminMiddleware');

const router = express.Router();

// Apply protection to all admin routes
router.use(protect);
router.use(admin);

// Post management routes
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

// User management routes
// Get all users
router.get('/users', getAllUsers);

// Trouver un utilisateur par nom d'utilisateur
router.get('/users/find/:username', findUserByUsername);

// Mettre à jour le rôle d'un utilisateur
router.put('/users/:id/role', updateUserRole);

// Mettre à jour le nom d'utilisateur
router.put('/users/:id/username', updateUsername);

// Supprimer un utilisateur
router.delete('/users/:id', deleteUser);

module.exports = router; 