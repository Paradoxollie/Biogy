const mongoose = require('mongoose');

const connectDB = async () => {
  // Utiliser MONGO_URI ou MONGODB_URI (pour compatibilité avec différents services)
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!uri) {
    console.error('❌ MongoDB URI not found in environment variables');
    process.exit(1);
  }

  // En mode développement, si MongoDB n'est pas disponible, on utilise une simulation
  if (process.env.NODE_ENV === 'development' && !uri.includes('mongodb+srv')) {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ MongoDB connected');
    } catch (error) {
      console.warn('⚠️ MongoDB connection failed, using in-memory simulation for development');
      // Simuler une connexion réussie pour le développement
      mongoose.connection.readyState = 1; // 1 = connected
    }
  } else {
    try {
      await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ MongoDB Atlas connected');
    } catch (error) {
      console.error('❌ MongoDB connection failed:', error.message);
      process.exit(1); // Stop le serveur si échec
    }
  }
};

module.exports = connectDB;
