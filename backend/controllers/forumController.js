const Topic = require('../models/Topic');
const Discussion = require('../models/Discussion');
const User = require('../models/User');
const { uploadToCloudinary } = require('../utils/cloudinary');

// @desc    Créer un nouveau sujet
// @route   POST /api/forum/topics
// @access  Private
const createTopic = async (req, res) => {
  try {
    const { title, content, category, tags } = req.body;
    
    // Validation de base
    if (!title || !content) {
      return res.status(400).json({ message: 'Le titre et le contenu sont requis' });
    }
    
    // Créer le sujet
    const topic = new Topic({
      title,
      content,
      user: req.user._id,
      category: category || 'general',
      tags: tags ? tags.split(',').map(tag => tag.trim()) : []
    });
    
    const createdTopic = await topic.save();
    
    // Créer la première discussion (le message initial du sujet)
    const discussion = new Discussion({
      topic: createdTopic._id,
      user: req.user._id,
      content,
      parentDiscussion: null
    });
    
    await discussion.save();
    
    // Récupérer le sujet avec les informations de l'utilisateur
    const populatedTopic = await Topic.findById(createdTopic._id)
      .populate('user', 'username')
      .populate({
        path: 'lastDiscussion',
        populate: {
          path: 'user',
          select: 'username'
        }
      });
    
    res.status(201).json(populatedTopic);
  } catch (error) {
    console.error('Error in createTopic:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la création du sujet' });
  }
};

// @desc    Récupérer tous les sujets (avec pagination)
// @route   GET /api/forum/topics
// @access  Public
const getTopics = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const category = req.query.category;
    const search = req.query.search;
    
    // Construire la requête
    let query = {};
    
    // Filtrer par catégorie si spécifiée
    if (category && category !== 'all') {
      query.category = category;
    }
    
    // Recherche par titre si spécifiée
    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }
    
    // Récupérer les sujets épinglés en premier, puis par dernière activité
    const topics = await Topic.find(query)
      .sort({ isSticky: -1, lastActivity: -1 })
      .skip(skip)
      .limit(limit)
      .populate('user', 'username')
      .populate({
        path: 'lastDiscussion',
        populate: {
          path: 'user',
          select: 'username'
        }
      });
    
    // Compter le nombre total de sujets pour la pagination
    const total = await Topic.countDocuments(query);
    
    res.status(200).json({
      topics,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error in getTopics:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la récupération des sujets' });
  }
};

// @desc    Récupérer un sujet par son ID
// @route   GET /api/forum/topics/:id
// @access  Public
const getTopicById = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id)
      .populate('user', 'username')
      .populate({
        path: 'lastDiscussion',
        populate: {
          path: 'user',
          select: 'username'
        }
      });
    
    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouvé' });
    }
    
    // Incrémenter le compteur de vues
    if (req.user) {
      await topic.incrementViews();
    }
    
    res.status(200).json(topic);
  } catch (error) {
    console.error('Error in getTopicById:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la récupération du sujet' });
  }
};

// @desc    Mettre à jour un sujet
// @route   PUT /api/forum/topics/:id
// @access  Private (propriétaire ou admin)
const updateTopic = async (req, res) => {
  try {
    const { title, content, category, tags, isSticky, isClosed } = req.body;
    
    const topic = await Topic.findById(req.params.id);
    
    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouvé' });
    }
    
    // Vérifier si l'utilisateur est le propriétaire ou un admin
    if (topic.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Non autorisé à modifier ce sujet' });
    }
    
    // Mettre à jour les champs
    if (title) topic.title = title;
    if (content) topic.content = content;
    if (category) topic.category = category;
    if (tags) topic.tags = tags.split(',').map(tag => tag.trim());
    
    // Seuls les admins peuvent épingler ou fermer un sujet
    if (req.user.role === 'admin') {
      if (isSticky !== undefined) topic.isSticky = isSticky;
      if (isClosed !== undefined) topic.isClosed = isClosed;
    }
    
    const updatedTopic = await topic.save();
    
    // Mettre à jour également la première discussion
    if (content) {
      const firstDiscussion = await Discussion.findOne({ 
        topic: topic._id,
        parentDiscussion: null
      });
      
      if (firstDiscussion) {
        firstDiscussion.content = content;
        firstDiscussion.isEdited = true;
        firstDiscussion.editedAt = Date.now();
        await firstDiscussion.save();
      }
    }
    
    res.status(200).json(updatedTopic);
  } catch (error) {
    console.error('Error in updateTopic:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la mise à jour du sujet' });
  }
};

