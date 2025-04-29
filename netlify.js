/**
 * Script pour configurer les fonctions Netlify
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Vérifier si le répertoire des fonctions existe
const functionsDir = path.join(__dirname, 'netlify', 'functions');
if (!fs.existsSync(functionsDir)) {
  console.log('Création du répertoire des fonctions...');
  fs.mkdirSync(functionsDir, { recursive: true });
}

// Copier le fichier package.json dans le répertoire des fonctions
const packageJsonPath = path.join(__dirname, 'netlify-functions-package.json');
const destPackageJsonPath = path.join(functionsDir, 'package.json');
if (fs.existsSync(packageJsonPath)) {
  console.log('Copie du fichier package.json dans le répertoire des fonctions...');
  fs.copyFileSync(packageJsonPath, destPackageJsonPath);
}

// Installer les dépendances des fonctions
console.log('Installation des dépendances des fonctions...');
try {
  execSync('cd netlify/functions && npm install', { stdio: 'inherit' });
  console.log('Dépendances des fonctions installées avec succès');
} catch (error) {
  console.error('Erreur lors de l\'installation des dépendances des fonctions:', error);
}

console.log('Configuration des fonctions Netlify terminée');
