const mongoose = require('mongoose');

// Schéma pour les notifications
const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
    enum: ['mention', 'like', 'reply', 'follow', 'discussion']
  },
  from: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  discussion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Forum'
  },
  reply: {
    type: mongoose.Schema.Types.ObjectId
  },
  read: {
    type: Boolean,
    default: false
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

// Schéma pour le profil social étendu de l'utilisateur
const socialProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  bio: {
    type: String,
    maxlength: [500, 'La biographie ne peut pas dépasser 500 caractères']
  },
  specialties: [{
    type: String,
    trim: true
  }],
  education: [{
    institution: String,
    degree: String,
    field: String,
    from: Date,
    to: Date,
    current: Boolean
  }],
  experience: [{
    position: String,
    company: String,
    description: String,
    from: Date,
    to: Date,
    current: Boolean
  }],
  projects: [{
    title: String,
    description: String,
    url: String
  }],
  profileImage: {
    type: String,
    default: 'default-profile.png'
  },
  coverImage: String,
  website: String,
  social: {
    twitter: String,
    linkedin: String,
    github: String,
    orcid: String,
    researchgate: String
  },
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  reputation: {
    type: Number,
    default: 0
  },
  badges: [{
    name: String,
    description: String,
    icon: String,
    dateEarned: {
      type: Date,
      default: Date.now
    }
  }],
  notifications: [notificationSchema],
  settings: {
    emailNotifications: {
      type: Boolean,
      default: true
    },
    pushNotifications: {
      type: Boolean,
      default: true
    },
    privateProfile: {
      type: Boolean,
      default: false
    }
  },
  lastActive: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Méthode pour ajouter une notification
socialProfileSchema.methods.addNotification = async function(data) {
  this.notifications.unshift(data);
  // Limiter le nombre de notifications stockées à 50
  if (this.notifications.length > 50) {
    this.notifications = this.notifications.slice(0, 50);
  }
  return this.save();
};

// Méthode pour marquer les notifications comme lues
socialProfileSchema.methods.markNotificationsAsRead = async function() {
  this.notifications.forEach(notification => {
    notification.read = true;
  });
  return this.save();
};

const SocialProfile = mongoose.model('SocialProfile', socialProfileSchema);
const Notification = mongoose.model('Notification', notificationSchema);

module.exports = {
  SocialProfile,
  Notification
}; 