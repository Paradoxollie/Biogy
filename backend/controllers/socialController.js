const { SocialProfile, Notification } = require('../models/Social');
const User = require('../models/User');
const mongoose = require('mongoose');

// Créer ou mettre à jour un profil social
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const {
      bio,
      specialties,
      education,
      experience,
      projects,
      website,
      social
    } = req.body;

    // Trouver le profil existant ou en créer un nouveau
    let profile = await SocialProfile.findOne({ user: userId });
    
    if (!profile) {
      profile = new SocialProfile({
        user: userId
      });
    }

    // Mettre à jour les champs
    if (bio !== undefined) profile.bio = bio;
    if (specialties) profile.specialties = specialties;
    if (education) profile.education = education;
    if (experience) profile.experience = experience;
    if (projects) profile.projects = projects;
    if (website !== undefined) profile.website = website;
    if (social) profile.social = social;
    profile.lastActive = new Date();

    await profile.save();

    res.status(200).json({
      success: true,
      profile
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors de la mise à jour du profil: ${error.message}`
    });
  }
};

// Mettre à jour l'image de profil
exports.updateProfileImage = async (req, res) => {
  try {
    const userId = req.user.id;
    const { profileImage } = req.body;

    if (!profileImage) {
      return res.status(400).json({
        success: false,
        message: 'Une URL d\'image est requise'
      });
    }

    let profile = await SocialProfile.findOne({ user: userId });
    
    if (!profile) {
      profile = new SocialProfile({
        user: userId,
        profileImage
      });
    } else {
      profile.profileImage = profileImage;
    }

    await profile.save();

    res.status(200).json({
      success: true,
      profileImage
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors de la mise à jour de l'image de profil: ${error.message}`
    });
  }
};

// Mettre à jour l'image de couverture
exports.updateCoverImage = async (req, res) => {
  try {
    const userId = req.user.id;
    const { coverImage } = req.body;

    if (!coverImage) {
      return res.status(400).json({
        success: false,
        message: 'Une URL d\'image est requise'
      });
    }

    let profile = await SocialProfile.findOne({ user: userId });
    
    if (!profile) {
      profile = new SocialProfile({
        user: userId,
        coverImage
      });
    } else {
      profile.coverImage = coverImage;
    }

    await profile.save();

    res.status(200).json({
      success: true,
      coverImage
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors de la mise à jour de l'image de couverture: ${error.message}`
    });
  }
};

// Obtenir un profil par ID d'utilisateur
exports.getProfileByUserId = async (req, res) => {
  try {
    const { userId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur invalide'
      });
    }

    // Récupérer l'utilisateur de base pour avoir son nom d'utilisateur
    const user = await User.findById(userId).select('username');
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'Utilisateur non trouvé'
      });
    }

    // Récupérer le profil social complet
    let profile = await SocialProfile.findOne({ user: userId })
      .populate('followers', 'username')
      .populate('following', 'username');

    // Si le profil n'existe pas, créer un objet de base
    if (!profile) {
      profile = {
        user: userId,
        bio: '',
        specialties: [],
        followers: [],
        following: [],
        projects: [],
        education: [],
        experience: []
      };
    }

    res.status(200).json({
      success: true,
      profile: {
        ...profile.toObject ? profile.toObject() : profile,
        username: user.username
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la récupération du profil: ${error.message}`
    });
  }
};

// Suivre / Ne plus suivre un utilisateur
exports.toggleFollow = async (req, res) => {
  try {
    const { targetUserId } = req.params;
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(targetUserId)) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur cible invalide'
      });
    }

    // Vérifier que l'utilisateur ne tente pas de se suivre lui-même
    if (targetUserId === userId) {
      return res.status(400).json({
        success: false,
        message: 'Vous ne pouvez pas vous suivre vous-même'
      });
    }

    // Vérifier que l'utilisateur cible existe
    const targetUser = await User.findById(targetUserId);
    if (!targetUser) {
      return res.status(404).json({
        success: false,
        message: 'Utilisateur cible non trouvé'
      });
    }

    // Récupérer ou créer les profils sociaux
    let myProfile = await SocialProfile.findOne({ user: userId });
    if (!myProfile) {
      myProfile = new SocialProfile({ user: userId });
    }

    let targetProfile = await SocialProfile.findOne({ user: targetUserId });
    if (!targetProfile) {
      targetProfile = new SocialProfile({ user: targetUserId });
    }

    // Vérifier si l'utilisateur suit déjà la cible
    const isFollowing = myProfile.following.includes(targetUserId);

    if (isFollowing) {
      // Ne plus suivre
      myProfile.following = myProfile.following.filter(
        id => id.toString() !== targetUserId
      );
      targetProfile.followers = targetProfile.followers.filter(
        id => id.toString() !== userId
      );
    } else {
      // Suivre
      myProfile.following.push(targetUserId);
      targetProfile.followers.push(userId);

      // Créer une notification
      await targetProfile.addNotification({
        type: 'follow',
        from: userId,
        to: targetUserId,
        message: 'a commencé à vous suivre'
      });
    }

    await myProfile.save();
    await targetProfile.save();

    res.status(200).json({
      success: true,
      isFollowing: !isFollowing,
      followersCount: targetProfile.followers.length,
      followingCount: myProfile.following.length
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors du toggle follow: ${error.message}`
    });
  }
};

