# Guide de la page profil

Ce document explique le fonctionnement de la nouvelle page profil simplifiée.

## Fonctionnalités

La nouvelle page profil offre les fonctionnalités suivantes:

1. **Affichage du profil**: Visualisation des informations de base de l'utilisateur
2. **Édition du profil**: Modification des informations personnelles
3. **Sélection d'avatar**: Choix parmi une collection d'avatars prédéfinis
4. **Stockage local**: Toutes les données sont stockées dans le navigateur (localStorage)

## Structure des fichiers

- `ProfilePage.js`: Composant principal pour l'affichage du profil
- `ProfileEditPage.js`: Formulaire d'édition du profil
- `ProfileDebug.js`: Outil de diagnostic et de gestion du profil

## Routes

- `/profile`: Affiche le profil de l'utilisateur connecté
- `/profile/:userId`: Affiche le profil d'un autre utilisateur (simulé)
- `/profile/edit`: Permet de modifier son profil
- `/profile/debug`: Outil de diagnostic et de gestion du profil

## Fonctionnement technique

La page profil utilise une approche 100% locale pour contourner les problèmes de CORS:

1. Toutes les données du profil sont stockées dans le localStorage du navigateur
2. Aucune requête n'est envoyée à l'API backend
3. Les modifications sont sauvegardées localement
4. Un profil par défaut est créé automatiquement lors de la première visite

### Clé de stockage

Les données du profil sont stockées sous la clé `biogy_profile_data` dans le localStorage.

## Utilisation

1. **Consulter son profil**: Accédez à `/profile` pour voir votre profil
2. **Modifier son profil**: Cliquez sur "Modifier le profil" ou accédez à `/profile/edit`
3. **Réinitialiser son profil**: Utilisez l'outil de diagnostic à `/profile/debug` et cliquez sur "Réinitialiser le profil"

## Dépannage

Si la page profil ne fonctionne pas correctement:

1. Vérifiez que vous êtes connecté (la page de profil nécessite une authentification)
2. Utilisez l'outil de diagnostic à `/profile/debug` pour voir l'état actuel du profil
3. Essayez de réinitialiser le profil via l'outil de diagnostic
4. Vérifiez que le localStorage est activé dans votre navigateur

## Avantages de cette approche

1. **Fonctionnement garanti**: Fonctionne même en cas de problèmes de CORS ou d'API
2. **Performance**: Aucun temps de chargement lié aux requêtes API
3. **Simplicité**: Aucune dépendance à des services externes
4. **Expérience utilisateur**: Interface réactive et fluide

## Limitations

1. Les données ne sont pas synchronisées entre différents appareils
2. Les données sont perdues si l'utilisateur efface ses données de navigation
3. Les profils d'autres utilisateurs sont simulés

## Améliorations futures

Lorsque les problèmes de CORS seront résolus, cette version pourra être améliorée pour:

1. Synchroniser les données avec le backend
2. Afficher les vrais profils des autres utilisateurs
3. Ajouter la possibilité de télécharger un avatar personnalisé
4. Intégrer des badges et des récompenses
5. Afficher les contributions au forum
