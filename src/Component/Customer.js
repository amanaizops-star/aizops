// // // import React, { useState } from "react";
// // // import robotBg from "../assets/images/robot.png";

// // // export default function BuyPlanForm() {

// // //   const [step, setStep] = useState(1);

// // //   const [formData, setFormData] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     countryCode: "+91",
// // //     mobileNo: "",
// // //     dob: "",
// // //     gender: "",
// // //     password: "",
// // //     confirmPassword: "",
// // //     otp: ""
// // //   });

// // //   const [errors, setErrors] = useState({});

// // //   const handleChange = (e) => {
// // //     setFormData({ ...formData, [e.target.name]: e.target.value });
// // //   };

// // //   /* ---------------- VALIDATION ---------------- */

// // //   const validateStep1 = () => {
// // //     let newErrors = {};

// // //     if (!formData.firstName.trim()) newErrors.firstName = "Required";
// // //     if (!formData.lastName.trim()) newErrors.lastName = "Required";
// // //     if (!formData.email.trim()) newErrors.email = "Required";
// // //     if (!formData.mobileNo.trim()) newErrors.mobileNo = "Required";
// // //     if (!formData.dob) newErrors.dob = "Required";
// // //     if (!formData.gender) newErrors.gender = "Required";

// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const validateStep2 = () => {
// // //     let newErrors = {};

// // //     if (!formData.password) newErrors.password = "Password required";
// // //     if (formData.password.length < 6)
// // //       newErrors.password = "Minimum 6 characters";

// // //     if (!formData.confirmPassword)
// // //       newErrors.confirmPassword = "Confirm your password";

// // //     if (formData.confirmPassword !== formData.password)
// // //       newErrors.confirmPassword = "Passwords do not match";

// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const validateStep3 = () => {
// // //     let newErrors = {};
// // //     if (!formData.otp) newErrors.otp = "Enter OTP";
// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   /* ---------------- HANDLERS ---------------- */

// // //   const handleNext = () => {
// // //     if (step === 1 && validateStep1()) setStep(2);
// // //     else if (step === 2 && validateStep2()) {
// // //       alert("OTP Sent to your mobile number 📲");
// // //       setStep(3);
// // //     }
// // //   };

