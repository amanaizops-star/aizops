// const emailService = require('../services/emailService');

// // In-memory OTP store (replace with database in production)
// const otpStore = new Map();

// // Generate random OTP
// const generateOTP = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
// };

// // Set Password endpoint (your specific endpoint)
// exports.setPassword = async (req, res) => {
//     try {
//         const { email, otp } = req.body;
        
//         console.log('🔐 SET PASSWORD ENDPOINT HIT');
//         console.log('Request body:', { email, otp });

//         // Validate input
//         if (!email || !otp) {
//             return res.status(400).json({
//                 success: false,
//                 error: 'Email and OTP are required'
//             });
//         }

//         // Get stored OTP
//         const stored = otpStore.get(email);

//         // Check if OTP exists
//         if (!stored) {
//             return res.status(400).json({
//                 success: false,
//                 error: 'No OTP found. Please request a new one.'
//             });
//         }

//         // Check if OTP expired
//         if (Date.now() > stored.expiresAt) {
//             otpStore.delete(email);
//             return res.status(400).json({
//                 success: false,
//                 error: 'OTP has expired. Please request a new one.'
//             });
//         }

//         // Verify OTP
//         if (stored.otp !== otp) {
//             return res.status(400).json({
//                 success: false,
//                 error: 'Invalid OTP. Please try again.'
//             });
//         }

//         // OTP is valid
//         console.log('✅ OTP verified successfully for:', email);

//         // Send welcome email in background (don't await)
//         emailService.sendWelcomeEmail(email, email.split('@')[0])
//             .then(result => {
//                 if (result.success) {
//                     console.log(`✅ Welcome email sent to: ${email}`);
//                 } else {
//                     console.log(`⚠️ Welcome email queued for: ${email}`, result.error);
//                 }
//             })
//             .catch(err => console.log('Background email error:', err.message));

//         // Clear OTP
//         otpStore.delete(email);

//         // Return success (don't wait for email)
//         res.json({
//             success: true,
//             message: 'OTP verified successfully'
//         });

//     } catch (error) {
//         console.error('❌ Set password error:', error);
//         res.status(500).json({
//             success: false,
//             error: 'Internal server error'
//         });
//     }
// };

// // Forgot Password - Send OTP
// exports.forgotPassword = async (req, res) => {
//     try {
//         const { email } = req.body;

//         if (!email) {
//             return res.status(400).json({
//                 success: false,
//                 error: 'Email is required'
//             });
//         }

//         // Generate OTP
//         const otp = generateOTP();
//         const expiresAt = Date.now() + 10 * 60 * 1000; // 10 minutes

//         // Store OTP
//         otpStore.set(email, { otp, expiresAt });

//         console.log(`🔐 OTP generated for ${email}: ${otp}`);

//         // Send OTP email
//         const emailResult = await emailService.sendOTPEmail(email, otp);

//         if (emailResult.success) {
//             res.json({
//                 success: true,
//                 message: 'OTP sent successfully to your email'
//             });
//         } else {
//             // Email failed but OTP saved - show in development
//             res.json({
//                 success: true,
//                 message: 'OTP generated',
//                 devOTP: process.env.NODE_ENV === 'development' ? otp : undefined,
//                 warning: 'Email service temporarily unavailable - check server console for OTP'
//             });
//         }

//     } catch (error) {
//         console.error('Forgot password error:', error);
//         res.status(500).json({
//             success: false,
//             error: 'Internal server error'
//         });
//     }
// };

// // Verify OTP only
// exports.verifyOTP = async (req, res) => {
//     try {
//         const { email, otp } = req.body;

//         console.log('🔐 Verifying OTP for:', email, 'OTP:', otp);

//         // Get stored OTP
//         const stored = otpStore.get(email);

//         if (!stored) {
//             return res.status(400).json({
//                 success: false,
//                 error: 'No OTP found. Please request a new one.'
//             });
//         }

//         if (Date.now() > stored.expiresAt) {
//             otpStore.delete(email);
//             return res.status(400).json({
//                 success: false,
//                 error: 'OTP has expired. Please request a new one.'
//             });
//         }

//         if (stored.otp !== otp) {
//             return res.status(400).json({
//                 success: false,
//                 error: 'Invalid OTP. Please try again.'
//             });
//         }

//         console.log('✅ OTP verified successfully for:', email);

//         res.json({
//             success: true,
//             message: 'OTP verified successfully'
//         });

//     } catch (error) {
//         console.error('OTP verification error:', error);
//         res.status(500).json({
//             success: false,
//             error: 'Internal server error'
//         });
//     }
// };