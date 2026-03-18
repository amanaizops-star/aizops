import { NavLink } from "react-router-dom";

const plans = [
  {
    name: "Basic",
    price: "₹1999 /mo",
    description: "Best for small offices & startups",
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
    price: "₹2499 /mo",
    popular: true,
    description: "Ideal for growing businesses",
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
    price: "₹4999 /mo",
    description: "For enterprises & high-security needs",
    features: [
      "Advanced AI Surveillance",
      "Multi-Camera Face Recognition",
      "Real-Time Attendance Tracking",
      "Analytics & Export Reports",
      "24/7 Dedicated Support",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0B0F1A] via-[#0E1324] to-[#090D18]">

    
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,101,242,0.18),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Choose the Perfect AI Plan for Your Growth
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            AI-powered CCTV, face recognition, and automated time & attendance
            solutions designed to scale with your business.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border p-8 backdrop-blur-xl transition-all duration-300
                ${
                  plan.popular
                    ? "border-[#5865F2] bg-[#5865F2]/10 scale-105"
                    : "border-white/10 bg-white/5 hover:border-[#5865F2]/50"
                }`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 
                                 bg-[#5865F2] text-white text-xs font-bold 
                                 px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <h4 className="text-xl font-bold text-white mb-2">
                {plan.name}
              </h4>

              <p className="text-3xl font-extrabold text-[#5865F2] mb-2">
                {plan.price}
              </p>

              <p className="text-gray-400 mb-6">
                {plan.description}
              </p>

              <ul className="space-y-3 mb-8 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-[#8B93FF]">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>

              
          <div className="text-center mt-14">
  <NavLink
    to={`/Buyplain/${plan.name}`}
    className="inline-block px-6 py-3 rounded-xl
               bg-[#5865F2] text-white font-semibold
               hover:bg-[#4F5AE0] transition duration-300"
  >
    Buy Now →
  </NavLink>
</div>



              <p className="text-xs text-gray-400 mt-4 text-center">
                No credit card required
              </p>
            </div>
          ))}
        </div>

        
        <div className="text-center mt-14">
          <NavLink
            to="/pricing"
            className="inline-flex items-center gap-2 
                       text-[#8B93FF] hover:text-[#5865F2] font-medium"
          >
            View Plan Summary →
          </NavLink>
        </div>

      </div>
    </section>
  );
}
