const express = require('express');
const { checkHealth } = require('../controllers/healthController');

const router = express.Router();

// Route pour vérifier l'état de l'API
router.get('/', checkHealth);

module.exports = router;
