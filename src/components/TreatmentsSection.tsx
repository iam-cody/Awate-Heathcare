import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const specialtyImages = {
    cardiology: "https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=800",
    orthopedics: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    oncology: "https://images.unsplash.com/photo-1532187875302-1df62ea53b1b?auto=format&fit=crop&q=80&w=800",
    ivf: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800",
    neurology: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=800",
    kidney: "https://images.unsplash.com/photo-1517120467966-5d26965bbd95?auto=format&fit=crop&q=80&w=800",
};

const specialties = [
    {
        title: "Cardiology",
        description: "Expert guidance for complex bypass, angioplasty, and pediatric heart surgeries.",
        img: specialtyImages.cardiology
    },
    {
        title: "Orthopedics",
        description: "Highly skilled specialists for hip & knee replacements and complex spine surgeries.",
        img: specialtyImages.orthopedics
    },
    {
        title: "Oncology",
        description: "Advanced precision treatments for cancer including proton therapy and robotic surgery.",
        img: specialtyImages.oncology
    },
    {
        title: "IVF & Fertility",
        description: "Compassionate care and high success rates for assisted reproduction journeys.",
        img: specialtyImages.ivf
    },
    {
        title: "Neurosurgery",
        description: "Leading experts in brain tumor removals, neuro-navigation, and micro-surgery.",
        img: specialtyImages.neurology
    },
    {
        title: "Kidney Care",
        description: "Comprehensive support for dialysis, transplants, and chronic renal management.",
        img: specialtyImages.kidney
    }
];

const TreatmentsSection = () => {
    return (
        <section id="treatments" className="section-padding bg-light">
            <div className="container-max">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <div className="space-y-4 max-w-2xl">
                        <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Specialized Care</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-primary font-display">
                            Premium Treatment Facilitation
                        </h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
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
                        <div key={i} className="group relative h-[450px] rounded-[2.5rem] overflow-hidden shadow-premium">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent pointer-events-none" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 space-y-4">
                                <h3 className="text-2xl font-bold text-white font-display tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed line-clamp-2 transition-all duration-500">
                                    {item.description}
                                </p>
                                <button className="pt-2 text-white font-bold text-xs uppercase tracking-widest flex items-center gap-2 group/btn">
                                    Explore Treatment <span className="w-8 h-0.5 bg-brand-red transition-all group-hover/btn:w-16" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TreatmentsSection;
