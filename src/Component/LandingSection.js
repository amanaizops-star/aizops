import landingImage from "../assets/images/aid.png";

const LandingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={landingImage}
            alt="Smart POS"
            className="rounded-2xl  w-full max-w-md animate-fadeIn"
          />
        </div>

      
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-3xl md:text-5xl font-extrabold text-indigo-500 animate-slideUp">
            Instant Billing, Stress-Free Service
          </h1>
         <p className="text-gray-700 text-lg animate-fadeIn delay-200">
  With <span className="font-semibold text-indigo-500">AIZOPS AI</span>, you can automate workflows
  and manage tasks in real time, keeping your business operations smooth and efficient.
  It eliminates manual errors, speeds up decision-making, and ensures accurate insights
  every time. Your team can focus on high-value work while AI handles repetitive
  processes. Experience a seamless, intelligent, and stress-free workflow that boosts
  productivity and drives growth.
</p>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="bg-white rounded-xl shadow-lg p-5  transition">
              <h4 className="font-semibold text-gray-800 mb-2">Before</h4>
              <p className="text-gray-600">
                Billing was slow and error-prone, with long queues frustrating customers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-5 transition">
              <h4 className="font-semibold text-gray-800 mb-2">Now</h4>
              <p className="text-gray-600">
                Billing is instant and accurate, reducing wait times and errors.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default LandingSection;
