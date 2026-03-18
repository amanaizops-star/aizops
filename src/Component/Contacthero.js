import React from 'react';
import aiBackground from "../assets/images/prt.webp";
import aiImage from "../assets/images/contact.webp";

const Contacthero = () => {
  return (
    <section
      className="relative text-white"
      style={{
        backgroundImage: `url(${aiBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 "></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 sm:py-20 lg:py-24 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Contact Us
          </h1>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mb-6 max-w-xl mx-auto md:mx-0">
            Get in touch with our AI-powered solutions team. Whether you have
            questions, need support, or want a demo, we're here to assist you.
          </p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400">24/7</div>
              <div className="text-xs sm:text-sm text-gray-400">Support</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400">48h</div>
              <div className="text-xs sm:text-sm text-gray-400">Response</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-blue-400">100%</div>
              <div className="text-xs sm:text-sm text-gray-400">Satisfaction</div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 w-full max-w-md md:max-w-none">
          <div className="rounded-xl p-3 sm:p-4 md:p-6 shadow-2xl">
            <img
              src={aiImage}
              alt="AI Technology Background"
              className="w-full h-auto rounded-lg object-cover transform transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="0.1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Contacthero;