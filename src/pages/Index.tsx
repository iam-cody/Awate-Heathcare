import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PartnersSection from "@/components/PartnersSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-white selection:bg-brand-blue selection:text-white">
      <Navbar />
      <HeroSection />
      <PartnersSection />
      <AboutSection />
      <ProcessSection />
      <TreatmentsSection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
