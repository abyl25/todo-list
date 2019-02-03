const express = require('express');
const router = express.Router();
const token = require('../services/token');

const AuthController = require('../controllers/AuthController');

router.post('/login', AuthController.login);

router.post('/signup', AuthController.signup);

router.get('/me', token.verifyToken, AuthController.getMyself);

module.exports = router;