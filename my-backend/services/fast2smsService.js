// backend/services/fast2smsService.js
const axios = require('axios'); // Install axios if not already: npm install axios

class Fast2SMSService {
    constructor() {
        this.apiKey = process.env.FAST2SMS_API_KEY;
        this.baseURL = 'https://www.fast2sms.com/dev/bulkV2';
    }

    // Generate 6-digit OTP
    generateOTP() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    // Send OTP via Fast2SMS - CORRECTED VERSION
    async sendOTP(mobileNo, otp) {
        try {
            console.log(`📱 Sending OTP ${otp} to ${mobileNo} via Fast2SMS...`);
            
            // Using axios directly for better control
            const response = await axios({
                method: 'POST',
                url: 'https://www.fast2sms.com/dev/bulkV2',
                headers: {
                    'authorization': this.apiKey,
                    'Content-Type': 'application/json'
                },
                data: {
                    route: 'v3',  // Changed from 'otp' to 'v3' for OTP
                    sender_id: 'FSTSMS',
                    message: `Your OTP for verification is: ${otp}. Valid for 10 minutes.`,
                    language: 'english',
                    flash: 0,
                    numbers: mobileNo  // Send as string, not array
                }
            });

            console.log('Fast2SMS Response:', response.data);

            if (response.data && response.data.return === true) {
                return {
                    success: true,
                    message: 'OTP sent successfully',
                    requestId: response.data.request_id
                };
            } else {
                return {
                    success: false,
                    message: response.data?.message || 'Failed to send OTP'
                };
            }
        } catch (error) {
            console.error('Fast2SMS Error Details:', error.response?.data || error.message);
            return {
                success: false,
                message: error.response?.data?.message || error.message || 'Error sending OTP'
            };
        }
    }

    // Alternative method using different route
    async sendOTPAlternative(mobileNo, otp) {
        try {
            console.log(`📱 Sending OTP ${otp} to ${mobileNo} via Fast2SMS (Alternative)...`);
            
            // Alternative approach with different route
            const response = await axios({
                method: 'POST',
                url: 'https://www.fast2sms.com/dev/bulkV2',
                headers: {
                    'authorization': this.apiKey,
                    'Content-Type': 'application/json'
                },
                data: {
                    route: 'otp',  // Try 'otp' route
                    numbers: mobileNo,
                    variables_values: otp,
                    flash: 0
                }
            });

            console.log('Fast2SMS Alternative Response:', response.data);

            if (response.data && response.data.return === true) {
                return {
                    success: true,
                    message: 'OTP sent successfully',
                    requestId: response.data.request_id
                };
            } else {
                return {
                    success: false,
                    message: response.data?.message || 'Failed to send OTP'
                };
            }
        } catch (error) {
            console.error('Fast2SMS Alternative Error:', error.response?.data || error.message);
            return {
                success: false,
                message: error.response?.data?.message || error.message
            };
        }
    }

    // Send transactional SMS
    async sendTransactionalSMS(numbers, message) {
        try {
            const response = await axios({
                method: 'POST',
                url: 'https://www.fast2sms.com/dev/bulkV2',
                headers: {
                    'authorization': this.apiKey,
                    'Content-Type': 'application/json'
                },
                data: {
                    route: 'q',  // Quick transactional route
                    sender_id: 'FSTSMS',
                    message: message,
                    language: 'english',
                    numbers: numbers.join(',')
                }
            });

            return {
                success: true,
                data: response.data
            };
        } catch (error) {
            console.error('Fast2SMS Transactional Error:', error.response?.data || error.message);
            return {
                success: false,
                message: error.response?.data?.message || error.message
            };
        }
    }

    // Check wallet balance
    async checkBalance() {
        try {
            const response = await axios({
                method: 'GET',
                url: 'https://www.fast2sms.com/dev/wallet',
                headers: {
                    'authorization': this.apiKey
                }
            });

            return {
                success: true,
                balance: response.data.wallet
            };
        } catch (error) {
            console.error('Balance Check Error:', error.response?.data || error.message);
            return {
                success: false,
                message: error.response?.data?.message || error.message
            };
        }
    }
}

module.exports = new Fast2SMSService();