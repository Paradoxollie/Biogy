const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { DEFAULT_USER_ROLE } = require('../utils/roles');

const USERNAME_PATTERN = /^[\p{L}\p{N} ._'-]+$/u;

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Nom d\'utilisateur requis'],
    unique: true,
    trim: true,
    minlength: [3, 'Le nom d\'utilisateur doit contenir au moins 3 caracteres'],
    maxlength: [50, 'Le nom d\'utilisateur doit contenir au maximum 50 caracteres'],
    match: [
      USERNAME_PATTERN,
      'Le nom d\'utilisateur peut contenir des lettres, chiffres, espaces, apostrophes, points, tirets et underscores',
    ],
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 8,
  },
  role: {
    type: String,
    default: DEFAULT_USER_ROLE,
  },
  avatar: {
    url: {
      type: String,
      default: '',
    },
    cloudinaryPublicId: {
      type: String,
      default: '',
    },
  },
}, {
  timestamps: true,
});

userSchema.pre('save', async function savePassword(next) {
  if (!this.isModified('password')) {
    return next();
  }

  this.password = await bcrypt.hash(this.password, 10);
  return next();
});

userSchema.methods.matchPassword = function matchPassword(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', userSchema);
