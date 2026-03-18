// // import React, { useState } from 'react';

// // const TrialAccountPage = () => {
// //   const [step, setStep] = useState(1);
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     emailId: '',
// //     countryCode: '+91',
// //     mobileNo: '',
// //     dob: '',
// //     gender: '',
// //     password: '',
// //     confirmPassword: '',
// //     otp: ['', '', '', '', '', '']
// //   });

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //   };

// //   const handleOtpChange = (index, value) => {
// //     if (value.length <= 1 && /^\d*$/.test(value)) {
// //       const newOtp = [...formData.otp];
// //       newOtp[index] = value;
// //       setFormData({ ...formData, otp: newOtp });
      
// //       // Auto-focus next input
// //       if (value && index < 5) {
// //         const nextInput = document.getElementById(`otp-${index + 1}`);
// //         if (nextInput) nextInput.focus();
// //       }
// //     }
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     if (step === 1) {
// //       setStep(2);
// //     } else if (step === 2) {
// //       if (formData.password === formData.confirmPassword) {
// //         setStep(3);
// //       } else {
// //         alert("Passwords don't match!");
// //       }
// //     } else {
// //       // Final submission
// //       console.log('Final form data:', formData);
// //       alert('Trial account created successfully!');
// //     }
// //   };

// //   const goBack = () => {
// //     if (step > 1) setStep(step - 1);
// //   };

// //   // Step indicators
// //   const steps = [
// //     { number: 1, title: 'Personal Info' },
// //     { number: 2, title: 'Security' },
// //     { number: 3, title: 'Verification' }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-[linear-gradient(90deg,#d4f7f4,#e6ecf4)] ">
// //       <div className="container mx-auto px-4 py-8 lg:py-12">
// //         <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          
// //           {/* Left Section - Trial Form */}
// //           <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-xl">
// //             {/* Step Indicator */}
// //             <div className="mb-8">
// //               <div className="flex justify-between items-center mb-4">
// //                 {steps.map((s) => (
// //                   <div key={s.number} className="flex flex-col items-center">
// //                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
// //                       step >= s.number 
// //                         ? 'bg-green-500 text-white' 
// //                         : 'bg-gray-200 text-gray-600'
// //                     }`}>
// //                       {s.number}
// //                     </div>
// //                     <span className="text-xs mt-1 text-gray-600">{s.title}</span>
// //                   </div>
// //                 ))}
// //               </div>
// //               <div className="h-1 bg-gray-200 rounded">
// //                 <div 
// //                   className="h-1 bg-green-500 rounded transition-all duration-300"
// //                   style={{ width: `${(step / 3) * 100}%` }}
// //                 ></div>
// //               </div>
// //             </div>

// //             <div className="mb-6">
// //               <h2 className="text-2xl font-bold text-gray-800">
// //                 {step === 1 && 'Create Your Account'}
// //                 {step === 2 && 'Set Your Password'}
// //                 {step === 3 && 'Verify Your Email'}
// //               </h2>
// //               <p className="text-gray-600 text-sm mt-1">
// //                 {step === 1 && 'Enter your personal details to get started'}
// //                 {step === 2 && 'Choose a strong password for your account'}
// //                 {step === 3 && `We've sent a 6-digit code to ${formData.emailId || 'your email'}`}
// //               </p>
// //             </div>

// //             <form onSubmit={handleSubmit} className="space-y-4">
// //               {/* Step 1: Personal Information */}
// //               {step === 1 && (
// //                 <>
// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-1">
// //                         First Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         name="firstName"
// //                         value={formData.firstName}
// //                         onChange={handleChange}
// //                         placeholder="John"
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                         required
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-1">
// //                         Last Name
// //                       </label>
// //                       <input
// //                         type="text"
// //                         name="lastName"
// //                         value={formData.lastName}
// //                         onChange={handleChange}
// //                         placeholder="Doe"
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Business Email
// //                     </label>
// //                     <input
// //                       type="email"
// //                       name="emailId"
// //                       value={formData.emailId}
// //                       onChange={handleChange}
// //                       placeholder="john@company.com"
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                       required
// //                     />
// //                   </div>

// //                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-1">
// //                         Country
// //                       </label>
// //                       <select 
// //                         name="countryCode"
// //                         value={formData.countryCode}
// //                         onChange={handleChange}
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                       >
// //                         <option value="+91">+91 (India)</option>
// //                         <option value="+1">+1 (USA)</option>
// //                         <option value="+44">+44 (UK)</option>
// //                         <option value="+61">+61 (Australia)</option>
// //                       </select>
// //                     </div>
// //                     <div className="md:col-span-2">
// //                       <label className="block text-sm font-medium text-gray-700 mb-1">
// //                         Phone Number
// //                       </label>
// //                       <input
// //                         type="tel"
// //                         name="mobileNo"
// //                         value={formData.mobileNo}
// //                         onChange={handleChange}
// //                         placeholder="9876543210"
// //                         maxLength="10"
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                         required
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-1">
// //                         Date of Birth
// //                       </label>
// //                       <input
// //                         type="date"
// //                         name="dob"
// //                         value={formData.dob}
// //                         onChange={handleChange}
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                         required
// //                       />
// //                     </div>
// //                     <div>
// //                       <label className="block text-sm font-medium text-gray-700 mb-1">
// //                         Gender
// //                       </label>
// //                       <select 
// //                         name="gender"
// //                         value={formData.gender}
// //                         onChange={handleChange}
// //                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                         required
// //                       >
// //                         <option value="">Select Gender</option>
// //                         <option value="Male">Male</option>
// //                         <option value="Female">Female</option>
// //                         <option value="Other">Other</option>
// //                       </select>
// //                     </div>
// //                   </div>
// //                 </>
// //               )}

// //               {/* Step 2: Password Setup */}
// //               {step === 2 && (
// //                 <>
// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Password
// //                     </label>
// //                     <input
// //                       type="password"
// //                       name="password"
// //                       value={formData.password}
// //                       onChange={handleChange}
// //                       placeholder="••••••••"
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                       required
// //                       minLength="8"
// //                     />
// //                     <p className="text-xs text-gray-500 mt-1">Minimum 8 characters</p>
// //                   </div>

// //                   <div>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Confirm Password
// //                     </label>
// //                     <input
// //                       type="password"
// //                       name="confirmPassword"
// //                       value={formData.confirmPassword}
// //                       onChange={handleChange}
// //                       placeholder="••••••••"
// //                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                       required
// //                     />
// //                   </div>

// //                   {/* Password strength indicator */}
// //                   {formData.password && (
// //                     <div className="mt-2">
// //                       <div className="flex gap-1 h-1">
// //                         <div className={`flex-1 h-full rounded ${
// //                           formData.password.length >= 8 ? 'bg-green-500' : 'bg-gray-200'
// //                         }`}></div>
// //                         <div className={`flex-1 h-full rounded ${
// //                           /[A-Z]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'
// //                         }`}></div>
// //                         <div className={`flex-1 h-full rounded ${
// //                           /[0-9]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'
// //                         }`}></div>
// //                         <div className={`flex-1 h-full rounded ${
// //                           /[^A-Za-z0-9]/.test(formData.password) ? 'bg-green-500' : 'bg-gray-200'
// //                         }`}></div>
// //                       </div>
// //                       <p className="text-xs text-gray-500 mt-1">
// //                         Use 8+ chars with mix of letters, numbers & symbols
// //                       </p>
// //                     </div>
// //                   )}
// //                 </>
// //               )}

// //               {/* Step 3: OTP Verification */}
// //               {step === 3 && (
// //                 <>
// //                   <div className="text-center py-4">
// //                     <div className="flex justify-center gap-2 mb-4">
// //                       {formData.otp.map((digit, index) => (
// //                         <input
// //                           key={index}
// //                           id={`otp-${index}`}
// //                           type="text"
// //                           value={digit}
// //                           onChange={(e) => handleOtpChange(index, e.target.value)}
// //                           className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
// //                           maxLength="1"
// //                         />
// //                       ))}
// //                     </div>
                    
// //                     <button 
// //                       type="button"
// //                       className="text-purple-600 text-sm hover:underline"
// //                       onClick={() => alert('New OTP sent!')}
// //                     >
// //                       Resend Code
// //                     </button>
// //                   </div>
// //                 </>
// //               )}

// //               {/* Navigation Buttons */}
// //               <div className="flex gap-3 pt-4">
// //                 {step > 1 && (
// //                   <button
// //                     type="button"
// //                     onClick={goBack}
// //                     className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
// //                   >
// //                     Back
// //                   </button>
// //                 )}
// //                 <button
// //                   type="submit"
// //                   className="flex-1 px-6 py-3  bg-cyan-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-600 transition shadow-lg"
// //                 >
// //                   {step === 1 && 'Continue →'}
// //                   {step === 2 && 'Create Account →'}
// //                   {step === 3 && 'Verify & Complete →'}
// //                 </button>
// //               </div>
// //             </form>
// //           </div>

// //           {/* Right Section - Features (Simplified) */}
// //          <div className="space-y-6">
// //   {/* Logo removed as requested */}
  
// //   <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
// //     Unlock the Full Potential of Your Business with{' '}
// //     <span className="text-green-600">WhatsApp</span>
// //   </h1>

// //   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// //     <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
// //       <h3 className="font-semibold mb-1 text-gray-900">🎯 Targeted Campaigns</h3>
// //       <p className="text-sm text-gray-600">Personalized offers that drive results</p>
// //     </div>
// //     <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
// //       <h3 className="font-semibold mb-1 text-gray-900">📋 Ready Templates</h3>
// //       <p className="text-sm text-gray-600">Timely updates with ease</p>
// //     </div>
// //     <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
// //       <h3 className="font-semibold mb-1 text-gray-900">💬 24/7 Engagement</h3>
// //       <p className="text-sm text-gray-600">No-code chatbots</p>
// //     </div>
// //     <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
// //       <h3 className="font-semibold mb-1 text-gray-900">📦 Product Catalogue</h3>
// //       <p className="text-sm text-gray-600">Boost sales instantly</p>
// //     </div>
// //   </div>

// //   <p className="text-sm text-gray-700 mt-4 font-medium">
// //     Grow smarter, engage faster with Anlook's WhatsApp automation!
// //   </p>
// // </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TrialAccountPage;


// import React, { useState } from 'react';
// import { toast } from 'react-toastify';

// const TrialAccountPage = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     emailId: '',
//     countryCode: '+91',
//     mobileNo: '',
//     dob: '',
//     gender: '',
//     password: '',
//     confirmPassword: '',
//     agreeToTerms: false
//   });

//   const [trialDetails, setTrialDetails] = useState(null);

//   const handleChange = (e) => {
//     const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
//     setFormData({
//       ...formData,
//       [e.target.name]: value
//     });
//   };

//   const calculateTrialEndDate = () => {
//     const startDate = new Date();
//     const endDate = new Date(startDate);
//     endDate.setDate(endDate.getDate() + 15);
    
//     return {
//       start: startDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
//       end: endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
//       endISO: endDate.toISOString()
//     };
//   };

//   const sendWhatsAppNotification = async (phoneNumber, trialInfo) => {
//     // This would be replaced with actual WhatsApp Business API integration
//     const whatsappMessage = `🎉 *Welcome to Anlook!* 

// Hi ${formData.firstName}, your 15-day trial has been activated!

// *Trial Details:*
// 📅 Start Date: ${trialInfo.start}
// 📅 End Date: ${trialInfo.end}
// ⏰ Days Remaining: 15

// ✨ *What's included:*
// • Full access to all features
// • WhatsApp Business integration
// • 24/7 customer support
// • No credit card required

// ⚠️ Your trial will automatically expire on ${trialInfo.end}. 
// Upgrade to continue enjoying our services!

// Need help? Contact us at support@anlook.com`;

//     console.log('WhatsApp notification would be sent:', whatsappMessage);
    
//     // In production, integrate with WhatsApp Business API
//     // Example using WhatsApp Business API:
//     /*
//     const response = await fetch('https://graph.facebook.com/v17.0/YOUR_PHONE_NUMBER_ID/messages', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${YOUR_ACCESS_TOKEN}`,
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         messaging_product: 'whatsapp',
//         to: phoneNumber,
//         type: 'text',
//         text: { body: whatsappMessage }
//       })
//     });
//     */
    
//     return whatsappMessage;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (step === 1) {
//       setStep(2);
//     } else if (step === 2) {
//       if (formData.password !== formData.confirmPassword) {
//         toast.error("Passwords don't match!");
//         return;
//       }
//       if (formData.password.length < 8) {
//         toast.error("Password must be at least 8 characters!");
//         return;
//       }
//       if (!formData.agreeToTerms) {
//         toast.error("Please agree to the terms and conditions!");
//         return;
//       }
      
//       // Calculate trial period
//       const trialInfo = calculateTrialEndDate();
      
//       try {
//         // Send WhatsApp notification
//         const whatsappMessage = await sendWhatsAppNotification(
//           `${formData.countryCode}${formData.mobileNo}`,
//           trialInfo
//         );
        
//         setTrialDetails({
//           ...trialInfo,
//           whatsappMessage
//         });
        
//         setStep(3);
        
//         // Show success message
//         toast.success(`Trial account created successfully! Check your WhatsApp for details.`);
        
//         console.log('Final form data:', {
//           ...formData,
//           trialStart: trialInfo.start,
//           trialEnd: trialInfo.end,
//           trialEndISO: trialInfo.endISO
//         });
//       } catch (error) {
//         toast.error('Error creating trial account. Please try again.');
//         console.error('Trial creation error:', error);
//       }
//     }
//   };

//   const goBack = () => {
//     if (step > 1) setStep(step - 1);
//   };

//   // Step indicators
//   const steps = [
//     { number: 1, title: 'Personal Info' },
//     { number: 2, title: 'Security & Trial' },
//     { number: 3, title: 'Confirmation' }
//   ];

//   return (
//     <div className="min-h-screen bg-[linear-gradient(90deg,#d4f7f4,#e6ecf4)]">
//       <div className="container mx-auto px-4 py-8 lg:py-12">
//         <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          
//           {/* Left Section - Trial Form */}
//           <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-xl">
//             {/* Step Indicator */}
//             <div className="mb-8">
//               <div className="flex justify-between items-center mb-4">
//                 {steps.map((s) => (
//                   <div key={s.number} className="flex flex-col items-center">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
//                       step >= s.number 
//                         ? 'bg-green-500 text-white' 
//                         : 'bg-gray-200 text-gray-600'
//                     }`}>
//                       {s.number}
//                     </div>
//                     <span className="text-xs mt-1 text-gray-600">{s.title}</span>
//                   </div>
//                 ))}
//               </div>
//               <div className="h-1 bg-gray-200 rounded">
//                 <div 
//                   className="h-1 bg-green-500 rounded transition-all duration-300"
//                   style={{ width: `${(step / 3) * 100}%` }}
//                 ></div>
//               </div>
//             </div>

//             <div className="mb-6">
//               <h2 className="text-2xl font-bold text-gray-800">
//                 {step === 1 && 'Create Your Trial Account'}
//                 {step === 2 && 'Complete Your 15-Day Trial Setup'}
//                 {step === 3 && 'Trial Activated Successfully!'}
//               </h2>
//               <p className="text-gray-600 text-sm mt-1">
//                 {step === 1 && 'Start your 15-day free trial today'}
//                 {step === 2 && 'Almost done! Set up your account'}
//                 {step === 3 && 'Your trial has been activated. Check your WhatsApp!'}
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Step 1: Personal Information */}
//               {step === 1 && (
//                 <>
//                   <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
//                     <div className="flex items-center gap-2 text-blue-700">
//                       <span className="text-xl">🎁</span>
//                       <span className="font-semibold">15-Day Free Trial</span>
//                     </div>
//                     <p className="text-sm text-blue-600 mt-1">
//                       Full access to all features • No credit card required • Cancel anytime
//                     </p>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         First Name
//                       </label>
//                       <input
//                         type="text"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={handleChange}
//                         placeholder="John"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Last Name
//                       </label>
//                       <input
//                         type="text"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={handleChange}
//                         placeholder="Doe"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                         required
//                       />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Business Email
//                     </label>
//                     <input
//                       type="email"
//                       name="emailId"
//                       value={formData.emailId}
//                       onChange={handleChange}
//                       placeholder="john@company.com"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                       required
//                     />
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Country
//                       </label>
//                       <select 
//                         name="countryCode"
//                         value={formData.countryCode}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                       >
//                         <option value="+91">+91 (India)</option>
//                         <option value="+1">+1 (USA)</option>
//                         <option value="+44">+44 (UK)</option>
//                         <option value="+61">+61 (Australia)</option>
//                       </select>
//                     </div>
//                     <div className="md:col-span-2">
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         WhatsApp Number
//                       </label>
//                       <input
//                         type="tel"
//                         name="mobileNo"
//                         value={formData.mobileNo}
//                         onChange={handleChange}
//                         placeholder="9876543210"
//                         maxLength="10"
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                         required
//                       />
//                       <p className="text-xs text-gray-500 mt-1">
//                         We'll send trial details on WhatsApp
//                       </p>
//                     </div>
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Date of Birth
//                       </label>
//                       <input
//                         type="date"
//                         name="dob"
//                         value={formData.dob}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                         required
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-1">
//                         Gender
//                       </label>
//                       <select 
//                         name="gender"
//                         value={formData.gender}
//                         onChange={handleChange}
//                         className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                         required
//                       >
//                         <option value="">Select Gender</option>
//                         <option value="Male">Male</option>
//                         <option value="Female">Female</option>
//                         <option value="Other">Other</option>
//                       </select>
//                     </div>
//                   </div>
//                 </>
//               )}

