const stats = [
  {
    value: "500+",
    label: "AI CCTV Systems Deployed",
    icon: "",
  },
  {
    value: "1M+",
    label: "Faces & Events Analyzed Daily",
    icon: "",
  },
  {
    value: "99.9%",
    label: "AI Detection Accuracy",
    icon: "",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0B0F1A] via-[#0E1324] to-[#090D18]">

      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,101,242,0.18),transparent_60%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

       
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            AI-Powered Surveillance & Intelligence
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Advanced AI CCTV, face recognition, real-time monitoring,
            and intelligent security analytics.
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-white/10
                         bg-white/5 backdrop-blur-xl p-8 text-center
                         hover:border-[#5865F2]/60
                         hover:shadow-[0_0_40px_rgba(88,101,242,0.15)]
                         transition-all duration-300"
            >
              <div className="text-5xl mb-5 text-[#8B93FF]">
                {item.icon}
              </div>

              <h3 className="text-4xl font-extrabold text-[#5865F2]">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-300 font-medium">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
