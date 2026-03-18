import React, { useState } from 'react';
import logo from '../assets/images/Aizops logo.png'; 
import { useNavigate } from 'react-router-dom';

const BuyPlans = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
const navigate = useNavigate();
  const plans = [
    {
      id: 1,
      name: 'Basic',
      price: '₹ 1,999.00',
      description: 'Additional charges apply for conversations',
features: [
      "AI CCTV Monitoring",
      "Face Detection",
      "Basic Time & Attendance",
      "Daily Reports",
      "Email Support",
    ],    },
    {
      id: 2,
      name: 'Standard',
      price: '₹ 2,499.00',
      description: 'Additional charges apply for conversations',
features: [
      "AI CCTV + Smart Alerts",
      "Face Recognition System",
      "Time & Attendance Dashboard",
      "Shift & Entry Logs",
      "Priority Support",
    ],    },
    {
      id: 3,
      name: 'Premium',
      price: '₹ 4,999.00',
      description: 'Additional charges apply for conversations',
 features: [
      "Advanced AI Surveillance",
      "Multi-Camera Face Recognition",
      "Real-Time Attendance Tracking",
      "Analytics & Export Reports",
      "24/7 Dedicated Support",
    ],    }
  ];

  const handlePlanSelect = (planId) => {
    setSelectedPlan(planId);
  };

  const handleTrialStart = () => {
    console.log('Starting 15-day trial');
    console.log('Navigating to trial account page...');
    
    navigate('/trial-account');
  };

  const handleContinue = () => {
    if (selectedPlan) {
      console.log('Continuing with plan:', selectedPlan);
          navigate('/Customer/');
    }

  };
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            
            <div className="lg:w-1/2 bg-gradient-to-br from-cyan-900 to-blue-900 text-white p-6 sm:p-8 lg:p-12">
              <div className="max-w-lg mx-auto lg:mx-0">
               
                <div className="mb-8 sm:mb-12">
                  <img 
                    className="h-12 sm:h-16 w-auto " 
                    src={logo} 
                    alt="AIzops Logo"
                  />
                </div>

                
                <h3 className="text-sm sm:text-base font-semibold text-cyan-300 tracking-wider mb-2">
                  WELCOME TO 
                </h3>
                
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                  <span className="text-cyan-300">AI</span>zops
                </h2>
                
                <div className="mb-6 sm:mb-8">
                  <p className="text-gray-200 text-sm sm:text-base">
                    <span className="font-semibold text-cyan-300">So How Does the 15-Day Free Trial Work?</span>
                    <br />
                    You can use <span className="text-cyan-300 font-semibold">AIzops</span> free for up to 15 Days, with full access to everything offered on the plan you sign up for.
                  </p>
                  
                  <div className="mt-4 p-4 bg-cyan-900/50 rounded-lg border border-cyan-500/30">
                    <p className="text-cyan-300 font-semibold text-sm sm:text-base mb-2 flex items-center gap-2">
                      <span className="text-cyan-300">⚡</span> 
                      <span>AIzops Artificial Intelligence Interface</span>
                    </p>
                    <ul className="space-y-2 text-gray-200 text-xs sm:text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-300 mt-1">•</span>
                        <span>Intelligent workflow automation powered by advanced AI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-300 mt-1">•</span>
                        <span>Real-time predictive analytics and trend forecasting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-300 mt-1">•</span>
                        <span>Smart resource optimization and performance tuning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-cyan-300 mt-1">•</span>
                        <span>Natural language processing for intuitive commands</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="text-gray-200 text-sm sm:text-base mt-4">
                    If you don't cancel within 15 days, we'll charge you for the plan you selected.
                  </p>
                </div>
                
             <button 
      onClick={handleTrialStart}
      className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
    >
      Start Free 15-Day Trial
    </button>

                <p className="text-xs sm:text-sm text-cyan-200/70 mt-6 sm:mt-8 lg:mt-12">
                  You can upgrade, downgrade, or cancel at any time with just a few clicks.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12 bg-white">
              <div className="max-w-lg mx-auto lg:mx-0">
                <h3 className="text-xl sm:text-2xl font-bold text-cyan-900 mb-6 sm:mb-8">
                  OR You Can Choose From Our Existing Plan
                </h3>

                <div className="space-y-4 mb-8">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => handlePlanSelect(plan.id)}
                      className={`relative rounded-lg border p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        selectedPlan === plan.id
                          ? 'border-cyan-500 bg-cyan-50 ring-2 ring-cyan-500'
                          : 'border-gray-200 hover:border-cyan-400 hover:bg-cyan-50/30'
                      }`}
                    >
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            type="radio"
                            name="plan"
                            id={`plan-${plan.id}`}
                            checked={selectedPlan === plan.id}
                            onChange={() => handlePlanSelect(plan.id)}
                            className="h-4 w-4 text-cyan-600 focus:ring-cyan-500 border-gray-300"
                          />
                        </div>

                        <div className="ml-3 flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <h4 className="text-lg sm:text-xl font-semibold text-cyan-900">
                              {plan.name}
                            </h4>
                            <span className="text-lg sm:text-xl font-bold text-cyan-600 mt-1 sm:mt-0">
                              {plan.price}/mo.
                            </span>
                          </div>
                          <p className="text-sm text-cyan-600/80 mt-1">
                            {plan.description}
                          </p>
                          
                          {selectedPlan === plan.id && (
                            <div className="mt-4 space-y-2">
                              {plan.features.map((feature, index) => (
                                <div key={index} className="flex items-center text-sm text-cyan-700">
                                  <svg className="h-4 w-4 text-cyan-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                  {feature}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              <button
                onClick={handleContinue}
                disabled={!selectedPlan}
                className={`w-full py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 ${
                  selectedPlan
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
              >
                Continue
              </button>

                <p className="text-xs text-cyan-600/60 text-center mt-4">
                  By continuing, you agree to our Terms of Service and Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPlans;