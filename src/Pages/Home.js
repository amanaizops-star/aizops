// import Navbar from "../Component/Navbar";
// import HeroSection from "../Component/Herosection";
// import FeatureSection from "../Component/FeatureSection";
// import CTASection from "../Component/CTASection";
// import LandingSection from "../Component/LandingSection";
// import StatsSection from "../Component/StatsSection";
// import PricingSection from "../Component/Pricing";
// import PricingSections from "../Component/PricingSections";
// import BusinessGrowth from "../Component/BusinessGrowth";
// import Footer from "../Component/Footer";
// import VideoGallery from "../Component/Video";
// import React, { useState } from "react";

// const Home = () => {
//    const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

//   const validate = () => {
//     const newErrors = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     } else if (formData.name.trim().length < 2) {
//       newErrors.name = "Name must be at least 2 characters";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Please enter a valid email address";
//     }

//     if (!formData.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = "Please enter a valid phone number";
//     }

//     if (!formData.message.trim()) {
//       newErrors.message = "Message is required";
//     } else if (formData.message.trim().length < 10) {
//       newErrors.message = "Message must be at least 10 characters";
//     }

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
    
//     if (errors[name]) {
//       setErrors(prev => ({ ...prev, [name]: "" }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
      
//       // Scroll to top of form to show errors
//       window.scrollTo({ top: 0, behavior: 'smooth' });
//       return;
//     }

//     setErrors({});
//     setSuccess("");
//     setIsSubmitting(true);

//     try {
//       const response = await fetch("http://localhost:5000/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setSuccess("Message sent successfully! We'll get back to you soon.");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           message: "",
//         });
        
//         setTimeout(() => {
//           setSuccess("");
//         }, 5000);
//       } else {
//         setSuccess(data.message || "Failed to send message. Please try again.");
//       }
//     } catch (error) {
//       console.error("Contact form error:", error);
//       setSuccess("Network error. Please check your connection and try again.");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <FeatureSection/>
//       <CTASection/>
//       <LandingSection/>
//       <StatsSection/>
//       <PricingSection/>
//       <PricingSections/>
//       <BusinessGrowth/>
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
//       <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden">
        
//         {/* Success Message */}
//         {success && (
//           <div className={`p-4 text-center ${
//             success.includes("successfully") 
//               ? "bg-green-100 text-green-700 border-b border-green-200" 
//               : "bg-red-100 text-red-700 border-b border-red-200"
//           }`}>
//             <p className="text-sm sm:text-base font-medium">{success}</p>
//           </div>
//         )}

//         <div className="grid grid-cols-1 lg:grid-cols-2">
          
//           {/* Left Column - Contact Info */}
//           <div className="bg-gray-50 p-6 sm:p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-200">
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
//               Contact Us
//             </h2>
//             <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-600">
//               We'd love to hear from you. Reach out using the details below or
//               send us a message.
//             </p>

//             <div className="space-y-6 sm:space-y-8 text-gray-700">
//               <div className="flex items-start space-x-3">
//                 <div className="flex-shrink-0">
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-sm sm:text-base">Company Name</h4>
//                   <p className="text-sm sm:text-base text-gray-600">Aizops software Pvt. Ltd.</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <div className="flex-shrink-0">
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-sm sm:text-base">Address</h4>
//                   <p className="text-sm sm:text-base text-gray-600 max-w-xs">
//                     City Centre, Matigara, Siliguri, Dist- Darjeeling, West Bengal - 734010
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <div className="flex-shrink-0">
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-sm sm:text-base">Phone</h4>
//                   <p className="text-sm sm:text-base text-gray-600">+91 9046373358</p>
//                 </div>
//               </div>

//               <div className="flex items-start space-x-3">
//                 <div className="flex-shrink-0">
//                   <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                   </svg>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-sm sm:text-base">Email</h4>
//                   <p className="text-sm sm:text-base text-gray-600">support@aizops.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="p-6 sm:p-8 md:p-10 lg:p-12">
//             <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
//               Send a Message
//             </h3>

//             <form onSubmit={handleSubmit} className="space-y-5" noValidate>
//               <div>
//                 <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
//                   Full Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   placeholder="Enter your full name"
//                   className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition ${
//                     errors.name 
//                       ? "border-red-500 focus:ring-red-200" 
//                       : "border-gray-300 focus:ring-gray-800 focus:border-gray-800"
//                   }`}
//                 />
//                 {errors.name && (
//                   <p className="mt-1 text-xs text-red-500">{errors.name}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
//                   Email Address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   placeholder="Enter your email"
//                   className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition ${
//                     errors.email 
//                       ? "border-red-500 focus:ring-red-200" 
//                       : "border-gray-300 focus:ring-gray-800 focus:border-gray-800"
//                   }`}
//                 />
//                 {errors.email && (
//                   <p className="mt-1 text-xs text-red-500">{errors.email}</p>
//                 )}
//               </div>

