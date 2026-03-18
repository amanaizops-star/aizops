
const express = require('express');
const router = express.Router();
const {
    sendOTP,
    verifyOTP,
    resendOTP,
    testFast2SMS
} = require('../controller/otpController');

console.log('✅ OTP routes loaded');

router.get('/test', (req, res) => {
    res.json({
        success: true,
        message: 'OTP routes are working!',
        time: new Date().toISOString()
    });
});

router.post('/test-fast2sms', testFast2SMS);

router.post('/send', sendOTP);
router.post('/verify', verifyOTP);
router.post('/resend', resendOTP);

router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'OTP API - Fast2SMS Integration',
        endpoints: {
            sendOTP: 'POST /api/otp/send (body: mobileNo, countryCode)',
            verifyOTP: 'POST /api/otp/verify (body: mobileNo, otp)',
            resendOTP: 'POST /api/otp/resend (body: mobileNo)',
            testFast2SMS: 'POST /api/otp/test-fast2sms (body: mobileNo optional)',
            test: 'GET /api/otp/test'
        }
    });
});

module.exports = router;