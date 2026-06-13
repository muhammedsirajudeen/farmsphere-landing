import Navbar from "@/components/navbar";
import MarketplaceSection from "@/components/marketplace";
import Footer from "@/components/footer";

export default function MarketplacePage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24">
        <MarketplaceSection theme="light" />
      </div>
      <Footer />
    </div>
  );
}