//               <div>
//                 <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">
//                   Phone Number <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   id="phone"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   placeholder="Enter your phone number"
//                   className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition ${
//                     errors.phone 
//                       ? "border-red-500 focus:ring-red-200" 
//                       : "border-gray-300 focus:ring-gray-800 focus:border-gray-800"
//                   }`}
//                 />
//                 {errors.phone && (
//                   <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
//                 )}
//                 <p className="mt-1 text-xs text-gray-400">
//                   Include country code (e.g., +91 9876543210)
//                 </p>
//               </div>

//               <div>
//                 <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
//                   Message <span className="text-red-500">*</span>
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows="4"
//                   value={formData.message}
//                   onChange={handleChange}
//                   placeholder="Write your message here..."
//                   className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition resize-none ${
//                     errors.message 
//                       ? "border-red-500 focus:ring-red-200" 
//                       : "border-gray-300 focus:ring-gray-800 focus:border-gray-800"
//                   }`}
//                 ></textarea>
//                 {errors.message && (
//                   <p className="mt-1 text-xs text-red-500">{errors.message}</p>
//                 )}
//                 <p className="mt-1 text-xs text-gray-400">
//                   Minimum 10 characters
//                 </p>
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={`w-full py-3 rounded-lg font-semibold text-white transition transform hover:scale-[1.02] active:scale-[0.98] ${
//                   isSubmitting 
//                     ? "bg-gray-400 cursor-not-allowed" 
//                     : "bg-gray-800 hover:bg-gray-900"
//                 }`}
//               >
//                 {isSubmitting ? (
//                   <span className="flex items-center justify-center">
//                     <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
//                       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                     </svg>
//                     Sending...
//                   </span>
//                 ) : (
//                   "Send Message"
//                 )}
//               </button>
//             </form>
//           </div>

//         </div>
//       </div>
//     </div>
//     <VideoGallery/>
//       <Footer/>
//     </>
//   );
// };

// export default Home;


import Navbar from "../Component/Navbar";
import HeroSection from "../Component/Herosection";
import FeatureSection from "../Component/FeatureSection";
import CTASection from "../Component/CTASection";
import LandingSection from "../Component/LandingSection";
import StatsSection from "../Component/StatsSection";
import PricingSection from "../Component/Pricing";
import PricingSections from "../Component/PricingSections";
import BusinessGrowth from "../Component/BusinessGrowth";
import Footer from "../Component/Footer";
import VideoGallery from "../Component/Video";
import React, { useState } from "react";

const Home = () => {
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const phoneRegex = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      
      // Scroll to top of form to show errors
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setErrors({});
    setSuccess("");
    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess("Message sent successfully! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        
        setTimeout(() => {
          setSuccess("");
        }, 5000);
      } else {
        setSuccess(data.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setSuccess("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <CTASection />
      <LandingSection />
      <StatsSection />
      <PricingSection />
      <PricingSections />
      <BusinessGrowth />
      
      {/* Contact Form Section */}
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-4xl lg:max-w-5xl xl:max-w-6xl bg-white shadow-xl rounded-2xl overflow-hidden">
          
          {/* Success Message */}
          {success && (
            <div className={`p-4 text-center ${
              success.includes("successfully") 
                ? "bg-green-100 text-green-700 border-b border-green-200" 
                : "bg-red-100 text-red-700 border-b border-red-200"
            }`}>
              <p className="text-sm sm:text-base font-medium">{success}</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column - Contact Info */}
            <div className="bg-gray-50 p-6 sm:p-8 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-gray-200">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">
                Contact Us
              </h2>
              <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-600">
                We'd love to hear from you. Reach out using the details below or
                send us a message.
              </p>

              <div className="space-y-6 sm:space-y-8 text-gray-700">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Company Name</h4>
                    <p className="text-sm sm:text-base text-gray-600">Aizops software Pvt. Ltd.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Address</h4>
                    <p className="text-sm sm:text-base text-gray-600 max-w-xs">
                      City Centre, Matigara, Siliguri, Dist- Darjeeling, West Bengal - 734010
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Phone</h4>
                    <p className="text-sm sm:text-base text-gray-600">+91 9046373358</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm sm:text-base">Email</h4>
                    <p className="text-sm sm:text-base text-gray-600">support@aizops.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-gray-800">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition ${
                      errors.name 
                        ? "border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:ring-gray-800 focus:border-gray-800"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition ${
                      errors.email 
                        ? "border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:ring-gray-800 focus:border-gray-800"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1 text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition ${
                      errors.phone 
                        ? "border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:ring-gray-800 focus:border-gray-800"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">
                    Include country code (e.g., +91 9876543210)
                  </p>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className={`w-full border rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 transition resize-none ${
                      errors.message 
                        ? "border-red-500 focus:ring-red-200" 
                        : "border-gray-300 focus:ring-gray-800 focus:border-gray-800"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-400">
                    Minimum 10 characters
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold text-white transition transform hover:scale-[1.02] active:scale-[0.98] ${
                    isSubmitting 
                      ? "bg-gray-400 cursor-not-allowed" 
                      : "bg-gray-800 hover:bg-gray-900"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      <VideoGallery />
      <Footer />
    </>
  );
};

export default Home;