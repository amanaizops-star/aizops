import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import PricingSection from "../Component/Pricing";
import PricingHero from "../Component/PricingHero";

const Pricing = () => {
  return (
    <>
      <Navbar />
          <PricingHero />
      <PricingSection />
      <Footer />
    </>
  );
};

export default Pricing;
