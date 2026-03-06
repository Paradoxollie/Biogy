const Profile = require('../models/Profile');
const User = require('../models/User');
const { ensureDatabaseAvailable } = require('../utils/database');
const { uploadToCloudinary, deleteFromCloudinary } = require('../utils/cloudinary');
const { isAdminRole } = require('../utils/roles');

const parseInterests = (interests) => {
  if (interests === undefined) {
    return undefined;
  }

  if (Array.isArray(interests)) {
    return interests.map((item) => String(item).trim()).filter(Boolean);
  }

  return String(interests)
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
};

const extractCloudinaryPublicId = (url = '') => {
  const match = String(url).match(/\/upload\/(?:v\d+\/)?(.+?)(?:\.[a-zA-Z0-9]+)?$/);
  return match ? match[1] : '';
};

// @desc    Creer ou mettre a jour le profil de l'utilisateur
// @route   PUT /api/social/profile
// @access  Private
const updateProfile = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const {
      displayName,
      bio,
      specialization,
      institution,
      level,
      interests,
      socialLinks,
      settings,
      avatar,
      avatarUrl,
    } = req.body;

    const nextInterests = parseInterests(interests);
    const nextAvatarUrl = avatarUrl || avatar?.url;

    let profile = await Profile.findOne({ user: req.user._id });

    if (!profile) {
      profile = new Profile({
        user: req.user._id,
        displayName: displayName || '',
        bio: bio || '',
        specialization: specialization || '',
        institution: institution || '',
        level: level || 'autre',
        interests: nextInterests || [],
        socialLinks: socialLinks || {},
        settings: settings || {},
      });
    } else {
      if (displayName !== undefined) profile.displayName = displayName;
      if (bio !== undefined) profile.bio = bio;
      if (specialization !== undefined) profile.specialization = specialization;
      if (institution !== undefined) profile.institution = institution;
      if (level !== undefined) profile.level = level;
      if (nextInterests !== undefined) profile.interests = nextInterests;

      if (socialLinks) {
        profile.socialLinks = {
          ...profile.socialLinks,
          ...socialLinks,
        };
      }

      if (settings) {
        profile.settings = {
          ...profile.settings,
          ...settings,
        };
      }
    }

    if (nextAvatarUrl !== undefined) {
      profile.avatar = {
        url: nextAvatarUrl,
        cloudinaryPublicId: extractCloudinaryPublicId(nextAvatarUrl),
      };
    }

    const updatedProfile = await profile.save();

    return res.status(200).json(updatedProfile);
  } catch (error) {
    console.error('Error in updateProfile:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la mise a jour du profil' });
  }
};

// @desc    Telecharger un avatar
// @route   POST /api/social/profile/avatar
// @access  Private
const uploadAvatar = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Aucun fichier fourni' });
    }

    const uploadResult = await uploadToCloudinary(req.file.buffer, {
      folder: 'avatars',
      transformation: [
        { width: 250, height: 250, crop: 'fill' },
      ],
    });

    if (!uploadResult || !uploadResult.secure_url) {
      throw new Error('Erreur lors de l upload sur Cloudinary');
    }

    let profile = await Profile.findOne({ user: req.user._id });

    if (!profile) {
      profile = new Profile({
        user: req.user._id,
        avatar: {
          url: uploadResult.secure_url,
          cloudinaryPublicId: uploadResult.public_id,
        },
      });
    } else {
      if (profile.avatar && profile.avatar.cloudinaryPublicId) {
        try {
          await deleteFromCloudinary(profile.avatar.cloudinaryPublicId);
        } catch (error) {
          console.error('Erreur lors de la suppression de l ancien avatar:', error);
        }
      }

      profile.avatar = {
        url: uploadResult.secure_url,
        cloudinaryPublicId: uploadResult.public_id,
      };
    }

    const updatedProfile = await profile.save();

    return res.status(200).json({
      avatar: updatedProfile.avatar,
    });
  } catch (error) {
    console.error('Error in uploadAvatar:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de l upload de l avatar' });
  }
};

