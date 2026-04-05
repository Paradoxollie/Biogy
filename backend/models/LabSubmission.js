const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  status: {
    type: String,
    enum: ['submitted', 'reviewed', 'follow-up'],
    default: 'submitted',
  },
  feedback: {
    type: String,
    default: '',
  },
  reviewedAt: {
    type: Date,
    default: null,
  },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: null,
  },
}, {
  _id: false,
});

const labSubmissionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    index: true,
  },
  usernameSnapshot: {
    type: String,
    required: true,
    trim: true,
  },
  activityId: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  activityTitle: {
    type: String,
    required: true,
    trim: true,
  },
  pagePath: {
    type: String,
    default: '',
    trim: true,
  },
  answerCount: {
    type: Number,
    default: 0,
    min: 0,
  },
  fieldCount: {
    type: Number,
    default: 0,
    min: 0,
  },
  submissionHtml: {
    type: String,
    required: true,
  },
  formState: {
    type: mongoose.Schema.Types.Mixed,
    default: {},
  },
  review: {
    type: reviewSchema,
    default: () => ({
      status: 'submitted',
      feedback: '',
      reviewedAt: null,
      reviewedBy: null,
    }),
  },
  lastSubmittedAt: {
    type: Date,
    default: Date.now,
  },
  version: {
    type: Number,
    default: 1,
    min: 1,
  },
}, {
  timestamps: true,
});

labSubmissionSchema.index({ user: 1, activityId: 1 }, { unique: true });

module.exports = mongoose.model('LabSubmission', labSubmissionSchema);
