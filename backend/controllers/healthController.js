/**
 * Contrôleur pour les routes de santé (health check)
 */

// @desc    Vérifier l'état de l'API
// @route   GET /api/health
// @access  Public
const checkHealth = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'API is running',
      timestamp: new Date().toISOString(),
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (error) {
    console.error('Error in health check:', error);
    res.status(500).json({ 
      status: 'error',
      message: 'Internal server error'
    });
  }
};

module.exports = {
  checkHealth
};
