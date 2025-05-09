const Post = require('../models/Post');
const { deleteFromCloudinary } = require('../config/cloudinary');
const User = require('../models/User');

/**
 * @desc    Get all pending posts awaiting moderation
 * @route   GET /api/admin/posts/pending
 * @access  Private/Admin
 */
const getPendingPosts = async (req, res) => {
  try {
    const pendingPosts = await Post.find({ status: 'pending' })
      .sort({ createdAt: -1 })
      .populate('user', 'username');
    
    res.json(pendingPosts);
  } catch (error) {
    console.error('Error in getPendingPosts:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des posts en attente' });
  }
};

/**
 * @desc    Get all posts (for admin dashboard)
 * @route   GET /api/admin/posts
 * @access  Private/Admin
 */
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .populate('user', 'username');
    
    res.json(posts);
  } catch (error) {
    console.error('Error in getAllPosts:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des posts' });
  }
};

/**
 * @desc    Approve a pending post
 * @route   PUT /api/admin/posts/:id/approve
 * @access  Private/Admin
 */
const approvePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    if (post.status === 'approved') {
      return res.status(400).json({ message: 'Ce post est déjà approuvé' });
    }
    
    post.status = 'approved';
    post.moderatedAt = Date.now();
    post.moderatedBy = req.user._id;
    
    const updatedPost = await post.save();
    
    res.json({
      message: 'Post approuvé avec succès',
      post: updatedPost
    });
  } catch (error) {
    console.error('Error in approvePost:', error);
    res.status(500).json({ message: 'Erreur serveur lors de l\'approbation du post' });
  }
};

/**
 * @desc    Reject a pending post
 * @route   PUT /api/admin/posts/:id/reject
 * @access  Private/Admin
 */
const rejectPost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    if (post.status === 'rejected') {
      return res.status(400).json({ message: 'Ce post est déjà rejeté' });
    }
    
    // Update post status
    post.status = 'rejected';
    post.moderatedAt = Date.now();
    post.moderatedBy = req.user._id;
    
    const updatedPost = await post.save();
    
    res.json({
      message: 'Post rejeté avec succès',
      post: updatedPost
    });
  } catch (error) {
    console.error('Error in rejectPost:', error);
    res.status(500).json({ message: 'Erreur serveur lors du rejet du post' });
  }
};

/**
 * @desc    Delete a post (admin function)
 * @route   DELETE /api/admin/posts/:id
 * @access  Private/Admin
 */
const deletePostAdmin = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    // Delete the file from Cloudinary
    try {
      if (post.cloudinaryPublicId) {
        await deleteFromCloudinary(post.cloudinaryPublicId);
      }
    } catch (cloudinaryError) {
      console.error('Erreur lors de la suppression sur Cloudinary:', cloudinaryError);
      // Continue with DB deletion even if Cloudinary deletion fails
    }
    
    // Delete the post from the database
    await Post.deleteOne({ _id: req.params.id });
    
    res.json({ message: 'Post supprimé avec succès' });
    
  } catch (error) {
    console.error('Error in deletePostAdmin:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la suppression du post' });
  }
};

/**
 * @desc    Mettre à jour le rôle d'un utilisateur
 * @route   PUT /api/admin/users/:id/role
 * @access  Private (admin uniquement)
 */
const updateUserRole = async (req, res) => {
  try {
    const { role } = req.body;
    const userId = req.params.id;
    
    if (!role || !['admin', 'student'].includes(role)) {
      return res.status(400).json({ message: 'Rôle invalide. Les valeurs acceptées sont: admin, student' });
    }
    
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'ID utilisateur invalide' });
    }
    
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    user.role = role;
    await user.save();
    
    res.status(200).json({
      success: true,
      message: `L'utilisateur ${user.username} a été promu au rôle de ${role}`,
      user: {
        _id: user._id,
        username: user.username,
        role: user.role
      }
    });
    
  } catch (error) {
    console.error('Error in updateUserRole:', error);
    res.status(500).json({
      message: 'Erreur lors de la mise à jour du rôle utilisateur',
      error: error.message
    });
  }
};

/**
 * @desc    Trouver un utilisateur par nom d'utilisateur
 * @route   GET /api/admin/users/find/:username
 * @access  Private (admin uniquement)
 */
const findUserByUsername = async (req, res) => {
  try {
    const { username } = req.params;
    
    if (!username) {
      return res.status(400).json({ message: 'Nom d\'utilisateur requis' });
    }
    
    const user = await User.findOne({ username }).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    res.status(200).json({
      success: true,
      user
    });
    
  } catch (error) {
    console.error('Error in findUserByUsername:', error);
    res.status(500).json({
      message: 'Erreur lors de la recherche de l\'utilisateur',
      error: error.message
    });
  }
};

/**
 * @desc    Get all users
 * @route   GET /api/admin/users
 * @access  Private/Admin
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .select('-password')
      .sort({ username: 1 });
    
    res.json(users);
  } catch (error) {
    console.error('Error in getAllUsers:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des utilisateurs' });
  }
};

/**
 * @desc    Delete a user
 * @route   DELETE /api/admin/users/:id
 * @access  Private/Admin
 */
const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    
    // Validate user ID format
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'ID utilisateur invalide' });
    }
    
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    // Don't allow admin to delete themselves
    if (user._id.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: 'Vous ne pouvez pas supprimer votre propre compte' });
    }
    
    await User.deleteOne({ _id: userId });
    
    // Could add additional cleanup here - delete user's posts, comments, etc.
    
    res.json({ 
      message: `L'utilisateur ${user.username} a été supprimé avec succès`,
      deletedUser: {
        _id: user._id,
        username: user.username
      }
    });
    
  } catch (error) {
    console.error('Error in deleteUser:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la suppression de l\'utilisateur' });
  }
};

/**
 * @desc    Update a user's username
 * @route   PUT /api/admin/users/:id/username
 * @access  Private/Admin
 */
const updateUsername = async (req, res) => {
  try {
    const { username } = req.body;
    const userId = req.params.id;
    
    if (!username || username.trim() === '') {
      return res.status(400).json({ message: 'Nom d\'utilisateur requis' });
    }
    
    // Check if username already exists
    const existingUser = await User.findOne({ username, _id: { $ne: userId } });
    if (existingUser) {
      return res.status(400).json({ message: 'Ce nom d\'utilisateur est déjà pris' });
    }
    
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'ID utilisateur invalide' });
    }
    
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    const oldUsername = user.username;
    user.username = username;
    await user.save();
    
    res.status(200).json({
      success: true,
      message: `Le nom d'utilisateur a été modifié de "${oldUsername}" à "${username}"`,
      user: {
        _id: user._id,
        username: user.username,
        role: user.role
      }
    });
    
  } catch (error) {
    console.error('Error in updateUsername:', error);
    res.status(500).json({
      message: 'Erreur lors de la mise à jour du nom d\'utilisateur',
      error: error.message
    });
  }
};

module.exports = {
  getPendingPosts,
  getAllPosts,
  approvePost,
  rejectPost,
  deletePostAdmin,
  updateUserRole,
  findUserByUsername,
  getAllUsers,
  deleteUser,
  updateUsername
}; 