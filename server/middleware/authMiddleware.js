const jwt = require('jsonwebtoken');
const config = require('../config/config');
const User = require('../models/user');

// Middleware to verify JWT
exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) return res.status(403).json({ message: 'No token provided' });

  jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) return res.status(403).json({ message: 'Failed to authenticate token' });
    req.userId = decoded.id;
    req.userRole = decoded.role;
    next();
  });
};

// Middleware to check if user is Admin
exports.isAdmin = (req, res, next) => {
  if (req.userRole !== 'Admin') return res.status(403).json({ message: 'Access denied' });
  next();
};
