const Forum = require('../models/Forum');
const { SocialProfile } = require('../models/Social');
const mongoose = require('mongoose');

// Obtenir toutes les discussions (avec pagination)
exports.getDiscussions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skipIndex = (page - 1) * limit;
    const category = req.query.category;
    const sortBy = req.query.sortBy || 'lastActivity';
    const sortOrder = req.query.sortOrder || 'desc';

    let query = {};
    if (category && category !== 'all') {
      query.category = category;
    }

    // Compter le nombre total de discussions
    const total = await Forum.countDocuments(query);

    // Construire l'objet de tri
    let sort = {};
    sort[sortBy] = sortOrder === 'asc' ? 1 : -1;

    // Trouver les discussions épinglées d'abord, puis non épinglées triées selon les critères
    const discussions = await Forum.find(query)
      .sort({ isPinned: -1, ...sort })
      .skip(skipIndex)
      .limit(limit)
      .populate('author', 'username')
      .populate('likes', 'username')
      .select('-replies');

    // Pour chaque discussion, ajouter le nombre de réponses
    const discussionsWithCounts = discussions.map(discussion => {
      const discussionObj = discussion.toObject();
      discussionObj.replyCount = discussion.replies.length;
      delete discussionObj.replies; // Supprimer le tableau de réponses pour alléger la réponse
      return discussionObj;
    });

    res.status(200).json({
      success: true,
      count: discussionsWithCounts.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      discussions: discussionsWithCounts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la récupération des discussions: ${error.message}`
    });
  }
};

// Obtenir une discussion par ID avec ses réponses
exports.getDiscussionById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID de discussion invalide'
      });
    }

    const discussion = await Forum.findById(id)
      .populate('author', 'username')
      .populate('likes', 'username')
      .populate('replies.user', 'username')
      .populate('replies.likes', 'username');

    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Discussion non trouvée'
      });
    }

    // Incrémenter le compteur de vues
    discussion.views += 1;
    await discussion.save();

    res.status(200).json({
      success: true,
      discussion
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la récupération de la discussion: ${error.message}`
    });
  }
};

// Créer une nouvelle discussion
exports.createDiscussion = async (req, res) => {
  try {
    const { title, content, category, tags, attachments } = req.body;
    const userId = req.user.id;

    const newDiscussion = new Forum({
      title,
      content,
      author: userId,
      category,
      tags: tags || [],
      attachments: attachments || []
    });

    const savedDiscussion = await newDiscussion.save();

    // Récupérer la discussion avec les informations de l'auteur
    const populatedDiscussion = await Forum.findById(savedDiscussion._id)
      .populate('author', 'username');

    res.status(201).json({
      success: true,
      discussion: populatedDiscussion
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors de la création de la discussion: ${error.message}`
    });
  }
};

// Ajouter une réponse à une discussion
exports.addReply = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, attachments } = req.body;
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID de discussion invalide'
      });
    }

    const discussion = await Forum.findById(id);
    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Discussion non trouvée'
      });
    }

    if (discussion.isLocked) {
      return res.status(403).json({
        success: false,
        message: 'Cette discussion est verrouillée et n\'accepte plus de réponses'
      });
    }

    const newReply = {
      user: userId,
      content,
      attachments: attachments || []
    };

    discussion.replies.push(newReply);
    discussion.lastActivity = new Date();
    
    await discussion.save();

    // Trouver la réponse nouvellement créée
    const createdReply = discussion.replies[discussion.replies.length - 1];

    // Ajouter une notification à l'auteur de la discussion (si ce n'est pas lui-même qui répond)
    if (discussion.author.toString() !== userId.toString()) {
      try {
        const authorProfile = await SocialProfile.findOne({ user: discussion.author });
        if (authorProfile) {
          await authorProfile.addNotification({
            type: 'reply',
            from: userId,
            to: discussion.author,
            discussion: discussion._id,
            reply: createdReply._id,
            message: `a répondu à votre discussion "${discussion.title.substring(0, 30)}${discussion.title.length > 30 ? '...' : ''}"`
          });
        }
      } catch (notifError) {
        console.error('Erreur lors de l\'envoi de la notification:', notifError);
      }
    }

    // Récupérer la réponse avec les informations de l'utilisateur
    const updatedDiscussion = await Forum.findById(id)
      .populate('replies.user', 'username');
    
    const populatedReply = updatedDiscussion.replies.id(createdReply._id);

    res.status(201).json({
      success: true,
      reply: populatedReply
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors de l'ajout de la réponse: ${error.message}`
    });
  }
};

