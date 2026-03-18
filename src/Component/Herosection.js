// import aiBg from "../assets/images/ai4.webp";
// import { useNavigate } from "react-router-dom";

// const HeroSection = () => {
//     const navigate = useNavigate();

//     return (
//         <section className="relative w-full overflow-hidden">
//             <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] 2xl:min-h-[1000px] flex items-center">

//                 <div
//                     className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//                     style={{
//                         backgroundImage: `url(${aiBg})`,
//                     }}
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-900/70 to-black/90" />

//                 <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">

//                         <div className="text-center lg:text-left">
//                             <p className="text-cyan-400 uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 animate-fadeIn">
//                                 AI Powered Solutions
//                             </p>

//                             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
//                                 <span className="block animate-slideUp">
//                                     Building Intelligent
//                                 </span>
                               
//                                 <span className="block animate-slideUp delay-400 text-cyan-400">
//                                     Modern Businesses
//                                 </span>
//                             </h1>

//                             <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 animate-fadeIn delay-600">
//                                 Our vision is to provide{" "}
//                                 <span className="text-white font-medium">
//                                     top-quality AI-powered software solutions
//                                 </span>{" "}
//                                 to businesses—driving efficiency, innovation, and security in a
//                                 data-driven world.
//                             </p>

//                             <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeIn delay-800">
//                                 <button
//                                     onClick={() => navigate('/buy-plans')}
//                                     className="px-5 sm:px-7 py-2.5 sm:py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-lg transition text-sm sm:text-base whitespace-nowrap"
//                                 >
//                                     Get Started
//                                 </button>
//                                 <button
//                                     onClick={() => navigate('/pricing')}
//                                     className="px-5 sm:px-7 py-2.5 sm:py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition text-sm sm:text-base whitespace-nowrap"
//                                 >
//                                     See Pricing
//                                 </button>
//                             </div>
//                         </div>

//                         <div className="relative hidden lg:block animate-fadeIn delay-700">
//                             <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full" />
//                             <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 xl:p-8">
//                                 <ul className="space-y-3 xl:space-y-4 text-gray-300">
//                                     <li className="flex items-center gap-3 text-sm xl:text-base">
//                                         <span className="h-2 w-2 bg-cyan-400 rounded-full flex-shrink-0" />
//                                         <span>Artificial Intelligence</span>
//                                     </li>
//                                     <li className="flex items-center gap-3 text-sm xl:text-base">
//                                         <span className="h-2 w-2 bg-cyan-400 rounded-full flex-shrink-0" />
//                                         <span>Intelligent Automation</span>
//                                     </li>
//                                     <li className="flex items-center gap-3 text-sm xl:text-base">
//                                         <span className="h-2 w-2 bg-cyan-400 rounded-full flex-shrink-0" />
//                                         <span>Secure Operations</span>
//                                     </li>
//                                     <li className="flex items-center gap-3 text-sm xl:text-base">
//                                         <span className="h-2 w-2 bg-cyan-400 rounded-full flex-shrink-0" />
//                                         <span>Scalable Software</span>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>

//                     </div>
//                 </div> 

//             </div> 
//         </section>
//     );
// };

// export default HeroSection;


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import aiBg from "../assets/images/ai4.webp";

// Import step images (make sure these exist in your assets)
import aiImage from "../assets/images/ai-step.jpeg";
import automationImage from "../assets/images/automation-step.jpeg";
import securityImage from "../assets/images/security-step_converted.webp";
import scalableImage from "../assets/images/scalable-step.jpeg";

