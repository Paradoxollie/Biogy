/**
 * Service pour gérer les requêtes API avec gestion des erreurs et CORS
 * Version améliorée avec plusieurs méthodes de connexion
 */

import { API_URL, CORS_PROXIES } from '../config';

/**
 * Fonction pour effectuer une requête API avec plusieurs méthodes
 * Essaie différentes approches pour contourner les problèmes CORS
 */
export const apiRequest = async (endpoint, options = {}) => {
  // Construire l'URL complète de l'API
  const apiUrl = endpoint.startsWith('http')
    ? endpoint
    : `${API_URL}/api${endpoint.startsWith('/') ? endpoint : '/' + endpoint}`;

  // Options par défaut
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Fusionner les options
  const requestOptions = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers
    }
  };

  // Tableau des méthodes à essayer dans l'ordre
  const methods = [
    { name: 'Direct API', url: apiUrl },
    { name: 'API Proxy Function', url: `/.netlify/functions/api-proxy${endpoint.startsWith('/') ? endpoint : '/' + endpoint}` },
    { name: 'Netlify Proxy', url: `/api${endpoint.startsWith('/') ? endpoint : '/' + endpoint}` },
    { name: 'Netlify Function', url: `/.netlify/functions/api${endpoint.startsWith('/') ? endpoint : '/' + endpoint}` },
    { name: 'CORS Proxy', url: `/.netlify/functions/cors-proxy${endpoint.startsWith('/') ? endpoint : '/' + endpoint}` },
    ...CORS_PROXIES.map((proxy, index) => ({
      name: `External Proxy ${index + 1}`,
      url: `${proxy}${encodeURIComponent(apiUrl)}`
    }))
  ];

  let lastError = null;

  // Essayer chaque méthode jusqu'à ce qu'une réussisse
  for (const method of methods) {
    try {
      console.log(`🔄 Tentative via ${method.name}: ${method.url}`);

      const response = await fetch(method.url, requestOptions);

      // Vérifier si la réponse est OK
      if (!response.ok) {
        let errorMessage;

        try {
          // Essayer de parser le message d'erreur JSON
          const errorData = await response.json();
          errorMessage = errorData.message || `Erreur ${response.status}: ${response.statusText}`;
        } catch (e) {
          // Si ce n'est pas du JSON, utiliser le statut HTTP
          errorMessage = `Erreur ${response.status}: ${response.statusText}`;
        }

        throw new Error(errorMessage);
      }

      // Parser la réponse JSON
      const data = await response.json();
      console.log(`✅ Réponse API reçue via ${method.name}:`, data);
      return data;
    } catch (error) {
      console.warn(`❌ Échec via ${method.name}:`, error);
      lastError = error;
      // Continuer avec la méthode suivante
    }
  }

  // Si toutes les méthodes ont échoué, lancer la dernière erreur
  console.error(`❌ Toutes les méthodes ont échoué:`, lastError);

  // Vérifier si l'erreur est due à un backend indisponible (404)
  if (lastError && lastError.message && lastError.message.includes('404')) {
    throw new Error('Le serveur backend est actuellement indisponible. Veuillez réessayer plus tard ou contacter l\'administrateur.');
  } else if (lastError && lastError.message && lastError.message.includes('Failed to fetch')) {
    throw new Error('Impossible de se connecter au serveur backend. Vérifiez votre connexion internet ou contactez l\'administrateur.');
  } else {
    throw lastError || new Error('Impossible de se connecter à l\'API');
  }
};

// Méthodes HTTP courantes
export const get = (endpoint, options = {}) => {
  return apiRequest(endpoint, { ...options, method: 'GET' });
};

export const post = (endpoint, data, options = {}) => {
  return apiRequest(endpoint, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data)
  });
};

export const put = (endpoint, data, options = {}) => {
  return apiRequest(endpoint, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data)
  });
};

export const del = (endpoint, options = {}) => {
  return apiRequest(endpoint, { ...options, method: 'DELETE' });
};

export default {
  get,
  post,
  put,
  delete: del
};
