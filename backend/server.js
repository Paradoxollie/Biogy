const express = require('express');
require('dotenv').config(); // Charger .env AVANT tout le reste
const cors = require('cors');
const connectDB = require('./config/db');

// Connexion à la base de données
connectDB();

const app = express();

// Middlewares
app.use(cors({ // Activer CORS pour autoriser les requêtes depuis le frontend
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  // Ajoutez d'autres options CORS si nécessaire (credentials, methods, etc.)
}));
app.use(express.json()); // Pour parser le JSON dans les requêtes
app.use(express.urlencoded({ extended: true })); // Pour parser les données de formulaire

// Routes de base (à remplacer/compléter)
app.get('/', (req, res) => {
  res.send('API Biogy Backend is running...');
});

// --- Routes pour l'authentification (à créer dans ./routes/authRoutes.js) ---
app.use('/api/auth', require('./routes/authRoutes'));

// --- Routes pour les posts (à créer dans ./routes/postRoutes.js) ---
app.use('/api/posts', require('./routes/postRoutes'));

// --- Routes pour l'administration (à créer dans ./routes/adminRoutes.js) ---
// app.use('/api/admin', require('./routes/adminRoutes'));


// Gestionnaire d'erreurs global (optionnel mais recommandé)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   // Renvoyer une réponse d'erreur JSON standardisée
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode).json({ 
//       message: err.message,
//       // Inclure la stack trace seulement en développement
//       stack: process.env.NODE_ENV === 'production' ? null : err.stack 
//   });
// });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));