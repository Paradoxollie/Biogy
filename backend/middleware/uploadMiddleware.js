const multer = require('multer');

// Configuration de Multer pour stocker le fichier en mémoire
const storage = multer.memoryStorage();

// Middleware Multer pour gérer un seul fichier uploadé
// Le nom du champ dans le formulaire FormData doit être 'file'
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 50, // Limite de 50MB (ajuster si nécessaire pour les vidéos)
  },
  fileFilter: (req, file, cb) => {
    // Filtrer les types de fichiers (images et vidéos communes)
    if (
      file.mimetype.startsWith('image/') ||
      file.mimetype.startsWith('video/')
    ) {
      cb(null, true); // Accepter le fichier
    } else {
      cb(new Error('Type de fichier non supporté. Seules les images et vidéos sont autorisées.'), false);
    }
  },
});

module.exports = upload; 