const express = require('express');
const multer = require('multer');
const { signup, getProfile } = require('../controllers/userController');

const router = express.Router();

// Setup multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.post('/signup', upload.single('resume'), signup);
router.get('/profile', getProfile);

module.exports = router;
