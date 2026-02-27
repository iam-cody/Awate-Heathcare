import { MapPin, Handshake, ShieldCheck, Zap, HeartPulse } from "lucide-react";

const reasons = [
    {
        icon: MapPin,
        title: "PAN India Network",
        description: "Access to top hospitals across 50+ major cities in India, ensuring proximity and quality."
    },
    {
        icon: Handshake,
        title: "Trusted Hospital Partnerships",
        description: "Our direct tie-ups with NABH & JCI hospitals ensure you get priority care and better attention."
    },
    {
        icon: ShieldCheck,
        title: "Ethical & Transparent Process",
        description: "No hidden fees, no markup on treatments, and absolute honesty in every medical consultation."
    },
    {
        icon: Zap,
        title: "Fast Appointment Scheduling",
        description: "Skip the long wait times. We expedite your consultations and surgery schedules within 24-48 hours."
    },
    {
        icon: HeartPulse,
        title: "Personalized Patient Support",
        description: "A dedicated health coordinator accompanies you throughout your journey for complete peace of mind."
    }
];

const WhyChooseSection = () => {
    return (
        <section className="section-padding overflow-hidden">
            <div className="container-max">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">The Awate Advantage</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-display">
                                Why Thousands Trust Us <br />For Their Medical Care
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            Navigating the healthcare system is easier when you have an expert by your side.
                            We bring together ethics, efficiency, and excellence to manage your most
                            critical health decisions.
                        </p>

                        <div className="rounded-[2.5rem] bg-brand-blue p-10 space-y-6 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:scale-125 transition-transform duration-700">
                                <ShieldCheck className="w-32 h-32 text-white" />
                            </div>
                            <h4 className="text-2xl font-bold text-white font-display">98% Patient Satisfaction</h4>
                            <p className="text-white/80 leading-relaxed">
                                Our commitment to patient well-being is reflected in our consistently high satisfaction ratings.
                                We treat every patient like our own family.
                            </p>
                            <div className="pt-4 flex gap-4">
                                <div className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest border border-white/20">
                                    ISO 9001:2015
                                </div>
                                <div className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest border border-white/20">
                                    Quality Assured
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {reasons.map((item, i) => (
                            <div key={i} className="group p-8 rounded-3xl bg-white shadow-premium border border-brand-blue/5 hover:-translate-y-1 hover:border-brand-blue/20 transition-all duration-500 flex gap-6">
                                <div className="w-14 h-14 rounded-2xl bg-white shadow-card flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all duration-500">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-xl font-bold text-primary font-display tracking-tight leading-none group-hover:text-brand-blue transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
