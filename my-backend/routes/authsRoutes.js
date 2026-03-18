const express = require('express');
const router = express.Router();
const authController = require('../controller/authsController');


router.post('/register', authController.register);
router.post('/forgot-password', authController.forgotPassword);
router.post('/verify-otp', authController.verifyOTP);
router.post('/set-password', authController.setPassword);
router.post('/reset-password', authController.resetPassword);

module.exports = router;