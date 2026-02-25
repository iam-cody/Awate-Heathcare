import { Button } from "@/components/ui/button";
import { Check, Info } from "lucide-react";

const pricingData = [
    {
        treatment: "Hip/Knee Replacement",
        range: "₹1,80,000 - ₹3,50,000",
        inclusions: ["Implant Cost", "Hospital Stay", "Consultation Fees", "Post-op Care"],
        level: "Value Choice"
    },
    {
        treatment: "Angioplasty (Single Stent)",
        range: "₹1,20,000 - ₹2,50,000",
        inclusions: ["Stent (Global Brand)", "Lab Procedures", "Cardiologist Fee", "Monitoring"],
        level: "Premium Standards"
    },
    {
        treatment: "IVF Treatment Package",
        range: "₹1,50,000 - ₹2,25,000",
        inclusions: ["Procedure Fee", "Medications", "Initial Tests", "Frozen Embryo Transfer"],
        level: "Complete Support"
    }
];

const PricingSection = () => {
    return (
        <section className="section-padding bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[40%] h-[100%] bg-brand-light -z-10" />

            <div className="container-max">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Cost Guidance</span>
                            <h2 className="text-4xl md:text-5xl font-bold text-primary font-display">
                                Affordable & Transparent <br />Treatment Costs
                            </h2>
                        </div>

                        <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                            We believe healthcare should be predictable. We negotiate with top providers to ensure
                            you get the best rates without hidden "surprises." Here are some typical cost ranges
                            for common procedures.
                        </p>

                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3 p-4 bg-brand-blue/5 rounded-2xl border border-brand-blue/10">
                                <Info className="w-5 h-5 text-brand-blue" />
                                <p className="text-sm font-medium text-primary/70 italic">
                                    *Final costs vary based on hospital choice, Room Type, and patient medical profile.
                                </p>
                            </div>
                            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-brand-red-dark h-14 w-fit px-10 shadow-premium">
                                Request Detailed Cost Estimate
                            </Button>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {pricingData.map((item, i) => (
                            <div key={i} className="glass-card p-8 rounded-[2rem] flex flex-col md:flex-row justify-between gap-8 group hover:border-brand-blue/30 transition-all duration-500">
                                <div className="space-y-4">
                                    <div className="px-3 py-1 bg-brand-blue/10 text-brand-blue text-[10px] font-bold uppercase tracking-widest rounded-full w-fit">
                                        {item.level}
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary tracking-tight font-display">
                                        {item.treatment}
                                    </h3>
                                    <div className="flex flex-wrap gap-x-4 gap-y-2">
                                        {item.inclusions.map((inc, j) => (
                                            <div key={j} className="flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                                                <Check className="w-3 h-3 text-brand-green" />
                                                {inc}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center items-end text-right">
                                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1">Est. Starting at</p>
                                    <p className="text-2xl font-bold text-brand-red font-display tracking-tight group-hover:scale-110 transition-transform">
                                        {item.range}
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

export default PricingSection;
