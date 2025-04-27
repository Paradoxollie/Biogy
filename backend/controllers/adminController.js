const Post = require('../models/Post');
const { deleteFromCloudinary } = require('../config/cloudinary');

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

module.exports = {
  getPendingPosts,
  getAllPosts,
  approvePost,
  rejectPost,
  deletePostAdmin
}; 