const router = require('express').Router();

const { submitLabSubmission } = require('../controllers/labSubmissionController');
const { protect } = require('../middleware/authMiddleware');

router.post('/submissions', protect, submitLabSubmission);

module.exports = router;
