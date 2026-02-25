import { Heart, Brain, Bone, Baby, Activity, Disc, ArrowRight } from "lucide-react";

const treatments = [
  { icon: Heart, label: "Cardiology", description: "Heart surgeries & interventions" },
  { icon: Bone, label: "Orthopedics", description: "Joint replacements & spine care" },
  { icon: Brain, label: "Neurology", description: "Brain & nerve treatments" },
  { icon: Activity, label: "Oncology", description: "Cancer care & therapy" },
  { icon: Baby, label: "IVF & Fertility", description: "Assisted reproduction" },
  { icon: Disc, label: "Kidney Care", description: "Dialysis & transplants" },
];

const ServicesSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Treatments Covered</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Comprehensive Healthcare Services Tailored to Your Needs
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              From cardiology to fertility treatments, we cover a wide range of medical specialties.
              Our network of partner hospitals ensures you get world-class care at every step.
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-secondary font-semibold hover:underline">
              View All Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {treatments.map((t, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-background hover:bg-secondary/5 transition-colors duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-3 group-hover:bg-secondary/20 transition-colors">
                  <t.icon className="w-7 h-7 text-secondary" />
                </div>
                <h4 className="font-semibold text-sm text-foreground font-display">{t.label}</h4>
                <p className="text-xs text-muted-foreground mt-1">{t.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
