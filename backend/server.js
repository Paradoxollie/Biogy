const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Charger .env AVANT tout le reste
const connectDB = require('./config/db'); // Connexion à MongoDB

// Connexion à la base de données
connectDB();

const app = express();

// Middlewares
// Configuration CORS permissive
const corsOptions = {
  origin: '*', // Temporairement permettre toutes les origines pour le débogage
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: true,
  maxAge: 86400 // 24 heures en secondes
};

// Appliquer CORS à toutes les routes
app.use(cors(corsOptions));

// Middleware pour les requêtes OPTIONS préliminaires
app.options('*', cors(corsOptions));

app.use(express.json()); // Pour parser le JSON dans les requêtes
app.use(express.urlencoded({ extended: true })); // Pour parser les données de formulaire

// Middleware pour ajouter explicitement les en-têtes CORS à chaque réponse
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // Temporairement permettre toutes les origines
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With, Accept, Origin');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Max-Age', '86400');
  
  // Log pour le débogage
  console.log(`CORS Headers set for request to ${req.path} from origin: ${req.headers.origin || 'unknown'}`);

  next();
});

// Routes de base
app.get('/', (req, res) => {
  // Ajouter les en-têtes CORS explicitement à cette réponse aussi
  res.header('Access-Control-Allow-Origin', '*');
  res.send('API Biogy Backend is running...');
});

// Routes de santé
app.use('/api/health', require('./routes/healthRoutes'));

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
  
  // Ajouter les en-têtes CORS à la réponse d'erreur
  res.header('Access-Control-Allow-Origin', '*');
  
  res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
