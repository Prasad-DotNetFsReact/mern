const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const Role = require('../models/Role');
const config = require('../config/config');

// User login
exports.loginUser = async (username, password) => {
  try {
    const user = await User.findOne({ username }).populate('role');
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const token = jwt.sign({ id: user._id, role: user.role.roleName }, config.jwtSecret, {
      expiresIn: '2h'
    });

    return { user, token };
  } catch (error) {
    throw new Error(`Error logging in user: ${error.message}`);
  }
};



