const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

// URI de connexion directe (sans SRV)
const MONGO_URI = 'mongodb://biogy:J4VsduOt9ZuDi7V7@biogy.jqc2n1w.mongodb.net/biogy?retryWrites=true&w=majority';

// Fonction pour se connecter à la base de données
const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connecté avec succès');
  } catch (error) {
    console.error('Erreur de connexion à MongoDB:', error.message);
    process.exit(1);
  }
};

// Fonction pour promouvoir un utilisateur au rôle d'admin
const promoteUserToAdmin = async (username) => {
  try {
    await connectDB();
    
    // Rechercher l'utilisateur par son nom d'utilisateur
    const user = await User.findOne({ username });
    
    if (!user) {
      console.error(`Utilisateur "${username}" non trouvé.`);
      process.exit(1);
    }
    
    // Mettre à jour le rôle de l'utilisateur
    user.role = 'admin';
    await user.save();
    
    console.log(`L'utilisateur "${username}" a été promu au rôle d'admin avec succès.`);
    console.log(`ID: ${user._id}`);
    console.log(`Nom d'utilisateur: ${user.username}`);
    console.log(`Rôle: ${user.role}`);
    
    console.log('\nOpération terminée. Fermeture de la connexion à la base de données...');
    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error('Erreur lors de la promotion de l\'utilisateur:', error.message);
    process.exit(1);
  }
};

// Promouvoir Lgirard au rôle d'admin
promoteUserToAdmin('Lgirard'); 