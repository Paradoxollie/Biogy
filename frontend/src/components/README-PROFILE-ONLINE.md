# Guide des pages profil

Ce document explique le fonctionnement des deux versions de la page profil.

## Deux versions disponibles

Votre site dispose maintenant de deux versions de la page profil:

1. **Version locale** (`/profile`) - Stockage dans le navigateur, fonctionne toujours
2. **Version en ligne** (`/profile-online`) - Synchronisée avec le serveur, nécessite une connexion API

## Version locale (mode hors ligne)

La version locale stocke toutes les données dans le localStorage du navigateur:

- **Avantages**: Fonctionne toujours, même en cas de problèmes CORS ou d'API
- **Inconvénients**: Les données ne sont pas synchronisées entre appareils

### Routes de la version locale

- `/profile` - Affiche le profil de l'utilisateur connecté
- `/profile/:userId` - Affiche le profil d'un autre utilisateur (simulé)
- `/profile/edit` - Permet de modifier son profil
- `/profile/debug` - Outil de diagnostic et de gestion du profil local

## Version en ligne (mode connecté)

La version en ligne communique avec l'API backend via des fonctions Netlify:

- **Avantages**: Données synchronisées avec le serveur, accessibles depuis n'importe quel appareil
- **Inconvénients**: Nécessite que l'API soit accessible et correctement configurée pour CORS

### Routes de la version en ligne

- `/profile-online` - Affiche le profil de l'utilisateur connecté
- `/profile-online/:userId` - Affiche le profil d'un autre utilisateur
- `/profile-online/edit` - Permet de modifier son profil

## Mode hybride

La version en ligne dispose d'un mode hybride qui utilise le stockage local comme fallback:

1. Elle tente d'abord de récupérer les données depuis l'API
2. En cas d'échec, elle utilise les données stockées localement
3. Si aucune donnée locale n'existe, elle crée un profil simulé

## Outil de diagnostic

Un outil de diagnostic est disponible pour tester la connectivité avec l'API:

- `/profile-diagnostic` - Permet de tester la connectivité et d'identifier les problèmes CORS

Cet outil effectue plusieurs tests:
1. Vérification de l'authentification
2. Accès direct à l'API
3. Diagnostic CORS détaillé
4. Test de la fonction Netlify pour le profil

## Fonctions Netlify

Deux fonctions Netlify sont utilisées pour la communication avec l'API:

1. `profile-online.js` - Proxy pour les requêtes de profil
2. `cors-diagnostic.js` - Outil de diagnostic CORS

## Recommandations

- Utilisez la version locale (`/profile`) si vous rencontrez des problèmes de connectivité
- Utilisez la version en ligne (`/profile-online`) lorsque l'API est accessible
- Utilisez l'outil de diagnostic (`/profile-diagnostic`) pour identifier les problèmes

## Résolution des problèmes CORS

Si vous rencontrez des problèmes CORS, assurez-vous que votre backend:

1. Répond correctement aux requêtes OPTIONS (preflight)
2. Inclut les headers CORS appropriés:
   - `Access-Control-Allow-Origin: https://biogy.netlify.app`
   - `Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS`
   - `Access-Control-Allow-Headers: Content-Type, Authorization`

## Améliorations futures

Lorsque les problèmes de CORS seront résolus:

1. La version en ligne pourra devenir la version par défaut
2. La synchronisation entre le stockage local et le serveur sera améliorée
3. Des fonctionnalités supplémentaires pourront être ajoutées
