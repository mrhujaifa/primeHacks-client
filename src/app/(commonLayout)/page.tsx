import PrimeHacksFooter from "@/components/layouts/Footer";
import FeaturedHackathons from "@/components/ui/FeaturedHackathons";
import HackathonBlog from "@/components/ui/HackathonBlog";
import PrimeHacksNavbar from "@/components/layouts/Navbar";
import PartnershipMarquee from "@/components/ui/PartnershipMarquee";
import HackathonHero from "@/components/ui/hackathon-hero";
import PrimeHacksLandingSections from "@/components/ui/landing-sections";

const HomePage = () => {
  return (
    <main className="">
      <PrimeHacksNavbar />
      <HackathonHero />
      <PrimeHacksLandingSections />
      <FeaturedHackathons />
      <HackathonBlog />
      <PartnershipMarquee />
      <PrimeHacksFooter />
    </main>
  );
};

export default HomePage;
