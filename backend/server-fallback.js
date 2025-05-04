/**
 * Version de secours du serveur qui utilise Express 4.x
 * à utiliser si Express 5.x pose des problèmes
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

// Connexion à la base de données
connectDB();

const app = express();

// Configuration CORS avec origine dynamique
const frontendUrl = process.env.FRONTEND_URL || 'https://biogy.netlify.app';
app.use(cors({
  origin: frontendUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: true
}));

// Middleware pour les requêtes OPTIONS
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', frontendUrl);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.status(200).send();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware pour ajouter les en-têtes CORS à toutes les réponses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', frontendUrl);
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// Routes de base
app.get('/', (req, res) => {
  res.send('API Biogy Backend is running (Fallback Server)...');
});

// Route de test CORS
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'API is healthy and CORS is working! (Fallback Server)',
    timestamp: new Date().toISOString(),
    origin: req.headers.origin || 'unknown',
    server: 'fallback'
  });
});

// Route de health check simple (recommandée pour Render)
app.get('/healthz', (_, res) => res.send('ok'));

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

// Charger les routes une par une en toute sécurité
console.log('Chargement des routes...');

// Routes d'authentification
safelyLoadRoute('/api/auth', require('./routes/authRoutes'));

// Routes de posts
safelyLoadRoute('/api/posts', require('./routes/postRoutes'));

// Routes d'administration
safelyLoadRoute('/api/admin', require('./routes/adminRoutes'));

// Routes de forum
safelyLoadRoute('/api/forum', require('./routes/forumRoutes'));

// Routes de discussions (alias pour le forum)
safelyLoadRoute('/api/discussions', require('./routes/forumRoutes'));

// Routes sociales
safelyLoadRoute('/api/social', require('./routes/socialRoutes'));

console.log('Chargement des routes terminé');

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = err.statusCode || (res.statusCode === 200 ? 500 : res.statusCode);

  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Fallback Server running on port ${PORT}`));
