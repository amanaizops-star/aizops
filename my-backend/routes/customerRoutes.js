const express = require('express');
const router = express.Router();
const {
    registerCustomer,
    setPassword,
    // verifyOTP,
    // resendOTP,
    getCustomer,
    getAllCustomers,
    login
} = require('../controller/customerController');

console.log('✅ customerRoutes.js loaded successfully');

// Test route
router.get('/test', (req, res) => {
    console.log('✅ Test route hit!');
    res.json({ 
        success: true, 
        message: 'Customer routes are working!',
        time: new Date().toISOString()
    });
});
// Add this temporary debug route to check customers
router.get('/debug/check-email/:email', async (req, res) => {
    try {
        const Customer = require('../models/Customer');
        const email = req.params.email.toLowerCase();
        
        // Find customer by email
        const customer = await Customer.findOne({ email });
        
        // Get all customers for reference
        const allCustomers = await Customer.find({}).select('email firstName lastName');
        
        res.json({
            success: true,
            searchedEmail: email,
            customerExists: !!customer,
            customer: customer ? {
                id: customer._id,
                email: customer.email,
                name: `${customer.firstName} ${customer.lastName}`,
                mobileNo: customer.mobileNo,
                isVerified: customer.isVerified,
                hasPassword: !!customer.password
            } : null,
            allCustomers: allCustomers.map(c => ({
                email: c.email,
                name: `${c.firstName} ${c.lastName}`
            }))
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Customer routes
router.post('/register', registerCustomer);
router.post('/set-password', setPassword);
// router.post('/verify-otp', verifyOTP);
// router.post('/resend-otp', resendOTP);
router.post('/login', login);
router.get('/customer', getCustomer);
router.get('/all', getAllCustomers);

// Root route
router.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'Customer API - Email OTP System',
        endpoints: {
            register: 'POST /api/customers/register',
            setPassword: 'POST /api/customers/set-password',
            // verifyOTP: 'POST /api/customers/verify-otp',
            // resendOTP: 'POST /api/customers/resend-otp',
            login: 'POST /api/customers/login',
            getCustomer: 'GET /api/customers/customer?mobileNo=XXX OR ?email=XXX',
            getAll: 'GET /api/customers/all'
        }
    });
});

module.exports = router;