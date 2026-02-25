import { Building2, CalendarCheck, Stethoscope, HeartPulse } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Hospital Selection Assistance",
    description: "We help you choose the best hospital based on your condition, budget, and location preferences across India.",
  },
  {
    icon: CalendarCheck,
    title: "Doctor Appointment Booking",
    description: "Book appointments with top specialists instantly. We coordinate schedules to minimize your wait time.",
  },
  {
    icon: Stethoscope,
    title: "Surgery & Treatment Coordination",
    description: "End-to-end coordination for surgeries and treatments including pre-op prep, logistics, and recovery planning.",
  },
  {
    icon: HeartPulse,
    title: "Post-treatment Support",
    description: "Continued care guidance after your treatment — follow-ups, medication management, and recovery tracking.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Our Features</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 text-primary font-display">
            Why Patients Trust Awate Healthcare
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We provide comprehensive healthcare guidance services designed to make your medical journey smooth and stress-free.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl gradient-healthcare flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2 font-display text-primary">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
