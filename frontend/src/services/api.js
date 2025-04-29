import axios from 'axios';

// Déterminer l'URL de base de l'API en fonction de l'environnement
const API_URL = 
  process.env.REACT_APP_API_URL 
    ? `${process.env.REACT_APP_API_URL}/api`
    : process.env.NODE_ENV === 'production' 
      ? 'https://biogy-api.onrender.com/api' 
      : 'http://localhost:5000/api';

// Créer une instance axios avec une configuration par défaut
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Fonction helper pour corriger les chemins d'API
export const fixApiPath = (path) => {
  // Ne pas préfixer les URL complètes
  if (path.startsWith('http')) {
    return path;
  }
  
  // Normaliser le chemin en supprimant les préfixes redondants
  let normalizedPath = path;
  
  // Supprimer les préfixes redondants en une seule opération
  const prefixesToRemove = ['/forum/', '/api/'];
  for (const prefix of prefixesToRemove) {
    if (normalizedPath.startsWith(prefix)) {
      normalizedPath = normalizedPath.substring(prefix.length);
      break;
    }
  }
  
  // Ajouter le '/' au début si nécessaire
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = `/${normalizedPath}`;
  }
  
  console.log(`Appel API vers: ${normalizedPath}`);
  return normalizedPath;
};

// Intercepteur pour ajouter le token d'authentification à chaque requête
api.interceptors.request.use(
  config => {
    // Corriger le chemin uniquement pour les chemins relatifs
    if (!config.url.startsWith('http')) {
      config.url = fixApiPath(config.url);
    }
    
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