
import { useState } from 'react';
import authService from '../services/authService';

const AuthModal = ({ isOpen, onClose, initialForm = 'login' }) => {
  const [activeForm, setActiveForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');

 
  const [loginData, setLoginData] = useState({
    contact: "",
    password: "",
  });

  
  const [signupData, setSignupData] = useState({
    name: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

 
  const validate = () => {
    const newErrors = {};

    if (activeForm === "login") {
      if (!loginData.contact.trim()) {
        newErrors.contact = "Email or phone is required";
      }
      if (!loginData.password) {
        newErrors.password = "Password is required";
      }
    }

    if (activeForm === "signup") {
      if (!signupData.name.trim()) {
        newErrors.name = "Name is required";
      } else if (signupData.name.trim().length < 2) {
        newErrors.name = "Name must be at least 2 characters";
      }

      if (!signupData.contact.trim()) {
        newErrors.contact = "Contact is required";
      }

      if (!signupData.password) {
        newErrors.password = "Password is required";
      } else if (signupData.password.length < 6) {
        newErrors.password = "Password must be at least 6 characters";
      }

      if (signupData.password !== signupData.confirmPassword) {
        newErrors.confirmPassword = "Passwords do not match";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setErrors({});
    setSuccess('');

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      let result;

      if (activeForm === "login") {
        result = await authService.login({
          contact: loginData.contact,
          password: loginData.password
        });
      } else {
        result = await authService.signup({
          name: signupData.name,
          contact: signupData.contact,
          password: signupData.password,
          confirmPassword: signupData.confirmPassword
        });
      }

      if (result.success) {
        setSuccess(result.message || `${activeForm === 'login' ? 'Login' : 'Account created'} successful!`);
        
        if (activeForm === "login") {
         
          setLoginData({ contact: "", password: "" });
          
          setTimeout(() => {
            onClose(true); 
            setSuccess('');
            setActiveForm('login');
          }, 1500);
        } else {
          setSignupData({ name: "", contact: "", password: "", confirmPassword: "" });
          
          setTimeout(() => {
            setActiveForm('login');
            setSuccess('');
          }, 1500);
        }
      } else {
        if (result.errors) {
          setErrors(result.errors);
        } else {
          setErrors({ general: result.message || 'Something went wrong' });
        }
      }
    } catch (error) {
      console.error('Auth error:', error);
      setErrors({ 
        general: 'Network error. Please check if the server is running.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const switchForm = (form) => {
    setActiveForm(form);
    setErrors({});
    setSuccess('');
    if (form === "login") {
      setLoginData({ contact: "", password: "" });
    } else {
      setSignupData({ name: "", contact: "", password: "", confirmPassword: "" });
    }
  };

  const handleClose = () => {
    onClose(false);
    setActiveForm('login');
    setErrors({});
    setSuccess('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-4">
      
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/70 to-black/80 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

     
      <div className="relative w-full max-w-md bg-white p-6 sm:p-8 md:p-10 rounded-2xl 
                    shadow-2xl border border-gray-200 
                    animate-[fadeIn_0.4s_ease-in-out] mx-4">

        
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-black text-lg sm:text-xl"
        >
          ✕
        </button>

        
        {success && (
          <div className="mb-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {success}
          </div>
        )}

        
        {errors.general && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            {errors.general}
          </div>
        )}

       
        {activeForm === "login" && (
          <form onSubmit={handleSubmit} className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-800">
              Welcome Back
            </h3>

            <div className="flex flex-col items-center space-y-4 sm:space-y-5">
              <div className="w-full">
                <input
                  type="text"
                  name="contact"
                  placeholder="Email or Phone"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg 
                           border ${errors.contact ? 'border-red-500' : 'border-gray-300'} 
                           text-black bg-white
                           focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base`}
                  value={loginData.contact}
                  onChange={handleLoginChange}
                  disabled={loading}
                />
                {errors.contact && (
                  <p className="text-red-500 text-xs mt-1 text-left">{errors.contact}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg 
                           border ${errors.password ? 'border-red-500' : 'border-gray-300'} 
                           text-black bg-white
                           focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base`}
                  value={loginData.password}
                  onChange={handleLoginChange}
                  disabled={loading}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1 text-left">{errors.password}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-2 sm:py-3 rounded-lg 
                         bg-black text-white hover:bg-gray-800 
                         transition duration-300 font-medium tracking-wide 
                         text-sm sm:text-base disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Login'}
              </button>

              <button
                type="button"
                className="text-cyan-500 hover:underline text-sm"
                onClick={() => switchForm("signup")}
              >
                Don't have an account? Sign up
              </button>
            </div>
          </form>
        )}

        {activeForm === "signup" && (
          <form onSubmit={handleSubmit} className="text-center">
            <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-gray-800">
              Create Account
            </h3>

            <div className="flex flex-col items-center space-y-4 sm:space-y-5">
              <div className="w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg 
                           border ${errors.name ? 'border-red-500' : 'border-gray-300'} 
                           text-black bg-white
                           focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base`}
                  value={signupData.name}
                  onChange={handleSignupChange}
                  disabled={loading}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 text-left">{errors.name}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="text"
                  name="contact"
                  placeholder="Email or Phone"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg 
                           border ${errors.contact ? 'border-red-500' : 'border-gray-300'} 
                           text-black bg-white
                           focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base`}
                  value={signupData.contact}
                  onChange={handleSignupChange}
                  disabled={loading}
                />
                {errors.contact && (
                  <p className="text-red-500 text-xs mt-1 text-left">{errors.contact}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg 
                           border ${errors.password ? 'border-red-500' : 'border-gray-300'} 
                           text-black bg-white
                           focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base`}
                  value={signupData.password}
                  onChange={handleSignupChange}
                  disabled={loading}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1 text-left">{errors.password}</p>
                )}
              </div>

              <div className="w-full">
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg 
                           border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} 
                           text-black bg-white
                           focus:outline-none focus:ring-2 focus:ring-black text-sm sm:text-base`}
                  value={signupData.confirmPassword}
                  onChange={handleSignupChange}
                  disabled={loading}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1 text-left">{errors.confirmPassword}</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full py-2 sm:py-3 rounded-lg 
                         bg-black text-white hover:bg-gray-800 
                         transition duration-300 font-medium tracking-wide 
                         text-sm sm:text-base disabled:opacity-50"
              >
                {loading ? 'Processing...' : 'Sign Up'}
              </button>

              <button
                type="button"
                className="text-cyan-500 hover:underline text-sm"
                onClick={() => switchForm("login")}
              >
                Already have an account? Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthModal;