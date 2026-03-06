const Topic = require('../models/Topic');
const Discussion = require('../models/Discussion');
const {
  DATABASE_UNAVAILABLE_MESSAGE,
  ensureDatabaseAvailable,
  respondWithDatabaseFallback,
} = require('../utils/database');
const { uploadToCloudinary } = require('../utils/cloudinary');
const { sanitizeDiscussionResponse, sanitizeTopicResponse } = require('../utils/html');
const { isAdminRole } = require('../utils/roles');

const parseTags = (tags) => {
  if (!tags) {
    return [];
  }

  if (Array.isArray(tags)) {
    return tags.map((tag) => String(tag).trim()).filter(Boolean);
  }

  return String(tags)
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
};

// @desc    Creer un nouveau sujet
// @route   POST /api/forum/topics
// @access  Private
const createTopic = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const { title, content, category, tags } = req.body;

    if (!title || !title.trim() || !content || !content.trim()) {
      return res.status(400).json({ message: 'Le titre et le contenu sont requis' });
    }

    const topic = new Topic({
      title: title.trim(),
      content: content.trim(),
      user: req.user._id,
      category: category || 'general',
      tags: parseTags(tags),
    });

    const createdTopic = await topic.save();

    const discussion = new Discussion({
      topic: createdTopic._id,
      user: req.user._id,
      content: content.trim(),
      parentDiscussion: null,
    });

    await discussion.save();

    const populatedTopic = await Topic.findById(createdTopic._id)
      .populate('user', 'username')
      .populate({
        path: 'lastDiscussion',
        populate: {
          path: 'user',
          select: 'username',
        },
      });

    return res.status(201).json(sanitizeTopicResponse(populatedTopic));
  } catch (error) {
    console.error('Error in createTopic:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la creation du sujet' });
  }
};

// @desc    Recuperer tous les sujets
// @route   GET /api/forum/topics
// @access  Public
const getTopics = async (req, res) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;
    const category = req.query.category;
    const search = req.query.search;

    if (respondWithDatabaseFallback(res, {
      topics: [],
      pagination: {
        page,
        limit,
        total: 0,
        pages: 0,
      },
      unavailable: true,
      message: DATABASE_UNAVAILABLE_MESSAGE,
    })) {
      return;
    }

    const query = {};

    if (category && category !== 'all') {
      query.category = category;
    }

    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }

    const topics = await Topic.find(query)
      .sort({ isSticky: -1, lastActivity: -1 })
      .skip(skip)
      .limit(limit)
      .populate('user', 'username')
      .populate('discussionCount')
      .populate({
        path: 'lastDiscussion',
        populate: {
          path: 'user',
          select: 'username',
        },
      });

    const total = await Topic.countDocuments(query);

    return res.status(200).json({
      topics: topics.map(sanitizeTopicResponse),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error in getTopics:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la recuperation des sujets' });
  }
};

// @desc    Recuperer un sujet par son ID
// @route   GET /api/forum/topics/:id
// @access  Public
const getTopicById = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const topic = await Topic.findById(req.params.id)
      .populate('user', 'username')
      .populate('discussionCount')
      .populate({
        path: 'lastDiscussion',
        populate: {
          path: 'user',
          select: 'username',
        },
      });

    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouve' });
    }

    await topic.incrementViews();

    return res.status(200).json(sanitizeTopicResponse(topic));
  } catch (error) {
    console.error('Error in getTopicById:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la recuperation du sujet' });
  }
};

// @desc    Mettre a jour un sujet
// @route   PUT /api/forum/topics/:id
// @access  Private
const updateTopic = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const { title, content, category, tags, isSticky, isClosed } = req.body;

    const topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouve' });
    }

    if (topic.user.toString() !== req.user._id.toString() && !isAdminRole(req.user.role)) {
      return res.status(403).json({ message: 'Non autorise a modifier ce sujet' });
    }

    if (title && title.trim()) topic.title = title.trim();
    if (content && content.trim()) topic.content = content.trim();
    if (category) topic.category = category;
    if (tags) topic.tags = parseTags(tags);

    if (isAdminRole(req.user.role)) {
      if (isSticky !== undefined) topic.isSticky = isSticky;
      if (isClosed !== undefined) topic.isClosed = isClosed;
    }

    const updatedTopic = await topic.save();

    if (content && content.trim()) {
      const firstDiscussion = await Discussion.findOne({
        topic: topic._id,
        parentDiscussion: null,
      });

      if (firstDiscussion) {
        firstDiscussion.content = content.trim();
        firstDiscussion.isEdited = true;
        firstDiscussion.editedAt = Date.now();
        await firstDiscussion.save();
      }
    }

    return res.status(200).json(sanitizeTopicResponse(updatedTopic));
  } catch (error) {
    console.error('Error in updateTopic:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la mise a jour du sujet' });
  }
};

