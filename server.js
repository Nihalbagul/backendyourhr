const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/users', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb+srv://nihalbagul98:o6HyPwgaM5QhXB4M@lms.y38rp.mongodb.net/Lms', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Start server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
