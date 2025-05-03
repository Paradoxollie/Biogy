/**
 * Script de déploiement pour Biogy
 * Exécuter avec: node deploy.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Configuration
const config = {
  frontend: {
    dir: path.join(__dirname, '..', 'frontend'),
    buildCommand: 'npm run build',
    deployCommand: 'netlify deploy --prod'
  },
  backend: {
    dir: path.join(__dirname, '..', 'backend'),
    deployCommand: 'git push render main'
  }
};

// Fonction pour exécuter une commande
function runCommand(command, cwd) {
  console.log(`\n🔄 Exécution de: ${command}`);
  try {
    const output = execSync(command, {
      cwd,
      stdio: 'inherit'
    });
    return { success: true, output };
  } catch (error) {
    console.error(`❌ Erreur lors de l'exécution de la commande: ${error.message}`);
    return { success: false, error };
  }
}

// Fonction pour déployer le frontend
function deployFrontend() {
  console.log('\n🚀 Déploiement du frontend sur Netlify');
  console.log('====================================');
  
  // Vérifier que le répertoire frontend existe
  if (!fs.existsSync(config.frontend.dir)) {
    console.error(`❌ Le répertoire frontend n'existe pas: ${config.frontend.dir}`);
    return false;
  }
  
  // Construire le frontend
  console.log('\n📦 Construction du frontend...');
  const buildResult = runCommand(config.frontend.buildCommand, config.frontend.dir);
  
  if (!buildResult.success) {
    console.error('❌ Échec de la construction du frontend');
    return false;
  }
  
  // Déployer sur Netlify
  console.log('\n🚀 Déploiement sur Netlify...');
  const deployResult = runCommand(config.frontend.deployCommand, config.frontend.dir);
  
  if (!deployResult.success) {
    console.error('❌ Échec du déploiement sur Netlify');
    return false;
  }
  
  console.log('✅ Frontend déployé avec succès sur Netlify');
  return true;
}

// Fonction pour déployer le backend
function deployBackend() {
  console.log('\n🚀 Déploiement du backend sur Render');
  console.log('===================================');
  
  // Vérifier que le répertoire backend existe
  if (!fs.existsSync(config.backend.dir)) {
    console.error(`❌ Le répertoire backend n'existe pas: ${config.backend.dir}`);
    return false;
  }
  
  // Déployer sur Render (via Git)
  console.log('\n🚀 Déploiement sur Render...');
  const deployResult = runCommand(config.backend.deployCommand, config.backend.dir);
  
  if (!deployResult.success) {
    console.error('❌ Échec du déploiement sur Render');
    return false;
  }
  
  console.log('✅ Backend déployé avec succès sur Render');
  return true;
}

// Fonction principale
function main() {
  console.log('🚀 Déploiement de Biogy');
  console.log('=====================');
  
  // Déployer le frontend
  const frontendSuccess = deployFrontend();
  
  // Déployer le backend
  const backendSuccess = deployBackend();
  
  // Résumé
  console.log('\n📊 Résumé du déploiement:');
  console.log('----------------------');
  console.log(`Frontend: ${frontendSuccess ? '✅ Succès' : '❌ Échec'}`);
  console.log(`Backend: ${backendSuccess ? '✅ Succès' : '❌ Échec'}`);
  
  if (frontendSuccess && backendSuccess) {
    console.log('\n🎉 Déploiement complet réussi!');
  } else {
    console.log('\n⚠️ Le déploiement a rencontré des problèmes.');
  }
}

// Exécuter le script
main();
