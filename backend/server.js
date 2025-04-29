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

// Routes spécifiques (à compléter dans routes/)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/admin', require('./routes/adminRoutes')); // Routes admin
app.use('/api/forum', require('./routes/forumRoutes')); // Nouvelles routes forum
app.use('/api/discussions', require('./routes/forumRoutes')); // Alias pour la compatibilité
app.use('/api/social', require('./routes/socialRoutes')); // Nouvelles routes sociales

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

  res.status(statusCode).json({
      message: err.message || 'Internal Server Error',
      // Ne pas exposer le stack en production
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
