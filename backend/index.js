require('dotenv').config();
const express  = require('express');
const cors     = require('cors');
const mongoose = require('mongoose');
const loadRoutes = require('./loadRoutes');      // ta fonction qui declare /api/auth, /api/posts, etc.

const app = express();

/* ─── CORS AVANT TOUT ─── */
app.use(cors({
  origin: process.env.FRONTEND_URL,      // doit valoir https://biogy.netlify.app dans Render
  credentials: true,
}));
app.options('*', cors());

app.use(express.json());

/* ─── Health check ─── */
app.get('/api/health', (_, res) => res.json({ status: 'ok' }));

/* ─── Mongo ─── */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => { console.error(err); process.exit(1); });

/* ─── Routes métier ─── */
loadRoutes(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server ready on ${PORT}`));