// @desc    Supprimer un sujet
// @route   DELETE /api/forum/topics/:id
// @access  Private
const deleteTopic = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouve' });
    }

    if (topic.user.toString() !== req.user._id.toString() && !isAdminRole(req.user.role)) {
      return res.status(403).json({ message: 'Non autorise a supprimer ce sujet' });
    }

    await Discussion.deleteMany({ topic: topic._id });
    await Topic.deleteOne({ _id: topic._id });

    return res.status(200).json({ message: 'Sujet supprime avec succes' });
  } catch (error) {
    console.error('Error in deleteTopic:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la suppression du sujet' });
  }
};

// @desc    Liker/Unliker un sujet
// @route   POST /api/forum/topics/:id/like
// @access  Private
const likeTopic = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const topic = await Topic.findById(req.params.id);

    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouve' });
    }

    const alreadyLiked = topic.likes.some(
      (userId) => userId.toString() === req.user._id.toString(),
    );

    if (alreadyLiked) {
      topic.likes = topic.likes.filter(
        (userId) => userId.toString() !== req.user._id.toString(),
      );
    } else {
      topic.likes.push(req.user._id);
    }

    await topic.save();

    return res.status(200).json({
      likes: topic.likes,
      likesCount: topic.likes.length,
    });
  } catch (error) {
    console.error('Error in likeTopic:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors du like/unlike du sujet' });
  }
};

// @desc    Creer une nouvelle discussion
// @route   POST /api/forum/topics/:id/discussions
// @access  Private
const createDiscussion = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const { content, parentDiscussionId } = req.body;
    const topicId = req.params.id;
    const files = req.files || [];

    if (!content || !content.trim()) {
      return res.status(400).json({ message: 'Le contenu est requis' });
    }

    const topic = await Topic.findById(topicId);

    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouve' });
    }

    if (topic.isClosed) {
      return res.status(403).json({ message: 'Ce sujet est ferme, vous ne pouvez plus y repondre' });
    }

    const attachments = [];

    for (const file of files.slice(0, 5)) {
      try {
        const uploadResult = await uploadToCloudinary(file.buffer, {
          folder: 'forum_attachments',
        });

        if (uploadResult && uploadResult.secure_url) {
          attachments.push({
            type: file.mimetype.startsWith('image/') ? 'image' : 'document',
            url: uploadResult.secure_url,
            name: file.originalname,
            cloudinaryPublicId: uploadResult.public_id,
          });
        }
      } catch (uploadError) {
        console.error('Error uploading file to Cloudinary:', uploadError);
      }
    }

    const discussion = new Discussion({
      topic: topicId,
      user: req.user._id,
      content: content.trim(),
      parentDiscussion: parentDiscussionId || null,
      attachments,
    });

    const createdDiscussion = await discussion.save();

    await Topic.findByIdAndUpdate(topicId, {
      lastActivity: Date.now(),
    });

    const populatedDiscussion = await Discussion.findById(createdDiscussion._id)
      .populate('user', 'username')
      .populate({
        path: 'parentDiscussion',
        populate: {
          path: 'user',
          select: 'username',
        },
      });

    return res.status(201).json(sanitizeDiscussionResponse(populatedDiscussion));
  } catch (error) {
    console.error('Error in createDiscussion:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la creation de la discussion' });
  }
};