//               {/* Step 2: Password Setup & Trial Terms */}
//               {step === 2 && (
//                 <>
//                   <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-4">
//                     <h3 className="font-semibold text-gray-800 mb-2">🎉 Your 15-Day Trial Benefits:</h3>
//                     <ul className="text-sm text-gray-600 space-y-1">
//                       <li>✓ Full access to all WhatsApp Business features</li>
//                       <li>✓ Targeted campaign management</li>
//                       <li>✓ Ready-to-use message templates</li>
//                       <li>✓ 24/7 chatbot automation</li>
//                       <li>✓ Product catalog integration</li>
//                     </ul>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Password
//                     </label>
//                     <input
//                       type="password"
//                       name="password"
//                       value={formData.password}
//                       onChange={handleChange}
//                       placeholder="••••••••"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                       required
//                       minLength="8"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Confirm Password
//                     </label>
//                     <input
//                       type="password"
//                       name="confirmPassword"
//                       value={formData.confirmPassword}
//                       onChange={handleChange}
//                       placeholder="••••••••"
//                       className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
//                       required
//                     />
//                   </div>

//                   {/* Trial Terms Agreement */}
//                   <div className="space-y-3 mt-4">
//                     <div className="flex items-start gap-2">
//                       <input
//                         type="checkbox"
//                         name="agreeToTerms"
//                         checked={formData.agreeToTerms}
//                         onChange={handleChange}
//                         className="mt-1"
//                         id="terms"
//                       />
//                       <label htmlFor="terms" className="text-sm text-gray-600">
//                         I agree to the{' '}
//                         <a href="#" className="text-cyan-600 hover:underline">Terms of Service</a> and{' '}
//                         <a href="#" className="text-cyan-600 hover:underline">Privacy Policy</a>. 
//                         I understand my trial will auto-expire after 15 days.
//                       </label>
//                     </div>

