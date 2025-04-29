const cloudinary = require('cloudinary').v2;

// Configuration de Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

/**
 * Télécharge un fichier sur Cloudinary
 * @param {Buffer} fileBuffer - Buffer du fichier à télécharger
 * @param {Object} options - Options de téléchargement (folder, transformation, etc.)
 * @returns {Promise<Object>} - Résultat du téléchargement
 */
const uploadToCloudinary = (fileBuffer, options = {}) => {
  return new Promise((resolve, reject) => {
    // Créer un stream à partir du buffer
    const uploadOptions = {
      folder: options.folder || 'biogy',
      resource_type: 'auto',
      ...options
    };
    
    // Utiliser l'API de téléchargement de buffer
    cloudinary.uploader.upload_stream(
      uploadOptions,
      (error, result) => {
        if (error) {
          console.error('Erreur Cloudinary:', error);
          return reject(error);
        }
        resolve(result);
      }
    ).end(fileBuffer);
  });
};

/**
 * Supprime un fichier de Cloudinary
 * @param {String} publicId - ID public du fichier à supprimer
 * @returns {Promise<Object>} - Résultat de la suppression
 */
const deleteFromCloudinary = (publicId) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.destroy(
      publicId,
      (error, result) => {
        if (error) {
          console.error('Erreur lors de la suppression Cloudinary:', error);
          return reject(error);
        }
        resolve(result);
      }
    );
  });
};

module.exports = {
  cloudinary,
  uploadToCloudinary,
  deleteFromCloudinary
};
