


// const express = require('express');
// const router = express.Router();
// const GeneralUser = require('../models/GeneralUser');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// // ✅ Test route to verify demo router is working
// router.get('/test', (req, res) => {
//     res.json({ 
//         success: true, 
//         message: 'Demo routes are working!',
//         endpoints: {
//             register: 'POST /api/demo/register',
//             login: 'POST /api/demo/login'
//         }
//     });
// });

// // @desc    Demo user registration
// // @route   POST /api/demo/register
// router.post('/register', async (req, res) => {
//     try {
//         console.log('🔥 DEMO REGISTER endpoint hit with body:', req.body);
        
//         const { firstName, lastName, emailId, password, countryCode, mobileNo, dob, gender } = req.body;

//         // Validate required fields
//         if (!firstName || !lastName || !emailId || !password) {
//             return res.status(400).json({ 
//                 success: false, 
//                 error: 'First name, last name, email and password are required' 
//             });
//         }

//         // Check if user exists (using email as contact)
//         const userExists = await GeneralUser.findOne({ 
//             $or: [
//                 { contact: emailId },
//                 { emailId: emailId }
//             ]
//         });
        
//         if (userExists) {
//             return res.status(400).json({ 
//                 success: false, 
//                 error: 'User already exists with this email' 
//             });
//         }

//         // Create user data that matches schema
//         const userData = {
//             name: `${firstName} ${lastName}`,  // Required field
//             contact: emailId,                    // Required field
//             firstName: firstName,                 // Optional field
//             lastName: lastName,                   // Optional field
//             emailId: emailId,                     // Optional field
//             mobileNo: mobileNo || '',              // Optional field
//             countryCode: countryCode || '+91',     // Optional field
//             dob: dob || null,                      // Optional field
//             gender: gender || '',                   // Optional field
//             password: password                      // Required field
//         };

//         console.log('📦 Creating demo user with data:', userData);

//         // 🔴 LINE 67 - THIS IS WHERE USER IS CREATED
//         // Create user - this is where the error originates
//         let user;
//         try {
//             user = await GeneralUser.create(userData);
//             console.log('✅ User created successfully with ID:', user._id);
//         } catch (createError) {
//             console.error('❌ DETAILED ERROR in user creation:', {
//                 message: createError.message,
//                 stack: createError.stack,
//                 name: createError.name,
//                 code: createError.code
//             });
            
//             // Handle specific MongoDB errors
//             if (createError.code === 11000) {
//                 return res.status(400).json({ 
//                     success: false, 
//                     error: 'Email already exists' 
//                 });
//             }
            
//             if (createError.name === 'ValidationError') {
//                 const messages = Object.values(createError.errors).map(err => err.message);
//                 return res.status(400).json({ 
//                     success: false, 
//                     error: messages.join(', ') 
//                 });
//             }
            
//             // Re-throw for general error handler
//             throw createError;
//         }

//         // Generate token
//         const token = jwt.sign(
//             { id: user._id, role: user.role },
//             process.env.JWT_SECRET || 'your-secret-key',
//             { expiresIn: '30d' }
//         );

//         res.status(201).json({
//             success: true,
//             message: 'Demo user registered successfully',
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 emailId: user.emailId || user.contact,
//                 contact: user.contact
//             }
//         });

//     } catch (error) {
//         console.error('❌ Demo registration error:', error);
        
//         // Handle duplicate key error
//         if (error.code === 11000) {
//             return res.status(400).json({ 
//                 success: false, 
//                 error: 'Email already exists' 
//             });
//         }

//         // Handle validation errors
//         if (error.name === 'ValidationError') {
//             const messages = Object.values(error.errors).map(err => err.message);
//             return res.status(400).json({ 
//                 success: false, 
//                 error: messages.join(', ') 
//             });
//         }

//         res.status(500).json({ 
//             success: false, 
//             error: 'Server error: ' + error.message 
//         });
//     }
// });

// // @desc    Demo user login
// // @route   POST /api/demo/login
// router.post('/login', async (req, res) => {
//     try {
//         console.log('Demo login endpoint hit with body:', req.body);
        
//         const { emailId, password } = req.body;

//         if (!emailId || !password) {
//             return res.status(400).json({ 
//                 success: false, 
//                 error: 'Email and password are required' 
//             });
//         }

//         // Find user by email
//         const user = await GeneralUser.findOne({ 
//             $or: [
//                 { emailId: emailId },
//                 { contact: emailId }
//             ]
//         }).select('+password');
        
//         if (!user) {
//             return res.status(401).json({ 
//                 success: false, 
//                 error: 'Invalid credentials' 
//             });
//         }

//         // Check password
//         const isMatch = await user.comparePassword(password);
        
//         if (!isMatch) {
//             return res.status(401).json({ 
//                 success: false, 
//                 error: 'Invalid credentials' 
//             });
//         }

//         // Generate token
//         const token = jwt.sign(
//             { id: user._id, role: user.role },
//             process.env.JWT_SECRET || 'your-secret-key',
//             { expiresIn: '30d' }
//         );

