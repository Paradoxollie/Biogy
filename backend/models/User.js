const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Le nom d\'utilisateur est requis'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Le mot de passe est requis'],
    minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères'],
  },
  role: {
    type: String,
    enum: ['student', 'admin'], // Rôles possibles
    default: 'student',        // Rôle par défaut
  },
  avatar: {
    url: {
      type: String,
      default: ''
    },
    cloudinaryPublicId: {
      type: String,
      default: ''
    }
  }
}, {
  timestamps: true, // Ajoute createdAt et updatedAt automatiquement
});

const User = mongoose.model('User', userSchema);

module.exports = User;