// Modifier une discussion
exports.updateDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content, category, tags, attachments } = req.body;
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID de discussion invalide'
      });
    }

    const discussion = await Forum.findById(id);
    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Discussion non trouvée'
      });
    }

    // Vérifier que l'utilisateur est l'auteur ou un admin
    if (discussion.author.toString() !== userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Vous n\'êtes pas autorisé à modifier cette discussion'
      });
    }

    // Mettre à jour les champs
    discussion.title = title || discussion.title;
    discussion.content = content || discussion.content;
    discussion.category = category || discussion.category;
    discussion.tags = tags || discussion.tags;
    if (attachments) discussion.attachments = attachments;

    const updatedDiscussion = await discussion.save();

    res.status(200).json({
      success: true,
      discussion: updatedDiscussion
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors de la mise à jour de la discussion: ${error.message}`
    });
  }
};

// Modifier une réponse
exports.updateReply = async (req, res) => {
  try {
    const { discussionId, replyId } = req.params;
    const { content, attachments } = req.body;
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(discussionId) || !mongoose.Types.ObjectId.isValid(replyId)) {
      return res.status(400).json({
        success: false,
        message: 'ID invalide'
      });
    }

    const discussion = await Forum.findById(discussionId);
    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Discussion non trouvée'
      });
    }

    const reply = discussion.replies.id(replyId);
    if (!reply) {
      return res.status(404).json({
        success: false,
        message: 'Réponse non trouvée'
      });
    }

    // Vérifier que l'utilisateur est l'auteur de la réponse ou un admin
    if (reply.user.toString() !== userId && req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Vous n\'êtes pas autorisé à modifier cette réponse'
      });
    }

    // Mettre à jour les champs
    reply.content = content || reply.content;
    if (attachments) reply.attachments = attachments;

    await discussion.save();

    res.status(200).json({
      success: true,
      reply
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors de la mise à jour de la réponse: ${error.message}`
    });
  }
};

