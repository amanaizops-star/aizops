import { Megaphone, Handshake, UserCheck } from "lucide-react";

export default function BusinessGrowth() {
  return (
    <section
      id="businessgrowth"
      className="py-20 bg-gradient-to-br from-[#0B0F1A] via-[#0E1324] to-[#090D18] text-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        
        <h2 className="text-2xl md:text-4xl font-extrabold text-center mb-16">
          Unlock New Opportunities
          <br />
          for Your Business with Aizops
        </h2>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

         
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-105 transition">
            <div className="absolute inset-0 bg-[#5865F2]/10 blur-2xl rounded-2xl"></div>
            <div className="relative">
              <Megaphone className="w-10 h-10 text-[#5865F2] mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Leverage Aizops’s All-in-One AI Tools for Growth
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Attract quality leads with Aizops’s AI automation. Engage
                customers at every stage using smart notifications, automated
                updates, and real-time campaign performance tracking.
              </p>
            </div>
          </div>

          
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-105 transition">
            <div className="absolute inset-0 bg-[#5865F2]/10 blur-2xl rounded-2xl"></div>
            <div className="relative">
              <Handshake className="w-10 h-10 text-[#5865F2] mb-4" />
              <h3 className="text-xl font-bold mb-3">
                Boost Sales & Drive Conversions with AI on WhatsApp
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Convert conversations into revenue. Guide leads through an
                intelligent sales funnel, personalize offers with AI insights,
                and accept secure payments directly on WhatsApp.
              </p>
            </div>
          </div>

         
          <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:scale-105 transition">
            <div className="absolute inset-0 bg-[#5865F2]/10 blur-2xl rounded-2xl"></div>
            <div className="relative">
              <UserCheck className="w-10 h-10 text-[#5865F2] mb-4" />
              <h3 className="text-xl font-bold mb-3">
                AI-Powered Customer Support That Builds Trust
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Deliver 24×7 intelligent support with a unified inbox. Automate
                high-volume responses, monitor conversations in real time, and
                maintain consistent service quality with AI supervision.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
