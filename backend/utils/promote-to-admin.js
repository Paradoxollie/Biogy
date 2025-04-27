/**
 * Utility script to promote a user to admin role.
 * Run this script with: node utils/promote-to-admin.js <username>
 */

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');

// Check if username is provided
if (process.argv.length < 3) {
  console.error('Usage: node utils/promote-to-admin.js <username>');
  process.exit(1);
}

const username = process.argv[2];

// Utiliser directement l'URI MongoDB pour ce script
const MONGO_URI = "mongodb+srv://Parad0x:4JQSXUPV0wga8Tic@parad0x.kee2wqc.mongodb.net/biogyDB?retryWrites=true&w=majority&appName=Parad0x";

// Connect to MongoDB
mongoose.connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    try {
      // Find the user by username
      const user = await User.findOne({ username });
      
      if (!user) {
        console.error(`User "${username}" not found`);
        process.exit(1);
      }
      
      // Update the user's role to admin
      user.role = 'admin';
      await user.save();
      
      console.log(`User "${username}" has been promoted to admin role`);
    } catch (error) {
      console.error('Error promoting user:', error);
    } finally {
      mongoose.disconnect();
    }
  })
  .catch(error => {
    console.error('Connection error:', error);
    process.exit(1);
  }); 