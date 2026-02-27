import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

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
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 lg:gap-12">
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

                    {/* Premium Stats Blocks */}
                    <div className="flex flex-row gap-4 md:gap-6 justify-start md:justify-end flex-wrap">
                        <div className="bg-white rounded-3xl p-6 shadow-xl shadow-brand-blue/5 border border-slate-100/60 flex flex-col justify-center min-w-[140px] md:min-w-[160px] transform hover:-translate-y-1 transition-transform">
                            <span className="text-3xl lg:text-4xl font-display font-bold text-primary tracking-tight">
                                30<span className="text-brand-red">+</span>
                            </span>
                            <span className="text-sm text-muted-foreground font-medium mt-2 leading-tight uppercase tracking-wider text-[10px] lg:text-xs">Medical<br />Specialties</span>
                        </div>
                        <div className="bg-brand-blue rounded-3xl p-6 shadow-xl shadow-brand-blue/20 flex flex-col justify-center min-w-[140px] md:min-w-[160px] transform hover:-translate-y-1 transition-transform relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full blur-xl -translate-y-1/2 translate-x-1/2"></div>
                            <span className="text-3xl lg:text-4xl font-display font-bold text-white tracking-tight relative z-10">
                                50<span className="text-brand-red font-light">+</span>
                            </span>
                            <span className="text-sm text-white/80 font-medium mt-2 leading-tight uppercase tracking-wider text-[10px] lg:text-xs relative z-10">Accredited<br />Hospitals</span>
                        </div>
                    </div>
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

                <div className="mt-14 flex justify-center w-full">
                    <Link to="/specialties">
                        <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white font-bold px-10 h-16 text-lg rounded-full shadow-premium group transition-all duration-300">
                            View All Specialties <ArrowUpRight className="w-6 h-6 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default TreatmentsSection;
