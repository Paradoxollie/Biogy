/**
 * Ce fichier contient des fonctions pour corriger les routes problématiques
 * qui causent des erreurs avec Express 5.1.0 et path-to-regexp
 */

// Fonction pour vérifier si une route est valide
const isValidRoute = (route) => {
  // Une route ne doit pas être une URL complète
  return !route.startsWith('http://') && !route.startsWith('https://');
};

// Fonction pour corriger une route invalide
const fixRoute = (route) => {
  if (!isValidRoute(route)) {
    console.warn(`Route invalide détectée: ${route}`);
    // Extraire le chemin de l'URL
    try {
      const url = new URL(route);
      return url.pathname;
    } catch (error) {
      console.error(`Impossible de corriger la route: ${route}`, error);
      return '/invalid-route';
    }
  }
  return route;
};

// Fonction pour corriger les routes dans un routeur Express
const fixRouterRoutes = (router) => {
  if (!router || !router.stack) return router;
  
  router.stack.forEach(layer => {
    if (layer.route) {
      // Corriger le chemin de la route
      if (!isValidRoute(layer.route.path)) {
        const originalPath = layer.route.path;
        layer.route.path = fixRoute(layer.route.path);
        console.log(`Route corrigée: ${originalPath} -> ${layer.route.path}`);
      }
    }
    
    // Vérifier les middlewares
    if (layer.handle && layer.handle.stack) {
      fixRouterRoutes(layer.handle);
    }
  });
  
  return router;
};

module.exports = {
  isValidRoute,
  fixRoute,
  fixRouterRoutes
};
