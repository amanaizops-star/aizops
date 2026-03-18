import React from "react";
import heroBg from "../assets/images/po.webp"; 
import heroImage from "../assets/images/big.webp"; 

const PricingHero = () => {
  return (
    <section
      aria-label="Pricing Hero Section"
      className="relative bg-cover bg-center text-white py-24"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
     
      <div className="absolute inset-0 bg-gray-950/80"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-indigo-500">Artificial Intelligence</span>
            <br />
            Interfaces for Smarter Businesses
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mb-8">
            Build intelligent, scalable, and human-centered AI solutions. Choose
            a plan that helps your business grow efficiently.
          </p>

         
        </div>

        
        <div className="flex justify-center lg:justify-end" aria-hidden="true">
          <img
            src={heroImage}
            alt="AI interface illustration"
            loading="lazy"
            draggable="false"
            className="max-w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