// @desc    Recuperer le profil de l'utilisateur connecte
// @route   GET /api/social/profile
// @access  Private
const getMyProfile = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const profile = await Profile.findOne({ user: req.user._id })
      .populate('user', 'username role');

    if (!profile) {
      const newProfile = await Profile.createDefaultProfile(req.user._id);
      return res.status(200).json(await newProfile.populate('user', 'username role'));
    }

    return res.status(200).json(profile);
  } catch (error) {
    console.error('Error in getMyProfile:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la recuperation du profil' });
  }
};

// @desc    Recuperer le profil d'un utilisateur par son ID
// @route   GET /api/social/profile/:userId
// @access  Public
const getProfileByUserId = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const profile = await Profile.findOne({ user: req.params.userId })
      .populate('user', 'username role');

    if (!profile) {
      return res.status(404).json({ message: 'Profil non trouve' });
    }

    if (
      profile.settings.privateProfile &&
      (!req.user || (req.user._id.toString() !== profile.user._id.toString() && !isAdminRole(req.user.role)))
    ) {
      return res.status(403).json({ message: 'Ce profil est prive' });
    }

    return res.status(200).json(profile);
  } catch (error) {
    console.error('Error in getProfileByUserId:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la recuperation du profil' });
  }
};

// @desc    Suivre/Ne plus suivre un utilisateur
// @route   POST /api/social/profile/:userId/follow
// @access  Private
const followUser = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    if (req.params.userId === req.user._id.toString()) {
      return res.status(400).json({ message: 'Vous ne pouvez pas vous suivre vous meme' });
    }

    const userToFollow = await User.findById(req.params.userId);

    if (!userToFollow) {
      return res.status(404).json({ message: 'Utilisateur non trouve' });
    }

    let myProfile = await Profile.findOne({ user: req.user._id });
    if (!myProfile) {
      myProfile = await Profile.createDefaultProfile(req.user._id);
    }

    let targetProfile = await Profile.findOne({ user: req.params.userId });
    if (!targetProfile) {
      targetProfile = await Profile.createDefaultProfile(req.params.userId);
    }

    const isFollowing = myProfile.following.some(
      (id) => id.toString() === req.params.userId,
    );

    if (isFollowing) {
      myProfile.following = myProfile.following.filter(
        (id) => id.toString() !== req.params.userId,
      );

      targetProfile.followers = targetProfile.followers.filter(
        (id) => id.toString() !== req.user._id.toString(),
      );
    } else {
      myProfile.following.push(req.params.userId);
      targetProfile.followers.push(req.user._id);
    }

    await myProfile.save();
    await targetProfile.save();

    return res.status(200).json({
      following: !isFollowing,
      followingCount: myProfile.following.length,
      followersCount: targetProfile.followers.length,
    });
  } catch (error) {
    console.error('Error in followUser:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors du suivi/desabonnement' });
  }
};

// @desc    Recuperer les utilisateurs suivis
// @route   GET /api/social/profile/following
// @access  Private
const getFollowing = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const profile = await Profile.findOne({ user: req.user._id })
      .populate('following', 'username');

    if (!profile) {
      return res.status(404).json({ message: 'Profil non trouve' });
    }

    return res.status(200).json(profile.following);
  } catch (error) {
    console.error('Error in getFollowing:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la recuperation des abonnements' });
  }
};

// @desc    Recuperer les abonnes
// @route   GET /api/social/profile/followers
// @access  Private
const getFollowers = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const profile = await Profile.findOne({ user: req.user._id })
      .populate('followers', 'username');

    if (!profile) {
      return res.status(404).json({ message: 'Profil non trouve' });
    }

    return res.status(200).json(profile.followers);
  } catch (error) {
    console.error('Error in getFollowers:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la recuperation des abonnes' });
  }
};

module.exports = {
  updateProfile,
  uploadAvatar,
  getMyProfile,
  getProfileByUserId,
  followUser,
  getFollowing,
  getFollowers,
};
