import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import ServicesSection from "@/components/ServicesSection";
import AppointmentCTA from "@/components/AppointmentCTA";
import TestimonialsSection from "@/components/TestimonialsSection";
import TeamSection from "@/components/TeamSection";
import FAQSection from "@/components/FAQSection";
import AppointmentForm from "@/components/AppointmentForm";
import BlogSection from "@/components/BlogSection";
import NewsletterCTA from "@/components/NewsletterCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ServicesSection />
        <AppointmentCTA />
        <TestimonialsSection />
        <TeamSection />
        <FAQSection />
        <AppointmentForm />
        <BlogSection />
        <NewsletterCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