// @desc    Supprimer un sujet
// @route   DELETE /api/forum/topics/:id
// @access  Private (propriétaire ou admin)
const deleteTopic = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    
    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouvé' });
    }
    
    // Vérifier si l'utilisateur est le propriétaire ou un admin
    if (topic.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Non autorisé à supprimer ce sujet' });
    }
    
    // Supprimer toutes les discussions associées
    await Discussion.deleteMany({ topic: topic._id });
    
    // Supprimer le sujet
    await topic.remove();
    
    res.status(200).json({ message: 'Sujet supprimé avec succès' });
  } catch (error) {
    console.error('Error in deleteTopic:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la suppression du sujet' });
  }
};

// @desc    Liker/Unliker un sujet
// @route   POST /api/forum/topics/:id/like
// @access  Private
const likeTopic = async (req, res) => {
  try {
    const topic = await Topic.findById(req.params.id);
    
    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouvé' });
    }
    
    // Vérifier si l'utilisateur a déjà liké
    const alreadyLiked = topic.likes.includes(req.user._id);
    
    if (alreadyLiked) {
      // Retirer le like
      topic.likes = topic.likes.filter(
        userId => userId.toString() !== req.user._id.toString()
      );
    } else {
      // Ajouter le like
      topic.likes.push(req.user._id);
    }
    
    await topic.save();
    
    res.status(200).json({
      likes: topic.likes,
      likesCount: topic.likes.length
    });
  } catch (error) {
    console.error('Error in likeTopic:', error);
    res.status(500).json({ message: error.message || 'Erreur lors du like/unlike du sujet' });
  }
};

// @desc    Créer une nouvelle discussion (réponse)
// @route   POST /api/forum/topics/:id/discussions
// @access  Private
const createDiscussion = async (req, res) => {
  try {
    const { content, parentDiscussionId } = req.body;
    const topicId = req.params.id;
    
    // Validation de base
    if (!content) {
      return res.status(400).json({ message: 'Le contenu est requis' });
    }
    
    // Vérifier si le sujet existe
    const topic = await Topic.findById(topicId);
    
    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouvé' });
    }
    
    // Vérifier si le sujet est fermé
    if (topic.isClosed) {
      return res.status(403).json({ message: 'Ce sujet est fermé, vous ne pouvez plus y répondre' });
    }
    
    // Créer la discussion
    const discussion = new Discussion({
      topic: topicId,
      user: req.user._id,
      content,
      parentDiscussion: parentDiscussionId || null
    });
    
    const createdDiscussion = await discussion.save();
    
    // Récupérer la discussion avec les informations de l'utilisateur
    const populatedDiscussion = await Discussion.findById(createdDiscussion._id)
      .populate('user', 'username')
      .populate({
        path: 'parentDiscussion',
        populate: {
          path: 'user',
          select: 'username'
        }
      });
    
    res.status(201).json(populatedDiscussion);
  } catch (error) {
    console.error('Error in createDiscussion:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la création de la discussion' });
  }
};