// // //   const handleBack = () => {
// // //     setErrors({});
// // //     setStep(step - 1);
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     if (validateStep3()) {
// // //       alert("Account Created Successfully ✅");
// // //       console.log(formData);
// // //     }
// // //   };

// // //   /* ---------------- UI ---------------- */

// // //   return (
// // //  <div className="min-h-screen bg-[linear-gradient(90deg,#d4f7f4,#e6ecf4)] p-6 flex justify-center items-center">

// // //   <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl overflow-hidden">

// // //     {/* Header */}
// // //     <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 text-center">
// // //       <h3 className="text-xl font-semibold">
// // //         {step === 1 && "Fill Your Details to Continue"}
// // //         {step === 2 && "Create Your Password"}
// // //         {step === 3 && "OTP Verification"}
// // //       </h3>
// // //     </div>

// // //     {/* Form Body */}
// // //     <div className="p-4 p-md-5">
// // //       <form onSubmit={handleSubmit}>
// // //         <div className="row g-3">

// // //           {/* STEP 1 */}
// // //           {step === 1 && (
// // //             <>
// // //               <Input col="col-md-6" label="First Name" name="firstName" value={formData.firstName} onChange={handleChange} error={errors.firstName}/>
// // //               <Input col="col-md-6" label="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} error={errors.lastName}/>
// // //               <Input col="col-12" label="Email" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email}/>

// // //               <div className="col-md-3">
// // //                 <label className="form-label">Country</label>
// // //                 <select
// // //                   name="countryCode"
// // //                   className="form-select"
// // //                   value={formData.countryCode}
// // //                   onChange={handleChange}
// // //                 >
// // //                   <option value="+91">+91</option>
// // //                   <option value="+1">+1</option>
// // //                 </select>
// // //               </div>

// // //               <Input col="col-md-9" label="Mobile Number" name="mobileNo" value={formData.mobileNo} onChange={handleChange} error={errors.mobileNo}/>
// // //               <Input col="col-md-6" label="Date of Birth" name="dob" type="date" value={formData.dob} onChange={handleChange} error={errors.dob}/>

// // //               <div className="col-md-6">
// // //                 <label className="form-label">Gender</label>
// // //                 <select
// // //                   name="gender"
// // //                   className={`form-select ${errors.gender && "is-invalid"}`}
// // //                   value={formData.gender}
// // //                   onChange={handleChange}
// // //                 >
// // //                   <option value="">Select Gender</option>
// // //                   <option>Male</option>
// // //                   <option>Female</option>
// // //                   <option>Other</option>
// // //                 </select>
// // //                 <div className="invalid-feedback">{errors.gender}</div>
// // //               </div>
// // //             </>
// // //           )}

// // //           {/* STEP 2 */}
// // //           {step === 2 && (
// // //             <>
// // //               <Input col="col-md-6" label="Password" name="password" type="password"
// // //                 value={formData.password} onChange={handleChange} error={errors.password}
// // //               />

// // //               <Input col="col-md-6" label="Confirm Password" name="confirmPassword" type="password"
// // //                 value={formData.confirmPassword} onChange={handleChange} error={errors.confirmPassword}
// // //               />
// // //             </>
// // //           )}

// // //           {/* STEP 3 */}
// // //           {step === 3 && (
// // //             <>
// // //               <Input col="col-12" label="Enter OTP" name="otp"
// // //                 value={formData.otp} onChange={handleChange} error={errors.otp}
// // //               />
// // //               <p className="text-muted">
// // //                 OTP sent to {formData.countryCode} {formData.mobileNo}
// // //               </p>
// // //             </>
// // //           )}

// // //           {/* Buttons */}
// // //           <div className="col-12 mt-4 d-flex justify-content-between">

// // //             {step > 1 && (
// // //               <button
// // //                 type="button"
// // //                 className="btn btn-outline-secondary px-4"
// // //                 onClick={handleBack}
// // //               >
// // //                 Back
// // //               </button>
// // //             )}

// // //             {step < 3 && (
// // //               <button
// // //                 type="button"
// // //                 className="btn btn-primary px-4 ms-auto"
// // //                 onClick={handleNext}
// // //               >
// // //                 Continue
// // //               </button>
// // //             )}

// // //             {step === 3 && (
// // //               <button
// // //                 type="submit"
// // //                 className="btn btn-success px-4 ms-auto"
// // //               >
// // //                 Verify & Create Account
// // //               </button>
// // //             )}

// // //           </div>

// // //         </div>
// // //       </form>
// // //     </div>

// // //   </div>
// // // </div>

// // //   );
// // // }

// // // /* ---------------- REUSABLE INPUT ---------------- */

// // // function Input({ col, label, name, type = "text", value, onChange, error }) {
// // //   return (
// // //     <div className={`col-12 ${col}`}>
// // //       <label className="form-label">{label}</label>
// // //       <input
// // //         type={type}
// // //         name={name}
// // //         value={value}
// // //         onChange={onChange}
// // //         className={`form-control ${error ? "is-invalid" : ""}`}
// // //       />
// // //       <div className="invalid-feedback">{error}</div>
// // //     </div>
// // //   );
// // // }


// // import React, { useState } from "react";
// // import robotBg from "../assets/images/robot.png";

// // export default function BuyPlanForm() {
// //   const [step, setStep] = useState(1);
// //   const [customerId, setCustomerId] = useState(null);
// //   const [loading, setLoading] = useState(false);

// //   const [formData, setFormData] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     countryCode: "+91",
// //     mobileNo: "",
// //     dob: "",
// //     gender: "",
// //     password: "",
// //     confirmPassword: "",
// //     otp: ""
// //   });

// //   const [errors, setErrors] = useState({});

// //   const API_BASE_URL = 'http://localhost:5000/api/customers';

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   /* ---------------- VALIDATION ---------------- */

// //   const validateStep1 = () => {
// //     let newErrors = {};

// //     if (!formData.firstName.trim()) newErrors.firstName = "Required";
// //     if (!formData.lastName.trim()) newErrors.lastName = "Required";
// //     if (!formData.email.trim()) newErrors.email = "Required";
// //     if (!formData.mobileNo.trim()) newErrors.mobileNo = "Required";
// //     if (!formData.dob) newErrors.dob = "Required";
// //     if (!formData.gender) newErrors.gender = "Required";

// //     // Email validation
// //     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// //     if (formData.email && !emailRegex.test(formData.email)) {
// //       newErrors.email = "Invalid email format";
// //     }

// //     // Mobile validation
// //     const mobileRegex = /^\d{10}$/;
// //     if (formData.mobileNo && !mobileRegex.test(formData.mobileNo)) {
// //       newErrors.mobileNo = "Enter 10 digit mobile number";
// //     }

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const validateStep2 = () => {
// //     let newErrors = {};

// //     if (!formData.password) newErrors.password = "Password required";
// //     if (formData.password.length < 6)
// //       newErrors.password = "Minimum 6 characters";

// //     if (!formData.confirmPassword)
// //       newErrors.confirmPassword = "Confirm your password";

// //     if (formData.confirmPassword !== formData.password)
// //       newErrors.confirmPassword = "Passwords do not match";

// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const validateStep3 = () => {
// //     let newErrors = {};
// //     if (!formData.otp) newErrors.otp = "Enter OTP";
// //     if (formData.otp && formData.otp.length !== 6) 
// //       newErrors.otp = "OTP must be 6 digits";
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   /* ---------------- API HANDLERS ---------------- */

// //  const handleNext = async () => {
// //   if (step === 1 && validateStep1()) {
// //     setLoading(true);
// //     try {
// //       console.log('🚀 Sending request to:', `${API_BASE_URL}/register`);
// //       console.log('📦 Request data:', {
// //         firstName: formData.firstName,
// //         lastName: formData.lastName,
// //         email: formData.email,
// //         mobileNo: formData.mobileNo,
// //         dob: formData.dob,
// //         gender: formData.gender
// //       });
      
// //       const response = await fetch(`${API_BASE_URL}/register`, {
// //         method: 'POST',
// //         headers: { 
// //           'Content-Type': 'application/json',
// //           'Accept': 'application/json'
// //         },
// //         body: JSON.stringify({
// //           firstName: formData.firstName,
// //           lastName: formData.lastName,
// //           email: formData.email,
// //           countryCode: formData.countryCode,
// //           mobileNo: formData.mobileNo,
// //           dob: formData.dob,
// //           gender: formData.gender
// //         })
// //       });
      
// //       console.log('📨 Response status:', response.status);
// //       console.log('📨 Response headers:', response.headers);
      
// //       const data = await response.json();
// //       console.log('📦 Response data:', data);
      
// //       if (response.ok && data.success) {
// //         setCustomerId(data.customerId);
// //         setStep(2);
// //       } else {
// //         alert(data.message || `Registration failed (Status: ${response.status})`);
// //       }
// //     } catch (error) {
// //       console.error('❌ API Error:', error);
// //       alert(`Error connecting to server: ${error.message}. Make sure server is running on port 5000.`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }
// //   else if (step === 2 && validateStep2()) {
// //     setLoading(true);
// //     try {
// //       console.log('🚀 Sending request to:', `${API_BASE_URL}/set-password/${customerId}`);
      
// //       const response = await fetch(`${API_BASE_URL}/set-password/${customerId}`, {
// //         method: 'POST',
// //         headers: { 
// //           'Content-Type': 'application/json',
// //           'Accept': 'application/json'
// //         },
// //         body: JSON.stringify({ password: formData.password })
// //       });
      
// //       console.log('📨 Response status:', response.status);
      
// //       const data = await response.json();
// //       console.log('📦 Response data:', data);
      
// //       if (response.ok && data.success) {
// //         alert('OTP Sent to your mobile number 📲');
// //         setStep(3);
// //       } else {
// //         alert(data.message || `Failed to set password (Status: ${response.status})`);
// //       }
// //     } catch (error) {
// //       console.error('❌ API Error:', error);
// //       alert(`Error connecting to server: ${error.message}`);
// //     } finally {
// //       setLoading(false);
// //     }
// //   }
// // };

// //   const handleBack = () => {
// //     setErrors({});
// //     setStep(step - 1);
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (validateStep3()) {
// //       setLoading(true);
// //       try {
// //         const response = await fetch(`${API_BASE_URL}/verify-otp/${customerId}`, {
// //           method: 'POST',
// //           headers: { 'Content-Type': 'application/json' },
// //           body: JSON.stringify({ otp: formData.otp })
// //         });
        
// //         const data = await response.json();
        
// //         if (data.success) {
// //           alert('Account Created Successfully ✅');
// //           console.log('Customer Data:', data.customer);
          
// //           // Reset form after successful registration
// //           setFormData({
// //             firstName: "",
// //             lastName: "",
// //             email: "",
// //             countryCode: "+91",
// //             mobileNo: "",
// //             dob: "",
// //             gender: "",
// //             password: "",
// //             confirmPassword: "",
// //             otp: ""
// //           });
// //           setStep(1);
// //           setCustomerId(null);
          
// //           // You can redirect or show success message here
// //         } else {
// //           alert(data.message || 'OTP verification failed');
// //         }
// //       } catch (error) {
// //         alert('Error connecting to server. Please try again.');
// //         console.error('API Error:', error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //   };

// //   // Optional: Add resend OTP function
// //   const handleResendOTP = async () => {
// //     setLoading(true);
// //     try {
// //       const response = await fetch(`${API_BASE_URL}/resend-otp/${customerId}`, {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' }
// //       });
      
// //       const data = await response.json();
      
// //       if (data.success) {
// //         alert('OTP resent successfully 📲');
// //       } else {
// //         alert(data.message || 'Failed to resend OTP');
// //       }
// //     } catch (error) {
// //       alert('Error connecting to server');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

 

// //   return (
// //     <div className="min-h-screen bg-[linear-gradient(90deg,#d4f7f4,#e6ecf4)] p-6 flex justify-center items-center">
// //       <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl overflow-hidden">

// //         {/* Header */}
// //         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 text-center">
// //           <h3 className="text-xl font-semibold">
// //             {step === 1 && "Fill Your Details to Continue"}
// //             {step === 2 && "Create Your Password"}
// //             {step === 3 && "OTP Verification"}
// //           </h3>
// //         </div>

// //         {/* Form Body */}
// //         <div className="p-4 p-md-5">
// //           <form onSubmit={handleSubmit}>
// //             <div className="row g-3">

// //               {/* STEP 1 */}
// //               {step === 1 && (
// //                 <>
// //                   <Input 
// //                     col="col-md-6" 
// //                     label="First Name" 
// //                     name="firstName" 
// //                     value={formData.firstName} 
// //                     onChange={handleChange} 
// //                     error={errors.firstName}
// //                   />
// //                   <Input 
// //                     col="col-md-6" 
// //                     label="Last Name" 
// //                     name="lastName" 
// //                     value={formData.lastName} 
// //                     onChange={handleChange} 
// //                     error={errors.lastName}
// //                   />
// //                   <Input 
// //                     col="col-12" 
// //                     label="Email" 
// //                     name="email" 
// //                     type="email" 
// //                     value={formData.email} 
// //                     onChange={handleChange} 
// //                     error={errors.email}
// //                   />

// //                   <div className="col-md-3">
// //                     <label className="form-label">Country Code</label>
// //                     <select
// //                       name="countryCode"
// //                       className="form-select"
// //                       value={formData.countryCode}
// //                       onChange={handleChange}
// //                     >
// //                       <option value="+91">+91 (India)</option>
// //                       <option value="+1">+1 (USA)</option>
// //                       <option value="+44">+44 (UK)</option>
// //                       <option value="+61">+61 (Australia)</option>
// //                     </select>
// //                   </div>

// //                   <Input 
// //                     col="col-md-9" 
// //                     label="Mobile Number" 
// //                     name="mobileNo" 
// //                     value={formData.mobileNo} 
// //                     onChange={handleChange} 
// //                     error={errors.mobileNo}
// //                     placeholder="10 digit mobile number"
// //                   />
// //                   <Input 
// //                     col="col-md-6" 
// //                     label="Date of Birth" 
// //                     name="dob" 
// //                     type="date" 
// //                     value={formData.dob} 
// //                     onChange={handleChange} 
// //                     error={errors.dob}
// //                   />

// //                   <div className="col-md-6">
// //                     <label className="form-label">Gender</label>
// //                     <select
// //                       name="gender"
// //                       className={`form-select ${errors.gender ? "is-invalid" : ""}`}
// //                       value={formData.gender}
// //                       onChange={handleChange}
// //                     >
// //                       <option value="">Select Gender</option>
// //                       <option value="Male">Male</option>
// //                       <option value="Female">Female</option>
// //                       <option value="Other">Other</option>
// //                     </select>
// //                     <div className="invalid-feedback">{errors.gender}</div>
// //                   </div>
// //                 </>
// //               )}

// //               {/* STEP 2 */}
// //               {step === 2 && (
// //                 <>
// //                   <Input 
// //                     col="col-md-6" 
// //                     label="Password" 
// //                     name="password" 
// //                     type="password"
// //                     value={formData.password} 
// //                     onChange={handleChange} 
// //                     error={errors.password}
// //                   />

// //                   <Input 
// //                     col="col-md-6" 
// //                     label="Confirm Password" 
// //                     name="confirmPassword" 
// //                     type="password"
// //                     value={formData.confirmPassword} 
// //                     onChange={handleChange} 
// //                     error={errors.confirmPassword}
// //                   />
// //                 </>
// //               )}

// //               {/* STEP 3 */}
// //               {step === 3 && (
// //                 <>
// //                   <Input 
// //                     col="col-12" 
// //                     label="Enter OTP" 
// //                     name="otp"
// //                     value={formData.otp} 
// //                     onChange={handleChange} 
// //                     error={errors.otp}
// //                     placeholder="6 digit OTP"
// //                   />
// //                   <div className="col-12">
// //                     <p className="text-muted">
// //                       OTP sent to {formData.countryCode} {formData.mobileNo}
// //                     </p>
// //                     <button 
// //                       type="button" 
// //                       className="btn btn-link p-0"
// //                       onClick={handleResendOTP}
// //                       disabled={loading}
// //                     >
// //                       Resend OTP
// //                     </button>
// //                   </div>
// //                 </>
// //               )}

// //               {/* Buttons */}
// //               <div className="col-12 mt-4 d-flex justify-content-between">

// //                 {step > 1 && (
// //                   <button
// //                     type="button"
// //                     className="btn btn-outline-secondary px-4"
// //                     onClick={handleBack}
// //                     disabled={loading}
// //                   >
// //                     Back
// //                   </button>
// //                 )}

// //                 {step < 3 && (
// //                   <button
// //                     type="button"
// //                     className="btn btn-primary px-4 ms-auto"
// //                     onClick={handleNext}
// //                     disabled={loading}
// //                   >
// //                     {loading ? 'Processing...' : 'Continue'}
// //                   </button>
// //                 )}

// //                 {step === 3 && (
// //                   <button
// //                     type="submit"
// //                     className="btn btn-success px-4 ms-auto"
// //                     disabled={loading}
// //                   >
// //                     {loading ? 'Verifying...' : 'Verify & Create Account'}
// //                   </button>
// //                 )}

// //               </div>

// //             </div>
// //           </form>
// //         </div>

// //       </div>
// //     </div>
// //   );
// // }

// // /* ---------------- REUSABLE INPUT ---------------- */

// // function Input({ col, label, name, type = "text", value, onChange, error, placeholder }) {
// //   return (
// //     <div className={`col-12 ${col}`}>
// //       <label className="form-label">{label}</label>
// //       <input
// //         type={type}
// //         name={name}
// //         value={value}
// //         onChange={onChange}
// //         className={`form-control ${error ? "is-invalid" : ""}`}
// //         placeholder={placeholder}
// //       />
// //       <div className="invalid-feedback">{error}</div>
// //     </div>
// //   );
// // }


// import React, { useState } from "react";
// import QRCode from "qrcode.react"; 
// import qrLogo from "../assets/images/qr-logo.jpeg"; 

// // import defaultQrIcon from "../assets/images/qr-icon.png";
// export default function BuyPlanForm() {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [customerData, setCustomerData] = useState(null);
//   const [qrData, setQrData] = useState(null);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     countryCode: "+91",
//     mobileNo: "",
//     dob: "",
//     gender: "",
//     password: "",
//     confirmPassword: "",
//     otp: Array(6).fill("") // Store OTP as array for 6 digits
//   });

//   const [errors, setErrors] = useState({});

//   const API_BASE_URL = 'http://localhost:5000/api/customers';

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle OTP input change (6 digits)
//   const handleOtpChange = (index, value) => {
//     if (value.length > 1) return; // Prevent multiple digits
    
//     const newOtp = [...formData.otp];
//     newOtp[index] = value;
//     setFormData({ ...formData, otp: newOtp });
    
//     // Auto-focus next input
//     if (value && index < 5) {
//       const nextInput = document.getElementById(`otp-${index + 1}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

//   // Handle OTP paste
//   const handleOtpPaste = (e) => {
//     e.preventDefault();
//     const pastedData = e.clipboardData.getData('text/plain').slice(0, 6);
//     if (/^\d+$/.test(pastedData)) {
//       const newOtp = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);
//       setFormData({ ...formData, otp: newOtp });
//     }
//   };

//   /* ---------------- VALIDATION ---------------- */

//   const validateStep1 = () => {
//     let newErrors = {};

//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.mobileNo.trim()) newErrors.mobileNo = "Mobile number is required";
//     if (!formData.dob) newErrors.dob = "Date of birth is required";
//     if (!formData.gender) newErrors.gender = "Gender is required";

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (formData.email && !emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     // Mobile validation
//     const mobileRegex = /^\d{10}$/;
//     if (formData.mobileNo && !mobileRegex.test(formData.mobileNo)) {
//       newErrors.mobileNo = "Enter 10 digit mobile number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateStep2 = () => {
//     let newErrors = {};

//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password.length < 6)
//       newErrors.password = "Minimum 6 characters required";
//     if (!/[A-Z]/.test(formData.password))
//       newErrors.password = "Include at least one uppercase letter";
//     if (!/[0-9]/.test(formData.password))
//       newErrors.password = "Include at least one number";

//     if (!formData.confirmPassword)
//       newErrors.confirmPassword = "Please confirm your password";

//     if (formData.confirmPassword !== formData.password)
//       newErrors.confirmPassword = "Passwords do not match";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateStep3 = () => {
//     let newErrors = {};
//     const otpString = formData.otp.join('');
    
//     if (!otpString || otpString.length !== 6) {
//       newErrors.otp = "Enter complete 6-digit OTP";
//     } else if (!/^\d+$/.test(otpString)) {
//       newErrors.otp = "OTP must contain only numbers";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   /* ---------------- API HANDLERS ---------------- */

//   // const handleNext = async () => {
//   //   if (step === 1 && validateStep1()) {
//   //     setLoading(true);
//   //     try {
//   //       console.log('📝 Registering customer...');
        
//   //       const response = await fetch(`${API_BASE_URL}/register`, {
//   //         method: 'POST',
//   //         headers: { 
//   //           'Content-Type': 'application/json',
//   //           'Accept': 'application/json'
//   //         },
//   //         body: JSON.stringify({
//   //           firstName: formData.firstName,
//   //           lastName: formData.lastName,
//   //           email: formData.email,
//   //           countryCode: formData.countryCode,
//   //           mobileNo: formData.mobileNo,
//   //           dob: formData.dob,
//   //           gender: formData.gender
//   //         })
//   //       });
        
//   //       const data = await response.json();
        
//   //       if (response.ok && data.success) {
//   //         setCustomerData(data.customer);
//   //         setStep(2);
//   //       } else {
//   //         alert(data.message || 'Registration failed');
//   //       }
//   //     } catch (error) {
//   //       console.error('Registration Error:', error);
//   //       alert('Error connecting to server. Please try again.');
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }
//   //   else if (step === 2 && validateStep2()) {
//   //     setLoading(true);
//   //     try {
//   //       console.log('🔐 Setting password...');
        
//   //       const response = await fetch(`${API_BASE_URL}/set-password`, {
//   //         method: 'POST',
//   //         headers: { 'Content-Type': 'application/json' },
//   //         body: JSON.stringify({
//   //           email: formData.email,
//   //           password: formData.password
//   //         })
//   //       });
        
//   //       const data = await response.json();
        
//   //       if (response.ok && data.success) {
//   //         alert('OTP sent to your registered mobile number 📲');
//   //         setStep(3);
//   //       } else {
//   //         alert(data.message || 'Failed to set password');
//   //       }
//   //     } catch (error) {
//   //       console.error('Password Error:', error);
//   //       alert('Error setting password. Please try again.');
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
    
//   //   if (step === 3 && validateStep3()) {
//   //     setLoading(true);
//   //     try {
//   //       const otpString = formData.otp.join('');
        
//   //       const response = await fetch(`${API_BASE_URL}/verify-otp`, {
//   //         method: 'POST',
//   //         headers: { 'Content-Type': 'application/json' },
//   //         body: JSON.stringify({
//   //           email: formData.email,
//   //           otp: otpString
//   //         })
//   //       });
        
//   //       const data = await response.json();
        
//   //       if (data.success) {
//   //         // Generate QR code data
//   //         const qrCodeData = {
//   //           customerId: data.customerId,
//   //           name: `${formData.firstName} ${formData.lastName}`,
//   //           email: formData.email,
//   //           mobile: `${formData.countryCode} ${formData.mobileNo}`,
//   //           membershipId: data.membershipId || `MEM${Date.now()}`,
//   //           plan: "Premium Plan", // You can customize this
//   //           validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
//   //         };
          
//   //         setQrData(qrCodeData);
//   //         setStep(4); // Move to QR code step
//   //       } else {
//   //         alert(data.message || 'OTP verification failed');
//   //       }
//   //     } catch (error) {
//   //       console.error('OTP Verification Error:', error);
//   //       alert('Error verifying OTP. Please try again.');
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }
//   // };

//   // const handleResendOTP = async () => {
//   //   setLoading(true);
//   //   try {
//   //     const response = await fetch(`${API_BASE_URL}/resend-otp`, {
//   //       method: 'POST',
//   //       headers: { 'Content-Type': 'application/json' },
//   //       body: JSON.stringify({ email: formData.email })
//   //     });
      
//   //     const data = await response.json();
      
//   //     if (data.success) {
//   //       alert('OTP resent successfully 📲');
//   //       // Clear OTP fields
//   //       setFormData({ ...formData, otp: Array(6).fill("") });
//   //     } else {
//   //       alert(data.message || 'Failed to resend OTP');
//   //     }
//   //   } catch (error) {
//   //     alert('Error resending OTP');
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };


//   // In your BuyPlanForm.jsx - Update the handleNext function

// // In your BuyPlanForm.jsx - Update the handleNext function for step 2

// const handleNext = async () => {
//     if (step === 1 && validateStep1()) {
//         setLoading(true);
//         try {
//             console.log('📝 Registering customer with email:', formData.email);
            
//             const response = await fetch(`${API_BASE_URL}/register`, {
//                 method: 'POST',
//                 headers: { 
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     firstName: formData.firstName,
//                     lastName: formData.lastName,
//                     email: formData.email,
//                     countryCode: formData.countryCode,
//                     mobileNo: formData.mobileNo,
//                     dob: formData.dob,
//                     gender: formData.gender
//                 })
//             });
            
//             const data = await response.json();
//             console.log('Registration response:', data);
            
//             if (response.ok && data.success) {
//                 setCustomerData(data.data);
//                 alert('✅ Registration successful! Now set your password.');
//                 setStep(2);
//             } else {
//                 alert(data.message || 'Registration failed');
//             }
//         } catch (error) {
//             console.error('Registration Error:', error);
//             alert('Error connecting to server. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     }
//     else if (step === 2 && validateStep2()) {
//         setLoading(true);
//         try {
//             console.log('🔐 Setting password for email:', formData.email);
            
//             const response = await fetch(`${API_BASE_URL}/set-password`, {
//                 method: 'POST',
//                 headers: { 
//                     'Content-Type': 'application/json',
//                     'Accept': 'application/json'
//                 },
//                 body: JSON.stringify({
//                     email: formData.email,
//                     password: formData.password
//                 })
//             });
            
//             const data = await response.json();
//             console.log('Set password response:', data);
            
//             if (response.ok && data.success) {
//                 alert('✅ OTP sent to your email! Please check your inbox.');
//                 setStep(3);
                
//                 // Auto-fill OTP for testing (development only)
//                 if (process.env.NODE_ENV === 'development' && data.debug && data.debug.otp) {
//                     console.log('📱 Test OTP:', data.debug.otp);
//                     // Auto-fill OTP
//                     const otpArray = data.debug.otp.split('');
//                     setFormData(prev => ({
//                         ...prev,
//                         otp: otpArray
//                     }));
//                 }
//             } else {
//                 if (response.status === 404) {
//                     // Customer not found - show helpful message with option to register
//                     const shouldRegister = window.confirm(
//                         'Customer not found. Would you like to go back to registration?'
//                     );
//                     if (shouldRegister) {
//                         setStep(1);
//                     }
//                 } else {
//                     alert(data.message || 'Failed to set password');
//                 }
//             }
//         } catch (error) {
//             console.error('Password Error:', error);
//             alert('Error setting password. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     }
// };

// // Update handleSubmit for OTP verification
// const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (step === 3 && validateStep3()) {
//         setLoading(true);
//         try {
//             const otpString = formData.otp.join('');
            
//             const response = await fetch('http://localhost:5000/api/otp/verify', {
//                 method: 'POST',
//                 headers: { 'Content-Type': 'application/json' },
//                 body: JSON.stringify({
//                     mobileNo: formData.mobileNo,
//                     otp: otpString
//                 })
//             });
            
//             const data = await response.json();
            
//             if (data.success) {
//                 // Generate QR code data
//                 const qrCodeData = {
//                     customerId: data.data?.customerId || `CUST${Date.now()}`,
//                     name: `${formData.firstName} ${formData.lastName}`,
//                     email: formData.email,
//                     mobile: `${formData.countryCode} ${formData.mobileNo}`,
//                     membershipId: `MEM${Date.now()}`,
//                     plan: "Premium Plan",
//                     validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
//                 };
                
//                 setQrData(qrCodeData);
//                 setStep(4);
//                 alert('✅ OTP verified successfully!');
//             } else {
//                 alert(data.message || 'OTP verification failed');
//             }
//         } catch (error) {
//             console.error('OTP Verification Error:', error);
//             alert('Error verifying OTP. Please try again.');
//         } finally {
//             setLoading(false);
//         }
//     }
// };

// // Update handleResendOTP
// const handleResendOTP = async () => {
//     setLoading(true);
//     try {
//         const response = await fetch('http://localhost:5000/api/otp/resend', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ 
//                 mobileNo: formData.mobileNo 
//             })
//         });
        
//         const data = await response.json();
        
//         if (data.success) {
//             alert('OTP resent successfully via Fast2SMS 📲');
//             // Clear OTP fields
//             setFormData({ ...formData, otp: Array(6).fill("") });
            
//             // For testing only
//             if (data.debug && data.debug.otp) {
//                 console.log('🔐 New Test OTP:', data.debug.otp);
//             }
//         } else {
//             alert(data.message || 'Failed to resend OTP');
//         }
//     } catch (error) {
//         console.error('Resend OTP Error:', error);
//         alert('Error resending OTP');
//     } finally {
//         setLoading(false);
//     }
// };
//   const handleDownloadQR = () => {
//     const canvas = document.getElementById('qr-code-canvas');
//     if (canvas) {
//       const pngUrl = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
//       const downloadLink = document.createElement('a');
//       downloadLink.href = pngUrl;
//       downloadLink.download = `membership-${formData.firstName}-${formData.lastName}.png`;
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//     }
//   };

//   const handleBack = () => {
//     setErrors({});
//     setStep(step - 1);
//   };

//   const handleReset = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       countryCode: "+91",
//       mobileNo: "",
//       dob: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//       otp: Array(6).fill("")
//     });
//     setStep(1);
//     setCustomerData(null);
//     setQrData(null);
//   };

//   return (
//     <div className="min-h-screen bg-[linear-gradient(90deg,#d4f7f4,#e6ecf4)] p-6 flex justify-center items-center">
//       <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl overflow-hidden">

//         {/* Header with Progress Indicator */}
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6">
//           <div className="text-center mb-2">
//             <h3 className="text-xl font-semibold">
//               {step === 1 && "Fill Your Details"}
//               {step === 2 && "Create Password"}
//               {step === 3 && "OTP Verification"}
//               {step === 4 && "Membership QR Code"}
//             </h3>
//           </div>
          
//           {/* Progress Steps */}
//           <div className="flex justify-center items-center space-x-2 mt-2">
//             {[1, 2, 3, 4].map((s) => (
//               <React.Fragment key={s}>
//                 <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
//                   ${step >= s ? 'bg-white text-indigo-600' : 'bg-indigo-400 text-white'}`}>
//                   {step > s ? '✓' : s}
//                 </div>
//                 {s < 4 && <div className={`w-12 h-1 ${step > s ? 'bg-white' : 'bg-indigo-400'}`} />}
//               </React.Fragment>
//             ))}
//           </div>
//         </div>

//         {/* Form Body */}
//         <div className="p-4 p-md-5">
//           <form onSubmit={handleSubmit}>
//             <div className="row g-3">

//               {/* STEP 1 - Personal Details */}
//               {step === 1 && (
//                 <>
//                   <Input 
//                     col="col-md-6" 
//                     label="First Name" 
//                     name="firstName" 
//                     value={formData.firstName} 
//                     onChange={handleChange} 
//                     error={errors.firstName}
//                     placeholder="Enter first name"
//                   />
//                   <Input 
//                     col="col-md-6" 
//                     label="Last Name" 
//                     name="lastName" 
//                     value={formData.lastName} 
//                     onChange={handleChange} 
//                     error={errors.lastName}
//                     placeholder="Enter last name"
//                   />
//                   <Input 
//                     col="col-12" 
//                     label="Email Address" 
//                     name="email" 
//                     type="email" 
//                     value={formData.email} 
//                     onChange={handleChange} 
//                     error={errors.email}
//                     placeholder="example@email.com"
//                   />

//                   <div className="col-md-3">
//                     <label className="form-label">Country Code</label>
//                     <select
//                       name="countryCode"
//                       className="form-select"
//                       value={formData.countryCode}
//                       onChange={handleChange}
//                     >
//                       <option value="+91">+91 (India)</option>
//                       <option value="+1">+1 (USA)</option>
//                       <option value="+44">+44 (UK)</option>
//                       <option value="+61">+61 (Australia)</option>
//                     </select>
//                   </div>

//                   <Input 
//                     col="col-md-9" 
//                     label="Mobile Number" 
//                     name="mobileNo" 
//                     value={formData.mobileNo} 
//                     onChange={handleChange} 
//                     error={errors.mobileNo}
//                     placeholder="10 digit mobile number"
//                   />
                  
//                   <Input 
//                     col="col-md-6" 
//                     label="Date of Birth" 
//                     name="dob" 
//                     type="date" 
//                     value={formData.dob} 
//                     onChange={handleChange} 
//                     error={errors.dob}
//                   />

//                   <div className="col-md-6">
//                     <label className="form-label">Gender</label>
//                     <select
//                       name="gender"
//                       className={`form-select ${errors.gender ? "is-invalid" : ""}`}
//                       value={formData.gender}
//                       onChange={handleChange}
//                     >
//                       <option value="">Select Gender</option>
//                       <option value="Male">Male</option>
//                       <option value="Female">Female</option>
//                       <option value="Other">Other</option>
//                     </select>
//                     <div className="invalid-feedback">{errors.gender}</div>
//                   </div>
//                 </>
//               )}

//               {/* STEP 2 - Password Creation */}
//               {step === 2 && (
//                 <>
//                   <div className="col-12">
//                     <div className="alert alert-info">
//                       <small>Password must contain: minimum 6 characters, at least one uppercase letter and one number</small>
//                     </div>
//                   </div>
                  
//                   <Input 
//                     col="col-md-6" 
//                     label="Password" 
//                     name="password" 
//                     type="password"
//                     value={formData.password} 
//                     onChange={handleChange} 
//                     error={errors.password}
//                     placeholder="Enter password"
//                   />

//                   <Input 
//                     col="col-md-6" 
//                     label="Confirm Password" 
//                     name="confirmPassword" 
//                     type="password"
//                     value={formData.confirmPassword} 
//                     onChange={handleChange} 
//                     error={errors.confirmPassword}
//                     placeholder="Re-enter password"
//                   />

//                   {/* Password Strength Indicator */}
//                   {formData.password && (
//                     <div className="col-12">
//                       <div className="progress" style={{ height: '5px' }}>
//                         <div 
//                           className={`progress-bar ${
//                             formData.password.length < 6 ? 'bg-danger' :
//                             formData.password.length < 8 ? 'bg-warning' :
//                             'bg-success'
//                           }`} 
//                           style={{ 
//                             width: `${Math.min((formData.password.length / 12) * 100, 100)}%` 
//                           }}
//                         />
//                       </div>
//                       <small className="text-muted">
//                         Password strength: {
//                           formData.password.length < 6 ? 'Weak' :
//                           formData.password.length < 8 ? 'Medium' :
//                           'Strong'
//                         }
//                       </small>
//                     </div>
//                   )}
//                 </>
//               )}

//               {/* STEP 3 - OTP Verification */}
//               {step === 3 && (
//                 <>
//                   <div className="col-12 text-center mb-3">
//                     <p className="text-muted">
//                       Enter the 6-digit OTP sent to<br />
//                       <strong>{formData.countryCode} {formData.mobileNo}</strong>
//                     </p>
//                   </div>

//                   <div className="col-12">
//                     <label className="form-label">Enter OTP</label>
//                     <div className="d-flex justify-content-center gap-2">
//                       {formData.otp.map((digit, index) => (
//                         <input
//                           key={index}
//                           id={`otp-${index}`}
//                           type="text"
//                           className={`form-control text-center ${errors.otp ? 'is-invalid' : ''}`}
//                           style={{ width: '50px', fontSize: '20px' }}
//                           maxLength="1"
//                           value={digit}
//                           onChange={(e) => handleOtpChange(index, e.target.value)}
//                           onPaste={index === 0 ? handleOtpPaste : undefined}
//                           onKeyDown={(e) => {
//                             if (e.key === 'Backspace' && !digit && index > 0) {
//                               const prevInput = document.getElementById(`otp-${index - 1}`);
//                               if (prevInput) prevInput.focus();
//                             }
//                           }}
//                         />
//                       ))}
//                     </div>
//                     {errors.otp && <div className="text-danger text-center mt-2">{errors.otp}</div>}
//                   </div>

//                   <div className="col-12 text-center">
//                     <p className="text-muted small">
//                       Didn't receive OTP? 
//                       <button 
//                         type="button" 
//                         className="btn btn-link p-0 ms-1"
//                         onClick={handleResendOTP}
//                         disabled={loading}
//                       >
//                         Resend OTP
//                       </button>
//                     </p>
//                   </div>
//                 </>
//               )}

//               {/* STEP 4 - QR Code Display */}
//               {/* {step === 4 && qrData && (
//                 <div className="col-12 text-center">
//                   <div className="bg-light p-4 rounded-3">
//                     <h4 className="mb-3">Your Membership QR Code</h4>
                    
//                     <div className="mb-4">
//                       <QRCode
//                         id="qr-code-canvas"
//                         value={JSON.stringify(qrData)}
//                         size={200}
//                         level="H"
//                         includeMargin={true}
//                         renderAs="canvas"
//                       />
//                     </div>

//                     <div className="text-start bg-white p-3 rounded-2 mb-3">
//                       <p><strong>Name:</strong> {qrData.name}</p>
//                       <p><strong>Email:</strong> {qrData.email}</p>
//                       <p><strong>Mobile:</strong> {qrData.mobile}</p>
//                       <p><strong>Membership ID:</strong> {qrData.membershipId}</p>
//                       <p><strong>Plan:</strong> {qrData.plan}</p>
//                       <p><strong>Valid Until:</strong> {qrData.validUntil}</p>
//                     </div>

//                     <div className="d-flex gap-2 justify-content-center">
//                       <button
//                         type="button"
//                         className="btn btn-primary"
//                         onClick={handleDownloadQR}
//                       >
//                         Download QR Code
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn-success"
//                         onClick={handleReset}
//                       >
//                         Create New Account
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               )} */}