const steps = [
  {
    label: "Artificial Intelligence",
    // stepNum: "step 01",
    desc: "Neural networks & deep learning",
    color: "cyan",
    colorHex: "#22d3ee",
    popupImage: aiImage,
    popupTitle: "AI Neural Networks",
    popupDesc: "Advanced deep learning models processing billions of parameters in real-time",
    icon: (
      <svg
        width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="#22d3ee"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        className="animate-[brainPulse_1.4s_ease-in-out_infinite]"
      >
        <path d="M9.5 2a2.5 2.5 0 0 1 0 5H9a3 3 0 0 0-3 3v.5a2.5 2.5 0 0 1 0 5v.5a3 3 0 0 0 3 3h.5a2.5 2.5 0 0 1 0 5" />
        <path d="M14.5 2a2.5 2.5 0 0 0 0 5H15a3 3 0 0 1 3 3v.5a2.5 2.5 0 0 0 0 5v.5a3 3 0 0 1-3 3h-.5a2.5 2.5 0 0 0 0 5" />
      </svg>
    ),
  },
  {
    label: "Intelligent Automation",
    // stepNum: "step 02",
    desc: "Workflow bots & process automation",
    color: "emerald",
    colorHex: "#34d399",
    popupImage: automationImage,
    popupTitle: "Intelligent Workflows",
    popupDesc: "Automated pipelines that learn and adapt to optimize business processes",
    icon: (
      <svg
        width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="#34d399"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        className="animate-[gearSpin_2s_linear_infinite] origin-center"
      >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    label: "Secure Operations",
    // stepNum: "step 03",
    desc: "Zero-trust & encrypted pipelines",
    color: "violet",
    colorHex: "#a78bfa",
    popupImage: securityImage,
    popupTitle: "Zero-Trust Security",
    popupDesc: "Military-grade encryption with real-time threat detection and response",
    icon: (
      <svg
        width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="#a78bfa"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        className="animate-[shieldBounce_1.6s_ease-in-out_infinite]"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Scalable Software",
    // stepNum: "step 04",
    desc: "Cloud-native & microservice ready",
    color: "orange",
    colorHex: "#fb923c",
    popupImage: scalableImage,
    popupTitle: "Cloud-Native Architecture",
    popupDesc: "Auto-scaling microservices that handle millions of requests seamlessly",
    icon: (
      <svg
        width="22" height="22" viewBox="0 0 24 24"
        fill="none" stroke="#fb923c"
        strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        className="animate-[rocketLaunch_1.4s_ease-in-out_infinite]"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m3.29 15 1.3.72 1.72 1.3.71 1.29A5 5 0 0 0 9 19.3l1.87-1.88c-.88-.86-1.5-2-1.68-3.22L9 12.42A5 5 0 0 1 12 11h3a5 5 0 0 1 3.54 1.46L22 16l-4 4-3.54-3.54A5 5 0 0 1 13 19v3l-3.54-3.54" />
        <circle cx="17" cy="7" r="2" />
      </svg>
    ),
  },
];

const FeatureSteps = () => {
  const [active, setActive] = useState(0);
  const [hoveredStep, setHoveredStep] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Auto-cycle every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  // Track mouse position for popup placement
  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="relative animate-fadeIn delay-700" onMouseMove={handleMouseMove}>
      {/* Ambient glow */}
      <div className="absolute -inset-4 bg-cyan-500/20 blur-3xl rounded-full" />

      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 xl:p-8">
        <ul className="flex flex-col gap-1">
          {steps.map((step, i) => {
            const isActive = i === active;
            const isHovered = hoveredStep === i;
            
            return (
              <li
                key={step.label}
                onClick={() => setActive(i)}
                onMouseEnter={() => setHoveredStep(i)}
                onMouseLeave={() => setHoveredStep(null)}
                className={`
                  relative flex items-center gap-4 px-4 py-3 rounded-xl cursor-pointer
                  transition-all duration-300
                  ${isActive
                    ? "bg-white/5 border border-white/10"
                    : "border border-transparent hover:bg-white/3"
                  }
                `}
                style={{
                  animationDelay: `${i * 80}ms`,
                  animation: "fadeSlideIn 0.4s ease both",
                }}
              >
                {/* Icon box */}
                <div
                  className={`
                    relative flex items-center justify-center
                    w-11 h-11 rounded-xl flex-shrink-0
                    transition-all duration-300
                    ${isActive ? "bg-white/8" : "bg-white/3"}
                  `}
                  style={{
                    border: isActive
                      ? `1px solid ${step.colorHex}50`
                      : "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  {step.icon}
                  {/* Pulsing ring around icon */}
                  {isActive && (
                    <span
                      className="absolute -inset-1 rounded-[14px] border"
                      style={{
                        borderColor: step.colorHex,
                        animation: "ringPulse 1.5s ease-out infinite",
                      }}
                    />
                  )}
                </div>

                {/* Text */}
                <div className="flex flex-col gap-[2px] flex-1 min-w-0">
                  <span
                    className="text-[10px] font-mono font-medium tracking-widest uppercase transition-colors duration-300"
                    style={{ color: isActive ? step.colorHex : "#475569" }}
                  >
                    {step.stepNum}
                  </span>
                  <span
                    className={`text-sm xl:text-base font-medium transition-colors duration-300 ${
                      isActive ? "text-slate-100" : "text-slate-400"
                    }`}
                  >
                    {step.label}
                  </span>
                  {isActive && (
                    <span
                      className="text-[11px] leading-snug transition-all duration-300"
                      style={{ color: step.colorHex + "bb" }}
                    >
                      {step.desc}
                    </span>
                  )}
                </div>

                {/* Trailing dot with ping */}
                <span className="relative flex-shrink-0 w-2 h-2">
                  {isActive && (
                    <span
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: step.colorHex + "60",
                        animation: "dotPing 1.6s ease-out infinite",
                      }}
                    />
                  )}
                  <span
                    className="relative block w-2 h-2 rounded-full transition-colors duration-300"
                    style={{ background: isActive ? step.colorHex : "#1e3a5f" }}
                  />
                </span>

                {/* Progress bar at bottom of active row */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full overflow-hidden"
                    style={{ background: step.colorHex + "25" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{
                        background: step.colorHex,
                        animation: "progressLine 2s linear forwards",
                      }}
                    />
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Popup Image - appears on hover */}
      {hoveredStep !== null && (
        <div
          className="fixed z-50 pointer-events-none"
          style={{
            left: mousePosition.x + 20,
            top: mousePosition.y - 150,
            transform: 'translateY(0)',
            animation: 'popupFadeIn 0.2s ease-out',
          }}
        >
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-orange-500/30 blur-xl rounded-2xl" />
            
            {/* Main popup card */}
            <div className="relative w-64 bg-slate-900/95 backdrop-blur-xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
                <img
                  src={steps[hoveredStep].popupImage}
                  alt={steps[hoveredStep].label}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Color overlay based on step */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    background: `linear-gradient(135deg, ${steps[hoveredStep].colorHex} 0%, transparent 100%)`,
                  }}
                />
              </div>
              
              {/* Content */}
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: steps[hoveredStep].colorHex }}
                  />
                  <span
                    className="text-xs font-mono font-medium tracking-wider uppercase"
                    style={{ color: steps[hoveredStep].colorHex }}
                  >
                    {steps[hoveredStep].stepNum}
                  </span>
                </div>
                
                <h4
                  className="text-sm font-bold mb-1"
                  style={{ color: steps[hoveredStep].colorHex }}
                >
                  {steps[hoveredStep].popupTitle}
                </h4>
                
                <p className="text-xs text-gray-300 leading-relaxed">
                  {steps[hoveredStep].popupDesc}
                </p>
                
                {/* Decorative elements */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
                  <div
                    className="w-1 h-1 rounded-full"
                    style={{ backgroundColor: steps[hoveredStep].colorHex }}
                  />
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Keyframes */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateX(-10px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes brainPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.1); }
        }
        @keyframes gearSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes shieldBounce {
          0%, 100% { transform: translateY(0); }
          40%      { transform: translateY(-4px); }
          70%      { transform: translateY(2px); }
        }
        @keyframes rocketLaunch {
          0%, 100% { transform: translateY(0) rotate(-30deg); }
          50%       { transform: translateY(-6px) rotate(-30deg); }
        }
        @keyframes ringPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes dotPing {
          0%, 100% { transform: scale(1);   opacity: 1; }
          60%      { transform: scale(2.4); opacity: 0; }
        }
        @keyframes progressLine {
          from { width: 0%; }
          to   { width: 100%; }
        }
        @keyframes popupFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full overflow-hidden">
            <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[800px] xl:min-h-[900px] 2xl:min-h-[1000px] flex items-center">
                {/* Background Image with Overlay */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${aiBg})`,
                    }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-900/70 to-black/90" />

                {/* Content */}
                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                        {/* Left Column - Text Content */}
                        <div className="text-center lg:text-left">
                            <p className="text-indigo-500 uppercase tracking-widest text-xs sm:text-sm mb-3 sm:mb-4 animate-fadeIn">
                                AI Powered Solutions
                            </p>

                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                                <span className="block animate-slideUp">
                                    Building Intelligent
                                </span>
                               
                                <span className="block animate-slideUp delay-400 text-indigo-500">
                                    Modern Businesses
                                </span>
                            </h1>

                            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 animate-fadeIn delay-600">
                                Our vision is to provide{" "}
                                <span className="text-white font-medium">
                                    top-quality AI-powered software solutions
                                </span>{" "}
                                to businesses—driving efficiency, innovation, and security in a
                                data-driven world.
                            </p>

                            <div className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start animate-fadeIn delay-800">
                                <button
                                    onClick={() => navigate('/buy-plans')}
                                    className="px-5 sm:px-7 py-2.5 sm:py-3 bg-indigo-500 hover:bg-indigo-600 text-black font-semibold rounded-lg transition text-sm sm:text-base whitespace-nowrap"
                                >
                                    Get Started
                                </button>
                                <button
                                    onClick={() => navigate('/pricing')}
                                    className="px-5 sm:px-7 py-2.5 sm:py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition text-sm sm:text-base whitespace-nowrap"
                                >
                                    See Pricing
                                </button>
                            </div>
                        </div>

                        {/* Right Column - Feature Steps Component */}
                        <div className="relative hidden lg:block">
                            <FeatureSteps />
                        </div>
                    </div>
                </div> 
            </div> 
        </section>
    );
};

export default HeroSection;




