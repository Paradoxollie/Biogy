/**
 * Utility script to promote a user to admin role.
 * Run this script with: node utils/promote-to-admin.js <username>
 */

require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const { ADMIN_ROLE } = require('./roles');

// Check if username is provided
if (process.argv.length < 3) {
  console.error('Usage: node utils/promote-to-admin.js <username>');
  process.exit(1);
}

const username = process.argv[2];

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI;

if (!MONGO_URI) {
  console.error('Missing MONGO_URI or MONGODB_URI in the environment');
  process.exit(1);
}

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
      user.role = ADMIN_ROLE;
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
