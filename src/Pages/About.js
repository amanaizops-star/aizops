import React from "react";
import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import AboutHero from "../Component/Miniherosection";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <AboutHero/>

      <section className="bg-gray-950 text-gray-100 py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              About <span className="text-indigo-500">AI Interface</span>
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Building intelligent systems that think, learn, and evolve with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
               Our mission is to provide top-quality software solutions that leverage the power of artificial intelligence and computer vision to businesses of all sizes. We strive to exceed our clients' expectations by delivering innovative and secure solutions that drive growth and success. Our approach is to be highly committed to managing and securing AI systems and operations, ensuring our clients can harness the full potential of these technologies with confidence.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our Process
Discovery : Understand your needs, industry, and challenges



Design : Prototype and plan a custom AI solution



Development  : Build, test, and refine with feedback


Deployment & Support: Scale, monitor, and continuously improve


              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                ["Expertise", "At AIZOPS, our strength lies in our people. Our team is a collective of highly experienced software developers and dedicated AI specialists who have successfully navigated a wide range of complex projects. We possess a wealth of expertise in core technologies such as cloud computing, advanced machine learning, and sophisticated computer vision, enabling us to deliver innovative, impactful, and reliable solutions that drive your business forward."],
                ["Communication", "At AIZOPS, we view transparent and consistent communication as the cornerstone of every successful project. We are deeply committed to working in close partnership with our clients, taking the time to thoroughly understand their unique needs and objectives. Throughout every stage of the development process, from initial concept to final deployment, we ensure you are fully informed, engaged, and confident in the progress of your solution. Your insights are invaluable, and we maintain open channels to foster collaboration and deliver results that truly align with your vision."],
                ["Our Approach", "User-focused design combined with cutting-edge AI research."],
                ["Our Impact", "Empowering smarter decisions through intelligent automation."]
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-indigo-500 transition"
                >
                  <h4 className="text-lg font-semibold mb-2 text-indigo-400">
                    {title}
                  </h4>
                  <p className="text-gray-400 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
};

export default AboutUs;
