import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PositioningSection from "@/components/positioning";
import ShowcaseSection from "@/components/showcasesection";
import StatsBar from "@/components/statsbar";
import MarketplaceSection from "@/components/marketplace";
import PlatformSection from "@/components/platform";
import ContactSection from "@/components/contact";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <StatsBar/>
      <PositioningSection/>
      <ShowcaseSection/>
      <MarketplaceSection/>
      <PlatformSection/>
      <ContactSection/>
      <Footer/>
    </>
  );
}