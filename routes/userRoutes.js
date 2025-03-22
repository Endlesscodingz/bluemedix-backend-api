const express = require('express');
const { registerUser, loginUser, getUsers } = require('../controllers/userController');
const { authMiddleware, isAdmin } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes
router.get('/users', authMiddleware, isAdmin, getUsers);

module.exports = router;