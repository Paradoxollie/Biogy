require('dotenv').config();

const cors = require('cors');
const express = require('express');
const helmet = require('helmet');

const { isDatabaseReady } = require('./config/db');
const loadRoutes = require('./loadRoutes');

const DEFAULT_ALLOWED_ORIGINS = [
  'http://127.0.0.1:3000',
  'http://localhost:3000',
  'https://biogy.netlify.app',
];

const parseAllowedOrigins = () => {
  const configuredOrigins = [
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URLS,
  ]
    .filter(Boolean)
    .flatMap((value) => value.split(','))
    .map((value) => value.trim())
    .filter(Boolean);

  return [...new Set([...configuredOrigins, ...DEFAULT_ALLOWED_ORIGINS])];
};

const allowedOrigins = parseAllowedOrigins();

const corsOptions = {
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS origin not allowed: ${origin}`));
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
};

const app = express();

app.disable('x-powered-by');

app.use(helmet({
  crossOriginResourcePolicy: false,
}));
app.use(cors(corsOptions));
app.options('*', cors(corsOptions));

app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.get('/api/health', (_, res) => {
  res.json({
    status: 'ok',
    service: 'biogy-backend',
    database: isDatabaseReady() ? 'connected' : 'connecting',
    timestamp: new Date().toISOString(),
  });
});

app.get('/healthz', (_, res) => {
  res.send('ok');
});

loadRoutes(app);

app.use((req, res) => {
  res.status(404).json({ message: 'Route non trouvee' });
});

app.use((err, req, res, next) => {
  if (err.message && err.message.startsWith('CORS origin not allowed')) {
    return res.status(403).json({ message: 'Origine non autorisee' });
  }

  if (err.name === 'MulterError') {
    return res.status(400).json({ message: err.message });
  }

  console.error(err);

  const statusCode = res.statusCode && res.statusCode !== 200 ? res.statusCode : 500;

  return res.status(statusCode).json({
    message: err.message || 'Erreur serveur',
    ...(process.env.NODE_ENV === 'production' ? {} : { stack: err.stack }),
  });
});

module.exports = app;