//                     <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
//                       <p className="text-xs text-yellow-700 flex items-center gap-1">
//                         <span>⚠️</span>
//                         Your trial will automatically deactivate after 15 days. 
//                         You'll receive WhatsApp reminders before expiration.
//                       </p>
//                     </div>
//                   </div>
//                 </>
//               )}

//               {/* Step 3: Confirmation & Trial Details */}
//               {step === 3 && trialDetails && (
//                 <>
//                   <div className="text-center py-2">
//                     <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
//                       <span className="text-3xl">✅</span>
//                     </div>
                    
//                     <h3 className="text-xl font-bold text-gray-800 mb-2">
//                       Trial Activated!
//                     </h3>
                    
//                     <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 text-left mb-4">
//                       <h4 className="font-semibold text-gray-700 mb-2">📋 Trial Details:</h4>
//                       <div className="space-y-2 text-sm">
//                         <p><span className="font-medium">Start Date:</span> {trialDetails.start}</p>
//                         <p><span className="font-medium">End Date:</span> {trialDetails.end}</p>
//                         <p><span className="font-medium">Days Remaining:</span> 15</p>
//                         <div className="bg-white p-2 rounded border border-gray-200 mt-2">
//                           <p className="text-xs text-gray-500">
//                             ℹ️ A confirmation message has been sent to your WhatsApp number: 
//                             <span className="font-medium text-gray-700"> {formData.countryCode}{formData.mobileNo}</span>
//                           </p>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="bg-blue-50 rounded-lg p-3 text-sm">
//                       <p className="text-blue-700">
//                         📱 Check your WhatsApp for trial details and next steps!
//                       </p>
//                       <p className="text-xs text-blue-600 mt-1">
//                         You'll receive reminders before your trial expires.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex gap-3 pt-4">
//                     <button
//                       type="button"
//                       onClick={() => window.location.href = '/dashboard'}
//                       className="flex-1 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition"
//                     >
//                       Go to Dashboard →
//                     </button>
//                   </div>
//                 </>
//               )}

