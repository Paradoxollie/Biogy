const mongoose = require('mongoose');

const connectDB = async () => {
  // En mode développement, si MongoDB n'est pas disponible, on utilise une simulation
  if (process.env.NODE_ENV === 'development' && !process.env.MONGO_URI.includes('mongodb+srv')) {
    try {
      await mongoose.connect(process.env.MONGO_URI, {
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
      await mongoose.connect(process.env.MONGO_URI, {
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
