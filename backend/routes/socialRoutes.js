const express = require('express');
const {
  updateProfile,
  uploadAvatar,
  setPredefinedAvatar,
  getMyProfile,
  getProfileByUserId
} = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');
const upload = require('../middleware/uploadMiddleware');

const router = express.Router();

// Routes pour le profil
router.route('/profile')
  .get(protect, getMyProfile)     // Récupérer son propre profil (authentifié)
  .put(protect, updateProfile);   // Mettre à jour son profil (authentifié)

router.route('/profile/avatar')
  .post(protect, upload.single('avatar'), uploadAvatar); // Télécharger un avatar (authentifié)

router.route('/profile/avatar/predefined')
  .post(protect, setPredefinedAvatar); // Définir un avatar prédéfini (authentifié)

router.route('/profile/:userId')
  .get(getProfileByUserId);       // Récupérer le profil d'un utilisateur (public)

module.exports = router;
