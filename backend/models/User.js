const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Le nom d\'utilisateur est requis'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
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

/* Hash du mot de passe avant save */
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

/* Méthode d'instance pour vérifier */
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);