// @desc    Récupérer toutes les discussions d'un sujet
// @route   GET /api/forum/topics/:id/discussions
// @access  Public
const getDiscussions = async (req, res) => {
  try {
    const topicId = req.params.id;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;
    
    // Vérifier si le sujet existe
    const topic = await Topic.findById(topicId);
    
    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouvé' });
    }
    
    // Récupérer les discussions principales (non-réponses) d'abord
    const mainDiscussions = await Discussion.find({ 
      topic: topicId,
      parentDiscussion: null
    })
      .sort({ createdAt: 1 })
      .skip(skip)
      .limit(limit)
      .populate('user', 'username')
      .populate({
        path: 'replies',
        populate: {
          path: 'user',
          select: 'username'
        }
      });
    
    // Compter le nombre total de discussions principales pour la pagination
    const total = await Discussion.countDocuments({ 
      topic: topicId,
      parentDiscussion: null
    });
    
    res.status(200).json({
      discussions: mainDiscussions,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit)
      }
    });
  } catch (error) {
    console.error('Error in getDiscussions:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la récupération des discussions' });
  }
};

// @desc    Mettre à jour une discussion
// @route   PUT /api/forum/discussions/:id
// @access  Private (propriétaire ou admin)
const updateDiscussion = async (req, res) => {
  try {
    const { content } = req.body;
    
    const discussion = await Discussion.findById(req.params.id);
    
    if (!discussion) {
      return res.status(404).json({ message: 'Discussion non trouvée' });
    }
    
    // Vérifier si l'utilisateur est le propriétaire ou un admin
    if (discussion.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Non autorisé à modifier cette discussion' });
    }
    
    // Mettre à jour le contenu
    discussion.content = content;
    discussion.isEdited = true;
    discussion.editedAt = Date.now();
    
    const updatedDiscussion = await discussion.save();
    
    res.status(200).json(updatedDiscussion);
  } catch (error) {
    console.error('Error in updateDiscussion:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la mise à jour de la discussion' });
  }
};

// @desc    Supprimer une discussion
// @route   DELETE /api/forum/discussions/:id
// @access  Private (propriétaire ou admin)
const deleteDiscussion = async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);
    
    if (!discussion) {
      return res.status(404).json({ message: 'Discussion non trouvée' });
    }
    
    // Vérifier si l'utilisateur est le propriétaire ou un admin
    if (discussion.user.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Non autorisé à supprimer cette discussion' });
    }
    
    // Si c'est la discussion principale (première du sujet), on ne peut pas la supprimer
    // On la marque comme supprimée à la place
    const isMainDiscussion = discussion.parentDiscussion === null;
    const hasReplies = await Discussion.exists({ parentDiscussion: discussion._id });
    
    if (isMainDiscussion || hasReplies) {
      discussion.content = '[Ce message a été supprimé]';
      discussion.isDeleted = true;
      await discussion.save();
    } else {
      // Sinon, on peut la supprimer complètement
      await discussion.remove();
    }
    
    res.status(200).json({ message: 'Discussion supprimée avec succès' });
  } catch (error) {
    console.error('Error in deleteDiscussion:', error);
    res.status(500).json({ message: error.message || 'Erreur lors de la suppression de la discussion' });
  }
};

// @desc    Liker/Unliker une discussion
// @route   POST /api/forum/discussions/:id/like
// @access  Private
const likeDiscussion = async (req, res) => {
  try {
    const discussion = await Discussion.findById(req.params.id);
    
    if (!discussion) {
      return res.status(404).json({ message: 'Discussion non trouvée' });
    }
    
    // Vérifier si l'utilisateur a déjà liké
    const alreadyLiked = discussion.likes.includes(req.user._id);
    
    if (alreadyLiked) {
      // Retirer le like
      discussion.likes = discussion.likes.filter(
        userId => userId.toString() !== req.user._id.toString()
      );
    } else {
      // Ajouter le like
      discussion.likes.push(req.user._id);
    }
    
    await discussion.save();
    
    res.status(200).json({
      likes: discussion.likes,
      likesCount: discussion.likes.length
    });
  } catch (error) {
    console.error('Error in likeDiscussion:', error);
    res.status(500).json({ message: error.message || 'Erreur lors du like/unlike de la discussion' });
  }
};

module.exports = {
  createTopic,
  getTopics,
  getTopicById,
  updateTopic,
  deleteTopic,
  likeTopic,
  createDiscussion,
  getDiscussions,
  updateDiscussion,
  deleteDiscussion,
  likeDiscussion
};
