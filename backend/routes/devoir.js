const express = require('express');
const router = express.Router();
const Code = require('../models/code');
const crypto = require('crypto');
const Devoir = require('../models/devoir');

// Function to generate a unique code
function generateCode() {
  return crypto.randomBytes(5).toString('hex');
}

// Route to create a new code
router.post('/create', async (req, res) => {
  try {
    const { type, duration } = req.body;
    if (!type || !duration) {
        return res.status(400).json({ message: 'type and duration are required' });
    }
    const codeValue = generateCode();
    const expiresAt = new Date(Date.now() + duration * 60000); // Convert duration in minute to milliseconds

    const newCode = new Code({
      code: codeValue,
      type: type,
      expiresAt: expiresAt,
    });

    await newCode.save();
    res.status(201).json({ code: codeValue, expiresAt: expiresAt, message: 'Code created' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating code' });
  }
});

// Route to verify a code
router.post('/verify', async (req, res) => {
  try {
    const { code } = req.body;
    if (!code) {
        return res.status(400).json({ message: 'code is required' });
    }
    const foundCode = await Code.findOne({ code: code });

    if (!foundCode) {
      return res.status(404).json({ message: 'Code not found' });
    }
    if (foundCode.expiresAt < new Date()) {
        await Code.deleteOne({ code: code });
        return res.status(410).json({ message: 'Code expired' });
    }
    res.status(200).json({ message: 'Code valid' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error verifying code' });
  }
});

// Route to submit a devoir
router.post('/submit', async (req, res) => {
    try {
      const { code, content } = req.body;
      if (!code || !content) {
        return res.status(400).json({ message: 'Code and content are required' });
      }
  
      const foundCode = await Code.findOne({ code: code });
      if (!foundCode) {
        return res.status(404).json({ message: 'Code not found' });
      }
  
      if (foundCode.expiresAt < new Date()) {
        await Code.deleteOne({ code: code });
        return res.status(410).json({ message: 'Code expired' });
      }
      const newDevoir = new Devoir({
        code: code,
        content: content,
        submissionDate: new Date(),
      });
      await newDevoir.save();
      res.status(201).json({ message: 'Devoir submitted' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error submitting devoir' });
    }
  });
  
  // Route to get all devoirs associated with a code
  router.get('/get', async (req, res) => {
    try {
      const { code } = req.query;
      const devoirs = await Devoir.find({ code: code });
      res.status(200).json(devoirs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error getting devoirs' });
    }
  });
// Route to delete expired codes
router.delete('/deleteExpired', async (req, res) => {
  try {
    await Code.deleteMany({ expiresAt: { $lt: new Date() } });
    res.status(200).json({ message: 'Expired codes deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting expired codes' });
  }
});

module.exports = router;