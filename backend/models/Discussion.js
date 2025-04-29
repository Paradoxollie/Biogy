const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Topic',
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: [true, 'Le contenu du message est requis'],
    trim: true,
    maxlength: [5000, 'Le contenu ne peut pas dépasser 5000 caractères']
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  attachments: [{
    type: {
      type: String,
      enum: ['image', 'document', 'link'],
      required: true
    },
    url: {
      type: String,
      required: true
    },
    name: String,
    cloudinaryPublicId: String
  }],
  isEdited: {
    type: Boolean,
    default: false
  },
  editedAt: {
    type: Date,
    default: null
  },
  parentDiscussion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Discussion',
    default: null
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtuel pour les réponses à cette discussion
discussionSchema.virtual('replies', {
  ref: 'Discussion',
  localField: '_id',
  foreignField: 'parentDiscussion'
});

// Middleware pour mettre à jour l'activité du sujet
discussionSchema.pre('save', async function(next) {
  if (this.isNew) {
    try {
      // Mettre à jour lastActivity du topic parent
      await mongoose.model('Topic').findByIdAndUpdate(
        this.topic,
        { lastActivity: Date.now() }
      );
    } catch (error) {
      console.error('Erreur lors de la mise à jour de lastActivity:', error);
    }
  }
  next();
});

const Discussion = mongoose.model('Discussion', discussionSchema);

module.exports = Discussion;