//               {step === 4 && qrData && (
//   <div className="col-12 text-center">
//     <div className="bg-light p-4 rounded-3">
//       <h4 className="mb-3 text-indigo-600">🎉 Your Membership QR Code</h4>
      
//       {/* QR Code with Logo Image */}
//       <div className="mb-4 p-3 bg-white rounded-3 d-inline-block shadow">
//         {/* <QRCode
//           id="qr-code-canvas"
//           value={JSON.stringify({
//             id: qrData.customerId,
//             name: qrData.name,
//             email: qrData.email,
//             membership: qrData.membershipId
//           })}
//           size={220}
//           level="H"
//           includeMargin={true}
//           renderAs="canvas"
//           bgColor="#FFFFFF"
//           fgColor="#4F46E5"
          
//           imageSettings={{
//             src: qrLogo, 
//             height: 50,
//             width: 50,
//             excavate: true,
//           }}
//         /> */}
//            <img 
//           src={qrLogo} 
//           alt="QR Logo" 
//           style={{ width: '350px', height: '450px', borderRadius: '10px' }}
//           className="mb-2"
//         />
//       </div>

//       <div className="mb-3">
     
//         <p className="text-muted small">Scan QR code with your phone</p>
//       </div>

//       {/* Membership Details */}
//       <div className="text-start bg-white p-4 rounded-3 mb-3 shadow-sm">
//         <h5 className="border-bottom pb-2 mb-3 text-indigo-600">Member Details</h5>
        
