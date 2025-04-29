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
].filter(Boolean);

// Configuration CORS simplifiée et plus stricte
const corsOptions = {
  origin: function(origin, callback) {
    // Autoriser les requêtes sans origine (ex: Postman, mobile apps) ET les requêtes en dev
    if (!origin || process.env.NODE_ENV !== 'production') {
      return callback(null, true);
    }
    // Autoriser les origines de la liste en production
    if (allowedOrigins.indexOf(origin) !== -1) {
      return callback(null, true);
    } else {
      console.error(`Origin ${origin} not allowed by CORS policy.`);
      return callback(new Error('Not allowed by CORS')); // Rejeter explicitement
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: true, // Important pour les cookies/auth headers
  optionsSuccessStatus: 200 // Pour les navigateurs anciens
};

// Middleware CORS global
app.use(cors(corsOptions));

// Les requêtes OPTIONS (preflight) sont gérées automatiquement par le middleware `cors`
// Il n'est plus nécessaire de définir app.options('*', ...)

app.use(express.json()); // Pour parser le JSON dans les requêtes
app.use(express.urlencoded({ extended: true })); // Pour parser les données de formulaire

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
