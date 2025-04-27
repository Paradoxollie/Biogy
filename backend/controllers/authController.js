const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Enregistrer un nouvel utilisateur
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res, next) => {
  const { username, password, role } = req.body; // Role est optionnel ici, pourrait être forcé à 'student' ou géré différemment

  try {
    // Vérifier si l'utilisateur existe déjà
    const userExists = await User.findOne({ username });

    if (userExists) {
      res.status(400); // Bad Request
      throw new Error('Cet utilisateur existe déjà');
    }

    // Créer l'utilisateur (le mot de passe sera haché par le middleware pre-save)
    const user = await User.create({
      username,
      password,
      role: role || 'student' // Assigner le rôle (ou 'student' par défaut)
    });

    if (user) {
      // Générer le token et renvoyer les infos utilisateur (sans le mot de passe)
      const token = generateToken(user._id, user.role);
      res.status(201).json({
        _id: user._id,
        username: user.username,
        role: user.role,
        token: token,
      });
    } else {
      res.status(400);
      throw new Error('Données utilisateur invalides');
    }
  } catch (error) {
    console.error('Error in registerUser:', error);
    // Transmettre l'erreur au gestionnaire d'erreurs Express si vous en avez un
    // next(error); 
    // Sinon, renvoyer une réponse d'erreur générique ou spécifique
    res.status(res.statusCode || 500).json({ message: error.message || 'Erreur serveur' });
  }
};

// @desc    Authentifier l'utilisateur & obtenir le token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    // Trouver l'utilisateur par nom d'utilisateur
    const user = await User.findOne({ username });

    // Vérifier si l'utilisateur existe et si le mot de passe correspond
    if (user && (await user.matchPassword(password))) {
      const token = generateToken(user._id, user.role);
      res.json({
        _id: user._id,
        username: user.username,
        role: user.role,
        token: token,
      });
    } else {
      res.status(401); // Unauthorized
      throw new Error('Nom d\'utilisateur ou mot de passe invalide');
    }
  } catch (error) {
    console.error('Error in loginUser:', error);
    // next(error);
    res.status(res.statusCode || 500).json({ message: error.message || 'Erreur serveur' });
  }
};

// @desc    Obtenir le profil de l'utilisateur connecté (exemple de route protégée)
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
  // req.user est ajouté par le middleware d'authentification
  if (req.user) {
    res.json({
      _id: req.user._id,
      username: req.user.username,
      role: req.user.role,
    });
  } else {
    res.status(404);
    throw new Error('Utilisateur non trouvé');
  }
};

module.exports = { registerUser, loginUser, getUserProfile }; 