// @desc    Recuperer toutes les discussions d'un sujet
// @route   GET /api/forum/topics/:id/discussions
// @access  Public
const getDiscussions = async (req, res) => {
  try {
    const topicId = req.params.id;
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 20;
    const skip = (page - 1) * limit;

    if (respondWithDatabaseFallback(res, {
      discussions: [],
      pagination: {
        page,
        limit,
        total: 0,
        pages: 0,
      },
      unavailable: true,
      message: DATABASE_UNAVAILABLE_MESSAGE,
      topicId,
    })) {
      return;
    }

    const topic = await Topic.findById(topicId);

    if (!topic) {
      return res.status(404).json({ message: 'Sujet non trouve' });
    }

    const mainDiscussions = await Discussion.find({
      topic: topicId,
      parentDiscussion: null,
    })
      .sort({ createdAt: 1 })
      .skip(skip)
      .limit(limit)
      .populate('user', 'username')
      .populate({
        path: 'replies',
        populate: {
          path: 'user',
          select: 'username',
        },
      });

    const total = await Discussion.countDocuments({
      topic: topicId,
      parentDiscussion: null,
    });

    return res.status(200).json({
      discussions: mainDiscussions.map(sanitizeDiscussionResponse),
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error) {
    console.error('Error in getDiscussions:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la recuperation des discussions' });
  }
};

// @desc    Mettre a jour une discussion
// @route   PUT /api/forum/discussions/:id
// @access  Private
const updateDiscussion = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const { content } = req.body;

    if (!content || !content.trim()) {
      return res.status(400).json({ message: 'Le contenu est requis' });
    }

    const discussion = await Discussion.findById(req.params.id);

    if (!discussion) {
      return res.status(404).json({ message: 'Discussion non trouvee' });
    }

    if (discussion.user.toString() !== req.user._id.toString() && !isAdminRole(req.user.role)) {
      return res.status(403).json({ message: 'Non autorise a modifier cette discussion' });
    }

    discussion.content = content.trim();
    discussion.isEdited = true;
    discussion.editedAt = Date.now();

    const updatedDiscussion = await discussion.save();

    return res.status(200).json(sanitizeDiscussionResponse(updatedDiscussion));
  } catch (error) {
    console.error('Error in updateDiscussion:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la mise a jour de la discussion' });
  }
};

// @desc    Supprimer une discussion
// @route   DELETE /api/forum/discussions/:id
// @access  Private
const deleteDiscussion = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const discussion = await Discussion.findById(req.params.id);

    if (!discussion) {
      return res.status(404).json({ message: 'Discussion non trouvee' });
    }

    if (discussion.user.toString() !== req.user._id.toString() && !isAdminRole(req.user.role)) {
      return res.status(403).json({ message: 'Non autorise a supprimer cette discussion' });
    }

    const isMainDiscussion = discussion.parentDiscussion === null;
    const hasReplies = await Discussion.exists({ parentDiscussion: discussion._id });

    if (isMainDiscussion || hasReplies) {
      discussion.content = '[Ce message a ete supprime]';
      discussion.isDeleted = true;
      await discussion.save();
    } else {
      await Discussion.deleteOne({ _id: discussion._id });
    }

    return res.status(200).json({ message: 'Discussion supprimee avec succes' });
  } catch (error) {
    console.error('Error in deleteDiscussion:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors de la suppression de la discussion' });
  }
};

// @desc    Liker/Unliker une discussion
// @route   POST /api/forum/discussions/:id/like
// @access  Private
const likeDiscussion = async (req, res) => {
  if (!ensureDatabaseAvailable(res)) {
    return;
  }

  try {
    const discussion = await Discussion.findById(req.params.id);

    if (!discussion) {
      return res.status(404).json({ message: 'Discussion non trouvee' });
    }

    const alreadyLiked = discussion.likes.some(
      (userId) => userId.toString() === req.user._id.toString(),
    );

    if (alreadyLiked) {
      discussion.likes = discussion.likes.filter(
        (userId) => userId.toString() !== req.user._id.toString(),
      );
    } else {
      discussion.likes.push(req.user._id);
    }

    await discussion.save();

    return res.status(200).json({
      likes: discussion.likes,
      likesCount: discussion.likes.length,
    });
  } catch (error) {
    console.error('Error in likeDiscussion:', error);
    return res.status(500).json({ message: error.message || 'Erreur lors du like/unlike de la discussion' });
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
  likeDiscussion,
};
