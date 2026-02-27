import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Form submission handler to simulate an API call
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate network delay
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            // Auto reset after some time
            setTimeout(() => {
                setSubmitted(false);
                (e.target as HTMLFormElement).reset();
            }, 5000);
        }, 1500);
    };

    return (
        <main className="min-h-screen bg-background selection:bg-brand-blue selection:text-white">
            <Navbar />

            {/* Header Section */}
            <div className="pt-32 pb-16 bg-brand-blue/5 border-b border-brand-blue/10">
                <div className="container-max max-w-5xl text-center space-y-4">
                    <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Let's Talk</span>
                    <h1 className="text-5xl md:text-6xl font-bold font-display text-primary leading-tight">
                        We are here to assist <br className="hidden md:block" /> your medical journey.
                    </h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Our medical coordinators are available 24/7. Drop us a message with your medical queries, and we will get back to you immediately.
                    </p>
                </div>
            </div>

            <div className="container-max max-w-6xl py-16">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Side: Contact Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-3xl font-bold font-display text-primary mb-6">Contact Information</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                Whether you need a second opinion, a customized quote for your treatment, or travel assistance layout, simply reach out to our dedicated care staff.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-5 h-5 text-brand-blue" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Call Us 24/7</h4>
                                    <p className="text-muted-foreground text-sm mb-2">For immediate emergencies and queries.</p>
                                    <a href="tel:+919876543210" className="text-brand-blue font-bold text-lg hover:underline transition-all">
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-red/10 flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-5 h-5 text-brand-red" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Email Our Doctors</h4>
                                    <p className="text-muted-foreground text-sm mb-2">Send your medical reports directly for assessment.</p>
                                    <a href="mailto:info@awatehealthcare.com" className="text-brand-red font-bold text-lg hover:underline transition-all">
                                        info@awatehealthcare.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-5 h-5 text-brand-green" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary mb-1">Head Office</h4>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Awate Healthcare Solutions <br />
                                        1st Floor, Trade Center <br />
                                        Bandra Kurla Complex, Mumbai <br />
                                        Maharashtra, India 400051
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Detailed Contact Form */}
                    <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-premium border border-slate-100 relative overflow-hidden">
                        {/* Background element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <h3 className="text-2xl font-bold font-display text-primary mb-6 relative z-10">Send a Detailed Request</h3>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4 animate-in fade-in zoom-in duration-300">
                                <div className="w-20 h-20 bg-brand-green/20 rounded-full flex items-center justify-center mb-2">
                                    <svg className="w-10 h-10 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Inquiry Sent Successfully!</h3>
                                <p className="text-muted-foreground">
                                    Our medical board will review your information and a coordinator will contact you within the next 2 hours.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary">First Name *</label>
                                        <input type="text" required placeholder="John" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary">Last Name</label>
                                        <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium" />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-5">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary">Email Address *</label>
                                        <input type="email" required placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary">Phone Number *</label>
                                        <div className="flex">
                                            <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-500 font-bold text-sm">+91</span>
                                            <input type="tel" required maxLength={10} placeholder="98765 43210" className="flex-1 w-full px-4 py-3 rounded-r-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary">Which treatment are you looking for? *</label>
                                    <select required className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium text-slate-700">
                                        <option value="" disabled selected>Select a treatment</option>
                                        <option value="cardiology">Cardiology</option>
                                        <option value="orthopedics">Orthopedics</option>
                                        <option value="oncology">Oncology</option>
                                        <option value="ivf">IVF & Fertility</option>
                                        <option value="neurosurgery">Neurosurgery</option>
                                        <option value="kidney">Kidney Care / Transplant</option>
                                        <option value="other">Other / General Checkup</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-primary">Medical Condition Details *</label>
                                    <textarea required rows={4} placeholder="Please provide any relevant details about your condition, past surgeries, or current symptoms..." className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium resize-none"></textarea>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-blue text-white hover:bg-brand-blue-dark py-6 text-lg font-bold rounded-xl mt-4 relative overflow-hidden group shadow-lg shadow-brand-blue/20"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending securely...
                                        </span>
                                    ) : (
                                        <>
                                            <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                                            Submit Detailed Request
                                        </>
                                    )}
                                </Button>
                                <p className="text-center text-xs text-muted-foreground mt-4">
                                    Your information is 100% secure and will only be shared with verified partner doctors.
                                </p>
                            </form>
                        )}

                    </div>

                </div>
            </div>

            <Footer />
        </main>
    );
};

export default Contact;
