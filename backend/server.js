const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Charger .env AVANT tout le reste
const connectDB = require('./config/db'); // Connexion à MongoDB

// Connexion à la base de données
connectDB();

const app = express();

// CORS configuration avec origines multiples
const allowedOrigins = [
  'http://localhost:3000',
  'https://biogy.netlify.app',
  'https://www.biogy.netlify.app',
  'https://biogy.netlify.com',
  'https://www.biogy.netlify.com',
  process.env.FRONTEND_URL
].filter(Boolean);

// Configuration CORS beaucoup plus permissive pour résoudre les problèmes
const corsOptions = {
  origin: '*', // Autoriser toutes les origines
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: false, // Désactiver credentials pour permettre '*'
  optionsSuccessStatus: 200, // Pour les navigateurs anciens
  preflightContinue: false
};

// Middleware CORS global
app.use(cors(corsOptions));

// Middleware spécifique pour les requêtes OPTIONS (preflight)
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.status(200).send();
});

app.use(express.json()); // Pour parser le JSON dans les requêtes
app.use(express.urlencoded({ extended: true })); // Pour parser les données de formulaire

// Middleware pour ajouter les en-têtes CORS à toutes les réponses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  next();
});

// Routes de base
app.get('/', (req, res) => {
  res.send('API Biogy Backend is running...');
});

// Route de test CORS
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API is healthy and CORS is working!',
    timestamp: new Date().toISOString(),
    origin: req.headers.origin || 'unknown',
    cors: {
      enabled: true,
      allowedOrigins: allowedOrigins
    }
  });
});

// Importer le correctif de routes
const { fixRouterRoutes } = require('./routes/fixRoutes');

// Fonction pour charger les routes en toute sécurité
const safelyLoadRoutes = () => {
  try {
    console.log('Chargement des routes...');

    // Routes spécifiques avec correction des routes problématiques
    app.use('/api/auth', fixRouterRoutes(require('./routes/authRoutes')));
    console.log('Routes d\'authentification chargées');

    app.use('/api/posts', fixRouterRoutes(require('./routes/postRoutes')));
    console.log('Routes de posts chargées');

    app.use('/api/admin', fixRouterRoutes(require('./routes/adminRoutes'))); // Routes admin
    console.log('Routes d\'administration chargées');

    app.use('/api/forum', fixRouterRoutes(require('./routes/forumRoutes'))); // Nouvelles routes forum
    console.log('Routes de forum chargées');

    app.use('/api/discussions', fixRouterRoutes(require('./routes/forumRoutes'))); // Alias pour la compatibilité
    console.log('Routes de discussions chargées');

    app.use('/api/social', fixRouterRoutes(require('./routes/socialRoutes'))); // Nouvelles routes sociales
    console.log('Routes sociales chargées');

    console.log('Toutes les routes ont été chargées avec succès');
  } catch (error) {
    console.error('Erreur lors du chargement des routes:', error);
    // Ajouter une route de secours pour indiquer l'erreur
    app.use('/api/*', (req, res) => {
      res.status(500).json({
        message: 'Erreur de configuration des routes. Veuillez contacter l\'administrateur.',
        error: error.message
      });
    });
  }
};

// Charger les routes en toute sécurité
safelyLoadRoutes();

// Ajouter un gestionnaire pour les routes invalides
app.use('/invalid-route', (req, res) => {
  res.status(400).json({ message: 'Route invalide détectée et corrigée. Veuillez vérifier vos routes.' });
});

// Gestionnaire d'erreurs spécifique pour path-to-regexp
app.use((err, req, res, next) => {
  if (err.message && err.message.includes('pathToRegexpError')) {
    console.error('Erreur path-to-regexp détectée:', err.message);
    return res.status(500).json({
      message: 'Erreur de configuration des routes. Une URL invalide a été utilisée comme route.',
      error: 'PATH_TO_REGEXP_ERROR',
      details: err.message
    });
  }
  next(err);
});

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);

  // Le middleware `cors` devrait déjà avoir défini les headers si la requête initiale était autorisée
  // Il n'est plus nécessaire de les redéfinir ici

  // Si l'erreur est une erreur CORS générée par notre logique plus haut
  if (err.message === 'Not allowed by CORS') {
    return res.status(403).json({ message: 'Forbidden by CORS policy' });
  }

  // Si l'erreur est liée à path-to-regexp
  if (err.message && err.message.includes('Missing parameter name')) {
    return res.status(500).json({
      message: 'Erreur de configuration des routes. Une URL invalide a été utilisée comme route.',
      error: 'PATH_TO_REGEXP_ERROR',
      details: err.message
    });
  }

  res.status(statusCode).json({
      message: err.message || 'Internal Server Error',
      // Ne pas exposer le stack en production
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
