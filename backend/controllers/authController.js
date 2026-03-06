const User = require('../models/User');
const generateToken = require('../utils/generateToken');
const { DEFAULT_USER_ROLE, normalizeUserRole } = require('../utils/roles');

const buildAuthResponse = (user) => {
  const normalizedRole = normalizeUserRole(user.role);

  return {
    _id: user._id,
    token: generateToken(user._id, normalizedRole),
    username: user.username,
    role: normalizedRole,
  };
};

// @desc    Enregistrer un nouvel utilisateur
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
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
    console.error('Error in registerUser:', error);
    return res.status(500).json({ message: 'Erreur lors de la creation du compte' });
  }
};

// @desc    Authentifier l'utilisateur & obtenir le token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  try {
    const user = await User.findOne({ username }).select('+password');
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
    });
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    return res.status(500).json({ message: 'Erreur lors de la recuperation du profil' });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getUserProfile,
};
