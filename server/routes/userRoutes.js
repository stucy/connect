// npm package imports
const { Router } = require('express');
const userController = require('../controllers/userController');

// import custom middleware
const { requireAuth } = require('../middleware/authMiddleware');

// init express router
const router = Router();

// routes
router.post('/update_settings', requireAuth, userController.update_settings);

// future
// router.post('/update_username', requireAuth, userController.update_username);

router.post('/change_password', requireAuth, userController.change_password);

router.post('/send_invite', requireAuth, userController.send_invite);

router.post('/accept_invite', requireAuth, userController.accept_invite);

router.post('/block_user', requireAuth, userController.block_user);

router.post('/unblock_user', requireAuth, userController.unblock_user);

router.post('/remove_friend', requireAuth, userController.remove_friend);

module.exports = router;