const mongoose = require('mongoose');
const Customer = require('../models/Customer');
const bcrypt = require('bcryptjs');
const { generateOTP, sendOTPEmail, sendWelcomeEmail } = require('../services/emailService');

const registerCustomer = async (req, res) => {
    console.log('\n📝 REGISTER ENDPOINT HIT');
    console.log('Body:', req.body);
    
    try {
        const { firstName, lastName, email, countryCode, mobileNo, dob, gender } = req.body;
        
        if (!firstName || !lastName || !email || !mobileNo || !dob || !gender) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required'
            });
        }
        
        const existingCustomer = await Customer.findOne({
            $or: [
                { email: email.toLowerCase() },
                { mobileNo: mobileNo }
            ]
        });
        
        if (existingCustomer) {
            console.log('⚠️ Customer already exists:', existingCustomer._id);
            
            return res.status(400).json({
                success: false,
                message: 'Customer with this email or mobile already exists',
                data: {
                    id: existingCustomer._id,
                    email: existingCustomer.email,
                    mobileNo: existingCustomer.mobileNo
                }
            });
        }
        
        const customer = new Customer({
            firstName,
            lastName,
            email: email.toLowerCase(),
            countryCode: countryCode || '+91',
            mobileNo,
            dob: new Date(dob),
            gender,
            isVerified: false,
            password: undefined, 
            otp: undefined,
            otpExpiry: undefined
        });
        
        const savedCustomer = await customer.save();
        
        console.log('✅ NEW customer saved successfully:', {
            id: savedCustomer._id,
            email: savedCustomer.email,
            mobile: savedCustomer.mobileNo
        });
        
        res.status(201).json({
            success: true,
            message: 'Customer registered successfully',
            data: {
                id: savedCustomer._id,
                firstName: savedCustomer.firstName,
                lastName: savedCustomer.lastName,
                email: savedCustomer.email,
                mobileNo: savedCustomer.mobileNo,
                isVerified: savedCustomer.isVerified
            }
        });
        
    } catch (error) {
        console.error('❌ Registration error:', error);
        
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({
                success: false,
                message: `${field} already exists`
            });
        }
        
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const setPassword = async (req, res) => {
    console.log('\n🔐 SET PASSWORD ENDPOINT HIT');
    console.log('Request body:', req.body);
    
    try {
        const { email, password } = req.body;
        
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }
        
        if (!password || password.length < 6) {
            return res.status(400).json({
                success: false,
                message: 'Password must be at least 6 characters'
            });
        }
        
        let customer = await Customer.findOne({ email: email.toLowerCase() });
        
        if (!customer) {
            console.log('🆕 Customer not found - creating new customer...');
            
            const tempMobile = `TEMP${Date.now()}`.slice(0, 10);
            
            customer = new Customer({
                firstName: email.split('@')[0] || 'New',
                lastName: 'User',
                email: email.toLowerCase(),
                countryCode: '+91',
                mobileNo: tempMobile, // Temporary mobile, user can update later
                dob: new Date('2000-01-01'), // Default DOB
                gender: 'Other', // Default gender
                isVerified: false
            });
            
            await customer.save();
            console.log('✅ New customer created:', customer._id);
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); 
        
        customer.password = hashedPassword;
        customer.otp = otp;
        customer.otpExpiry = otpExpiry;
        customer.otpAttempts = 0;
        
        await customer.save();
        
        const customerName = `${customer.firstName} ${customer.lastName}`;
        const emailResult = await sendOTPEmail(customer.email, otp, customerName);
        
        if (!emailResult.success) {
            console.warn('⚠️ Failed to send email, but OTP saved in DB');
        }
        
        console.log(`📧 OTP sent to email: ${customer.email}`);
        console.log(`📲 OTP for testing: ${otp}`);
        
        res.json({
            success: true,
            message: customer.isNew ? 'New customer created and OTP sent' : 'Password set successfully. OTP sent to your email.',
            data: {
                id: customer._id,
                email: customer.email,
                name: customerName,
                isVerified: customer.isVerified,
                isNewCustomer: !customer.password 
            },
            debug: { otp } 
        });
        
    } catch (error) {
        console.error('❌ Set password error:', error);
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
        const { email, otp } = req.body;
        
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }
        
        if (!otp) {
            return res.status(400).json({
                success: false,
                message: 'OTP is required'
            });
        }
        
        const customer = await Customer.findOne({ email: email.toLowerCase() });
        
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: 'Customer not found'
            });
        }
        
        if (customer.otp !== otp) {
            customer.otpAttempts = (customer.otpAttempts || 0) + 1;
            await customer.save();
            
            return res.status(400).json({
                success: false,
                message: 'Invalid OTP'
            });
        }
        
        if (customer.otpExpiry < new Date()) {
            return res.status(400).json({
                success: false,
                message: 'OTP expired. Please request a new one.'
            });
        }
        
        const membershipId = `MEM${Date.now()}${Math.floor(Math.random() * 1000)}`;
        
        customer.isVerified = true;
        customer.verifiedAt = new Date();
        customer.otp = undefined;
        customer.otpExpiry = undefined;
        customer.membershipId = membershipId;
        
        await customer.save();
        
        await sendWelcomeEmail(customer.email, `${customer.firstName} ${customer.lastName}`, membershipId);
        
        console.log('✅ Customer verified:', customer.email);
        
        res.json({
            success: true,
            message: 'Account verified successfully! Welcome email sent.',
            data: {
                id: customer._id,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                mobileNo: customer.mobileNo,
                isVerified: customer.isVerified,
                membershipId: membershipId
            }
        });
        
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
    console.log('\n📧 RESEND OTP ENDPOINT HIT');
    console.log('Request body:', req.body);
    
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }
        
        const customer = await Customer.findOne({ email: email.toLowerCase() });
        
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: 'Customer not found'
            });
        }
        
        if (customer.otpAttempts >= 5) {
            return res.status(429).json({
                success: false,
                message: 'Too many OTP attempts. Please try again after 1 hour.'
            });
        }
        
        const otp = generateOTP();
        const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);
        
        customer.otp = otp;
        customer.otpExpiry = otpExpiry;
        customer.otpAttempts = (customer.otpAttempts || 0) + 1;
        
        await customer.save();
        
        const customerName = `${customer.firstName} ${customer.lastName}`;
        await sendOTPEmail(customer.email, otp, customerName);
        
        console.log(`📧 New OTP sent to email: ${customer.email}`);
        
        res.json({
            success: true,
            message: 'OTP resent successfully to your email',
            debug: { otp } 
        });
        
    } catch (error) {
        console.error('❌ Resend OTP error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Email and password are required'
            });
        }
        
        const customer = await Customer.findOne({ email: email.toLowerCase() });
        
        if (!customer) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
        
        if (!customer.isVerified) {
            return res.status(401).json({
                success: false,
                message: 'Please verify your email first'
            });
        }
        
        const isMatch = await bcrypt.compare(password, customer.password);
        
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }
        
        res.json({
            success: true,
            message: 'Login successful',
            data: {
                id: customer._id,
                firstName: customer.firstName,
                lastName: customer.lastName,
                email: customer.email,
                mobileNo: customer.mobileNo,
                membershipId: customer.membershipId,
                isVerified: customer.isVerified
            }
        });
        
    } catch (error) {
        console.error('❌ Login error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const getCustomer = async (req, res) => {
    try {
        const { email } = req.query;
        
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }
        
        const customer = await Customer.findOne({ email: email.toLowerCase() })
            .select('-password -otp -otpExpiry');
        
        if (!customer) {
            return res.status(404).json({
                success: false,
                message: 'Customer not found'
            });
        }
        
        res.json({
            success: true,
            data: customer
        });
        
    } catch (error) {
        console.error('❌ Get customer error:', error);
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};

const getAllCustomers = async (req, res) => {
    try {
        const customers = await Customer.find({}).select('-password -otp -otpExpiry');
        res.json({
            success: true,
            count: customers.length,
            data: customers
        });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = {
    registerCustomer,
    setPassword,
    verifyOTP,
    resendOTP,
    login,
    getCustomer,
    getAllCustomers
};