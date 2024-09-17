const mongoose = require('mongoose');
const connectDB = require('../config/db');
const User = require('.../models/user');
const Role = require('../models/Role');
const bcrypt = require('bcryptjs');

// Connect to MongoDB
connectDB();

const seedDatabase = async () => {
  try {
    // Clear existing data
    await User.deleteMany({});
    await Role.deleteMany({});

    // Seed roles
    const roles = await Role.insertMany([
      { roleName: 'Admin' },
      { roleName: 'Customer' },
      { roleName: 'Moderator' }
    ]);

    // Seed users
    const hashedAdminPassword = await bcrypt.hash('admin1', 10);
    const hashedModeratorPassword = await bcrypt.hash('moderator1', 10);
    const hashedCustomerPassword = await bcrypt.hash('cust1', 10);

    await User.insertMany([
      { username: 'admin1', password: hashedAdminPassword, role: roles[0]._id },
      { username: 'moderator1', password: hashedModeratorPassword, role: roles[2]._id },
      { username: 'cust1', password: hashedCustomerPassword, role: roles[1]._id }
    ]);

    console.log('Database seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error seeding the database:', error);
    mongoose.connection.close();
  }
};

seedDatabase();
