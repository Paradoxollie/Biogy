// backend/models/User.js
const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

const userSchema = new mongoose.Schema({
  username: {                       // ← login unique
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
    match: /^[a-zA-Z0-9_.-]+$/,     // alphanum + _ . -
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 8,
  },
  role: {
    type: String,
    default: 'user',
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

/* Hash du mot de passe */
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

/* Vérification */
userSchema.methods.matchPassword = function (pwd) {
  return bcrypt.compare(pwd, this.password);
};

module.exports = mongoose.model('User', userSchema);