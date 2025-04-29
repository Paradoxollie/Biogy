import axios from 'axios';
import proxyService from './proxyService';

// Déterminer l'URL de base de l'API en fonction de l'environnement
const API_URL =
  process.env.NODE_ENV === 'production'
    ? '/api' // Utiliser le proxy Netlify en production
    : process.env.REACT_APP_API_URL
      ? `${process.env.REACT_APP_API_URL}/api` // Variable d'env prioritaire (pourrait être utilisée pour d'autres environnements)
      : 'http://localhost:5000/api'; // Fallback pour le dev local

// Flag pour activer le fallback vers le proxy si les requêtes API échouent
let useProxyFallback = false;

// Créer une instance axios avec une configuration par défaut
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

// Fonction helper pour corriger les chemins d'API (peut être simplifiée si /api est toujours la base)
export const fixApiPath = (path) => {
  // Ne pas préfixer les URL complètes (ex: Cloudinary)
  if (path.startsWith('http')) {
    return path;
  }

  // Si la baseURL est relative (/api), le chemin doit commencer par /
  // et ne pas inclure /api/ car axios le concatène déjà.
  let normalizedPath = path;

  // Supprimer les préfixes potentiels comme /api/ ou /forum/
  const prefixesToRemove = ['/api/', '/forum/'];
  for (const prefix of prefixesToRemove) {
    if (normalizedPath.startsWith(prefix)) {
      normalizedPath = normalizedPath.substring(prefix.length);
    }
  }

  // S'assurer qu'il commence par un slash
  if (!normalizedPath.startsWith('/')) {
    normalizedPath = `/${normalizedPath}`;
  }

  // Si la baseURL est déjà /api, on retourne juste le chemin normalisé (ex: /posts, /auth/login)
  // Si la baseURL est absolue (dev), on retourne aussi le chemin normalisé
  console.log(`Appel API vers (${API_URL}): ${normalizedPath}`);
  return normalizedPath; // Axios concatène baseURL + url
};

// Wrapper pour les méthodes d'API avec fallback
const withFallback = async (method, path, data = null) => {
  // Get auth token for headers
  let headers = {};
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo) {
    try {
      const { token } = JSON.parse(userInfo);
      if (token) {
        headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Erreur lors du parsing des données utilisateur:', error);
    }
  }

  if (useProxyFallback && process.env.NODE_ENV === 'production') {
    // Utiliser le proxy service directement
    console.log(`Utilisation du service proxy pour ${method} ${path}`);
    return proxyService[method](path, data, headers);
  }

  try {
    // Essayer d'abord avec l'API normale
    const fixedPath = fixApiPath(path);
    const config = {
      method,
      url: fixedPath,
      data,
      headers
    };

    const response = await api.request(config);
    return response;
  } catch (error) {
    // Si l'erreur est 404 en production et que nous n'utilisons pas déjà le proxy
    if (process.env.NODE_ENV === 'production' && (error.response?.status === 404 || error.message.includes('Network Error')) && !useProxyFallback) {
      console.log(`Activation du fallback proxy pour les futures requêtes`);
      useProxyFallback = true;

      // Réessayer avec le proxy
      return proxyService[method](path, data, headers);
    }

    // Log the error details for debugging
    console.error('API Error details:', {
      message: error.message,
      response: error.response,
      request: error.request ? 'Request object exists' : 'No request object'
    });

    // Sinon, propager l'erreur
    throw error;
  }
};

// Intercepteur pour ajouter le token d'authentification à chaque requête
api.interceptors.request.use(
  config => {
    // Appliquer fixApiPath si l'URL n'est pas absolue
    if (config.baseURL === API_URL && !config.url.startsWith('http')) {
       // Ne pas réappliquer si fixApiPath a déjà été appelé (ex: lors de la création de la requête)
       // Cette logique peut être fragile, assurons-nous que l'URL finale est correcte.
       // Si config.url commence déjà par '/', fixApiPath le normalisera.
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

    // Si le token est expiré ou invalide (souvent 401 ou 403 selon l'API)
    // et que l'erreur ne vient pas de la route de login elle-même
    if (error.response && (error.response.status === 401 || error.response.status === 403) && !error.config.url.includes('/auth/login')) {
      console.log('Auth error detected, logging out.');
      localStorage.removeItem('userInfo');
      // Rediriger vers la page de login, en s'assurant que cela ne boucle pas
      if (window.location.hash !== '#/login') {
         window.location.href = '/#/login'; // Utiliser /#/login pour HashRouter
      }
    }

    return Promise.reject(error);
  }
);

// Exporter les méthodes API améliorées avec fallback
export default {
  // Méthodes standard avec fallback
  get: (url, config = {}) => withFallback('get', url, null),
  post: (url, data, config = {}) => withFallback('post', url, data),
  put: (url, data, config = {}) => withFallback('put', url, data),
  delete: (url, config = {}) => withFallback('delete', url, null),

  // Instance axios d'origine pour les cas particuliers
  instance: api,

  // Flag pour forcer l'utilisation du proxy
  setUseProxyFallback: (value) => {
    useProxyFallback = value;
    console.log(`Mode proxy fallback ${value ? 'activé' : 'désactivé'}`);
  }
};