// Liker/unliker une discussion
exports.toggleLikeDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID de discussion invalide'
      });
    }

    const discussion = await Forum.findById(id);
    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Discussion non trouvée'
      });
    }

    const isLiked = discussion.likes.includes(userId);
    if (isLiked) {
      // Si déjà liké, retirer le like
      discussion.likes = discussion.likes.filter(id => id.toString() !== userId);
    } else {
      // Sinon, ajouter le like
      discussion.likes.push(userId);

      // Envoyer une notification à l'auteur si ce n'est pas lui-même qui like
      if (discussion.author.toString() !== userId) {
        try {
          const authorProfile = await SocialProfile.findOne({ user: discussion.author });
          if (authorProfile) {
            await authorProfile.addNotification({
              type: 'like',
              from: userId,
              to: discussion.author,
              discussion: discussion._id,
              message: `a aimé votre discussion "${discussion.title.substring(0, 30)}${discussion.title.length > 30 ? '...' : ''}"`
            });
          }
        } catch (notifError) {
          console.error('Erreur lors de l\'envoi de la notification:', notifError);
        }
      }
    }

    await discussion.save();

    res.status(200).json({
      success: true,
      isLiked: !isLiked,
      likesCount: discussion.likes.length
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors du toggle like: ${error.message}`
    });
  }
};

// Liker/unliker une réponse
exports.toggleLikeReply = async (req, res) => {
  try {
    const { discussionId, replyId } = req.params;
    const userId = req.user.id;

    if (!mongoose.Types.ObjectId.isValid(discussionId) || !mongoose.Types.ObjectId.isValid(replyId)) {
      return res.status(400).json({
        success: false,
        message: 'ID invalide'
      });
    }

    const discussion = await Forum.findById(discussionId);
    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Discussion non trouvée'
      });
    }

    const reply = discussion.replies.id(replyId);
    if (!reply) {
      return res.status(404).json({
        success: false,
        message: 'Réponse non trouvée'
      });
    }

    const isLiked = reply.likes.includes(userId);
    if (isLiked) {
      // Si déjà liké, retirer le like
      reply.likes = reply.likes.filter(id => id.toString() !== userId);
    } else {
      // Sinon, ajouter le like
      reply.likes.push(userId);

      // Envoyer une notification à l'auteur de la réponse si ce n'est pas lui-même qui like
      if (reply.user.toString() !== userId) {
        try {
          const authorProfile = await SocialProfile.findOne({ user: reply.user });
          if (authorProfile) {
            await authorProfile.addNotification({
              type: 'like',
              from: userId,
              to: reply.user,
              discussion: discussion._id,
              reply: replyId,
              message: `a aimé votre réponse dans "${discussion.title.substring(0, 30)}${discussion.title.length > 30 ? '...' : ''}"`
            });
          }
        } catch (notifError) {
          console.error('Erreur lors de l\'envoi de la notification:', notifError);
        }
      }
    }

    await discussion.save();

    res.status(200).json({
      success: true,
      isLiked: !isLiked,
      likesCount: reply.likes.length
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors du toggle like: ${error.message}`
    });
  }
};

// Rechercher des discussions
exports.searchDiscussions = async (req, res) => {
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

    // Utiliser l'index de recherche texte
    const discussions = await Forum.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    )
      .sort({ score: { $meta: "textScore" } })
      .skip(skipIndex)
      .limit(limit)
      .populate('author', 'username')
      .select('-replies');

    // Compter le nombre total de résultats
    const total = await Forum.countDocuments({ $text: { $search: query } });

    // Pour chaque discussion, ajouter le nombre de réponses
    const discussionsWithCounts = discussions.map(discussion => {
      const discussionObj = discussion.toObject();
      discussionObj.replyCount = discussion.replies.length;
      delete discussionObj.replies; // Supprimer le tableau de réponses pour alléger la réponse
      return discussionObj;
    });

    res.status(200).json({
      success: true,
      count: discussionsWithCounts.length,
      total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      discussions: discussionsWithCounts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `Erreur lors de la recherche: ${error.message}`
    });
  }
};

// Admin: Épingler/désépingler une discussion
exports.togglePinDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID de discussion invalide'
      });
    }

    // Vérifier que l'utilisateur est un admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Seuls les administrateurs peuvent épingler des discussions'
      });
    }

    const discussion = await Forum.findById(id);
    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Discussion non trouvée'
      });
    }

    discussion.isPinned = !discussion.isPinned;
    await discussion.save();

    res.status(200).json({
      success: true,
      isPinned: discussion.isPinned
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors du toggle pin: ${error.message}`
    });
  }
};

// Admin: Verrouiller/déverrouiller une discussion
exports.toggleLockDiscussion = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'ID de discussion invalide'
      });
    }

    // Vérifier que l'utilisateur est un admin
    if (req.user.role !== 'admin') {
      return res.status(403).json({
        success: false,
        message: 'Seuls les administrateurs peuvent verrouiller des discussions'
      });
    }

    const discussion = await Forum.findById(id);
    if (!discussion) {
      return res.status(404).json({
        success: false,
        message: 'Discussion non trouvée'
      });
    }

    discussion.isLocked = !discussion.isLocked;
    await discussion.save();

    res.status(200).json({
      success: true,
      isLocked: discussion.isLocked
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Erreur lors du toggle lock: ${error.message}`
    });
  }
}; 