# Biogy

## Description

Biogy est un site web destiné aux élèves en biotechnologie, au lycée et dans le supérieur. Il propose des fonctionnalités telles que des QCM (avec auto-correction), un espace pour partager les productions biotechnologiques des élèves (photos et vidéos), et des fiches méthodes/fiches techniques.

## Technologies Utilisées

### Frontend

*   **HTML5:** Structure des pages web.
*   **CSS3:** Mise en forme et style.
*   **Tailwind CSS:** Framework CSS pour un développement rapide.
*   **JavaScript:** Interactivité.
*   **React:** Framework JavaScript pour la création d'interfaces utilisateur dynamiques.

### Backend

*   **Node.js:** Environnement d'exécution JavaScript côté serveur.
*   **Express.js:** Framework pour la création d'API.

### Base de Données

*   **MongoDB:** Base de données NoSQL.

### Autres

*   **Git:** Système de gestion de version.
*   **GitHub:** Hébergement du code source et collaboration.
*   **Netlify/Vercel:** Hébergement du frontend.
*   **Heroku/Railway:** Hébergement du backend.
*   **MongoDB Atlas**: Hébergement de la base de données.

## Déploiement

### Netlify Configuration

Pour déployer sur Netlify:

1. Base directory: `Biogy`
2. Build command: `cd frontend && npm run build`
3. Publish directory: `frontend/build`
4. Functions directory: `netlify/functions`
5. Branch: `main`

### Résolution des problèmes de déploiement et CORS

#### Problèmes identifiés

1. **Problèmes CORS** : Les requêtes vers l'API étaient bloquées par la politique CORS.
2. **URL d'API incohérente** : Différentes parties du code utilisaient des URL différentes.
3. **Erreur 500 lors de la mise à jour du profil** : Problème dans le contrôleur de profil.
4. **Route d'avatar prédéfini manquante** : La route pour définir un avatar prédéfini n'était pas correctement implémentée.

#### Solutions mises en œuvre

1. **Configuration CORS**
   - Mise à jour de la configuration CORS dans le backend pour autoriser toutes les origines.
   - Ajout d'un middleware pour les requêtes OPTIONS.
   - Configuration des en-têtes CORS dans les réponses.

2. **URL d'API cohérente**
   - Utilisation de `https://biogy-api.onrender.com` comme URL d'API dans tout le code.
   - Création d'un fichier `.env.local` pour définir l'URL de l'API.
   - Mise à jour des fichiers de configuration Netlify pour les redirections.

3. **Route de santé (health check)**
   - Ajout d'une route `/api/health` pour vérifier l'état de l'API.
   - Mise à jour du fichier `render.yaml` pour inclure un healthCheckPath.

4. **Scripts utiles**
   - Ajout de scripts pour tester la connectivité avec l'API.
   - Ajout de scripts pour déployer l'application.

#### Comment tester

1. **Tester la connectivité avec l'API** :
   ```
   cd frontend
   npm run test-api
   ```

2. **Tester la route de santé** :
   ```
   cd backend
   npm run test-health
   ```

3. **Déployer l'application** :
   ```
   node scripts/deploy.js
   ```