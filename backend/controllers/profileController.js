const Profile = require('../models/Profile');
const User = require('../models/User');
const { uploadToCloudinary } = require('../utils/cloudinary');

// @desc    Créer ou mettre à jour le profil de l'utilisateur
// @route   PUT /api/social/profile
// @access  Private
const updateProfile = async (req, res) => {
  try {
    const {
      displayName,
      bio,
      specialization,
      institution,
      level,
      interests,
      socialLinks,
      settings
    } = req.body;
    
    // Rechercher le profil existant
    let profile = await Profile.findOne({ user: req.user._id });
    
    // Si le profil n'existe pas, en créer un nouveau
    if (!profile) {
      profile = new Profile({
        user: req.user._id,
        displayName: displayName || '',
        bio: bio || '',
        specialization: specialization || '',
        institution: institution || '',
        level: level || 'autre',
        interests: interests ? interests.split(',').map(item => item.trim()) : [],
        socialLinks: socialLinks || {},
        settings: settings || {}
      });
    } else {
      // Mettre à jour les champs existants
      if (displayName !== undefined) profile.displayName = displayName;
      if (bio !== undefined) profile.bio = bio;
      if (specialization !== undefined) profile.specialization = specialization;
      if (institution !== undefined) profile.institution = institution;
      if (level !== undefined) profile.level = level;
      if (interests !== undefined) {
        profile.interests = interests.split(',').map(item => item.trim());
      }
      
      // Mettre à jour les liens sociaux
      if (socialLinks) {
        profile.socialLinks = {
          ...profile.socialLinks,
          ...socialLinks
        };
      }
      
      // Mettre à jour les paramètres
      if (settings) {
        profile.settings = {
          ...profile.settings,
          ...settings
        };
      }
    }
    
    // Sauvegarder le profil
    const updatedProfile = await profile.save();
    
    res.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error in updateProfile:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la mise à jour du profil' });
  }
};

// @desc    Télécharger un avatar
// @route   POST /api/social/profile/avatar
// @access  Private
const uploadAvatar = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier fourni' });
    }
    
    // Uploader l'image sur Cloudinary
    const uploadResult = await uploadToCloudinary(req.file.buffer, {
      folder: 'avatars',
      transformation: [
        { width: 250, height: 250, crop: 'fill' }
      ]
    });
    
    if (!uploadResult || !uploadResult.secure_url) {
      throw new Error('Erreur lors de l\'upload sur Cloudinary');
    }
    
    // Mettre à jour le profil avec le nouvel avatar
    let profile = await Profile.findOne({ user: req.user._id });
    
    if (!profile) {
      // Créer un profil si nécessaire
      profile = new Profile({
        user: req.user._id,
        avatar: {
          url: uploadResult.secure_url,
          cloudinaryPublicId: uploadResult.public_id
        }
      });
    } else {
      // Supprimer l'ancien avatar de Cloudinary si nécessaire
      if (profile.avatar && profile.avatar.cloudinaryPublicId) {
        try {
          await deleteFromCloudinary(profile.avatar.cloudinaryPublicId);
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'ancien avatar:', error);
        }
      }
      
      // Mettre à jour l'avatar
      profile.avatar = {
        url: uploadResult.secure_url,
        cloudinaryPublicId: uploadResult.public_id
      };
    }
    
    const updatedProfile = await profile.save();
    
    res.status(200).json({
      avatar: updatedProfile.avatar
    });
  } catch (error) {
    console.error('Error in uploadAvatar:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de l\'upload de l\'avatar' });
  }
};

// @desc    Récupérer le profil de l'utilisateur connecté
// @route   GET /api/social/profile
// @access  Private
const getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id })
      .populate('user', 'username role');
    
    if (!profile) {
      // Créer un profil par défaut si nécessaire
      const newProfile = await Profile.createDefaultProfile(req.user._id);
      return res.status(200).json(await newProfile.populate('user', 'username role'));
    }
    
    res.status(200).json(profile);
  } catch (error) {
    console.error('Error in getMyProfile:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la récupération du profil' });
  }
};

