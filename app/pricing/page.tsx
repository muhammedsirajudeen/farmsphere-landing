import Navbar from "@/components/navbar";
import PlatformSection from "@/components/platform";
import Footer from "@/components/footer";

export default function PricingPage() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen">
      <Navbar />
      <div className="pt-24">
        <PlatformSection />
      </div>
      <Footer />
    </div>
  );
}
