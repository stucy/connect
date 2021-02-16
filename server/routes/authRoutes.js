// npm package imports
const { Router } = require('express');
const authController = require('../controllers/authController');

// init express router
const router = Router();

// routes
router.post('/signup', authController.signup);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

module.exports = router;