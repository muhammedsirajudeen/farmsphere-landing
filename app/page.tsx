import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import PositioningSection from "@/components/positioning";
import ShowcaseSection from "@/components/showcasesection";
import StatsBar from "@/components/statsbar";

export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero/>
      <StatsBar/>
      <PositioningSection/>
      <ShowcaseSection/>
      <Footer/>
    </>
  );
}