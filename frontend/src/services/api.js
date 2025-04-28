import axios from 'axios';

// Déterminer l'URL de base de l'API en fonction de l'environnement
const API_URL = 
  process.env.NODE_ENV === 'production' 
    ? 'https://biogy-api.onrender.com/api' 
    : '/api';

// Créer une instance axios avec une configuration par défaut
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false
});

// Fonction helper pour corriger les chemins d'API
export const fixApiPath = (path) => {
  // Si le chemin commence déjà par '/api', ne pas ajouter un autre '/api'
  if (path.startsWith('/api/')) {
    return path;
  }
  
  // Ne pas préfixer les URL complètes
  if (path.startsWith('http')) {
    return path;
  }
  
  // Enlever le préfixe "/forum" s'il existe
  let normalizedPath = path;
  if (path.startsWith('/forum/')) {
    normalizedPath = path.replace('/forum/', '/');
  }
  
  // Si le chemin ne commence pas par '/', ajouter '/'
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = `/${normalizedPath}`;
  }
  
  return normalizedPath;
};

// Intercepteur pour ajouter le token d'authentification à chaque requête
api.interceptors.request.use(
  config => {
    // Corriger le chemin uniquement pour les chemins relatifs
    if (!config.url.startsWith('http')) {
      // Ne pas ajouter /api ici, car baseURL le contient déjà
      config.url = fixApiPath(config.url);
      console.log('URL corrigée :', config.url);
    }
    
    console.log('Appel API complet vers:', config.baseURL + config.url);
    
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      try {
        const { token } = JSON.parse(userInfo);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      } catch (error) {
        console.error('Erreur lors du parsing des données utilisateur:', error);
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

// Intercepteur de réponse pour gérer les erreurs
api.interceptors.response.use(
  response => response,
  error => {
    console.error('API Error:', error);
    
    // Si le token est expiré, déconnecter l'utilisateur
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('userInfo');
      window.location.href = '/login';
    }
    
    return Promise.reject(error);
  }
);

export default api; 