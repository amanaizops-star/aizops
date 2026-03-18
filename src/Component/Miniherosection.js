import heroBg from "../assets/images/aw.webp";
import heroImage from "../assets/images/aib.webp";
import { useNavigate } from "react-router-dom";

const AboutHero = () => {
  const navigate = useNavigate();

  return (
    <section
      aria-label="About hero section"
      className="relative text-white py-20 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      
      <div className="absolute inset-0 bg-gray-950/80"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="text-indigo-500">Smarter Business</span>
            <br />
            Conversations on WhatsApp
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mb-8">
            At Aizops, we help businesses turn everyday WhatsApp messages into
            meaningful customer interactions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
                 
                                    onClick={() => navigate('/buy-plans')}
             className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 transition rounded-lg font-medium">
              Get Started
            </button>

            <button
             onClick={() => navigate('/pricing')} className="px-6 py-3 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white transition rounded-lg font-medium">
              See Pricing
            </button>
          </div>
        </div>

        
        <div className="flex justify-center lg:justify-end" aria-hidden="true">
          <img
            src={heroImage}
            alt="WhatsApp automation illustration"
            loading="lazy"
            draggable="false"
            className="max-w-full h-auto rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutHero;
