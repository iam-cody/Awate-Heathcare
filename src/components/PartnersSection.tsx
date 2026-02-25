const hospitalPartners = [
    "Apollo Hospitals",
    "Fortis Healthcare",
    "Max Healthcare",
    "Medanta",
    "Manipal Hospitals",
    "Artemis Hospitals",
    "BLK-Max Hospital",
    "Nanavati Max",
    "Global Hospitals",
    "Aster DM Healthcare"
];

const PartnersSection = () => {
    return (
        <section className="py-12 bg-white border-y border-brand-blue/5 overflow-hidden">
            <div className="container-max px-4">
                <p className="text-center text-xs font-bold text-muted-foreground uppercase tracking-[0.3em] mb-10">
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
                                className="text-2xl font-display font-bold text-brand-blue/30 hover:text-brand-blue/60 transition-colors cursor-default"
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
