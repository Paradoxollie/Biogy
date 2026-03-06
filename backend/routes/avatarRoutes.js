const express = require('express');
const multer = require('multer');

const { protect } = require('../middleware/authMiddleware');
const Profile = require('../models/Profile');

const router = express.Router();
const parseFields = multer().none();

const extractCloudinaryPublicId = (url = '') => {
  const match = String(url).match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-zA-Z0-9]+)?$/);
  return match ? match[1] : '';
};

router.post('/preset', protect, parseFields, async (req, res) => {
  try {
    const { avatarUrl } = req.body;

    if (avatarUrl === undefined) {
      return res.status(400).json({ message: 'URL d avatar manquante' });
    }

    let profile = await Profile.findOne({ user: req.user._id });

    if (!profile) {
      profile = await Profile.createDefaultProfile(req.user._id);
    }

    profile.avatar = {
      url: avatarUrl,
      cloudinaryPublicId: extractCloudinaryPublicId(avatarUrl),
    };

    await profile.save();

    return res.status(200).json({
      message: 'Avatar mis a jour avec succes',
      avatar: profile.avatar,
    });
  } catch (error) {
    console.error('Erreur lors de la mise a jour de l avatar:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la mise a jour de l avatar' });
  }
});

module.exports = router;
