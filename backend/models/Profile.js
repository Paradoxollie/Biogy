const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  displayName: {
    type: String,
    trim: true
  },
  bio: {
    type: String,
    trim: true,
    maxlength: [500, 'La bio ne peut pas dépasser 500 caractères']
  },
  avatar: {
    url: String,
    cloudinaryPublicId: String
  },
  specialization: {
    type: String,
    trim: true
  },
  institution: {
    type: String,
    trim: true
  },
  level: {
    type: String,
    enum: ['lycee', 'bts', 'dut', 'licence', 'master', 'doctorat', 'professionnel', 'autre'],
    default: 'autre'
  },
  interests: [{
    type: String,
    trim: true
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  badges: [{
    name: {
      type: String,
      required: true
    },
    description: String,
    icon: String,
    awardedAt: {
      type: Date,
      default: Date.now
    }
  }],
  socialLinks: {
    website: String,
    linkedin: String,
    twitter: String,
    github: String,
    researchGate: String
  },
  settings: {
    emailNotifications: {
      type: Boolean,
      default: true
    },
    privateProfile: {
      type: Boolean,
      default: false
    },
    showEmail: {
      type: Boolean,
      default: false
    }
  }
}, {
  timestamps: true
});

// Créer automatiquement un profil vide lors de la création d'un utilisateur
profileSchema.statics.createDefaultProfile = async function(userId) {
  try {
    const profile = new this({
      user: userId,
      displayName: '',
      bio: '',
      avatar: {
        url: '',
        cloudinaryPublicId: ''
      },
      specialization: '',
      institution: '',
      level: 'autre',
      interests: [],
      following: [],
      followers: [],
      badges: [],
      socialLinks: {
        website: '',
        linkedin: '',
        twitter: '',
        github: '',
        researchGate: ''
      },
      settings: {
        emailNotifications: true,
        privateProfile: false,
        showEmail: false
      }
    });
    
    return await profile.save();
  } catch (error) {
    console.error('Erreur lors de la création du profil par défaut:', error);
    throw error;
  }
};

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
