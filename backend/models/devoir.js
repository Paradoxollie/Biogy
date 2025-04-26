const mongoose = require('mongoose');

const devoirSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  submissionDate: {
    type: Date,
    required: true
  }
});

const Devoir = mongoose.model('Devoir', devoirSchema);

module.exports = Devoir;