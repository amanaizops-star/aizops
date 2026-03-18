import { useState } from "react";
import broadcastImage1 from "../assets/images/smartcampaign.webp";
import broadcastImage2 from "../assets/images/performance.webp";
import broadcastImage3 from "../assets/images/team.webp";
import broadcastImage4 from "../assets/images/broadc.webp";



const features = [
  {
    title: "Smart Campaign Management",
    image: broadcastImage1,
    description1:
      "Easily create and manage one-time or recurring campaigns with our platform. Customize alerts and updates to match your customers’ preferences, ensuring every message is relevant and engaging.",
    description2:
      "Track your campaign results effortlessly with our intuitive tools. Gain real-time insights, refine strategies on the go, and maximize your reach with AI-powered automation.",
  },
  {
    title: "Marketing Performance Analysis",
    image: broadcastImage2,
    description1:
      "Monitor real-time analytics, campaign performance, and user engagement using AI-driven dashboards built for accuracy.",
    description2:
      "Identify trends, optimize strategies faster, and make data-backed decisions with predictive AI insights.",
  },
  {
    title: "Unified Team Inbox for Efficient Support",
    image: broadcastImage3,
    description1:
      "Manage all customer conversations from one centralized inbox. AI automatically assigns chats to the right team.",
    description2:
      "Improve response times, collaboration, and customer satisfaction with intelligent routing.",
  },
  {
    title: "Sales & Inventory Management",
    image: broadcastImage4,
    description1:
      "Track sales, inventory levels, and order flows in real time using AI-powered forecasting.",
    description2:
      "Prevent stock issues and scale operations smoothly with smart automation.",
  },
];

export default function FeaturesTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const activeFeature = features[activeTab];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0B0F1A] via-[#0E1324] to-[#090D18] text-white">
      <div className="max-w-7xl mx-auto px-4">

       
        <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-12">
          Unlock Aizops Advanced Tools for Maximum Business Impact
        </h1>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-full px-4 py-3 rounded-xl text-sm font-semibold transition
                ${
                  activeTab === index
                    ? "bg-[#5865F2] text-white shadow-[0_0_25px_rgba(88,101,242,0.45)]"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
            >
              {feature.title}
            </button>
          ))}
        </div>

       
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-[#5865F2]/20 blur-2xl"></div>
            <img
              src={activeFeature.image}
              alt={activeFeature.title}
              className="relative rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>

         
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {activeFeature.title}
            </h2>
            <p className="text-gray-400 mb-4 leading-relaxed">
              {activeFeature.description1}
            </p>
            <p className="text-gray-400 leading-relaxed">
              {activeFeature.description2}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
