// const User = require('../models/Users');
// const Trial = require('../models/Trial');
// const jwt = require('jsonwebtoken');
// const { validationResult } = require('express-validator');

// // Generate JWT Token
// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: process.env.JWT_EXPIRE
//   });
// };

// // @desc    Register user with trial
// // @route   POST /api/auth/register
// const registerUser = async (req, res) => {
//   try {
//     // Check validation errors
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ success: false, errors: errors.array() });
//     }

//     const { firstName, lastName, emailId, countryCode, mobileNo, dob, gender, password } = req.body;

//     // Check if user exists
//     const userExists = await User.findOne({ 
//       $or: [{ emailId }, { mobileNo }] 
//     });

//     if (userExists) {
//       return res.status(400).json({ 
//         success: false, 
//         error: 'User already exists with this email or mobile number' 
//       });
//     }

//     // Create user
//     const user = await User.create({
//       firstName,
//       lastName,
//       emailId,
//       countryCode,
//       mobileNo,
//       dob,
//       gender,
//       password
//     });

//     // Calculate trial dates
//     const trialStartDate = new Date();
//     const trialEndDate = new Date();
//     trialEndDate.setDate(trialEndDate.getDate() + 15);

//     // Create trial record
//     const trial = await Trial.create({
//       userId: user._id,
//       trialStartDate,
//       trialEndDate,
//       whatsappNumber: `${countryCode}${mobileNo}`,
//       emailId: user.emailId
//     });

//     // Generate token
//     const token = generateToken(user._id);

//     res.status(201).json({
//       success: true,
//       data: {
//         user: {
//           id: user._id,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           emailId: user.emailId,
//           mobileNo: user.mobileNo,
//           role: user.role
//         },
//         trial: {
//           id: trial._id,
//           startDate: trial.trialStartDate,
//           endDate: trial.trialEndDate,
//           daysRemaining: 15,
//           status: trial.status
//         },
//         token
//       }
//     });

//   } catch (error) {
//     console.error('Registration error:', error);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }
// };

// // @desc    Login user
// // @route   POST /api/auth/login
// const loginUser = async (req, res) => {
//   try {
//     const { emailId, password } = req.body;

//     // Find user
//     const user = await User.findOne({ emailId });
    
//     if (!user) {
//       return res.status(401).json({ success: false, error: 'Invalid credentials' });
//     }

//     // Check password
//     const isMatch = await user.comparePassword(password);
    
//     if (!isMatch) {
//       return res.status(401).json({ success: false, error: 'Invalid credentials' });
//     }

//     // Get trial info
//     const trial = await Trial.findOne({ userId: user._id, status: 'active' });
    
//     // Generate token
//     const token = generateToken(user._id);

//     res.json({
//       success: true,
//       data: {
//         user: {
//           id: user._id,
//           firstName: user.firstName,
//           lastName: user.lastName,
//           emailId: user.emailId,
//           mobileNo: user.mobileNo,
//           role: user.role
//         },
//         trial: trial ? {
//           id: trial._id,
//           startDate: trial.trialStartDate,
//           endDate: trial.trialEndDate,
//           daysRemaining: trial.calculateDaysRemaining(),
//           status: trial.status
//         } : null,
//         token
//       }
//     });

//   } catch (error) {
//     console.error('Login error:', error);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }
// };

// // @desc    Get current user
// // @route   GET /api/auth/me
// const getMe = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     const trial = await Trial.findOne({ userId: user._id, status: 'active' });

//     res.json({
//       success: true,
//       data: {
//         user,
//         trial: trial ? {
//           ...trial.toObject(),
//           daysRemaining: trial.calculateDaysRemaining()
//         } : null
//       }
//     });
//   } catch (error) {
//     console.error('Get me error:', error);
//     res.status(500).json({ success: false, error: 'Server error' });
//   }
// };

// module.exports = { registerUser, loginUser, getMe };


const User = require('../models/GeneralUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'your-secret-key', {
        expiresIn: '30d'
    });
};


const registerUser = async (req, res) => {
    try {
        console.log('Register endpoint hit with body:', req.body);
        
        const { firstName, lastName, emailId, password } = req.body;

        const userExists = await User.findOne({ emailId });
        if (userExists) {
            return res.status(400).json({ 
                success: false, 
                error: 'User already exists' 
            });
        }

        const user = await User.create({
            firstName,
            lastName,
            emailId,
            password
        });

        const token = generateToken(user._id);

        res.status(201).json({
            success: true,
            data: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                emailId: user.emailId,
                token
            }
        });

    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};


const loginUser = async (req, res) => {
    try {
        console.log('Login endpoint hit with body:', req.body);
        
        const { emailId, password } = req.body;

        const user = await User.findOne({ emailId });
        
        if (!user) {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid credentials' 
            });
        }

        const isMatch = await user.comparePassword(password);
        
        if (!isMatch) {
            return res.status(401).json({ 
                success: false, 
                error: 'Invalid credentials' 
            });
        }

        const token = generateToken(user._id);

        res.json({
            success: true,
            data: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                emailId: user.emailId,
                token
            }
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};


const getMe = async (req, res) => {
    try {
        res.json({
            success: true,
            data: req.user
        });
    } catch (error) {
        console.error('Get me error:', error);
        res.status(500).json({ success: false, error: 'Server error' });
    }
};


module.exports = { 
    registerUser, 
    loginUser, 
    getMe 
};