//         <div className="row">
//           <div className="col-md-6">
//             <p className="mb-2">
//               <strong>👤 Name:</strong> {qrData.name}
//             </p>
//             <p className="mb-2">
//               <strong>📧 Email:</strong> {qrData.email}
//             </p>
//             <p className="mb-2">
//               <strong>📱 Mobile:</strong> {qrData.mobile}
//             </p>
//           </div>
//           <div className="col-md-6">
//             <p className="mb-2">
//               <strong>🆔 Member ID:</strong> 
//               <span className="badge bg-info ms-2">{qrData.membershipId}</span>
//             </p>
//             <p className="mb-2">
//               <strong>⭐ Plan:</strong> 
//               <span className="badge bg-success ms-2">{qrData.plan}</span>
//             </p>
//             <p className="mb-2">
//               <strong>📅 Valid Till:</strong> {qrData.validUntil}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Action Buttons */}
//       <div className="d-flex flex-wrap gap-2 justify-content-center">
//         <button
//           type="button"
//           className="btn btn-primary"
//           onClick={handleDownloadQR}
//         >
//           <i className="bi bi-download me-1"></i>
//           Download QR Code
//         </button>
        
//         <button
//           type="button"
//           className="btn btn-success"
//           onClick={handleReset}
//         >
//           <i className="bi bi-plus-circle me-1"></i>
//           Create New Account
//         </button>
//       </div>

