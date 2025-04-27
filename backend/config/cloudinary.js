const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configuration de Cloudinary avec les variables d'environnement
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true, // Utiliser HTTPS
});

// Optionnel : Fonction helper pour uploader des fichiers
const uploadToCloudinary = (fileBuffer, options = {}) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      {
        resource_type: 'auto', // Détecte automatiquement le type (image/video)
        folder: 'biogy_posts',  // Dossier dans Cloudinary pour organiser
        ...options,
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }
        resolve(result);
      }
    ).end(fileBuffer);
  });
};

// Optionnel : Fonction helper pour supprimer des fichiers
const deleteFromCloudinary = (publicId) => {
    return new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (error, result) => {
            if (error) {
                return reject(error);
            }
            resolve(result);
        });
    });
};


module.exports = { 
    cloudinary, 
    uploadToCloudinary,
    deleteFromCloudinary
}; 