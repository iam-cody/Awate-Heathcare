import { FileText, ClipboardList, CalendarCheck2, HeartHandshake } from "lucide-react";

const steps = [
    {
        icon: FileText,
        title: "Upload Medical Reports",
        description: "Securely share your medical reports with us for an initial expert review.",
        color: "bg-brand-blue/10 text-brand-blue"
    },
    {
        icon: ClipboardList,
        title: "Get Hospital & Cost Options",
        description: "Receive a personalized treatment plan with hospital choices and cost estimates.",
        color: "bg-brand-red/10 text-brand-red"
    },
    {
        icon: CalendarCheck2,
        title: "Confirm Your Appointment",
        description: "We handle the logistics and book your consultation with the top specialist.",
        color: "bg-brand-green/10 text-brand-green"
    },
    {
        icon: HeartHandshake,
        title: "Complete On-Ground Support",
        description: "Dedicated case manager to assist you throughout your hospital stay.",
        color: "bg-brand-blue/10 text-brand-blue"
    }
];

const ProcessSection = () => {
    return (
        <section className="section-padding">
            <div className="container-max">
                <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
                    <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Patient Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-primary font-display">
                        How We Support Your Treatment
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        A seamless 4-step process designed to remove stress and uncertainty from your healthcare journey.
                    </p>
                </div>

                <div className="relative mt-16">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-blue/5 -translate-y-1/2 hidden lg:block" />

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                        {steps.map((step, i) => (
                            <div key={i} className="relative group bg-white shadow-premium border border-brand-blue/5 p-8 sm:p-10 rounded-[2.5rem] flex flex-col items-center text-center space-y-6 hover:-translate-y-2 transition-transform duration-500">
                                {/* Step Number */}
                                <div className="absolute top-4 right-6 font-display font-bold text-6xl text-primary/30 group-hover:text-primary/60 transition-colors">
                                    0{i + 1}
                                </div>

                                <div className={`w-20 h-20 rounded-[1.5rem] ${step.color} flex items-center justify-center relative shadow-sm`}>
                                    <step.icon className="w-8 h-8" />
                                </div>

                                <div className="space-y-3 relative z-10">
                                    <h3 className="text-xl font-bold text-primary font-display tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px] mx-auto">
                                        {step.description}
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

export default ProcessSection;