//       {/* QR Code Instructions */}
//       <div className="mt-3 text-muted small">
//         <p className="mb-1">✨ Show this QR code at the entrance for verification</p>
//         <p className="mb-0">✨ You can also download and print it</p>
//       </div>
//     </div>
//   </div>
// )}

//               {/* Navigation Buttons - Show only for steps 1-3 */}
//               {step < 4 && (
//                 <div className="col-12 mt-4 d-flex justify-content-between">
//                   {step > 1 && (
//                     <button
//                       type="button"
//                       className="btn btn-outline-secondary px-4"
//                       onClick={handleBack}
//                       disabled={loading}
//                     >
//                       Back
//                     </button>
//                   )}

//                   {step < 3 && (
//                     <button
//                       type="button"
//                       className="btn btn-primary px-4 ms-auto"
//                       onClick={handleNext}
//                       disabled={loading}
//                     >
//                       {loading ? 'Processing...' : 'Continue'}
//                     </button>
//                   )}

//                   {step === 3 && (
//                     <button
//                       type="submit"
//                       className="btn btn-success px-4 ms-auto"
//                       disabled={loading}
//                     >
//                       {loading ? 'Verifying...' : 'Verify & Generate QR'}
//                     </button>
//                   )}
//                 </div>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ---------------- REUSABLE INPUT COMPONENT ---------------- */

