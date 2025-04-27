const Post = require('../models/Post');
const User = require('../models/User');
const { uploadToCloudinary, deleteFromCloudinary } = require('../config/cloudinary');

// @desc    Créer un nouveau post (upload fichier + sauvegarde DB)
// @route   POST /api/posts
// @access  Private (utilisateurs connectés)
const createPost = async (req, res, next) => {
  const { caption } = req.body;
  const file = req.file; // Fichier uploadé par Multer

  if (!file) {
    return res.status(400).json({ message: 'Aucun fichier fourni' });
  }

  try {
    // Uploader le fichier sur Cloudinary
    const uploadResult = await uploadToCloudinary(file.buffer, {
      // Options spécifiques si besoin, ex: transformations
    });

    if (!uploadResult || !uploadResult.secure_url) {
      throw new Error('Erreur lors de l\'upload sur Cloudinary');
    }

    // Créer le post dans la base de données
    const post = new Post({
      user: req.user._id, // ID de l'utilisateur connecté (ajouté par le middleware `protect`)
      fileUrl: uploadResult.secure_url,
      fileType: file.mimetype.startsWith('image') ? 'image' : 'video',
      caption: caption || '', // Légende optionnelle
      status: 'pending', // Statut initial
      cloudinaryPublicId: uploadResult.public_id, // ID public pour suppression future
      likes: [],
      comments: []
    });

    const createdPost = await post.save();

    // *RGPD Point*: Le post est créé avec statut 'pending'.
    // Il n'apparaîtra pas publiquement avant modération.

    res.status(201).json({
        message: 'Post créé avec succès et en attente de modération.',
        post: {
            _id: createdPost._id,
            fileUrl: createdPost.fileUrl,
            fileType: createdPost.fileType,
            caption: createdPost.caption,
            status: createdPost.status
        }
    });

  } catch (error) {
    console.error('Error in createPost:', error);
    // Si l'upload a échoué, ou si la sauvegarde DB échoue après l'upload,
    // il serait bon d'essayer de supprimer le fichier déjà uploadé sur Cloudinary.
    // Cette logique peut être ajoutée ici si nécessaire.
    res.status(500).json({ message: error.message || 'Erreur serveur lors de la création du post' });
  }
};

// @desc    Récupérer tous les posts approuvés
// @route   GET /api/posts
// @access  Public
const getApprovedPosts = async (req, res, next) => {
  try {
    // Récupérer les posts avec statut 'approved', triés par date de création décroissante
    // et peupler les informations de l'utilisateur (username seulement)
    const posts = await Post.find({ status: 'approved' })
      .sort({ createdAt: -1 })
      .populate('user', 'username') // Récupérer seulement le username de l'auteur
      .populate({
        path: 'comments.user',
        select: 'username'
      }); // Récupérer les usernames des commentateurs

    res.json(posts);
  } catch (error) {
    console.error('Error in getApprovedPosts:', error);
    res.status(500).json({ message: 'Erreur serveur lors de la récupération des posts' });
  }
};

// @desc    Ajouter un like à un post
// @route   POST /api/posts/:id/like
// @access  Private
const likePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    // Vérifier si l'utilisateur a déjà aimé le post
    const alreadyLiked = post.likes.includes(req.user._id);
    
    if (alreadyLiked) {
      // Si déjà aimé, retirer le like (toggle)
      post.likes = post.likes.filter(
        userId => userId.toString() !== req.user._id.toString()
      );
    } else {
      // Sinon, ajouter le like
      post.likes.push(req.user._id);
    }
    
    await post.save();
    
    res.json({ 
      likes: post.likes,
      likesCount: post.likes.length,
      isLiked: !alreadyLiked 
    });
    
  } catch (error) {
    console.error('Error in likePost:', error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout du like' });
  }
};

// @desc    Ajouter un commentaire à un post
// @route   POST /api/posts/:id/comment
// @access  Private
const commentPost = async (req, res) => {
  try {
    const { text } = req.body;
    
    if (!text || text.trim() === '') {
      return res.status(400).json({ message: 'Le texte du commentaire est requis' });
    }
    
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({ message: 'Post non trouvé' });
    }
    
    const comment = {
      user: req.user._id,
      text: text.trim()
    };
    
    post.comments.push(comment);
    await post.save();
    
    // Récupérer le post mis à jour avec le commentaire peuplé
    const updatedPost = await Post.findById(req.params.id)
      .populate('comments.user', 'username');
    
    // Récupérer uniquement le dernier commentaire ajouté
    const newComment = updatedPost.comments[updatedPost.comments.length - 1];
    
    res.status(201).json({
      comment: newComment,
      commentsCount: updatedPost.comments.length
    });
    
  } catch (error) {
    console.error('Error in commentPost:', error);
    res.status(500).json({ message: 'Erreur lors de l\'ajout du commentaire' });
  }
};

// @desc    Supprimer un post (par l'auteur ou un admin)
// @route   DELETE /api/posts/:id
// @access  Private
const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: 'Post non trouvé' });
        }

        // Vérification des permissions : l'utilisateur est l'auteur OU est admin
        if (post.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
             // *RGPD Point*: Seul l'auteur ou un admin peut supprimer.
            return res.status(403).json({ message: 'Action non autorisée' });
        }

        // 1. Supprimer le fichier de Cloudinary
        try {
            await deleteFromCloudinary(post.cloudinaryPublicId);
        } catch (cloudinaryError) {
            console.error('Erreur lors de la suppression sur Cloudinary:', cloudinaryError);
            // On continue quand même pour supprimer de la DB, mais on log l'erreur
        }

        // 2. Supprimer le post de la base de données
        await Post.deleteOne({ _id: req.params.id }); // Utiliser deleteOne ou findByIdAndDelete

        res.json({ message: 'Post supprimé avec succès' });

    } catch (error) {
        console.error('Error in deletePost:', error);
        res.status(500).json({ message: error.message || 'Erreur serveur lors de la suppression du post' });
    }
};


module.exports = { createPost, getApprovedPosts, likePost, commentPost, deletePost }; 