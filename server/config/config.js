// config/config.js
const dotenv = require('dotenv');

dotenv.config();

const config = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI,
  JWT_SECRET: process.env.JWT_SECRET || 'your_default_jwt_secret', 
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = config;