//         res.json({
//             success: true,
//             message: 'Login successful',
//             token,
//             user: {
//                 id: user._id,
//                 name: user.name,
//                 firstName: user.firstName,
//                 lastName: user.lastName,
//                 emailId: user.emailId || user.contact,
//                 contact: user.contact
//             }
//         });

//     } catch (error) {
//         console.error('Demo login error:', error);
//         res.status(500).json({ 
//             success: false, 
//             error: 'Server error: ' + error.message 
//         });
//     }
// });

// module.exports = router;

// // CORRECT - using POST


const express = require('express');
const router = express.Router();
const GeneralUser = require('../models/GeneralUser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.get('/test', (req, res) => {
    res.json({ 
        success: true, 
        message: 'Demo routes are working!',
        endpoints: {
            register: 'POST /api/demo/register',
            login: 'POST /api/demo/login'
        }
    });
});


router.post('/register', async (req, res) => {
    try {
        console.log('🔥 DEMO REGISTER endpoint hit with body:', {
            ...req.body,
            password: req.body.password ? '[REDACTED]' : undefined
        });
        
        const { firstName, lastName, emailId, password, countryCode, mobileNo, dob, gender } = req.body;

        if (!firstName || !lastName || !emailId || !password) {
            return res.status(400).json({ 
                success: false, 
                error: 'First name, last name, email and password are required' 
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailId)) {
            return res.status(400).json({ 
                success: false, 
                error: 'Please provide a valid email address' 
            });
        }

        if (password.length < 6) {
            return res.status(400).json({ 
                success: false, 
                error: 'Password must be at least 6 characters long' 
            });
        }

        const userExists = await GeneralUser.findOne({ 
            $or: [
                { contact: emailId },
                { emailId: emailId }
            ]
        });
        
        if (userExists) {
            return res.status(400).json({ 
                success: false, 
                error: 'User already exists with this email' 
            });
        }

        const userData = {
            name: `${firstName} ${lastName}`,  
            contact: emailId,                    
            firstName: firstName,                 
            lastName: lastName,                   
            emailId: emailId,                     
            mobileNo: mobileNo || '',              
            countryCode: countryCode || '+91',     
            dob: dob || null,                      
            gender: gender || '',                   
            password: password                      
        };

        console.log('📦 Creating demo user with data:', {
            ...userData,
            password: '[REDACTED]'
        });

        
        let user;
        try {
          
            user = new GeneralUser(userData);
            await user.save();
            
            console.log('✅ User created successfully with ID:', user._id);
        } catch (createError) {
            console.error('❌ DETAILED ERROR in user creation:', {
                message: createError.message,
                stack: createError.stack,
                name: createError.name,
                code: createError.code
            });
            
            if (createError.code === 11000) {
                const field = Object.keys(createError.keyPattern)[0];
                return res.status(400).json({ 
                    success: false, 
                    error: `${field} already exists. Please use a different value.`
                });
            }
            
            if (createError.name === 'ValidationError') {
                const messages = Object.values(createError.errors).map(err => err.message);
                return res.status(400).json({ 
                    success: false, 
                    error: messages.join(', ') 
                });
            }
            
            throw createError;
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '30d' }
        );

        res.status(201).json({
            success: true,
            message: 'Demo user registered successfully',
            token,
            user: {
                id: user._id,
                name: user.name,
                firstName: user.firstName,
                lastName: user.lastName,
                emailId: user.emailId || user.contact,
                contact: user.contact
            }
        });

    } catch (error) {
        console.error('❌ Demo registration error:', error);
        
        if (error.code === 11000) {
            const field = Object.keys(error.keyPattern)[0];
            return res.status(400).json({ 
                success: false, 
                error: `${field} already exists. Please use a different value.`
            });
        }

        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ 
                success: false, 
                error: messages.join(', ') 
            });
        }

        res.status(500).json({ 
            success: false, 
            error: 'Server error: ' + error.message 
        });
    }
});


router.post('/login', async (req, res) => {
    try {
        console.log('🔥 DEMO LOGIN endpoint hit with body:', {
            ...req.body,
            password: req.body.password ? '[REDACTED]' : undefined
        });
        
        const { emailId, password } = req.body;

        if (!emailId || !password) {
            return res.status(400).json({ 
                success: false, 
                error: 'Email and password are required' 
            });
        }

        // Find user by email
        const user = await GeneralUser.findOne({ 
            $or: [
                { emailId: emailId },
                { contact: emailId }
            ]
        }).select('+password');
        
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

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '30d' }
        );

        console.log('✅ User logged in successfully:', user._id);

        res.json({
            success: true,
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                name: user.name,
                firstName: user.firstName,
                lastName: user.lastName,
                emailId: user.emailId || user.contact,
                contact: user.contact
            }
        });

    } catch (error) {
        console.error('❌ Demo login error:', error);
        res.status(500).json({ 
            success: false, 
            error: 'Server error: ' + error.message 
        });
    }
});

module.exports = router;