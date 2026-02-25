import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";

const FinalCTA = () => {
    return (
        <section className="py-[50px] md:py-[80px] px-4 relative overflow-hidden">
            {/* Background with Brand Gradient */}
            <div className="absolute inset-4 rounded-[3rem] md:rounded-[4rem] bg-brand-blue overflow-hidden shadow-premium">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green opacity-20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-red opacity-10 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2" />

                <div className="relative h-full w-full flex flex-col items-center justify-center text-center px-6 py-12 md:py-16 z-10">
                    <div className="w-16 h-1 bg-white/20 rounded-full mb-6" />

                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white font-display mb-8 max-w-4xl leading-[1.1] tracking-tight">
                        Need Expert Guidance for <br />Your Treatment?
                    </h2>

                    <p className="text-xl text-white/80 max-w-2xl mb-12 leading-relaxed">
                        Take the first step towards quality healthcare. Consult our medical experts today
                        and get the best hospital options tailored to your needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 items-center">
                        <Button size="lg" className="bg-white text-brand-blue hover:bg-brand-red hover:text-white h-16 px-10 text-lg font-bold shadow-2xl transition-all transform hover:scale-105 group">
                            Book Free Consultation <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>

                        <a href="https://wa.me/919876543210" className="flex items-center gap-3 text-white font-bold text-lg px-8 py-4 rounded-2xl border-2 border-white/20 hover:bg-white/10 transition-all group">
                            <MessageCircle className="w-6 h-6 text-brand-green group-hover:scale-110 transition-transform" />
                            Talk on WhatsApp
                        </a>
                    </div>

                    <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center gap-8 text-white/60">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white">
                                <Phone className="w-4 h-4" />
                            </div>
                            <p className="text-sm">Emergency Support: <span className="text-white font-bold">+91 98765 43210</span></p>
                        </div>
                        <div className="hidden md:block w-px h-6 bg-white/10" />
                        <div className="flex items-center gap-3">
                            <div className="flex -space-x-3">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-brand-blue bg-white/10" />
                                ))}
                            </div>
                            <p className="text-sm">Join <span className="text-white font-bold">20,000+</span> satisfied patients</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
