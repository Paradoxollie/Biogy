require('dotenv').config();

const express = require('express');
const cors    = require('cors');
const mongoose = require('mongoose');

const app = express();

// ────────────────── CORS avant toute route
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));
app.options('*', cors());

// ────────────────── Body‑parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ────────────────── MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err  => {
    console.error('❌ Mongo error', err);
    process.exit(1);
  });

// ────────────────── Health checks
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));
app.get('/healthz', (_, res) => res.send('ok')); // Endpoint simplifié pour les health checks

// ────────────────── Routes métiers
app.use('/api/profile', require('./routes/profile'));   // upload avatar, etc.
app.use('/api/auth', require('./routes/authRoutes'));   // routes d'authentification
app.use('/api/posts', require('./routes/postRoutes')); // routes des posts
app.use('/api/forum', require('./routes/forumRoutes')); // routes du forum
app.use('/api/social', require('./routes/socialRoutes')); // routes sociales

// ────────────────── Lancement serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 API listening on ${PORT}`));
