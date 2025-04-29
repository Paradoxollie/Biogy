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
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: false
}));

// Middleware pour les requêtes OPTIONS
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.status(200).send();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware pour ajouter les en-têtes CORS à toutes les réponses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
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

// Charger les routes en toute sécurité
try {
  // Routes d'API
  app.use('/api/auth', require('./routes/authRoutes'));
  app.use('/api/posts', require('./routes/postRoutes'));
  app.use('/api/admin', require('./routes/adminRoutes'));
  app.use('/api/forum', require('./routes/forumRoutes'));
  app.use('/api/discussions', require('./routes/forumRoutes'));
  app.use('/api/social', require('./routes/socialRoutes'));
} catch (error) {
  console.error('Erreur lors du chargement des routes:', error);
  app.use('/api/*', (req, res) => {
    res.status(500).json({
      message: 'Erreur de configuration des routes. Veuillez contacter l\'administrateur.',
      error: error.message
    });
  });
}

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
