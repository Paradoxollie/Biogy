const mongoose = require('mongoose');
require('dotenv').config(); // Charger les variables d'environnement

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Options pour éviter les avertissements de dépréciation (peuvent varier selon la version de Mongoose)
      // useNewUrlParser: true, // Ces options sont souvent activées par défaut dans les versions récentes
      // useUnifiedTopology: true,
      // useCreateIndex: true, // Non supporté dans Mongoose 6+
      // useFindAndModify: false, // Non supporté dans Mongoose 6+
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1); // Arrêter l'application en cas d'échec de connexion
  }
};

module.exports = connectDB; 