# Biogy — STL Biotechnologies

Site pédagogique pour les cours de Première et Terminale STL, la révision, les séances de laboratoire, les copies et les échanges de classe.

- Site : https://biogy.netlify.app
- API : https://biogy.onrender.com/api
- Frontend : React 18, React Router, Vite, Tailwind CSS.
- Serveur : Express, MongoDB/Mongoose, JWT. Images des projets : Cloudinary.
- Environnement recommandé : Node.js 22 (au minimum 22.12).

## Développement

Depuis la racine du dépôt :

```powershell
npm ci --prefix frontend
npm ci --prefix backend
npm ci --prefix netlify/functions
```

Copier `backend/.env.example` vers `backend/.env`, puis renseigner une base MongoDB de développement et un secret JWT personnel. Ne jamais commiter les secrets. Les variables Cloudinary servent aux médias des projets.

Dans deux terminaux :

```powershell
npm start --prefix backend
npm start --prefix frontend
```

Le site ouvre http://localhost:3000 et l’API écoute sur le port 5000. La veille scientifique locale utilise les fonctions Netlify déjà déployées. La navigation et les cours fonctionnent sans base de données.

Pour essayer les comptes et copies sans toucher aux données réelles, remplacer le démarrage du backend par :

```powershell
node backend/scripts/dev-test-server.js
```

Ce serveur local crée une base MongoDB éphémère et deux comptes fictifs : `test-student` et `test-teacher` (mot de passe commun `Biogy-test-2026!`). Il écoute uniquement sur l’interface locale. Toutes ces données sont supprimées à l’arrêt ; ce script est interdit en production.

## Vérification

```powershell
npm test --prefix frontend
npm test --prefix backend
npm run build --prefix frontend
npm audit --omit=dev --prefix frontend
npm audit --omit=dev --prefix backend
npm audit --omit=dev --prefix netlify/functions
```

Les tests serveur démarrent automatiquement MongoDB en mémoire ; le premier lancement télécharge son binaire. GitHub Actions exécute ces contrôles sur les pull requests et sur `main`.

## Hébergement

Netlify utilise `netlify.toml` à la racine : Node 22, sortie `frontend/build`, fonctions dans `netlify/functions`, proxy `/api/*` vers Render, routes React vers `index.html`. Les variables Vite exposées au navigateur ne doivent contenir aucun secret. Les anciens noms `REACT_APP_BROWSER_API_URL` restent pris en charge, avec `/api` par défaut en production.

Render : dossier racine `backend`, installation `npm ci`, démarrage `npm start`, `NODE_VERSION=22`, `NODE_ENV=production`. Renseigner `MONGO_URI` (ou `MONGODB_URI`), `JWT_SECRET`, `FRONTEND_URL` et les paramètres Cloudinary. `backend/render.yaml` est un modèle de Blueprint à relier explicitement au service existant, pas une preuve de ses réglages actuels.

`GET /api/health` distingue un processus vivant d’une base réellement connectée : vérifier `database: connected`, pas seulement le code HTTP 200. Les cours restent ouverts pendant une panne de la base ; les comptes et copies nécessitent MongoDB. Vérifier les journaux Render, l’état du cluster Atlas et ses accès réseau en cas de panne.

## Usage en classe

- Les favoris et repères de lecture sont locaux, séparés par compte. Les cartes de révision utilisent uniquement le vocabulaire et les réponses déjà présents dans les cours.
- Le TP AT5 conserve son brouillon sur l’appareil. Télécharger une copie avant de changer de poste. Les anciens brouillons restent compatibles.
- « Mes copies » affiche les envois confirmés et le retour de l’enseignante. Un nouvel envoi remplace la copie active pour la même activité et demande une nouvelle correction.
- Les corrections du TP sont chargées par une route réservée au compte administrateur. Aucun mot de passe professeur n’est intégré dans la page publique.
- L’administratrice peut réinitialiser un mot de passe depuis la gestion des utilisateurs. Les anciennes sessions sont révoquées et l’élève choisit un nouveau mot de passe à la reconnexion.
- Les chapitres encore sans contenu sont indiqués comme tels. Leur présence au sommaire ne signifie pas que le cours est rédigé.

Voir [le rapport de refonte et de validation](docs/AUDIT-2026-09-24.md) pour les limites et le suivi de mise en ligne.
