import React from "react";

import attendanceImage from "../assets/images/ai-bg1.webp";          
import inventoryImage from "../assets/images/ai-bg2.webp";  
import deliveryImage from "../assets/images/ai-bg3.webp"; 

const FeatureSection = () => {
  return (
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">

    
    <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-500 mb-4 animate-fadeIn">
      AI-Powered Solutions to Boost Your Business
    </h2>
    <p className="text-gray-600 mb-12 max-w-2xl mx-auto animate-fadeIn delay-200">
      From automation to intelligent analytics, our AI solutions streamline operations, enhance decision-making, and drive growth effortlessly.
    </p>

  
    <div className="grid gap-8 md:grid-cols-3 mb-12">
    
      <div className="bg-white rounded-3xl  p-6  transition transform hover:-translate-y-2">
        <img
          src={attendanceImage}
          alt="AI Attendance"
          className="mx-auto h-32 w-32 object-contain mb-4 rounded-full border-4 border-indigo-100"
        />
        <h5 className="text-xl font-semibold text-indigo-500 mb-2">AI Attendance & Access Control</h5>
         <h4><strong>   Face recognition-based employee check-in/out system.</strong></h4>
        <p className="text-gray-500 mb-3 text-sm">
       
          Stop worrying about manual registers or buddy punching. Our AI-powered cameras track employee attendance in real time, ensuring accuracy, security, and effortless payroll integration.

        </p>
        <ul className="text-gray-700 list-none space-y-1 text-left">
  <li>✓ Accurate & contactless check-in/out</li>
  <li>✓ Secure access control</li>
  <li>✓Real-time reports for HR</li>
</ul>





 


      </div>

      
      <div className="bg-white rounded-3xl  p-6  transition transform hover:-translate-y-2">
        <img
          src={inventoryImage}
          alt="Inventory"
          className="mx-auto h-32 w-32 object-contain mb-4 rounded-full border-4 border-indigo-100"
        />
        <h5 className="text-xl font-semibold text-indigo-500 mb-2">AI Inventory Management</h5>
         
         <h4><strong> Real-time tracking of stock in dairies, retail, and hospitality </strong>
</h4>
              <p className="text-gray-500 mb-3 text-sm">
         


Managing stock manually wastes time and leads to costly errors. Our AI systems track how much milk is collected, processed into ghee or paneer, and sold—giving you complete control of your supply chain.

        </p>
       <ul className="text-gray-700 list-none space-y-1 text-left">
  <li>✓ Real-time stock tracking</li>
  <li>✓ Automatic usage & wastage reports</li>
  <li>✓ Works for dairy, retail, and hospitality 

</li>
</ul>

      </div>

      
      <div className="bg-white rounded-3xl  p-6  transform hover:-translate-y-2">
        <img
          src={deliveryImage}
          alt="Delivery"
          className="mx-auto h-32 w-32 object-contain mb-4 rounded-full border-4 border-indigo-100"
        />
        <h5 className="text-xl font-semibold text-indigo-500 mb-2">AI Security & Surveillance</h5>
  <h4><strong>Smart CCTV with Blind Spot Detection and Anomaly Alerts</strong></h4>

         <p className="text-gray-500 mb-3 text-sm">
      
CCTV is no longer just for recording—it can now think. Our AI-enabled security systems detect blind spots, monitor crowd movement, recognize suspicious activities, and keep your property secure.
        </p>
        
      <ul className="text-gray-700 list-none space-y-1 text-left">
  <li>✓ Automated alerts for threats</li>
  <li>✓ Blind-spot detection</li>
  <li>✓ 24/7 monitoring & analytics 

</li>
</ul>

      </div>
    </div>

   
    <div className="bg-white p-8 max-w-4xl mx-auto animate-fadeIn mb-12">
      <h4 className="text-2xl font-bold text-indigo-500 mb-6">Lower Costs, Higher Profits</h4>
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h6 className="font-semibold text-gray-800 mb-1">Our Solution</h6>
          <p className="text-gray-600">Lower Commission <br /> Rate, Fair Pricing</p>
        </div>

        <div className="flex items-center justify-center bg-indigo-500 text-white font-bold w-16 h-16 rounded-full text-lg">
          VS
        </div>

        <div className="text-center md:text-right">
          <h6 className="font-semibold text-gray-800 mb-1">Other Platform</h6>
          <p className="text-gray-600">25–30% <br /> Commission Rate</p>
        </div>
      </div>
    </div>

    
    <div className="grid md:grid-cols-3 gap-6 mt-12">
      {["No High Commissions", "One Simple Platform", "More Control & Profits"].map((feature, index) => (
        <div
          key={index}
          className="flex items-center justify-center gap-3 text-indigo-500  font-semibold bg-white rounded-3xl p-4 shadow hover:shadow-lg transition transform hover:-translate-y-1"
        >
          <span className="w-6 h-6 flex items-center justify-center bg-indigo-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          <span>{feature}</span>
        </div>
      ))}
    </div>
  </div>
</section>

  );
};

export default FeatureSection;
