const fast2smsService = require('../services/fast2smsService');
const Customer = require('../models/Customer');

const otpStore = new Map();

const sendOTP = async (req, res) => {
    console.log('\n📲 SEND OTP ENDPOINT HIT');
    console.log('Request body:', req.body);

    try {
        const { mobileNo, countryCode = '+91' } = req.body;

        if (!mobileNo) {
            return res.status(400).json({
                success: false,
                message: 'Mobile number is required'
            });
        }

        if (!/^\d{10}$/.test(mobileNo)) {
            return res.status(400).json({
                success: false,
                message: 'Please enter a valid 10-digit mobile number'
            });
        }

        let customer = await Customer.findOne({ mobileNo });
        
        if (!customer) {
            customer = new Customer({
                firstName: 'User',
                lastName: mobileNo.slice(-4),
                email: `${mobileNo}@temp.com`,
                mobileNo: mobileNo,
                countryCode: countryCode,
                dob: new Date('2000-01-01'),
                gender: 'Other'
            });
            
            await customer.save();
            console.log('✅ Temporary customer created:', customer._id);
        }

        const otp = fast2smsService.generateOTP();
        const expiresAt = Date.now() + 10 * 60 * 1000; 

        otpStore.set(mobileNo, {
            otp: otp,
            expiresAt: expiresAt,
            attempts: 0,
            customerId: customer._id
        });

        customer.otp = otp;
        customer.otpExpiry = new Date(expiresAt);
        customer.otpAttempts = 0;
        await customer.save();

        let result = await fast2smsService.sendOTP(mobileNo, otp);
        
        if (!result.success) {
            console.log('First method failed, trying alternative...');
            result = await fast2smsService.sendOTPAlternative(mobileNo, otp);
        }

        if (result.success) {
            console.log(`✅ OTP sent successfully to ${mobileNo}`);
            
            if (process.env.NODE_ENV !== 'production') {
                return res.json({
                    success: true,
                    message: 'OTP sent successfully',
                    debug: { otp },
                    data: {
                        mobileNo: mobileNo,
                        expiresIn: '10 minutes'
                    }
                });
            }

            return res.json({
                success: true,
                message: 'OTP sent successfully to your mobile number',
                data: {
                    mobileNo: mobileNo,
                    expiresIn: '10 minutes'
                }
            });
        } else {
            return res.status(500).json({
                success: false,
                message: 'Failed to send OTP. Please check Fast2SMS configuration.',
                error: result.message,
                suggestions: [
                    'Verify your Fast2SMS API key is correct',
                    'Check if you have sufficient balance',
                    'Ensure mobile number is valid',
                    'Contact Fast2SMS support if issue persists'
                ]
            });
        }

    } catch (error) {
        console.error('❌ Send OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const verifyOTP = async (req, res) => {
    console.log('\n✅ VERIFY OTP ENDPOINT HIT');
    console.log('Request body:', req.body);

    try {
        const { mobileNo, otp } = req.body;

        if (!mobileNo || !otp) {
            return res.status(400).json({
                success: false,
                message: 'Mobile number and OTP are required'
            });
        }

        const storedData = otpStore.get(mobileNo);

        if (!storedData) {
            return res.status(400).json({
                success: false,
                message: 'No OTP found. Please request a new OTP.'
            });
        }

        if (storedData.attempts >= 3) {
            otpStore.delete(mobileNo);
            return res.status(400).json({
                success: false,
                message: 'Too many failed attempts. Please request a new OTP.'
            });
        }

        if (Date.now() > storedData.expiresAt) {
            otpStore.delete(mobileNo);
            return res.status(400).json({
                success: false,
                message: 'OTP has expired. Please request a new one.'
            });
        }

        if (storedData.otp === otp) {
            const customer = await Customer.findById(storedData.customerId);
            if (customer) {
                customer.isVerified = true;
                customer.verifiedAt = new Date();
                customer.otp = undefined;
                customer.otpExpiry = undefined;
                await customer.save();
            }

            otpStore.delete(mobileNo);

            return res.json({
                success: true,
                message: 'OTP verified successfully',
                data: {
                    mobileNo: mobileNo,
                    verified: true,
                    customerId: storedData.customerId
                }
            });
        } else {
            storedData.attempts += 1;
            otpStore.set(mobileNo, storedData);

            await Customer.findByIdAndUpdate(storedData.customerId, {
                $inc: { otpAttempts: 1 }
            });

            return res.status(400).json({
                success: false,
                message: 'Invalid OTP',
                attemptsLeft: 3 - storedData.attempts
            });
        }

    } catch (error) {
        console.error('❌ Verify OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const resendOTP = async (req, res) => {
    console.log('\n🔄 RESEND OTP ENDPOINT HIT');
    console.log('Request body:', req.body);

    try {
        const { mobileNo } = req.body;

        if (!mobileNo) {
            return res.status(400).json({
                success: false,
                message: 'Mobile number is required'
            });
        }

        const previousData = otpStore.get(mobileNo);
        if (previousData && Date.now() - (previousData.expiresAt - 10 * 60 * 1000) < 60 * 1000) {
            return res.status(429).json({
                success: false,
                message: 'Please wait 1 minute before requesting a new OTP'
            });
        }

        let customer = await Customer.findOne({ mobileNo });
        
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: 'Customer not found'
            });
        }

        const otp = fast2smsService.generateOTP();
        const expiresAt = Date.now() + 10 * 60 * 1000;

        otpStore.set(mobileNo, {
            otp: otp,
            expiresAt: expiresAt,
            attempts: 0,
            customerId: customer._id
        });

        customer.otp = otp;
        customer.otpExpiry = new Date(expiresAt);
        customer.otpAttempts = 0;
        await customer.save();

        let result = await fast2smsService.sendOTP(mobileNo, otp);
        
        if (!result.success) {
            result = await fast2smsService.sendOTPAlternative(mobileNo, otp);
        }

        if (result.success) {
            console.log(`✅ OTP resent to ${mobileNo}`);

            if (process.env.NODE_ENV !== 'production') {
                return res.json({
                    success: true,
                    message: 'OTP resent successfully',
                    debug: { otp }
                });
            }

            return res.json({
                success: true,
                message: 'OTP resent successfully to your mobile number'
            });
        } else {
            return res.status(500).json({
                success: false,
                message: result.message || 'Failed to resend OTP'
            });
        }

    } catch (error) {
        console.error('❌ Resend OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const testFast2SMS = async (req, res) => {
    try {
        const testMobile = req.body.mobileNo || '9999999999'; 
        const testOTP = '123456';
        
        const result = await fast2smsService.sendOTP(testMobile, testOTP);
        
        res.json({
            success: result.success,
            message: 'Fast2SMS test completed',
            result: result,
            apiKey: process.env.FAST2SMS_API_KEY ? 'Present' : 'Missing',
            note: 'If this fails, check your API key and Fast2SMS account'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Test failed',
            error: error.message
        });
    }
};

module.exports = {
    sendOTP,
    verifyOTP,
    resendOTP,
    testFast2SMS
};