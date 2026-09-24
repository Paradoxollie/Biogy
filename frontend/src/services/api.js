import axios from 'axios';
import { BROWSER_API_URL } from '../config';
import { readStorage } from '../utils/storage';

// Création d'une instance axios avec la configuration de base
const api = axios.create({
  baseURL: BROWSER_API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  }
});

// Intercepteur pour ajouter le token d'authentification aux requêtes
api.interceptors.request.use(
  (config) => {
    const userInfo = readStorage('userInfo');
    if (userInfo) {
      const { token } = userInfo;
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercepteur pour gérer les erreurs de réponse
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Gérer les erreurs 401 (non autorisé)
    if (error.response && error.response.status === 401) {
      // Rediriger vers la page de connexion ou rafraîchir le token
      console.log('Session expirée, veuillez vous reconnecter');
      // Vous pouvez ajouter ici une logique pour rediriger l'utilisateur
    }
    return Promise.reject(error);
  }
);

export default api;
