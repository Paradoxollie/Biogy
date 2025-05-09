const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  text: {
    type: String,
    required: true,
    trim: true,
    maxlength: [500, 'Le commentaire ne peut pas dépasser 500 caractères']
  }
}, {
  timestamps: true
});

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User', // Référence au modèle User
  },
  fileUrl: {
    type: String,
    required: [true, 'L\'URL du fichier est requise'],
  },
  fileType: {
    type: String,
    enum: ['image', 'video'],
    required: [true, 'Le type de fichier (image/video) est requis'],
  },
  caption: {
    type: String,
    trim: true,
    maxlength: [500, 'La légende ne peut pas dépasser 500 caractères'],
  },
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending', // Statut par défaut lors de la création
    index: true, // Indexer ce champ pour des requêtes rapides (ex: récupérer les posts approuvés)
  },
  cloudinaryPublicId: { // Pour pouvoir supprimer le fichier sur Cloudinary si le post est supprimé
    type: String,
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  comments: [commentSchema],
  moderatedAt: {
    type: Date,
    default: null,
  },
  moderatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
}, {
  timestamps: true, // Ajoute createdAt et updatedAt
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post; 