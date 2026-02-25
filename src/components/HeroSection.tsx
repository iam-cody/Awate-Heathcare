import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImg from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-24 md:pt-32 overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-brand-light rounded-full opacity-50 blur-3xl pointer-events-none" />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Side: Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/5 border border-brand-blue/10 text-primary text-sm font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              India’s Trusted Healthcare Coordination Partner
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-primary font-display text-balance">
              Your Patient <span className="text-brand-red">Advocate</span> in Complex Healthcare
            </h1>

            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              We connect you with leading hospitals and specialists for affordable,
              transparent, and quality treatment — with full support at every step of your journey.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-brand-red-dark gap-2 px-10 h-14 text-lg font-semibold shadow-premium transition-all hover:scale-105">
                Book Free Consultation <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white h-14 px-8 text-lg font-semibold transition-all">
                <MessageCircle className="w-5 h-5" /> Talk on WhatsApp
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-brand-blue/10 max-w-lg">
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary font-display tracking-tight">20k+</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest leading-none">Assisted</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary font-display tracking-tight">98%</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest leading-none">Satisfaction</p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-primary font-display tracking-tight">100+</p>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest leading-none">Partners</p>
              </div>
            </div>
          </div>

          {/* Right Side: Visuals */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-premium border-8 border-white group">
              <img
                src={heroImg}
                alt="Awate Healthcare team of professional doctors"
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-brand-blue/5 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Floating Badges */}
            <div className="absolute -left-6 top-1/4 glass-card p-4 rounded-2xl flex items-center gap-3 animate-bounce-subtle">
              <div className="w-12 h-12 rounded-xl bg-brand-blue/10 flex items-center justify-center text-primary">
                <span className="font-bold">✓</span>
              </div>
              <div>
                <p className="font-bold text-sm text-primary leading-none">NABH Accredited</p>
                <p className="text-[10px] text-muted-foreground font-semibold mt-1 uppercase tracking-wider">Network Only</p>
              </div>
            </div>

            <div className="absolute -right-6 bottom-1/4 glass-card p-4 rounded-2xl flex items-center gap-3 animate-bounce-subtle" style={{ animationDelay: "1s" }}>
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center text-brand-green">
                <span className="font-bold">📍</span>
              </div>
              <div>
                <p className="font-bold text-sm text-primary leading-none">PAN India</p>
                <p className="text-[10px] text-muted-foreground font-semibold mt-1 uppercase tracking-wider">Hospital Network</p>
              </div>
            </div>

            {/* Soft Glow */}
            <div className="absolute -inset-4 bg-brand-blue/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