// function Input({ col, label, name, type = "text", value, onChange, error, placeholder }) {
//   return (
//     <div className={`col-12 ${col}`}>
//       <label className="form-label">{label}</label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`form-control ${error ? "is-invalid" : ""}`}
//         placeholder={placeholder}
//       />
//       {error && <div className="invalid-feedback">{error}</div>}
//     </div>
//   );
// }


// import React, { useState } from "react";

// export default function BuyPlanForm() {
//   const [step, setStep] = useState(1);
//   const [loading, setLoading] = useState(false);
//   const [customerData, setCustomerData] = useState(null);
//   const [qrData, setQrData] = useState(null);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     countryCode: "+91",
//     mobileNo: "",
//     dob: "",
//     gender: "",
//     password: "",
//     confirmPassword: "",
//     otp: Array(6).fill("")
//   });

//   const [errors, setErrors] = useState({});

//   const API_BASE_URL = 'http://localhost:5000/api/customers';

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle OTP input change
//   const handleOtpChange = (index, value) => {
//     if (value.length > 1) return;
    
//     const newOtp = [...formData.otp];
//     newOtp[index] = value;
//     setFormData({ ...formData, otp: newOtp });
    
//     // Auto-focus next input
//     if (value && index < 5) {
//       const nextInput = document.getElementById(`otp-${index + 1}`);
//       if (nextInput) nextInput.focus();
//     }
//   };

//   // Validation functions
//   const validateStep1 = () => {
//     let newErrors = {};

//     if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!formData.email.trim()) newErrors.email = "Email is required";
//     if (!formData.mobileNo.trim()) newErrors.mobileNo = "Mobile number is required";
//     if (!formData.dob) newErrors.dob = "Date of birth is required";
//     if (!formData.gender) newErrors.gender = "Gender is required";

//     // Email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (formData.email && !emailRegex.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     // Mobile validation
//     const mobileRegex = /^\d{10}$/;
//     if (formData.mobileNo && !mobileRegex.test(formData.mobileNo)) {
//       newErrors.mobileNo = "Enter 10 digit mobile number";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateStep2 = () => {
//     let newErrors = {};

//     if (!formData.password) newErrors.password = "Password is required";
//     if (formData.password.length < 6)
//       newErrors.password = "Minimum 6 characters required";
//     if (!/[A-Z]/.test(formData.password))
//       newErrors.password = "Include at least one uppercase letter";
//     if (!/[0-9]/.test(formData.password))
//       newErrors.password = "Include at least one number";

//     if (!formData.confirmPassword)
//       newErrors.confirmPassword = "Please confirm your password";

//     if (formData.confirmPassword !== formData.password)
//       newErrors.confirmPassword = "Passwords do not match";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateStep3 = () => {
//     let newErrors = {};
//     const otpString = formData.otp.join('');
    
//     if (!otpString || otpString.length !== 6) {
//       newErrors.otp = "Enter complete 6-digit OTP";
//     } else if (!/^\d+$/.test(otpString)) {
//       newErrors.otp = "OTP must contain only numbers";
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   // Handle Next button clicks
//   const handleNext = async () => {
//     // STEP 1: Register Customer
//     if (step === 1 && validateStep1()) {
//       setLoading(true);
//       try {
//         console.log('📝 Registering customer with email:', formData.email);
        
//         const response = await fetch(`${API_BASE_URL}/register`, {
//           method: 'POST',
//           headers: { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           body: JSON.stringify({
//             firstName: formData.firstName,
//             lastName: formData.lastName,
//             email: formData.email,
//             countryCode: formData.countryCode,
//             mobileNo: formData.mobileNo,
//             dob: formData.dob,
//             gender: formData.gender
//           })
//         });
        
//         const data = await response.json();
//         console.log('Registration response:', data);
        
//         if (response.ok && data.success) {
//           setCustomerData(data.data);
//           alert('✅ Registration successful! Now set your password.');
//           setStep(2);
//         } else {
//           alert(data.message || 'Registration failed');
//         }
//       } catch (error) {
//         console.error('Registration Error:', error);
//         alert('Error connecting to server. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     }
    
//     // STEP 2: Set Password
//     else if (step === 2 && validateStep2()) {
//       setLoading(true);
//       try {
//         console.log('🔐 Setting password for email:', formData.email);
        
//         const response = await fetch(`${API_BASE_URL}/set-password`, {
//           method: 'POST',
//           headers: { 
//             'Content-Type': 'application/json',
//             'Accept': 'application/json'
//           },
//           body: JSON.stringify({
//             email: formData.email,
//             password: formData.password
//           })
//         });
        
//         const data = await response.json();
//         console.log('Set password response:', data);
        
//         if (response.ok && data.success) {
//           alert('✅ OTP sent to your email! Please check your inbox.');
//           setStep(3);
          