//               {/* Navigation Buttons (for steps 1 and 2) */}
//               {step < 3 && (
//                 <div className="flex gap-3 pt-4">
//                   {step > 1 && (
//                     <button
//                       type="button"
//                       onClick={goBack}
//                       className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
//                     >
//                       Back
//                     </button>
//                   )}
//                   <button
//                     type="submit"
//                     className="flex-1 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition shadow-lg"
//                   >
//                     {step === 1 && 'Continue →'}
//                     {step === 2 && 'Start 15-Day Trial →'}
//                   </button>
//                 </div>
//               )}
//             </form>
//           </div>

//           {/* Right Section - Features */}
//           <div className="space-y-6">
//             <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
//               Unlock the Full Potential of Your Business with{' '}
//               <span className="text-green-600">WhatsApp</span>
//             </h1>

//             {/* Trial Timer Banner */}
//             <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-xl p-4 shadow-lg">
//               <div className="flex items-center gap-3">
//                 <span className="text-2xl">⏰</span>
//                 <div>
//                   <h3 className="font-bold">15-Day Free Trial</h3>
//                   <p className="text-sm opacity-90">Full access • No credit card required</p>
//                 </div>
//               </div>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
//                 <h3 className="font-semibold mb-1 text-gray-900">🎯 Targeted Campaigns</h3>
//                 <p className="text-sm text-gray-600">Personalized offers that drive results</p>
//               </div>
//               <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
//                 <h3 className="font-semibold mb-1 text-gray-900">📋 Ready Templates</h3>
//                 <p className="text-sm text-gray-600">Timely updates with ease</p>
//               </div>
//               <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
//                 <h3 className="font-semibold mb-1 text-gray-900">💬 24/7 Engagement</h3>
//                 <p className="text-sm text-gray-600">No-code chatbots</p>
//               </div>
//               <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
//                 <h3 className="font-semibold mb-1 text-gray-900">📦 Product Catalogue</h3>
//                 <p className="text-sm text-gray-600">Boost sales instantly</p>
//               </div>
//             </div>

