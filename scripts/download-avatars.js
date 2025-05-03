const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Liste des URLs d'avatars scientifiques libres de droits
const AVATAR_URLS = [
  // Avatars scientifiques de style dessin/cartoon
  'https://cdn-icons-png.flaticon.com/512/4024/4024523.png', // Scientifique avec lunettes
  'https://cdn-icons-png.flaticon.com/512/4024/4024573.png', // Scientifique femme
  'https://cdn-icons-png.flaticon.com/512/1995/1995539.png', // Microscope
  'https://cdn-icons-png.flaticon.com/512/2784/2784403.png', // ADN
  'https://cdn-icons-png.flaticon.com/512/1021/1021264.png', // Atome
  'https://cdn-icons-png.flaticon.com/512/3081/3081478.png', // Éprouvette
  'https://cdn-icons-png.flaticon.com/512/2941/2941552.png', // Molécule
  'https://cdn-icons-png.flaticon.com/512/2558/2558177.png', // Cellule
  'https://cdn-icons-png.flaticon.com/512/3208/3208615.png', // Plante
  'https://cdn-icons-png.flaticon.com/512/1046/1046269.png', // Cerveau
];

// Dossier de destination
const DEST_FOLDER = path.join(__dirname, '..', 'frontend', 'public', 'images', 'avatars');

// Fonction pour télécharger une image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      // Vérifier si la réponse est OK
      if (response.statusCode !== 200) {
        reject(new Error(`Échec du téléchargement: ${response.statusCode}`));
        return;
      }
      
      // Créer un flux d'écriture
      const fileStream = fs.createWriteStream(path.join(DEST_FOLDER, filename));
      
      // Pipe la réponse vers le fichier
      response.pipe(fileStream);
      
      // Gérer les événements
      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`✅ Téléchargé: ${filename}`);
        resolve();
      });
      
      fileStream.on('error', (err) => {
        fs.unlink(path.join(DEST_FOLDER, filename), () => {}); // Supprimer le fichier en cas d'erreur
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Fonction principale
async function main() {
  // Vérifier si le dossier existe, sinon le créer
  if (!fs.existsSync(DEST_FOLDER)) {
    fs.mkdirSync(DEST_FOLDER, { recursive: true });
    console.log(`📁 Dossier créé: ${DEST_FOLDER}`);
  }
  
  // Télécharger chaque avatar
  for (let i = 0; i < AVATAR_URLS.length; i++) {
    const url = AVATAR_URLS[i];
    const filename = `avatar${i + 1}.png`;
    
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`❌ Erreur lors du téléchargement de ${url}:`, error.message);
    }
  }
  
  console.log('✨ Téléchargement des avatars terminé!');
}

// Exécuter le script
main().catch(console.error);
