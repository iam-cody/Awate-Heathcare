import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative pt-20 md:pt-24 overflow-hidden bg-healthcare-light-blue">
      <div className="container-max section-padding pb-0 md:pb-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium">
              We Take Care of You Always
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Trusted Healthcare Guidance Across{" "}
              <span className="text-secondary">India</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              We connect you with leading hospitals and specialists for affordable,
              transparent, and quality treatment — every step of the way.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="gradient-cta text-primary-foreground border-0 hover:opacity-90 gap-2 px-8">
                Book Appointment <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                <Play className="w-4 h-4" /> Watch Video
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="rounded-t-3xl overflow-hidden shadow-card">
              <img
                src={heroImg}
                alt="Awate Healthcare team of professional doctors"
                className="w-full h-auto object-cover"
                loading="eager"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -left-4 bottom-12 bg-card rounded-xl shadow-card-hover p-4 hidden md:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full gradient-healthcare flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">✓</span>
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">NABH Accredited</p>
                <p className="text-xs text-muted-foreground">Partner Hospitals</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="gradient-healthcare mt-12 md:mt-16">
        <div className="container-max grid grid-cols-2 md:grid-cols-4 gap-6 py-8 px-4 sm:px-6 lg:px-8">
          {[
            { value: "20,000+", label: "Patients Assisted" },
            { value: "98%", label: "Patient Satisfaction" },
            { value: "95%", label: "Recovery Rate" },
            { value: "100+", label: "Partner Hospitals" },
          ].map((stat, i) => (
            <div key={i} className="text-center animate-count-up" style={{ animationDelay: `${i * 0.15}s` }}>
              <p className="text-2xl md:text-3xl font-bold text-primary-foreground">{stat.value}</p>
              <p className="text-sm text-primary-foreground/80 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
