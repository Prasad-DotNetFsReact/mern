const express = require('express');
const router = express.Router();
const { loginUser } = require('../services/userService');

// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const { user, token } = await loginUser(username, password);
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;


