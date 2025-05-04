const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const Profile = require('../models/Profile');

// @desc    Définir un avatar prédéfini
// @route   POST /api/social/profile/avatar/preset
// @access  Private
router.post('/preset', protect, async (req, res) => {
  try {
    const { avatarUrl } = req.body;
    
    if (!avatarUrl && avatarUrl !== '') {
      return res.status(400).json({ message: 'URL d\'avatar manquante' });
    }
    
    // Extraire l'ID public Cloudinary de l'URL (si présent)
    let cloudinaryPublicId = '';
    if (avatarUrl) {
      const match = avatarUrl.match(/\/v1\/avatars\/([^\/]+)$/);
      if (match && match[1]) {
        cloudinaryPublicId = `avatars/${match[1]}`;
      }
    }
    
    // Rechercher le profil existant
    let profile = await Profile.findOne({ user: req.user._id });
    
    if (!profile) {
      // Créer un profil si nécessaire
      profile = await Profile.createDefaultProfile(req.user._id);
    }
    
    // Mettre à jour l'avatar
    profile.avatar = {
      url: avatarUrl,
      cloudinaryPublicId: cloudinaryPublicId
    };
    
    await profile.save();
    
    res.status(200).json({
      message: 'Avatar mis à jour avec succès',
      avatar: profile.avatar
    });
  } catch (error) {
    console.error('Erreur lors de la mise à jour de l\'avatar:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la mise à jour de l\'avatar' });
  }
});

module.exports = router;
