/**
 * Script pour nettoyer le cache de node_modules
 * Utile pour résoudre les problèmes de dépendances
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Fonction pour supprimer un répertoire récursivement
const removeDir = (dir) => {
  if (fs.existsSync(dir)) {
    console.log(`Suppression de ${dir}...`);
    try {
      fs.rmSync(dir, { recursive: true, force: true });
      console.log(`${dir} supprimé avec succès`);
    } catch (error) {
      console.error(`Erreur lors de la suppression de ${dir}:`, error);
    }
  } else {
    console.log(`${dir} n'existe pas, rien à supprimer`);
  }
};

// Nettoyer le cache npm
console.log('Nettoyage du cache npm...');
try {
  execSync('npm cache clean --force', { stdio: 'inherit' });
  console.log('Cache npm nettoyé avec succès');
} catch (error) {
  console.error('Erreur lors du nettoyage du cache npm:', error);
}

// Supprimer node_modules
removeDir(path.join(__dirname, 'node_modules'));

// Supprimer package-lock.json
const packageLockPath = path.join(__dirname, 'package-lock.json');
if (fs.existsSync(packageLockPath)) {
  console.log('Suppression de package-lock.json...');
  try {
    fs.unlinkSync(packageLockPath);
    console.log('package-lock.json supprimé avec succès');
  } catch (error) {
    console.error('Erreur lors de la suppression de package-lock.json:', error);
  }
}

console.log('Nettoyage terminé. Vous pouvez maintenant exécuter "npm install".');
