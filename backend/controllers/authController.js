const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Enregistrer un nouvel utilisateur
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Tous les champs sont requis' });
  }

  try {
    // Vérifier si l'utilisateur existe déjà (par email ou username)
    const userExists = await User.findOne({
      $or: [{ email }, { username }]
    });

    if (userExists) {
      return res.status(400).json({
        message: userExists.email === email
          ? 'Cet email est déjà utilisé'
          : 'Ce nom d\'utilisateur est déjà utilisé'
      });
    }

    // Créer l'utilisateur (le mot de passe sera haché par le middleware pre-save)
    const user = await User.create({
      username,
      email,
      password,
      role: role || 'student' // Assigner le rôle (ou 'student' par défaut)
    });

    // Générer le token et renvoyer les infos utilisateur
    const token = generateToken(user._id, user.role);
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: token,
    });
  } catch (error) {
    console.error('Error in registerUser:', error);
    res.status(500).json({
      message: error.message || 'Erreur lors de la création du compte',
      error: process.env.NODE_ENV === 'development' ? error.toString() : undefined
    });
  }
};

// @desc    Authentifier l'utilisateur & obtenir le token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Champs manquants' });
  }

  try {
    // Trouver l'utilisateur par email et inclure le mot de passe
    // ⚠️ NE PAS mettre .lean() sinon on perd les méthodes d'instance
    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return res.status(404).json({ message: 'Utilisateur introuvable' });
    }

    // Vérifier si le mot de passe correspond
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Mot de passe invalide' });
    }

    // Générer le token et renvoyer les infos utilisateur
    const token = generateToken(user._id, user.role);
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      token: token,
    });
  } catch (error) {
    console.error('Error in loginUser:', error);
    res.status(500).json({ message: error.message || 'Erreur serveur' });
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