//             {/* WhatsApp Notification Preview */}
//             <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
//               <div className="flex items-center gap-2 mb-2">
//                 <span className="text-green-500 text-xl">📱</span>
//                 <h3 className="font-semibold text-gray-700">WhatsApp Notification</h3>
//               </div>
//               <p className="text-xs text-gray-500 mb-2">You'll receive trial details on WhatsApp</p>
//               <div className="bg-white rounded-lg p-3 border border-gray-200">
//                 <div className="flex items-center gap-2 mb-2">
//                   <div className="w-6 h-6 bg-green-500 rounded-full"></div>
//                   <span className="text-xs font-semibold">Anlook Business</span>
//                 </div>
//                 <p className="text-xs text-gray-600">
//                   ✅ Your 15-day trial is active! Full features unlocked until [date]. 
//                   Check your dashboard to get started!
//                 </p>
//               </div>
//             </div>

//             <p className="text-sm text-gray-700 mt-4 font-medium">
//               Grow smarter, engage faster with Anlook's WhatsApp automation!
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TrialAccountPage;
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

const TrialAccountPage = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: '',
    countryCode: '+91',
    mobileNo: '',
    dob: '',
    gender: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const [trialDetails, setTrialDetails] = useState(null);

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      
      if (formData.password !== formData.confirmPassword) {
        toast.error("Passwords don't match!");
        return;
      }
      if (formData.password.length < 8) {
        toast.error("Password must be at least 8 characters!");
        return;
      }
      if (!formData.agreeToTerms) {
        toast.error("Please agree to the terms and conditions!");
        return;
      }
      
      setLoading(true);
      
      try {
        
        const response = await axios.post('http://localhost:5000/api/demo/register', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          emailId: formData.emailId,
          countryCode: formData.countryCode,
          mobileNo: formData.mobileNo,
          dob: formData.dob,
          gender: formData.gender,
          password: formData.password
        });

        if (response.data.success) {
          const { user, trial, token } = response.data;
          
          
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(user));
          
          setTrialDetails({
            ...trial,
            userName: `${user.firstName} ${user.lastName}`,
            whatsappNumber: `${formData.countryCode}${formData.mobileNo}`
          });
          
          setStep(3);
          toast.success('Trial account created successfully! Check your WhatsApp for details.');
        }
      } catch (error) {
        toast.error(error.response?.data?.error || 'Error creating trial account');
      } finally {
        setLoading(false);
      }
    }
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const steps = [
    { number: 1, title: 'Personal Info' },
    { number: 2, title: 'Security & Trial' },
    { number: 3, title: 'Confirmation' }
  ];

  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,#d4f7f4,#e6ecf4)]">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          
          
          <div className="bg-white rounded-2xl p-6 lg:p-10 shadow-xl">
        
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                {steps.map((s) => (
                  <div key={s.number} className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      step >= s.number 
                        ? 'bg-green-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {s.number}
                    </div>
                    <span className="text-xs mt-1 text-gray-600">{s.title}</span>
                  </div>
                ))}
              </div>
              <div className="h-1 bg-gray-200 rounded">
                <div 
                  className="h-1 bg-green-500 rounded transition-all duration-300"
                  style={{ width: `${(step / 3) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {step === 1 && 'Create Your Trial Account'}
                {step === 2 && 'Complete Your 15-Day Trial Setup'}
                {step === 3 && 'Trial Activated Successfully!'}
              </h2>
              <p className="text-gray-600 text-sm mt-1">
                {step === 1 && 'Start your 15-day free trial today'}
                {step === 2 && 'Almost done! Set up your account'}
                {step === 3 && 'Your trial has been activated. Check your WhatsApp!'}
              </p>
            </div>
<form onSubmit={handleSubmit} method="POST" className="space-y-4">
           
              {step === 1 && (
                <>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-2 text-blue-700">
                      <span className="text-xl">🎁</span>
                      <span className="font-semibold">15-Day Free Trial</span>
                    </div>
                    <p className="text-sm text-blue-600 mt-1">
                      Full access to all features • No credit card required • Cancel anytime
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Business Email
                    </label>
                    <input
                      type="email"
                      name="emailId"
                      value={formData.emailId}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Country
                      </label>
                      <select 
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      >
                        <option value="+91">+91 (India)</option>
                        <option value="+1">+1 (USA)</option>
                        <option value="+44">+44 (UK)</option>
                        <option value="+61">+61 (Australia)</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        name="mobileNo"
                        value={formData.mobileNo}
                        onChange={handleChange}
                        placeholder="9876543210"
                        maxLength="10"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        We'll send trial details on WhatsApp
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Gender
                      </label>
                      <select 
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

             
              {step === 2 && (
                <>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-4">
                    <h3 className="font-semibold text-gray-800 mb-2">🎉 Your 15-Day Trial Benefits:</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>✓ Full access to all WhatsApp Business features</li>
                      <li>✓ Targeted campaign management</li>
                      <li>✓ Ready-to-use message templates</li>
                      <li>✓ 24/7 chatbot automation</li>
                      <li>✓ Product catalog integration</li>
                    </ul>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                      minLength="8"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      required
                    />
                  </div>

                  <div className="space-y-3 mt-4">
                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        name="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className="mt-1"
                        id="terms"
                      />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to the{' '}
                        <a href="#" className="text-cyan-600 hover:underline">Terms of Service</a> and{' '}
                        <a href="#" className="text-cyan-600 hover:underline">Privacy Policy</a>. 
                        I understand my trial will auto-expire after 15 days.
                      </label>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                      <p className="text-xs text-yellow-700 flex items-center gap-1">
                        <span>⚠️</span>
                        Your trial will automatically deactivate after 15 days. 
                        You'll receive WhatsApp reminders before expiration.
                      </p>
                    </div>
                  </div>
                </>
              )}

              {step === 3 && trialDetails && (
                <>
                  <div className="text-center py-2">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">✅</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Trial Activated, {trialDetails.userName?.split(' ')[0]}!
                    </h3>
                    
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 text-left mb-4">
                      <h4 className="font-semibold text-gray-700 mb-2">📋 Trial Details:</h4>
                      <div className="space-y-2 text-sm">
                        <p><span className="font-medium">Start Date:</span> {new Date(trialDetails.startDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <p><span className="font-medium">End Date:</span> {new Date(trialDetails.endDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        <p><span className="font-medium">Days Remaining:</span> {trialDetails.daysRemaining}</p>
                        <div className="bg-white p-2 rounded border border-gray-200 mt-2">
                          <p className="text-xs text-gray-500">
                            ℹ️ A confirmation message has been sent to your WhatsApp number: 
                            <span className="font-medium text-gray-700"> {trialDetails.whatsappNumber}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 rounded-lg p-3 text-sm">
                      <p className="text-blue-700">
                        📱 Check your WhatsApp for trial details and next steps!
                      </p>
                      <p className="text-xs text-blue-600 mt-1">
                        You'll receive reminders on days 7, 3, and 1 before your trial expires.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <button
                      type="button"
                      onClick={() => window.location.href = '/dashboard'}
                      className="flex-1 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition"
                    >
                      Go to Dashboard →
                    </button>
                  </div>
                </>
              )}

              {step < 3 && (
                <div className="flex gap-3 pt-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={goBack}
                      className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition"
                      disabled={loading}
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 px-6 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Processing...' : step === 1 ? 'Continue →' : 'Start 15-Day Trial →'}
                  </button>
                </div>
              )}
            </form>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Unlock the Full Potential of Your Business with{' '}
              <span className="text-green-600">WhatsApp</span>
            </h1>

            <div className="bg-gradient-to-r from-green-500 to-cyan-500 text-white rounded-xl p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⏰</span>
                <div>
                  <h3 className="font-bold">15-Day Free Trial</h3>
                  <p className="text-sm opacity-90">Full access • No credit card required</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold mb-1 text-gray-900">🎯 Targeted Campaigns</h3>
                <p className="text-sm text-gray-600">Personalized offers that drive results</p>
              </div>
              <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold mb-1 text-gray-900">📋 Ready Templates</h3>
                <p className="text-sm text-gray-600">Timely updates with ease</p>
              </div>
              <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold mb-1 text-gray-900">💬 24/7 Engagement</h3>
                <p className="text-sm text-gray-600">No-code chatbots</p>
              </div>
              <div className="bg-white shadow-md rounded-xl p-4 border border-gray-200">
                <h3 className="font-semibold mb-1 text-gray-900">📦 Product Catalogue</h3>
                <p className="text-sm text-gray-600">Boost sales instantly</p>
              </div>
            </div>

            {/* WhatsApp Notification Preview */}
            <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-500 text-xl">📱</span>
                <h3 className="font-semibold text-gray-700">WhatsApp Notification</h3>
              </div>
              <p className="text-xs text-gray-500 mb-2">You'll receive these reminders:</p>
              <div className="space-y-2">
                <div className="bg-white rounded-lg p-2 border border-gray-200 text-xs">
                  <span className="font-semibold">Day 7:</span> 7 days remaining reminder
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200 text-xs">
                  <span className="font-semibold">Day 3:</span> 3 days remaining - upgrade reminder
                </div>
                <div className="bg-white rounded-lg p-2 border border-gray-200 text-xs">
                  <span className="font-semibold">Day 1:</span> Last day reminder
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-700 mt-4 font-medium">
              Grow smarter, engage faster with Anlook's WhatsApp automation!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialAccountPage;