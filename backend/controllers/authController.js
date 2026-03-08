const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const { ensureDatabaseAvailable } = require('../utils/database');
const { DEFAULT_USER_ROLE, normalizeUserRole } = require('../utils/roles');

const getValidationMessage = (error) => {
  if (error?.name !== 'ValidationError') {
    return null;
  }

  const firstError = Object.values(error.errors || {})[0];
  return firstError?.message || 'Donnees invalides';
};

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
  const normalizedUsername = req.body.username?.trim();
  const { password } = req.body;

  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  if (!normalizedUsername || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  if (password.length < 8) {
    return res.status(400).json({ message: 'Le mot de passe doit contenir au moins 8 caracteres' });
  }

  try {
    const exists = await User.findOne({ username: normalizedUsername });
    if (exists) {
      return res.status(409).json({ message: 'Nom d utilisateur deja pris' });
    }

    const user = await User.create({
      username: normalizedUsername,
      password,
      role: DEFAULT_USER_ROLE,
    });

    return res.status(201).json(buildAuthResponse(user));
  } catch (error) {
    console.error('Error in registerUser:', error);
    const validationMessage = getValidationMessage(error);
    if (validationMessage) {
      return res.status(400).json({ message: validationMessage });
    }
    return res.status(500).json({ message: 'Erreur lors de la creation du compte' });
  }
};

// @desc    Authentifier l'utilisateur & obtenir le token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const normalizedUsername = req.body.username?.trim();
  const { password } = req.body;

  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  if (!normalizedUsername || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  try {
    const user = await User.findOne({ username: normalizedUsername }).select('+password');
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
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

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
      mustChangePassword: Boolean(user.mustChangePassword),
      createdAt: user.createdAt,
    });
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    return res.status(500).json({ message: 'Erreur lors de la recuperation du profil' });
  }
};

// @desc    Changer le mot de passe de l'utilisateur connecte
// @route   POST /api/auth/change-password
// @access  Private
const changePassword = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  const { currentPassword, newPassword } = req.body;

  if (!currentPassword || !newPassword) {
    return res.status(400).json({ message: 'Mot de passe actuel et nouveau mot de passe requis' });
  }

  if (newPassword.length < 8) {
    return res.status(400).json({ message: 'Le nouveau mot de passe doit contenir au moins 8 caracteres' });
  }

  if (currentPassword === newPassword) {
    return res.status(400).json({ message: 'Le nouveau mot de passe doit etre different de l ancien' });
  }

  try {
    const user = await User.findById(req.user._id).select('+password');

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouve' });
    }

    const isMatch = await user.matchPassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: 'Mot de passe actuel incorrect' });
    }

    user.password = newPassword;
    user.mustChangePassword = false;
    await user.save();

    return res.status(200).json({
      message: 'Mot de passe mis a jour avec succes',
      user: buildAuthResponse(user),
    });
  } catch (error) {
    console.error('Error in changePassword:', error);
    const validationMessage = getValidationMessage(error);
    if (validationMessage) {
      return res.status(400).json({ message: validationMessage });
    }
    return res.status(500).json({ message: 'Erreur lors de la mise a jour du mot de passe' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
  changePassword,
};
