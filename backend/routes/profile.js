const router     = require('express').Router();
const multer     = require('multer');
const cloudinary = require('cloudinary').v2;
const User       = require('../models/User');           // adapte le chemin

// Config Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key:    process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const upload = multer({ dest: 'uploads/' });

// POST /api/profile/avatar
router.post('/avatar', upload.single('avatar'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ message: 'No file' });

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: 'avatars',
      transformation: [
        { width: 250, height: 250, crop: 'thumb', gravity: 'face' },
      ],
    });

    // Ici, remplace req.user.id par l'id de l'utilisateur authentifié
    await User.findByIdAndUpdate(
      req.user.id,
      { avatar: { url: result.secure_url, cloudinaryPublicId: result.public_id } },
      { new: true }
    );

    res.json({ url: result.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Upload échoué' });
  }
});

module.exports = router;
