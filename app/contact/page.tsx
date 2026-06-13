import Navbar from "@/components/navbar";
import ContactSection from "@/components/contact";
import Footer from "@/components/footer";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-24">
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
}
