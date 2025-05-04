const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Le nom d\'utilisateur est requis'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'L\'email est requis'],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Le mot de passe est requis'],
    minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères'],
    select: false, // Ne pas inclure le mot de passe par défaut dans les requêtes
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

/* Méthode d'instance */
userSchema.methods.matchPassword = async function (enteredPassword) {
  // bcrypt.compare retourne une promesse
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;