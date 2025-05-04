const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Enregistrer un nouvel utilisateur
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { username, password, role } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Champs manquants' });

  try {
    const exists = await User.findOne({ username });
    if (exists)
      return res.status(409).json({ message: 'Nom d\'utilisateur déjà pris' });

    const user = await User.create({ username, password, role });
    const token = generateToken(user._id, user.role);
    res.status(201).json({ token, username: user.username, role: user.role });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({ message: 'Erreur lors de la création du compte' });
  }
};

// @desc    Authentifier l'utilisateur & obtenir le token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Champs manquants' });

  try {
    const user = await User.findOne({ username }).select('+password');
    if (!user)
      return res.status(401).json({ message: 'Identifiants invalides' });

    const isMatch = await user.matchPassword(password);
    if (!isMatch)
      return res.status(401).json({ message: 'Identifiants invalides' });

    const token = generateToken(user._id, user.role);
    res.json({ token, username: user.username, role: user.role });
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ message: 'Erreur lors de la connexion' });
  }
};

// @desc    Obtenir le profil de l'utilisateur connecté (exemple de route protégée)
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
  try {
    // req.user est ajouté par le middleware d'authentification
    if (!req.user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }

    // Récupérer les informations complètes de l'utilisateur
    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur non trouvé dans la base de données' });
    }

    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      createdAt: user.createdAt
    });
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    res.status(500).json({ message: 'Erreur lors de la récupération du profil' });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };