const express = require('express');
const {
  updateProfile,
  uploadAvatar,
  getMyProfile,
  getProfileByUserId,
  followUser,
  getFollowing,
  getFollowers
} = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');
const avatarRoutes = require('./avatarRoutes');

const router = express.Router();

// Utiliser les routes d'avatar
router.use('/profile/avatar', avatarRoutes);

// Routes pour le profil
router.route('/profile')
  .get(protect, getMyProfile)     // Récupérer son propre profil (authentifié)
  .put(protect, updateProfile);   // Mettre à jour son profil (authentifié)

router.route('/profile/avatar')
  .post(protect, upload.single('avatar'), uploadAvatar); // Télécharger un avatar (authentifié)

router.route('/profile/:userId')
  .get(getProfileByUserId);       // Récupérer le profil d'un utilisateur (public)

router.route('/profile/:userId/follow')
  .post(protect, followUser);     // Suivre/Ne plus suivre un utilisateur (authentifié)

router.route('/profile/following')
  .get(protect, getFollowing);    // Récupérer les utilisateurs suivis (authentifié)

router.route('/profile/followers')
  .get(protect, getFollowers);    // Récupérer les abonnés (authentifié)

module.exports = router;