//           // Auto-fill OTP for testing (development only)
//           if (process.env.NODE_ENV === 'development' && data.debug && data.debug.otp) {
//             console.log('📱 Test OTP:', data.debug.otp);
//             const otpArray = data.debug.otp.split('');
//             setFormData(prev => ({
//               ...prev,
//               otp: otpArray
//             }));
//           }
//         } else {
//           alert(data.message || 'Failed to set password');
//         }
//       } catch (error) {
//         console.error('Password Error:', error);
//         alert('Error setting password. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   // Handle OTP Verification
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (step === 3 && validateStep3()) {
//       setLoading(true);
//       try {
//         const otpString = formData.otp.join('');
        
//         const response = await fetch(`${API_BASE_URL}/verify-otp`, {
//           method: 'POST',
//           headers: { 'Content-Type': 'application/json' },
//           body: JSON.stringify({
//             email: formData.email,
//             otp: otpString
//           })
//         });
        
//         const data = await response.json();
        
//         if (data.success) {
//           // Generate QR code data
//           const qrCodeData = {
//             customerId: data.data.id,
//             name: `${formData.firstName} ${formData.lastName}`,
//             email: formData.email,
//             mobile: `${formData.countryCode} ${formData.mobileNo}`,
//             membershipId: data.data.membershipId,
//             plan: "Premium Plan",
//             validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
//           };
          
//           setQrData(qrCodeData);
//           setStep(4);
//           alert('✅ Account verified successfully!');
//         } else {
//           alert(data.message || 'OTP verification failed');
//         }
//       } catch (error) {
//         console.error('OTP Verification Error:', error);
//         alert('Error verifying OTP. Please try again.');
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   const handleResendOTP = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`${API_BASE_URL}/resend-otp`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 
//           email: formData.email 
//         })
//       });
      
//       const data = await response.json();
      
//       if (data.success) {
//         alert('OTP resent successfully! Please check your email.');
//         setFormData({ ...formData, otp: Array(6).fill("") });
//       } else {
//         alert(data.message || 'Failed to resend OTP');
//       }
//     } catch (error) {
//       console.error('Resend OTP Error:', error);
//       alert('Error resending OTP');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleBack = () => {
//     setErrors({});
//     setStep(step - 1);
//   };

//   const handleReset = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       countryCode: "+91",
//       mobileNo: "",
//       dob: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//       otp: Array(6).fill("")
//     });
//     setStep(1);
//     setCustomerData(null);
//     setQrData(null);
//   };

//   const handleDownloadQR = () => {
//     const canvas = document.getElementById('qr-code-canvas');
//     if (canvas) {
//       const pngUrl = canvas.toDataURL('image/png');
//       const downloadLink = document.createElement('a');
//       downloadLink.href = pngUrl;
//       downloadLink.download = `membership-${formData.firstName}-${formData.lastName}.png`;
//       document.body.appendChild(downloadLink);
//       downloadLink.click();
//       document.body.removeChild(downloadLink);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[linear-gradient(90deg,#d4f7f4,#e6ecf4)] p-6 flex justify-center items-center">
//       <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl overflow-hidden">
        
//         {/* Header */}
//         <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6">
//           <div className="text-center">
//             <h3 className="text-xl font-semibold">
//               {step === 1 && "Fill Your Details"}
//               {step === 2 && "Create Password"}
//               {step === 3 && "OTP Verification"}
//               {step === 4 && "Membership QR Code"}
//             </h3>
//           </div>
//         </div>

//         {/* Form Body */}
//         <div className="p-4 p-md-5">
//           <form onSubmit={handleSubmit}>
//             {/* STEP 1 - Personal Details */}
//             {step === 1 && (
//               <div className="row g-3">
//                 <Input 
//                   col="col-md-6" 
//                   label="First Name" 
//                   name="firstName" 
//                   value={formData.firstName} 
//                   onChange={handleChange} 
//                   error={errors.firstName}
//                   placeholder="Enter first name"
//                 />
//                 <Input 
//                   col="col-md-6" 
//                   label="Last Name" 
//                   name="lastName" 
//                   value={formData.lastName} 
//                   onChange={handleChange} 
//                   error={errors.lastName}
//                   placeholder="Enter last name"
//                 />
//                 <Input 
//                   col="col-12" 
//                   label="Email Address" 
//                   name="email" 
//                   type="email" 
//                   value={formData.email} 
//                   onChange={handleChange} 
//                   error={errors.email}
//                   placeholder="example@email.com"
//                 />

//                 <div className="col-md-3">
//                   <label className="form-label">Country Code</label>
//                   <select
//                     name="countryCode"
//                     className="form-select"
//                     value={formData.countryCode}
//                     onChange={handleChange}
//                   >
//                     <option value="+91">+91 (India)</option>
//                     <option value="+1">+1 (USA)</option>
//                   </select>
//                 </div>

//                 <Input 
//                   col="col-md-9" 
//                   label="Mobile Number" 
//                   name="mobileNo" 
//                   value={formData.mobileNo} 
//                   onChange={handleChange} 
//                   error={errors.mobileNo}
//                   placeholder="10 digit mobile number"
//                 />
                
//                 <Input 
//                   col="col-md-6" 
//                   label="Date of Birth" 
//                   name="dob" 
//                   type="date" 
//                   value={formData.dob} 
//                   onChange={handleChange} 
//                   error={errors.dob}
//                 />

//                 <div className="col-md-6">
//                   <label className="form-label">Gender</label>
//                   <select
//                     name="gender"
//                     className={`form-select ${errors.gender ? "is-invalid" : ""}`}
//                     value={formData.gender}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="Male">Male</option>
//                     <option value="Female">Female</option>
//                     <option value="Other">Other</option>
//                   </select>
//                   {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
//                 </div>
//               </div>
//             )}

//             {/* STEP 2 - Password Creation */}
//             {step === 2 && (
//               <div className="row g-3">
//                 <div className="col-12">
//                   <div className="alert alert-info">
//                     <small>Password must contain: minimum 6 characters, at least one uppercase letter and one number</small>
//                   </div>
//                 </div>
                
//                 <Input 
//                   col="col-md-6" 
//                   label="Password" 
//                   name="password" 
//                   type="password"
//                   value={formData.password} 
//                   onChange={handleChange} 
//                   error={errors.password}
//                   placeholder="Enter password"
//                 />

//                 <Input 
//                   col="col-md-6" 
//                   label="Confirm Password" 
//                   name="confirmPassword" 
//                   type="password"
//                   value={formData.confirmPassword} 
//                   onChange={handleChange} 
//                   error={errors.confirmPassword}
//                   placeholder="Re-enter password"
//                 />
//               </div>
//             )}

//             {/* STEP 3 - OTP Verification */}
//             {step === 3 && (
//               <div className="row g-3">
//                 <div className="col-12 text-center mb-3">
//                   <p className="text-muted">
//                     Enter the 6-digit OTP sent to<br />
//                     <strong>{formData.email}</strong>
//                   </p>
//                 </div>

//                 <div className="col-12">
//                   <label className="form-label">Enter OTP</label>
//                   <div className="d-flex justify-content-center gap-2">
//                     {formData.otp.map((digit, index) => (
//                       <input
//                         key={index}
//                         id={`otp-${index}`}
//                         type="text"
//                         className={`form-control text-center ${errors.otp ? 'is-invalid' : ''}`}
//                         style={{ width: '50px', fontSize: '20px' }}
//                         maxLength="1"
//                         value={digit}
//                         onChange={(e) => handleOtpChange(index, e.target.value)}
//                       />
//                     ))}
//                   </div>
//                   {errors.otp && <div className="text-danger text-center mt-2">{errors.otp}</div>}
//                 </div>

//                 <div className="col-12 text-center">
//                   <p className="text-muted small">
//                     Didn't receive OTP? 
//                     <button 
//                       type="button" 
//                       className="btn btn-link p-0 ms-1"
//                       onClick={handleResendOTP}
//                       disabled={loading}
//                     >
//                       Resend OTP
//                     </button>
//                   </p>
//                 </div>
//               </div>
//             )}

//             {/* STEP 4 - QR Code */}
//             {step === 4 && qrData && (
//               <div className="col-12 text-center">
//                 <div className="bg-light p-4 rounded-3">
//                   <h4 className="mb-3">Your Membership QR Code</h4>
                  
//                   <div className="text-start bg-white p-3 rounded-2 mb-3">
//                     <p><strong>Name:</strong> {qrData.name}</p>
//                     <p><strong>Email:</strong> {qrData.email}</p>
//                     <p><strong>Mobile:</strong> {qrData.mobile}</p>
//                     <p><strong>Membership ID:</strong> {qrData.membershipId}</p>
//                   </div>

//                   <div className="d-flex gap-2 justify-content-center">
//                     <button
//                       type="button"
//                       className="btn btn-primary"
//                       onClick={handleDownloadQR}
//                     >
//                       Download QR Code
//                     </button>
//                     <button
//                       type="button"
//                       className="btn btn-success"
//                       onClick={handleReset}
//                     >
//                       Create New Account
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Navigation Buttons */}
//             {step < 4 && (
//               <div className="col-12 mt-4 d-flex justify-content-between">
//                 {step > 1 && (
//                   <button
//                     type="button"
//                     className="btn btn-outline-secondary px-4"
//                     onClick={handleBack}
//                     disabled={loading}
//                   >
//                     Back
//                   </button>
//                 )}

//                 {step < 3 && (
//                   <button
//                     type="button"
//                     className="btn btn-primary px-4 ms-auto"
//                     onClick={handleNext}
//                     disabled={loading}
//                   >
//                     {loading ? 'Processing...' : 'Continue'}
//                   </button>
//                 )}

//                 {step === 3 && (
//                   <button
//                     type="submit"
//                     className="btn btn-success px-4 ms-auto"
//                     disabled={loading}
//                   >
//                     {loading ? 'Verifying...' : 'Verify & Generate QR'}
//                   </button>
//                 )}
//               </div>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// // Reusable Input Component
// function Input({ col, label, name, type = "text", value, onChange, error, placeholder }) {
//   return (
//     <div className={`col-12 ${col}`}>
//       <label className="form-label">{label}</label>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         className={`form-control ${error ? "is-invalid" : ""}`}
//         placeholder={placeholder}
//       />
//       {error && <div className="invalid-feedback">{error}</div>}
//     </div>
//   );
// }

import React, { useState } from "react";
import QRCode from "react-qr-code";

