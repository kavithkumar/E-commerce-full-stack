const express = require('express');
const {login,register} = require('../controllers/usercontroller');
const { authMiddleware } = require('../middleware/auth');
const router = express.Router();

router.post('/login', login)
router.post('/register', authMiddleware, register)

module.exports = router