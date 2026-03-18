import { useNavigate } from "react-router-dom";
import aiBackground from "../assets/images/web.webp";  

const CTASection = () => {
  const navigate = useNavigate();

  // const handleGetStarted = () => {
  //   navigate("/get/GetStarted");
  // };

  return (
    <section className="relative py-16  overflow-hidden">
      
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${aiBackground})` }}
      ></div>

     
      <div className="absolute inset-0 "></div>

     
      <div className="relative max-w-7xl mx-auto px-6 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 leading-snug animate-fadeIn">
          Start optimizing your business with <br />
          <span className="text-indigo-500">Aizops</span> today
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <button
           onClick={() => navigate('/buy-plans')}
            className="px-8 py-3 bg-indigo-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
          >
            Get Started
          </button>
          <button
                            onClick={() => navigate('/pricing')}

           className="px-8 py-3 border border-cyan-600 text-indigo-500 rounded-lg hover:bg-cyan-50 transition transform hover:-translate-y-1">
            See Pricing
          </button>
        </div>

        <div className="mt-10 w-full max-w-3xl">
        

        </div>
      </div>
    </section>
  );
};

export default CTASection;
