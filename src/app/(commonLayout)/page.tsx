import FAQSection from "@/components/modules/Home/FAQSection";

import PartnersSection from "@/components/modules/Home/PartnersSection";
import WhyChoosePrimeHacks from "@/components/modules/Home/WhyChoosePrimeHacks";
import HackathonHero from "@/components/ui/hackathon-hero";

const HomePage = () => {
  return (
    <main className="overflow-hidden">
      <HackathonHero />
      <WhyChoosePrimeHacks />

      <FAQSection />
      <PartnersSection />
    </main>
  );
};

export default HomePage;