// Obtenir les notifications
exports.getNotifications = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await SocialProfile.findOne({ user: userId })
      .populate('notifications.from', 'username')
      .sort({ 'notifications.createdAt': -1 });

    if (!profile) {
      return res.status(200).json({
        success: true,
        notifications: []
      });
    }

    res.status(200).json({
      success: true,
      notifications: profile.notifications
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la récupération des notifications: ${error.message}`
    });
  }
};

// Marquer les notifications comme lues
exports.markNotificationsAsRead = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await SocialProfile.findOne({ user: userId });
    
    if (!profile) {
      return res.status(404).json({
        success: false,
        message: 'Profil non trouvé'
      });
    }

    await profile.markNotificationsAsRead();

    res.status(200).json({
      success: true,
      message: 'Notifications marquées comme lues'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la mise à jour des notifications: ${error.message}`
    });
  }
};

// Rechercher des utilisateurs
exports.searchUsers = async (req, res) => {
  try {
    const { query } = req.query;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    if (!query || query.trim() === '') {
      return res.status(400).json({
        success: false,
        message: 'Un terme de recherche est requis'
      });
    }

    // Rechercher par nom d'utilisateur
    const users = await User.find({
      username: { $regex: query, $options: 'i' }
    })
      .select('username')
      .skip(skipIndex)
      .limit(limit);

    // Compter le nombre total de résultats
    const total = await User.countDocuments({
      username: { $regex: query, $options: 'i' }
    });

    // Pour chaque utilisateur, récupérer son profil social s'il existe
    const usersWithProfiles = await Promise.all(users.map(async (user) => {
      const profile = await SocialProfile.findOne({ user: user._id });
      return {
        _id: user._id,
        username: user.username,
        profileImage: profile ? profile.profileImage : 'default-profile.png',
        bio: profile ? profile.bio : '',
        specialties: profile ? profile.specialties : [],
        followersCount: profile ? profile.followers.length : 0
      };
    }));

    res.status(200).json({
      success: true,
      count: usersWithProfiles.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      users: usersWithProfiles
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la recherche d'utilisateurs: ${error.message}`
    });
  }
};

// Obtenir les utilisateurs suggérés
exports.getSuggestedUsers = async (req, res) => {
  try {
    const userId = req.user.id;
    const limit = parseInt(req.query.limit) || 5;

    // Récupérer le profil de l'utilisateur
    const userProfile = await SocialProfile.findOne({ user: userId });
    
    // Les utilisateurs que l'utilisateur suit déjà
    const following = userProfile ? userProfile.following : [];

    // Exclure l'utilisateur actuel et ceux qu'il suit déjà
    const excludeIds = [userId, ...following];

    // Trouver des utilisateurs avec le plus grand nombre d'abonnés
    let suggestedUsers = await SocialProfile.find({
      user: { $nin: excludeIds }
    })
      .sort({ 'followers.length': -1 })
      .limit(limit * 2)
      .populate('user', 'username');

    // Mélanger les résultats et prendre les X premiers
    suggestedUsers = suggestedUsers
      .sort(() => 0.5 - Math.random())
      .slice(0, limit);

    // Formater la réponse
    const formattedUsers = suggestedUsers.map(profile => ({
      _id: profile.user._id,
      username: profile.user.username,
      profileImage: profile.profileImage,
      bio: profile.bio,
      followersCount: profile.followers.length
    }));

    res.status(200).json({
      success: true,
      suggestedUsers: formattedUsers
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la récupération des utilisateurs suggérés: ${error.message}`
    });
  }
};

// Obtenir les abonnés d'un utilisateur
exports.getFollowers = async (req, res) => {
  try {
    const { userId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur invalide'
      });
    }

    const profile = await SocialProfile.findOne({ user: userId })
      .populate({
        path: 'followers',
        select: 'username',
        options: {
          skip: skipIndex,
          limit: limit
        }
      });

    if (!profile) {
      return res.status(200).json({
        success: true,
        followers: [],
        total: 0,
        totalPages: 0,
        currentPage: page
      });
    }

    // Pour chaque abonné, récupérer son image de profil
    const followersWithImages = await Promise.all(profile.followers.map(async (follower) => {
      const followerProfile = await SocialProfile.findOne({ user: follower._id });
      return {
        _id: follower._id,
        username: follower.username,
        profileImage: followerProfile ? followerProfile.profileImage : 'default-profile.png'
      };
    }));

    res.status(200).json({
      success: true,
      followers: followersWithImages,
      total: profile.followers.length,
      totalPages: Math.ceil(profile.followers.length / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la récupération des abonnés: ${error.message}`
    });
  }
};

// Obtenir les abonnements d'un utilisateur
exports.getFollowing = async (req, res) => {
  try {
    const { userId } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({
        success: false,
        message: 'ID utilisateur invalide'
      });
    }

    const profile = await SocialProfile.findOne({ user: userId })
      .populate({
        path: 'following',
        select: 'username',
        options: {
          skip: skipIndex,
          limit: limit
        }
      });

    if (!profile) {
      return res.status(200).json({
        success: true,
        following: [],
        total: 0,
        totalPages: 0,
        currentPage: page
      });
    }

    // Pour chaque abonnement, récupérer son image de profil
    const followingWithImages = await Promise.all(profile.following.map(async (followed) => {
      const followedProfile = await SocialProfile.findOne({ user: followed._id });
      return {
        _id: followed._id,
        username: followed.username,
        profileImage: followedProfile ? followedProfile.profileImage : 'default-profile.png'
      };
    }));

    res.status(200).json({
      success: true,
      following: followingWithImages,
      total: profile.following.length,
      totalPages: Math.ceil(profile.following.length / limit),
      currentPage: page
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la récupération des abonnements: ${error.message}`
    });
  }
}; 