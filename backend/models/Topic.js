const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Le titre du sujet est requis'],
    trim: true,
    maxlength: [100, 'Le titre ne peut pas dépasser 100 caractères']
  },
  content: {
    type: String,
    required: [true, 'Le contenu du sujet est requis'],
    trim: true,
    maxlength: [5000, 'Le contenu ne peut pas dépasser 5000 caractères']
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  category: {
    type: String,
    enum: ['general', 'question', 'projet', 'methode', 'actualite', 'autre'],
    default: 'general'
  },
  tags: [{
    type: String,
    trim: true
  }],
  views: {
    type: Number,
    default: 0
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  isSticky: {
    type: Boolean,
    default: false
  },
  isClosed: {
    type: Boolean,
    default: false
  },
  lastActivity: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Virtuel pour le nombre de discussions
topicSchema.virtual('discussionCount', {
  ref: 'Discussion',
  localField: '_id',
  foreignField: 'topic',
  count: true
});

// Virtuel pour la dernière discussion
topicSchema.virtual('lastDiscussion', {
  ref: 'Discussion',
  localField: '_id',
  foreignField: 'topic',
  justOne: true,
  options: { sort: { createdAt: -1 } }
});

// Méthode pour incrémenter les vues
topicSchema.methods.incrementViews = async function() {
  this.views += 1;
  return this.save();
};

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
