const User = require('../models/User');
const path = require('path');

exports.signup = async (req, res) => {
  try {
    const { name, email } = req.body;
    const resume = req.file.filename;
    const user = new User({ name, email, resume });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error saving user data' });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findOne(); // Simplified for demo
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data' });
  }
};
