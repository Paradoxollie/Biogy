const { ensureDatabaseAvailable } = require('../utils/database');
const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const { DEFAULT_USER_ROLE, normalizeUserRole } = require('../utils/roles');

const buildAuthResponse = (user) => {
  const normalizedRole = normalizeUserRole(user.role);

  return {
    _id: user._id,
    token: generateToken(user._id, normalizedRole, user.tokenVersion || 0),
    username: user.username,
    role: normalizedRole,
    mustChangePassword: Boolean(user.mustChangePassword),
  };
};

// @desc    Enregistrer un nouvel utilisateur
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) return;
  const { password } = req.body;
  const username = typeof req.body.username === 'string' ? req.body.username.trim() : '';

  if (!username || typeof password !== 'string' || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  if (username.length < 3 || username.length > 60 || !/^[\p{L}\p{N}][\p{L}\p{N} ._’'-]*$/u.test(username)) {
    return res.status(400).json({ message: 'L’identifiant doit contenir entre 3 et 60 caractères : lettres, chiffres, espaces ou . _ - apostrophe.' });
  }
  if (password.length > 128 || Buffer.byteLength(password, 'utf8') > 72) {
    return res.status(400).json({ message: 'Le mot de passe est trop long (72 octets maximum).' });
  }
  if (password.length < 8) {
    return res.status(400).json({ message: 'Le mot de passe doit contenir au moins 8 caracteres' });
  }

  try {
    const exists = await User.findOne({ username });
    if (exists) {
      return res.status(409).json({ message: 'Nom d utilisateur deja pris' });
    }

    const user = await User.create({
      username,
      password,
      role: DEFAULT_USER_ROLE,
    });

    return res.status(201).json(buildAuthResponse(user));
  } catch (error) {
    if (error.code === 11000) return res.status(409).json({ message: 'Cet identifiant est déjà utilisé.' });
    console.error('Error in registerUser:', error);
    return res.status(500).json({ message: 'Erreur lors de la creation du compte' });
  }
};

// @desc    Authentifier l'utilisateur & obtenir le token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) return;
  const { password } = req.body;
  const username = typeof req.body.username === 'string' ? req.body.username.trim() : '';

  if (!username || typeof password !== 'string' || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  try {
    const user = await User.findOne({ username }).select('+password +tokenVersion');
    if (!user) {
      return res.status(401).json({ message: 'Identifiants invalides' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Identifiants invalides' });
    }

    return res.json(buildAuthResponse(user));
  } catch (error) {
    console.error('Error in loginUser:', error);
    return res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
};

// @desc    Obtenir le profil de l'utilisateur connecte
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(404).json({ message: 'Utilisateur non trouve' });
    }

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouve dans la base de donnees' });
    }

    return res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: normalizeUserRole(user.role),
      createdAt: user.createdAt,
      mustChangePassword: Boolean(user.mustChangePassword),
    });
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    return res.status(500).json({ message: 'Erreur lors de la recuperation du profil' });
  }
};

const changePassword = async (req, res) => {
  const { currentPassword, newPassword } = req.body;
  if (typeof currentPassword !== 'string' || typeof newPassword !== 'string' || newPassword.length < 8 || Buffer.byteLength(newPassword, 'utf8') > 72 || currentPassword === newPassword) {
    return res.status(400).json({ message: 'Choisis un nouveau mot de passe différent, de 8 caractères minimum (72 octets maximum).' });
  }
  try {
    const user = await User.findById(req.user._id).select('+password +tokenVersion');
    if (!user || !(await user.matchPassword(currentPassword))) return res.status(400).json({ message: 'Le mot de passe actuel est incorrect.' });
    user.password = newPassword;
    user.mustChangePassword = false;
    user.tokenVersion = (user.tokenVersion || 0) + 1;
    await user.save();
    return res.json({ user: buildAuthResponse(user) });
  } catch (error) { return res.status(500).json({ message: 'Le mot de passe n’a pas pu être modifié.' }); }
};

module.exports = {
  changePassword,
  registerUser,
  loginUser,
  getUserProfile,
};
