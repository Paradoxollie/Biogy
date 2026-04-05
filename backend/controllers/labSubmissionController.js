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

const getSubmissionFields = (submission) => {
  const fields = submission?.formState?.fields;
  return fields && typeof fields === 'object' ? fields : {};
};

const toFiniteNumber = (value) => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const normalized = value.replace(',', '.').trim();
    if (!normalized) {
      return null;
    }

    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
};

const buildNumericReviewItem = ({ key, label, expected, tolerance, unit = '', fields, hint = '' }) => {
  const actual = toFiniteNumber(fields[key]);

  if (actual === null) {
    return {
      key,
      label,
      type: 'numeric',
      status: 'missing',
      expected,
      tolerance,
      unit,
      hint,
    };
  }

  const delta = Math.abs(actual - expected);
  return {
    key,
    label,
    type: 'numeric',
    status: delta <= tolerance ? 'correct' : 'incorrect',
    actual,
    expected,
    tolerance,
    unit,
    hint,
  };
};

const buildChoiceReviewItem = ({ key, label, expected, fields, hint = '' }) => {
  const actual = typeof fields[key] === 'string' ? fields[key].trim() : '';

  if (!actual) {
    return {
      key,
      label,
      type: 'choice',
      status: 'missing',
      expected,
      hint,
    };
  }

  return {
    key,
    label,
    type: 'choice',
    status: actual === expected ? 'correct' : 'incorrect',
    actual,
    expected,
    hint,
  };
};

const buildWritingHint = ({ key, label, fields, minWords = 18 }) => {
  const content = typeof fields[key] === 'string' ? fields[key].trim() : '';
  const wordCount = content ? content.split(/\s+/).filter(Boolean).length : 0;

  if (!content) {
    return {
      key,
      label,
      status: 'missing',
      wordCount: 0,
      hint: 'Réponse absente.',
    };
  }

  if (wordCount < minWords) {
    return {
      key,
      label,
      status: 'brief',
      wordCount,
      hint: `Réponse très courte (${wordCount} mots).`,
    };
  }

  return {
    key,
    label,
    status: 'detailed',
    wordCount,
    hint: `Réponse développée (${wordCount} mots).`,
  };
};

const buildAt5AutoReview = (submission) => {
  const fields = getSubmissionFields(submission);
  const items = [];
  let earned = 0;

  const pushItem = (item) => {
    items.push(item);
    if (item.status === 'correct') {
      earned += 1;
    }
  };

  pushItem(buildNumericReviewItem({
    key: 'q2-mref-student',
    label: 'Q2 - masse de référence',
    expected: 0.998205,
    tolerance: 0.001,
    unit: 'g',
    fields,
    hint: 'Référence attendue pour 1 mL d’eau à 20°C.',
  }));

  pushItem(buildNumericReviewItem({
    key: 'q9-mref-student',
    label: 'Q9 - masse de référence reprise',
    expected: 0.998205,
    tolerance: 0.001,
    unit: 'g',
    fields,
    hint: 'La même valeur de référence doit être réutilisée.',
  }));

  const delta = toFiniteNumber(fields['q9-delta-student']);
  const q9Reference = toFiniteNumber(fields['q9-mref-student']);
  const pct = toFiniteNumber(fields['q9-pct-student']);

  if (delta === null || q9Reference === null || pct === null || q9Reference === 0) {
    items.push({
      key: 'q9-pct-student',
      label: 'Q9 - écart relatif',
      type: 'numeric',
      status: 'missing',
      expected: null,
      unit: '%',
      hint: 'Calcul attendu : |Δm| / mréférence × 100.',
    });
  } else {
    const expectedPct = (Math.abs(delta) / q9Reference) * 100;
    const item = {
      key: 'q9-pct-student',
      label: 'Q9 - écart relatif',
      type: 'numeric',
      status: Math.abs(pct - expectedPct) <= 0.2 ? 'correct' : 'incorrect',
      actual: pct,
      expected: Number(expectedPct.toFixed(3)),
      tolerance: 0.2,
      unit: '%',
      hint: 'Tolérance automatique : ±0,2 point de pourcentage.',
    };

    items.push(item);
    if (item.status === 'correct') {
      earned += 1;
    }
  }

  [
    ['q12-case-a-justesse', 'Q12 - Cas A / justesse', 'good'],
    ['q12-case-a-fidelite', 'Q12 - Cas A / fidélité', 'good'],
    ['q12-case-b-justesse', 'Q12 - Cas B / justesse', 'bad'],
    ['q12-case-b-fidelite', 'Q12 - Cas B / fidélité', 'good'],
    ['q12-case-c-justesse', 'Q12 - Cas C / justesse', 'good'],
    ['q12-case-c-fidelite', 'Q12 - Cas C / fidélité', 'bad'],
    ['q12-case-d-justesse', 'Q12 - Cas D / justesse', 'bad'],
    ['q12-case-d-fidelite', 'Q12 - Cas D / fidélité', 'bad'],
  ].forEach(([key, label, expected]) => {
    pushItem(buildChoiceReviewItem({
      key,
      label,
      expected,
      fields,
      hint: expected === 'good' ? 'Réponse attendue : bonne.' : 'Réponse attendue : mauvaise.',
    }));
  });

  const writing = [
    buildWritingHint({ key: 'q2-reasoning', label: 'Q2 - raisonnement', fields, minWords: 12 }),
    buildWritingHint({ key: 'q8-analysis', label: 'Q8 - analyse de dispersion', fields, minWords: 18 }),
    buildWritingHint({ key: 'q9-conclusion', label: 'Q9 - conclusion', fields, minWords: 15 }),
    buildWritingHint({ key: 'q10-balance-source', label: 'Q10 - mise à zéro', fields, minWords: 5 }),
    buildWritingHint({ key: 'q10-rincage-source', label: 'Q10 - rinçage du cône', fields, minWords: 5 }),
    buildWritingHint({ key: 'q10-pipetage-source', label: 'Q10 - technique de pipetage', fields, minWords: 5 }),
    buildWritingHint({ key: 'q10-temperature-source', label: 'Q10 - température', fields, minWords: 5 }),
    buildWritingHint({ key: 'q10-lecture-source', label: 'Q10 - lecture de la balance', fields, minWords: 5 }),
    buildWritingHint({ key: 'q12-own-analysis', label: 'Q12 - analyse personnelle', fields, minWords: 18 }),
  ].filter((item) => item.wordCount > 0 || item.status === 'missing');

  return {
    score: {
      earned,
      total: items.length,
      ratio: items.length ? Math.round((earned / items.length) * 100) : null,
    },
    items,
    writing,
    teacherNote: 'Pré-correction automatique limitée aux calculs numériques et aux réponses fermées. Les observations de laboratoire restent à valider par lecture enseignant.',
  };
};

const buildSubmissionAutoReview = (submission) => {
  if (!submission?.formState?.fields) {
    return null;
  }

  if (submission?.activityId === 'at5-metrologie-pipettes') {
    return buildAt5AutoReview(submission);
  }

  return null;
};

const buildSubmissionSummary = (submission) => {
  const autoReview = buildSubmissionAutoReview(submission);

  return {
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
    autoReviewSummary: autoReview ? {
      earned: autoReview.score.earned,
      total: autoReview.score.total,
      ratio: autoReview.score.ratio,
      writingToReview: autoReview.writing.filter((item) => item.status !== 'detailed').length,
    } : null,
    updatedAt: submission.updatedAt,
    createdAt: submission.createdAt,
  };
};

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
      autoReview: buildSubmissionAutoReview(submission),
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
