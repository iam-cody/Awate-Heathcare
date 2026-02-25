import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-hospital.jpg";

const highlights = [
  "10+ Years of Healthcare Experience",
  "Dedicated Case Manager for Every Patient",
  "Transparent Treatment Cost Guidance",
  "End-to-End Treatment Coordination Support",
  "Partnered with top NABH & JCI Hospitals",
  "Zero Facilitation Charges for Patients",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-light relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Images */}
          <div className="relative group">
            <div className="rounded-[2.5rem] overflow-hidden shadow-premium border-8 border-white aspect-[4/5] sm:aspect-square lg:aspect-[4/5]">
              <img
                src={aboutImg}
                alt="Modern corporate hospital facility"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-10 -right-6 glass-card p-8 rounded-[2rem] shadow-premium animate-bounce-subtle">
              <p className="text-5xl font-bold font-display text-primary leading-tight">10+</p>
              <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mt-1">Years of<br />Trusted Care</p>
            </div>

            {/* Shield decoration */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-brand-blue/10 rounded-3xl flex items-center justify-center -z-10 group-hover:scale-110 transition-transform duration-500">
              <span className="text-5xl opacity-50">🛡️</span>
            </div>
          </div>

          {/* Right: Text */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="inline-block text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Direct Patient Guidance</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-primary font-display">
                Guiding Patients to the <br />Right Care, Every Time
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Awate Healthcare is India's premier healthcare coordination partner. We understand that finding
              the best treatment can be overwhelming. Our mission is to simplify your medical journey
              by bridging the gap between you and world-class medical excellence.
            </p>

            <div className="grid sm:grid-cols-1 gap-4 pt-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-base font-semibold text-primary/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <blockquote className="border-l-4 border-brand-red pl-6 py-2">
                <p className="italic text-primary font-medium text-lg">
                  "Choosing the right hospital shouldn't be a matter of luck. We turn it into a transparent, data-driven choice."
                </p>
                <footer className="mt-2 font-bold text-sm text-brand-red uppercase tracking-wider">— Team Awate</footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
