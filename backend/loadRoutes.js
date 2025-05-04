/**
 * Fonction pour charger toutes les routes de l'application
 */

const loadRoutes = (app) => {
  console.log('Chargement des routes...');

  // Fonction pour charger une route en toute sécurité
  const safelyLoadRoute = (path, routeModule) => {
    try {
      console.log(`Chargement de la route ${path}...`);
      app.use(path, routeModule);
      console.log(`Route ${path} chargée avec succès`);
      return true;
    } catch (error) {
      console.error(`Erreur lors du chargement de la route ${path}:`, error);
      app.use(path, (req, res) => {
        res.status(500).json({
          message: `Erreur de configuration de la route ${path}. Veuillez contacter l'administrateur.`,
          error: error.message
        });
      });
      return false;
    }
  };

  // Routes d'authentification
  safelyLoadRoute('/api/auth', require('./routes/authRoutes'));

  // Routes de posts
  safelyLoadRoute('/api/posts', require('./routes/postRoutes'));

  // Routes d'administration
  safelyLoadRoute('/api/admin', require('./routes/adminRoutes'));

  // Routes de forum
  safelyLoadRoute('/api/forum', require('./routes/forumRoutes'));

  // Routes sociales
  safelyLoadRoute('/api/social', require('./routes/socialRoutes'));

  // Route de profil pour l'upload d'avatar
  safelyLoadRoute('/api/profile', require('./routes/profile'));

  console.log('Chargement des routes terminé');
};

module.exports = loadRoutes;
