const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  attachments: [{
    fileUrl: String,
    fileType: {
      type: String,
      enum: ['image', 'document', 'video']
    },
    fileName: String
  }]
}, {
  timestamps: true
});

const discussionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre est requis'],
    trim: true,
    maxlength: [100, 'Le titre ne peut pas dépasser 100 caractères']
  },
  content: {
    type: String,
    required: [true, 'Le contenu est requis'],
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  category: {
    type: String,
    required: [true, 'La catégorie est requise'],
    enum: ['Biologie Moléculaire', 'Biotechnologie', 'Génétique', 'Microbiologie', 'Biochimie', 'Général', 'Autres'],
    index: true
  },
  tags: [{
    type: String,
    trim: true
  }],
  attachments: [{
    fileUrl: String,
    fileType: {
      type: String,
      enum: ['image', 'document', 'video']
    },
    fileName: String
  }],
  views: {
    type: Number,
    default: 0
  },
  replies: [replySchema],
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  isPinned: {
    type: Boolean,
    default: false
  },
  isLocked: {
    type: Boolean,
    default: false
  },
  lastActivity: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Mise à jour de la date de dernière activité lors d'une nouvelle réponse
discussionSchema.pre('save', function(next) {
  if (this.isModified('replies')) {
    this.lastActivity = new Date();
  }
  next();
});

// Index pour la recherche textuelle
discussionSchema.index({ title: 'text', content: 'text', tags: 'text' });

const Forum = mongoose.model('Forum', discussionSchema);

module.exports = Forum; 