// @desc    Récupérer le profil d'un utilisateur par son ID
// @route   GET /api/social/profile/:userId
// @access  Public
const getProfileByUserId = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.params.userId })
      .populate('user', 'username role');
    
    if (!profile) {
      return res.status(404).json({ message: 'Profil non trouvé' });
    }
    
    // Si le profil est privé et que l'utilisateur n'est pas le propriétaire ou un admin
    if (
      profile.settings.privateProfile &&
      (!req.user || (req.user._id.toString() !== profile.user._id.toString() && req.user.role !== 'admin'))
    ) {
      return res.status(403).json({ message: 'Ce profil est privé' });
    }
    
    res.status(200).json(profile);
  } catch (error) {
    console.error('Error in getProfileByUserId:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la récupération du profil' });
  }
};

// @desc    Suivre/Ne plus suivre un utilisateur
// @route   POST /api/social/profile/:userId/follow
// @access  Private
const followUser = async (req, res) => {
  try {
    // Vérifier que l'utilisateur ne tente pas de se suivre lui-même
    if (req.params.userId === req.user._id.toString()) {
      return res.status(400).json({ message: 'Vous ne pouvez pas vous suivre vous-même' });
    }
    
    // Vérifier que l'utilisateur à suivre existe
    const userToFollow = await User.findById(req.params.userId);
    
    if (!userToFollow) {
      return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    
    // Récupérer le profil de l'utilisateur connecté
    let myProfile = await Profile.findOne({ user: req.user._id });
    
    if (!myProfile) {
      // Créer un profil par défaut si nécessaire
      myProfile = await Profile.createDefaultProfile(req.user._id);
    }
    
    // Récupérer le profil de l'utilisateur à suivre
    let targetProfile = await Profile.findOne({ user: req.params.userId });
    
    if (!targetProfile) {
      // Créer un profil par défaut si nécessaire
      targetProfile = await Profile.createDefaultProfile(req.params.userId);
    }
    
    // Vérifier si l'utilisateur suit déjà la cible
    const isFollowing = myProfile.following.includes(req.params.userId);
    
    if (isFollowing) {
      // Ne plus suivre
      myProfile.following = myProfile.following.filter(
        id => id.toString() !== req.params.userId
      );
      
      targetProfile.followers = targetProfile.followers.filter(
        id => id.toString() !== req.user._id.toString()
      );
    } else {
      // Suivre
      myProfile.following.push(req.params.userId);
      targetProfile.followers.push(req.user._id);
    }
    
    // Sauvegarder les deux profils
    await myProfile.save();
    await targetProfile.save();
    
    res.status(200).json({
      following: !isFollowing,
      followingCount: myProfile.following.length,
      followersCount: targetProfile.followers.length
    });
  } catch (error) {
    console.error('Error in followUser:', error);
    res.status(500).json({ message: error.message || 'Erreur lors du suivi/désabonnement' });
  }
};

// @desc    Récupérer les utilisateurs suivis
// @route   GET /api/social/profile/following
// @access  Private
const getFollowing = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id })
      .populate('following', 'username');
    
    if (!profile) {
      return res.status(404).json({ message: 'Profil non trouvé' });
    }
    
    res.status(200).json(profile.following);
  } catch (error) {
    console.error('Error in getFollowing:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la récupération des abonnements' });
  }
};

// @desc    Récupérer les abonnés
// @route   GET /api/social/profile/followers
// @access  Private
const getFollowers = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user._id })
      .populate('followers', 'username');
    
    if (!profile) {
      return res.status(404).json({ message: 'Profil non trouvé' });
    }
    
    res.status(200).json(profile.followers);
  } catch (error) {
    console.error('Error in getFollowers:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la récupération des abonnés' });
  }
};

module.exports = {
  updateProfile,
  uploadAvatar,
  getMyProfile,
  getProfileByUserId,
  followUser,
  getFollowing,
  getFollowers
};
