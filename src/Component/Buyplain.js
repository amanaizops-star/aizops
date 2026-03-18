import React from "react";
import { useParams ,NavLink } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: 1999,
    description: "Best for small offices & startups",
    setupFee: 999,
    conversations: "5,000 conversations",
    features: [
      "AI CCTV Monitoring",
      "Face Detection",
      "Basic Time & Attendance",
      "Daily Reports",
      "Email Support",
    ],
  },
  {
    name: "Standard",
    price: 2499,
    setupFee: 999,
    description: "Ideal for growing businesses",
    conversations: "15,000 conversations",
    features: [
      "AI CCTV + Smart Alerts",
      "Face Recognition System",
      "Time & Attendance Dashboard",
      "Shift & Entry Logs",
      "Priority Support",
    ],
  },
  {
    name: "Premium",
    price: 4999,
    setupFee: 1999,
    description: "For enterprises & high-security needs",
    conversations: "Unlimited conversations",
    features: [
      "Advanced AI Surveillance",
      "Multi-Camera Face Recognition",
      "Real-Time Attendance Tracking",
      "Analytics & Export Reports",
      "24/7 Dedicated Support",
    ],
  },
];

export default function Pricing() {
  const { planName } = useParams();

  const selectedPlan = plans.find(
    (plan) => plan.name.toLowerCase() === planName.toLowerCase()
  );

  if (!selectedPlan) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white text-xl">
        Plan Not Found
      </div>
    );
  }

  return (
   <div className="min-h-screen bg-[linear-gradient(90deg,#d4f7f4,#e6ecf4)] p-6 flex justify-center items-center">
  
 
  <div className="bg-white rounded-2xl w-full max-w-xl shadow-xl overflow-hidden">

   
    <div className="bg-indigo-600 text-white py-5 px-6">
      <h1 className="text-2xl font-bold">
        Plan Details
      </h1>
      <p className="text-indigo-100 text-sm mt-1">
        Review your selected plan before proceeding
      </p>
    </div>

    
    <div className="p-8">

      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        {selectedPlan.name}
      </h2>

      <p className="text-gray-500 mb-6">
        {selectedPlan.description}
      </p>

     <div className="space-y-3 text-gray-700 bg-gray-100 p-5 rounded-xl border">
  <div className="flex justify-between">
    <span>Setup Fee (One-Time)</span>
    <span>₹{selectedPlan.setupFee}</span>
  </div>

  <div className="flex justify-between">
    <span>Monthly Fee</span>
    <span>₹{selectedPlan.price}/mo</span>
  </div>

  <div className="flex justify-between font-bold border-t pt-4 text-indigo-600">
    <span>Total First Payment</span>
    <span>
      ₹{selectedPlan.setupFee + selectedPlan.price}
    </span>
  </div>
</div>


      <div className="mt-8">
        <h3 className="font-semibold mb-4 text-gray-800">
          Features
        </h3>

        <ul className="space-y-2">
          <li className="text-indigo-600 font-medium">
            ✓ {selectedPlan.conversations}
          </li>

          {selectedPlan.features.map((feature, i) => (
            <li key={i} className="flex items-center text-gray-700">
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <NavLink
        to={`/Customer/`}
        className="mt-8 block w-full text-center py-3 rounded-xl
                   bg-[#5865F2] text-white font-semibold
                   hover:bg-[#4F5AE0] transition duration-300"
      >
        Proceed to Payment
      </NavLink>

    </div>
  </div>
</div>

  );
}
