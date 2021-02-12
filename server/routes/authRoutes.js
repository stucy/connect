// npm package imports
const { Router } = require('express');
const authController = require('../controllers/authController');

// init express router
const router = Router();

// routes
router.post('/signup', authController.signup_post);

router.post('/login', authController.login_post);

module.exports = router;