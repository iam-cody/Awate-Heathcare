import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const specialties = [
    {
        title: "Cardiology",
        description: "Expert guidance for complex bypass, angioplasty, and pediatric heart surgeries.",
        img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=800", // Heart surgery operating room
        link: "/cardiology"
    },
    {
        title: "Orthopedics",
        description: "Highly skilled specialists for hip & knee replacements and complex spine surgeries.",
        img: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=800", // Bone/Joint X-ray orthopedics
        link: "/orthopedics"
    },
    {
        title: "Oncology",
        description: "Advanced precision treatments for cancer including proton therapy and robotic surgery.",
        img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800", // Treatment machine (Radiation/MRI)
        link: "/oncology"
    },
    {
        title: "IVF & Fertility",
        description: "Compassionate care and high success rates for assisted reproduction journeys.",
        img: "https://images.unsplash.com/photo-1532187875302-1df62ea53b1b?auto=format&fit=crop&q=80&w=800", // Lab/Microscope for Embryo
        link: "/ivf-fertility"
    },
    {
        title: "Neurosurgery",
        description: "Leading experts in brain tumor removals, neuro-navigation, and micro-surgery.",
        img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800", // Brain MRI & Neurosurgeon
        link: "/neurosurgery"
    },
    {
        title: "Kidney Care",
        description: "Comprehensive support for dialysis, transplants, and chronic renal management.",
        img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=800", // Clinical Dialysis/IV Setup
        link: "/kidney-care"
    }
];

const TreatmentsSection = () => {
    return (
        <section id="treatments" className="section-padding">
            <div className="container-max">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="space-y-2 max-w-2xl">
                        <span className="text-brand-red font-bold text-base md:text-lg uppercase tracking-[0.2em] block mb-3">Specialized Care</span>
                        <h2 className="text-5xl md:text-6xl font-bold text-primary font-display leading-[1.1] tracking-tight">
                            Premium Treatment Facilitation
                        </h2>
                        <p className="text-muted-foreground text-xl leading-relaxed pt-2">
                            Connect with the most sought-after medical specialists in India. Each of our partner departments
                            uses cutting-edge technology and global treatment protocols.
                        </p>
                    </div>
                    <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue font-bold px-8 h-14 group">
                        View All Specialties <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialties.map((item, i) => (
                        <a href={item.link} key={i} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-premium block cursor-pointer">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent pointer-events-none" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                                <h3 className="text-2xl font-bold text-white font-display tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-2 transition-all duration-300">
                                    {item.description}
                                </p>
                                <div className="pt-2 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2">
                                    Explore Treatment <span className="block w-8 h-[2px] bg-brand-red transition-all duration-300 ease-in-out group-hover:w-16" />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TreatmentsSection;
