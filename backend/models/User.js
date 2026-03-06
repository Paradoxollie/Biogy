const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const { DEFAULT_USER_ROLE } = require('../utils/roles');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 30,
    match: /^[a-zA-Z0-9_.-]+$/,
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
