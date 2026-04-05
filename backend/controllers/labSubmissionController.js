const LabSubmission = require('../models/LabSubmission');

const SCRIPT_TAG_PATTERN = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;
const INLINE_EVENT_PATTERN = /\son[a-z]+="[^"]*"/gi;

const sanitizeSubmissionHtml = (value) => {
  if (typeof value !== 'string') {
    return '';
  }

  return value
    .replace(SCRIPT_TAG_PATTERN, '')
    .replace(INLINE_EVENT_PATTERN, '');
};

const countNonEmptyFields = (formState) => {
  if (!formState || typeof formState !== 'object') {
    return 0;
  }

  const values = Object.values(formState.fields || {});
  return values.filter((value) => typeof value === 'string' ? value.trim() : value !== null && value !== undefined && value !== '').length;
};

const buildSubmissionSummary = (submission) => ({
  _id: submission._id,
  user: submission.user,
  usernameSnapshot: submission.usernameSnapshot,
  activityId: submission.activityId,
  activityTitle: submission.activityTitle,
  pagePath: submission.pagePath,
  answerCount: submission.answerCount,
  fieldCount: submission.fieldCount,
  lastSubmittedAt: submission.lastSubmittedAt,
  version: submission.version,
  review: submission.review,
  updatedAt: submission.updatedAt,
  createdAt: submission.createdAt,
});

const submitLabSubmission = async (req, res) => {
  try {
    const {
      activityId,
      activityTitle,
      pagePath = '',
      answerCount,
      fieldCount,
      submissionHtml,
      formState = {},
    } = req.body || {};

    if (!activityId || !activityTitle || !submissionHtml) {
      return res.status(400).json({
        message: 'Les informations de la copie sont incomplètes.',
      });
    }

    const cleanedHtml = sanitizeSubmissionHtml(submissionHtml);

    if (!cleanedHtml) {
      return res.status(400).json({
        message: 'La copie ne contient aucun contenu exploitable.',
      });
    }

    const safeAnswerCount = Number.isFinite(answerCount)
      ? Math.max(0, Math.trunc(answerCount))
      : countNonEmptyFields(formState);
    const safeFieldCount = Number.isFinite(fieldCount)
      ? Math.max(0, Math.trunc(fieldCount))
      : Object.keys(formState.fields || {}).length;

    const existingSubmission = await LabSubmission.findOne({
      user: req.user._id,
      activityId,
    });

    const submission = existingSubmission || new LabSubmission({
      user: req.user._id,
      usernameSnapshot: req.user.username,
      activityId,
      activityTitle,
    });

    submission.usernameSnapshot = req.user.username;
    submission.activityId = activityId;
    submission.activityTitle = activityTitle;
    submission.pagePath = pagePath;
    submission.answerCount = safeAnswerCount;
    submission.fieldCount = safeFieldCount;
    submission.submissionHtml = cleanedHtml;
    submission.formState = formState;
    submission.lastSubmittedAt = new Date();
    submission.version = existingSubmission ? existingSubmission.version + 1 : 1;
    submission.review = {
      status: 'submitted',
      feedback: '',
      reviewedAt: null,
      reviewedBy: null,
    };

    await submission.save();

    return res.status(existingSubmission ? 200 : 201).json({
      message: existingSubmission ? 'Copie mise à jour avec succès.' : 'Copie envoyée avec succès.',
      submission: buildSubmissionSummary(submission),
    });
  } catch (error) {
    console.error('Error in submitLabSubmission:', error);
    return res.status(500).json({
      message: 'Erreur serveur lors de l envoi de la copie.',
    });
  }
};

const getLabSubmissions = async (_req, res) => {
  try {
    const submissions = await LabSubmission.find({})
      .select('-submissionHtml -formState')
      .sort({ lastSubmittedAt: -1 })
      .populate('user', 'username')
      .populate('review.reviewedBy', 'username');

    return res.json(submissions.map(buildSubmissionSummary));
  } catch (error) {
    console.error('Error in getLabSubmissions:', error);
    return res.status(500).json({
      message: 'Erreur serveur lors de la récupération des copies.',
    });
  }
};

const getLabSubmissionById = async (req, res) => {
  try {
    const submission = await LabSubmission.findById(req.params.id)
      .populate('user', 'username')
      .populate('review.reviewedBy', 'username');

    if (!submission) {
      return res.status(404).json({
        message: 'Copie non trouvée.',
      });
    }

    return res.json({
      ...buildSubmissionSummary(submission),
      submissionHtml: submission.submissionHtml,
      formState: submission.formState,
    });
  } catch (error) {
    console.error('Error in getLabSubmissionById:', error);
    return res.status(500).json({
      message: 'Erreur serveur lors de la récupération de la copie.',
    });
  }
};

const reviewLabSubmission = async (req, res) => {
  try {
    const { status, feedback = '' } = req.body || {};

    if (!['submitted', 'reviewed', 'follow-up'].includes(status)) {
      return res.status(400).json({
        message: 'Statut de correction invalide.',
      });
    }

    const submission = await LabSubmission.findById(req.params.id);

    if (!submission) {
      return res.status(404).json({
        message: 'Copie non trouvée.',
      });
    }

    submission.review = {
      status,
      feedback: typeof feedback === 'string' ? feedback.trim() : '',
      reviewedAt: status === 'submitted' ? null : new Date(),
      reviewedBy: status === 'submitted' ? null : req.user._id,
    };

    await submission.save();
    await submission.populate('review.reviewedBy', 'username');

    return res.json({
      message: 'Correction enregistrée.',
      submission: buildSubmissionSummary(submission),
    });
  } catch (error) {
    console.error('Error in reviewLabSubmission:', error);
    return res.status(500).json({
      message: 'Erreur serveur lors de l enregistrement de la correction.',
    });
  }
};

module.exports = {
  submitLabSubmission,
  getLabSubmissions,
  getLabSubmissionById,
  reviewLabSubmission,
};
