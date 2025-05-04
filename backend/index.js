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

// ────────────────── Health check
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

// ────────────────── Routes métiers
app.use('/api/profile', require('./routes/profile'));   // upload avatar, etc.
// app.use('/api/auth',    require('./routes/auth'));   // tes autres routes…

// ────────────────── Lancement serveur
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 API listening on ${PORT}`));
