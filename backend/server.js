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
  process.env.FRONTEND_URL
].filter(Boolean); // Supprimer les valeurs undefined/null

// Configuration CORS complète
const corsOptions = {
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
      callback(null, true);
    } else {
      console.log(`Origin ${origin} not allowed by CORS`);
      callback(null, true); // On autorise tout en production pour debug
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  exposedHeaders: ['Content-Length', 'X-Requested-With'],
  credentials: true,
  optionsSuccessStatus: 200,
  maxAge: 3600 // Cache preflight request results for 1 hour (3600 seconds)
};

// Middleware CORS global avec options complètes
app.use(cors(corsOptions));

// Réponse spéciale pour les requêtes OPTIONS (preflight)
app.options('*', (req, res) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Max-Age', '3600');
  res.status(200).send();
});

app.use(express.json()); // Pour parser le JSON dans les requêtes
app.use(express.urlencoded({ extended: true })); // Pour parser les données de formulaire

// Middleware pour assurer la présence des headers CORS sur chaque réponse
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin) || !origin || process.env.NODE_ENV !== 'production') {
    res.header('Access-Control-Allow-Origin', origin || '*');
  } else {
    res.header('Access-Control-Allow-Origin', 'https://biogy.netlify.app');
  }
  
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Capture la méthode d'origine pour la restaurer après
  const oldJson = res.json;
  res.json = function(body) {
    // Assurez-vous que les headers CORS sont présents avant d'envoyer la réponse JSON
    if (!res.get('Access-Control-Allow-Origin')) {
      res.header('Access-Control-Allow-Origin', origin || '*');
    }
    return oldJson.call(this, body);
  };
  
  next();
});

// Routes de base
app.get('/', (req, res) => {
  res.send('API Biogy Backend is running...');
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
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  
  // Assurez-vous que les headers CORS sont présents même en cas d'erreur
  const origin = req.headers.origin;
  if (!res.get('Access-Control-Allow-Origin')) {
    if (allowedOrigins.includes(origin) || !origin) {
      res.header('Access-Control-Allow-Origin', origin || '*');
    } else {
      res.header('Access-Control-Allow-Origin', 'https://biogy.netlify.app');
    }
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
  }
  
  res.status(statusCode).json({ 
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack 
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