export default function BuyPlanForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [customerData, setCustomerData] = useState(null);
  const [qrData, setQrData] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+91",
    mobileNo: "",
    dob: "",
    gender: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});

  const API_BASE_URL = 'http://localhost:5000/api/customers';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const validateStep1 = () => {
    let newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.mobileNo.trim()) newErrors.mobileNo = "Mobile number is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.gender) newErrors.gender = "Gender is required";

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    
    const mobileRegex = /^\d{10}$/;
    if (formData.mobileNo && !mobileRegex.test(formData.mobileNo)) {
      newErrors.mobileNo = "Enter 10 digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    let newErrors = {};

    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password.length < 6)
      newErrors.password = "Minimum 6 characters required";
    if (!/[A-Z]/.test(formData.password))
      newErrors.password = "Include at least one uppercase letter";
    if (!/[0-9]/.test(formData.password))
      newErrors.password = "Include at least one number";

    if (!formData.confirmPassword)
      newErrors.confirmPassword = "Please confirm your password";

    if (formData.confirmPassword !== formData.password)
      newErrors.confirmPassword = "Passwords do not match";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleNext = async () => {
    if (step === 1 && validateStep1()) {
      setLoading(true);
      try {
        console.log('📝 Registering customer with email:', formData.email);
        
        const response = await fetch(`${API_BASE_URL}/register`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            countryCode: formData.countryCode,
            mobileNo: formData.mobileNo,
            dob: formData.dob,
            gender: formData.gender
          })
        });
        
        const data = await response.json();
        console.log('Registration response:', data);
        
        if (response.ok && data.success) {
          setCustomerData(data.data);
          setStep(2);
        } else {
          alert(data.message || 'Registration failed');
        }
      } catch (error) {
        console.error('Registration Error:', error);
        alert('Error connecting to server. Please try again.');
      } finally {
        setLoading(false);
      }
    }
    
    else if (step === 2 && validateStep2()) {
      setLoading(true);
      try {
        console.log('🔐 Setting password for email:', formData.email);
        
        const response = await fetch(`${API_BASE_URL}/set-password`, {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password
          })
        });
        
        const data = await response.json();
        console.log('Set password response:', data);
        
        if (response.ok && data.success) {
          const qrCodeData = {
            customerId: data.data?.id || customerData?.id || 'CUST' + Math.floor(Math.random() * 10000),
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            mobile: `${formData.countryCode} ${formData.mobileNo}`,
            membershipId: data.data?.membershipId || 'MEM' + Math.floor(Math.random() * 10000),
            companyName: "TechSolutions Inc.", 
            plan: "Premium Membership",
            validFrom: new Date().toISOString().split('T')[0],
            validUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
          };
          
          setQrData(qrCodeData);
          setStep(3);
        } else {
          alert(data.message || 'Failed to set password');
        }
      } catch (error) {
        console.error('Password Error:', error);
        alert('Error setting password. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleBack = () => {
    setErrors({});
    setStep(step - 1);
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+91",
      mobileNo: "",
      dob: "",
      gender: "",
      password: "",
      confirmPassword: ""
    });
    setStep(1);
    setCustomerData(null);
    setQrData(null);
  };

  const handleDownloadQR = () => {
    const svg = document.getElementById('qr-code-svg');
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg);
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const img = new Image();
      
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const pngFile = canvas.toDataURL('image/png');
        
        const downloadLink = document.createElement('a');
        downloadLink.download = `membership-${formData.firstName}-${formData.lastName}.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
      };
      
      img.src = 'data:image/svg+xml;base64,' + btoa(svgData);
    }
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(90deg,#d4f7f4,#e6ecf4)] p-6 flex justify-center items-center">
      <div className="bg-white shadow-xl rounded-3xl w-full max-w-4xl overflow-hidden">
        
    
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6">
          <div className="text-center">
            <h3 className="text-xl font-semibold">
              {step === 1 && "Fill Your Details"}
              {step === 2 && "Create Password"}
              {step === 3 && "Your Membership QR Code"}
            </h3>
          </div>
        </div>

        <div className="p-4 p-md-5">
          <form>
            {step === 1 && (
              <div className="row g-3">
                <Input 
                  col="col-md-6" 
                  label="First Name" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  error={errors.firstName}
                  placeholder="Enter first name"
                />
                <Input 
                  col="col-md-6" 
                  label="Last Name" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  error={errors.lastName}
                  placeholder="Enter last name"
                />
                <Input 
                  col="col-12" 
                  label="Email Address" 
                  name="email" 
                  type="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  error={errors.email}
                  placeholder="example@email.com"
                />

                <div className="col-md-3">
                  <label className="form-label">Country Code</label>
                  <select
                    name="countryCode"
                    className="form-select"
                    value={formData.countryCode}
                    onChange={handleChange}
                  >
                    <option value="+91">+91 (India)</option>
                    <option value="+1">+1 (USA)</option>
                    <option value="+44">+44 (UK)</option>
                    <option value="+61">+61 (Australia)</option>
                  </select>
                </div>

                <Input 
                  col="col-md-9" 
                  label="Mobile Number" 
                  name="mobileNo" 
                  value={formData.mobileNo} 
                  onChange={handleChange} 
                  error={errors.mobileNo}
                  placeholder="10 digit mobile number"
                />
                
                <Input 
                  col="col-md-6" 
                  label="Date of Birth" 
                  name="dob" 
                  type="date" 
                  value={formData.dob} 
                  onChange={handleChange} 
                  error={errors.dob}
                />

                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <select
                    name="gender"
                    className={`form-select ${errors.gender ? "is-invalid" : ""}`}
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.gender && <div className="invalid-feedback">{errors.gender}</div>}
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="row g-3">
                <div className="col-12">
                  <div className="alert alert-info">
                    <small>Password must contain: minimum 6 characters, at least one uppercase letter and one number</small>
                  </div>
                </div>
                
                <Input 
                  col="col-md-6" 
                  label="Password" 
                  name="password" 
                  type="password"
                  value={formData.password} 
                  onChange={handleChange} 
                  error={errors.password}
                  placeholder="Enter password"
                />

                <Input 
                  col="col-md-6" 
                  label="Confirm Password" 
                  name="confirmPassword" 
                  type="password"
                  value={formData.confirmPassword} 
                  onChange={handleChange} 
                  error={errors.confirmPassword}
                  placeholder="Re-enter password"
                />
              </div>
            )}

            {step === 3 && qrData && (
              <div className="col-12">
                <div className="bg-light p-4 rounded-3">
                  <div className="text-center mb-4">
                    <h3 className="text-primary fw-bold">{qrData.companyName}</h3>
                    <p className="text-muted">Digital Membership Card</p>
                  </div>
                  
                  <div className="row">
                    
                    <div className="col-md-6 text-center mb-4 mb-md-0">
                      <div className="bg-white p-3 rounded-3 d-inline-block">
                        <QRCode
                          id="qr-code-svg"
                          value={JSON.stringify({
                            id: qrData.customerId,
                            name: qrData.name,
                            email: qrData.email,
                            mobile: qrData.mobile,
                            membershipId: qrData.membershipId,
                            company: qrData.companyName
                          })}
                          size={200}
                          bgColor="#ffffff"
                          fgColor="#000000"
                          level="H"
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-6">
                      <div className="bg-white p-4 rounded-3 h-100">
                        <h5 className="border-bottom pb-2 mb-3 text-primary">Member Details</h5>
                        
                        <div className="mb-2">
                          <small className="text-muted">Membership ID</small>
                          <p className="fw-bold mb-1">{qrData.membershipId}</p>
                        </div>
                        
                        <div className="mb-2">
                          <small className="text-muted">Full Name</small>
                          <p className="fw-bold mb-1">{qrData.name}</p>
                        </div>
                        
                        <div className="mb-2">
                          <small className="text-muted">Email</small>
                          <p className="fw-bold mb-1">{qrData.email}</p>
                        </div>
                        
                        <div className="mb-2">
                          <small className="text-muted">Mobile</small>
                          <p className="fw-bold mb-1">{qrData.mobile}</p>
                        </div>
                        
                        <div className="mb-2">
                          <small className="text-muted">Plan</small>
                          <p className="fw-bold mb-1">{qrData.plan}</p>
                        </div>
                        
                        <div className="row mt-3">
                          <div className="col-6">
                            <small className="text-muted">Valid From</small>
                            <p className="fw-bold mb-1">{qrData.validFrom}</p>
                          </div>
                          <div className="col-6">
                            <small className="text-muted">Valid Until</small>
                            <p className="fw-bold mb-1">{qrData.validUntil}</p>
                          </div>
                        </div>
                        
                        <div className="mt-3 text-center">
                          <span className="badge bg-success px-3 py-2">Active</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-3 justify-content-center mt-4">
                    <button
                      type="button"
                      className="btn btn-primary px-4"
                      onClick={handleDownloadQR}
                    >
                      <i className="bi bi-download me-2"></i>
                      Download QR Code
                    </button>
                    <button
                      type="button"
                      className="btn btn-success px-4"
                      onClick={handleReset}
                    >
                      <i className="bi bi-plus-circle me-2"></i>
                      Create New Account
                    </button>
                  </div>

                  <div className="text-center mt-4 pt-3 border-top">
                    <p className="text-muted small mb-0">
                      {qrData.companyName} • Premium Membership • 
                      <span className="ms-1">For queries: support@{qrData.companyName.toLowerCase().replace(/\s+/g, '')}.com</span>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {step < 3 && (
              <div className="col-12 mt-4 d-flex justify-content-between">
                {step > 1 && (
                  <button
                    type="button"
                    className="btn btn-outline-secondary px-4"
                    onClick={handleBack}
                    disabled={loading}
                  >
                    <i className="bi bi-arrow-left me-2"></i>
                    Back
                  </button>
                )}

                <button
                  type="button"
                  className="btn btn-primary px-4 ms-auto"
                  onClick={handleNext}
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : (
                    <>
                      {step === 2 ? 'Generate QR Code' : 'Continue'}
                      <i className="bi bi-arrow-right ms-2"></i>
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function Input({ col, label, name, type = "text", value, onChange, error, placeholder }) {
  return (
    <div className={`col-12 ${col}`}>
      <label className="form-label fw-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`form-control ${error ? "is-invalid" : ""}`}
        placeholder={placeholder}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}