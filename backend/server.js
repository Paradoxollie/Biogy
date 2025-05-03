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
  origin: ['https://biogy.netlify.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
  credentials: true,
  maxAge: 86400 // 24 heures en secondes
};

app.use(cors(corsOptions));

// Middleware pour les requêtes OPTIONS
app.options('*', cors(corsOptions));

app.use(express.json()); // Pour parser le JSON dans les requêtes
app.use(express.urlencoded({ extended: true })); // Pour parser les données de formulaire

// Middleware pour ajouter les en-têtes CORS à toutes les réponses
app.use((req, res, next) => {
  // Déterminer l'origine
  const origin = req.headers.origin;
  if (corsOptions.origin.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  } else {
    res.header('Access-Control-Allow-Origin', corsOptions.origin[0]);
  }

  res.header('Access-Control-Allow-Methods', corsOptions.methods.join(', '));
  res.header('Access-Control-Allow-Headers', corsOptions.allowedHeaders.join(', '));
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Max-Age', corsOptions.maxAge.toString());

  // Log pour le débogage
  console.log(`CORS Headers set for request to ${req.path} from origin: ${origin || 'unknown'}`);

  next();
});

// Routes de base
app.get('/', (req, res) => {
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
  res.status(statusCode).json({
      message: err.message,
      stack: process.env.NODE_ENV === 'production' ? null : err.stack
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
