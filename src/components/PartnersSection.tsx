const hospitalPartners = [
    "Manipal Hospitals",
    "Kokilaben Dhirubhai Ambani Hospital",
    "Wockhardt Hospitals",
    "Criticare Hospitals",
    "ASG Eye Hospitals (Pan India – 365+ centers)",
    "New Era Hospitals",
    "Medicover Hospitals",
    "Sahyadri Hospitals",
    "Saifee Hospital",
    "Breach Candy Hospital",
    "Fortis Hospitals",
    "Highland Hospital",
    "Tieten Medicity",
    "Medanta",
    "Aster Hospitals"
];

const PartnersSection = () => {
    return (
        <section id="partners" className="py-12 bg-white backdrop-blur-sm overflow-hidden relative z-10">
            <div className="container-max px-4">
                <p className="text-center text-xs font-bold text-primary/70 uppercase tracking-[0.3em] mb-10">
                    Our Trusted Hospital Partners Across India
                </p>

                <div className="relative">
                    {/* Gradients for smooth fade */}
                    <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

                    <div className="animate-marquee flex gap-16 items-center whitespace-nowrap">
                        {[...hospitalPartners, ...hospitalPartners].map((hospital, i) => (
                            <div
                                key={i}
                                className="text-2xl font-display font-bold text-brand-blue/80 hover:text-brand-blue transition-colors cursor-default"
                            >
                                {hospital}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
