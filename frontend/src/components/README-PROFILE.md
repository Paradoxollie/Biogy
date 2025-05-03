# Guide de la page profil

Ce document explique le fonctionnement de la page profil.

## Page profil en ligne

La page profil est maintenant entièrement synchronisée avec le serveur:

- **Avantages**: Données synchronisées avec le serveur, accessibles depuis n'importe quel appareil
- **Fonctionnalités**: Affichage et modification des informations de profil, sélection d'avatar

### Routes disponibles

- `/profile` - Affiche le profil de l'utilisateur connecté
- `/profile/:userId` - Affiche le profil d'un autre utilisateur
- `/profile/edit` - Permet de modifier son profil
- `/profile-diagnostic` - Outil de diagnostic pour tester la connectivité

## Mode fallback

La page profil dispose d'un mode fallback qui utilise le stockage local en cas de problème de connectivité:

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
