const router = require('express').Router();

const { submitLabSubmission } = require('../controllers/labSubmissionController');
const { protect, admin } = require('../middleware/authMiddleware');
const teacherCorrections = require('../data/at5-teacher.json');
const LabSubmission = require('../models/LabSubmission');

router.get('/submissions/mine', protect, async (req, res, next) => {
  try {
    const copies = await LabSubmission.find({ user: req.user._id })
      .select('activityId activityTitle answerCount fieldCount version lastSubmittedAt review.status review.feedback review.reviewedAt')
      .sort({ lastSubmittedAt: -1 }).limit(100).lean();
    res.set('Cache-Control', 'private, no-store').json(copies);
  } catch (error) { next(error); }
});

router.get('/activities/:activityId/corrections', protect, admin, (req, res) => {
  res.set('Cache-Control', 'private, no-store');
  if (req.params.activityId !== 'at5-metrologie-pipettes') return res.status(404).json({ message: 'Séance introuvable.' });
  return res.json({ corrections: teacherCorrections });
});

router.post('/submissions', protect, submitLabSubmission);

module.exports = router;
