import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-hospital.jpg";
import appointmentImg from "@/assets/appointment-bg.jpg";

const highlights = [
  "Comprehensive Hospital Network Across India",
  "Transparent Treatment Cost Estimates",
  "Dedicated Patient Coordinators",
  "24/7 Support & Follow-up Care",
  "Partnered With Top NABH Hospitals",
  "Multilingual Assistance Available",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-card">
              <img src={aboutImg} alt="Modern hospital facility" className="w-full h-72 md:h-96 object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -right-4 w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-card shadow-card-hover hidden sm:block">
              <img src={appointmentImg} alt="Doctor patient consultation" className="w-full h-full object-cover" loading="lazy" />
            </div>
            {/* Experience badge */}
            <div className="absolute -top-4 -left-4 bg-secondary text-secondary-foreground rounded-xl p-4 shadow-card-hover font-display">
              <p className="text-2xl font-bold">10+</p>
              <p className="text-xs">Years of<br />Experience</p>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">About Us</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-primary font-display">
              Guiding Patients to the Right Care, Every Time
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Awate Healthcare is India's trusted healthcare guidance platform. We help patients navigate
              complex medical decisions by connecting them with the right hospitals, doctors, and treatment
              plans — ensuring quality care at transparent costs.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
