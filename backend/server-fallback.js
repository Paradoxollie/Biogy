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

// Configuration CORS permissive
const corsOptions = {
  origin: '*', // Permettre toutes les origines
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: true,
  maxAge: 86400 // 24 heures en secondes
};

app.use(cors(corsOptions));

// Middleware pour les requêtes OPTIONS
app.options('*', cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware pour ajouter les en-têtes CORS à toutes les réponses
app.use((req, res, next) => {
  // Permettre toutes les origines
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Max-Age', '86400');

  // Log pour le débogage
  console.log(`CORS Headers set for request to ${req.path} from origin: ${req.headers.origin || 'unknown'} (Fallback Server)`);

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

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Fallback Server running on port ${PORT}`);
  console.log(`📡 Environment: ${process.env.NODE_ENV}`);
  console.log(`🌐 Frontend URL: ${process.env.FRONTEND_URL || 'Not set'}`);
});
