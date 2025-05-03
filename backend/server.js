const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Charger .env AVANT tout le reste
const connectDB = require('./config/db'); // Connexion à MongoDB

// Connexion à la base de données
connectDB();

const app = express();

// Middlewares
// Configuration CORS spécifique pour Netlify
const allowedOrigins = [
  'https://biogy.netlify.app',
  'http://localhost:3000',
  'http://localhost:8888'
];

// Configuration CORS simplifiée
app.use(cors({
  origin: 'https://biogy.netlify.app', // Spécifier exactement l'origine autorisée
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: true,
  maxAge: 86400 // Cache preflight pour 24 heures
}));

app.use(express.json()); // Pour parser le JSON dans les requêtes
app.use(express.urlencoded({ extended: true })); // Pour parser les données de formulaire

// Routes de base
app.get('/', (req, res) => {
  res.send('API Biogy Backend is running...');
});

// Route de test CORS améliorée
app.get('/api/health', (req, res) => {
  // Récupérer les informations de la requête
  const requestInfo = {
    headers: {
      origin: req.headers.origin,
      referer: req.headers.referer,
      host: req.headers.host,
      'user-agent': req.headers['user-agent']
    },
    method: req.method,
    url: req.url,
    ip: req.ip
  };

  // Récupérer les informations de la réponse
  const responseHeaders = {};
  Object.keys(res.getHeaders()).forEach(key => {
    responseHeaders[key] = res.getHeaders()[key];
  });

  // Envoyer une réponse détaillée
  res.json({
    status: 'ok',
    message: 'API is healthy and CORS is working!',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    server: {
      name: 'biogy-api',
      version: '1.0.0',
      node: process.version
    },
    request: requestInfo,
    response: {
      headers: responseHeaders
    },
    cors: {
      enabled: true,
      allowedOrigins: allowedOrigins
    }
  });
});

// Route de test CORS spécifique pour le profil
app.get('/api/cors-test/profile', (req, res) => {
  if (!req.headers.authorization) {
    return res.status(401).json({
      status: 'error',
      message: 'Authorization header missing',
      cors: 'enabled',
      origin: req.headers.origin || 'unknown'
    });
  }

  res.json({
    status: 'ok',
    message: 'Profile API CORS test successful',
    timestamp: new Date().toISOString(),
    auth: 'valid',
    origin: req.headers.origin || 'unknown'
  });
});

// Routes spécifiques (à compléter dans routes/)
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/admin', require('./routes/adminRoutes')); // Routes admin
app.use('/api/forum', require('./routes/forumRoutes')); // Routes forum
app.use('/api/social', require('./routes/socialRoutes')); // Routes sociales

// Gestionnaire d'erreurs global
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
