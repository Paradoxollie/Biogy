/**
 * Configuration globale de l'application
 */

// URL de l'API backend
export const API_URL = process.env.REACT_APP_API_URL || 'https://biogy.onrender.com';

// URL pour les requêtes directes depuis le navigateur
export const BROWSER_API_URL = '/api';

// Configuration des proxies CORS
export const CORS_PROXIES = [
  'https://corsproxy.io/?',
  'https://cors-anywhere.herokuapp.com/',
  'https://api.allorigins.win/raw?url='
];

// Configuration de l'authentification
export const AUTH_CONFIG = {
  tokenStorageKey: 'userInfo',
  tokenExpiryDays: 30
};

// Configuration des timeouts
export const TIMEOUTS = {
  apiRequest: 10000, // 10 secondes
  proxyRequest: 15000 // 15 secondes
};

// Configuration des routes
export const ROUTES = {
  home: '/',
  login: '/login',
  register: '/register',
  forum: '/forum',
  discussion: '/discussion',
  newDiscussion: '/new-discussion',
  projects: '/projets',
  newProject: '/partager-projet',
  profile: '/profile'
};

// Configuration des fonctionnalités
export const FEATURES = {
  useProxies: true, // Activer l'utilisation des proxies CORS
  useLocalStorage: true, // Activer l'utilisation du localStorage
  debug: process.env.NODE_ENV !== 'production' // Activer le mode debug en développement
};

export default {
  API_URL,
  BROWSER_API_URL,
  CORS_PROXIES,
  AUTH_CONFIG,
  TIMEOUTS,
  ROUTES,
  FEATURES
};
