import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const ContactModal = ({ children, triggerClassName = "" }: { children?: React.ReactNode, triggerClassName?: string }) => {
    const [open, setOpen] = useState(false);
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
            // Auto close after 3 seconds showing success
            setTimeout(() => {
                setOpen(false);
                // Reset form state after closing
                setTimeout(() => setSubmitted(false), 500);
            }, 3000);
        }, 1500);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children ? (
                    <div className={triggerClassName}>{children}</div>
                ) : (
                    <Button className={`bg-brand-red text-white hover:bg-brand-red-dark ${triggerClassName}`}>
                        Book Free Consultation
                    </Button>
                )}
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-white border-none shadow-2xl rounded-2xl overflow-hidden p-0">
                <div className="bg-brand-blue/5 p-6 border-b border-brand-blue/10">
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-bold font-display text-primary">Request a Free Call</DialogTitle>
                        <DialogDescription className="text-muted-foreground">
                            Leave your details below and our medical experts will get back to you shortly.
                        </DialogDescription>
                    </DialogHeader>
                </div>

                <div className="p-6">
                    {submitted ? (
                        <div className="flex flex-col items-center justify-center p-6 text-center space-y-4 animate-in fade-in zoom-in duration-300">
                            <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center">
                                <svg className="w-8 h-8 text-brand-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-primary">Request Received!</h3>
                            <p className="text-muted-foreground text-sm">
                                Thank you. One of our specialized Care Coordinators will contact you on the provided number shortly.
                            </p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary">Patient Name</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Enter your full name"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary">Phone Number</label>
                                <div className="flex">
                                    <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-500 font-bold text-sm">
                                        +91
                                    </span>
                                    <input
                                        type="tel"
                                        required
                                        maxLength={10}
                                        placeholder="98765 43210"
                                        className="flex-1 px-4 py-3 rounded-r-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-bold text-primary">Medical Condition / Query</label>
                                <textarea
                                    required
                                    rows={3}
                                    placeholder="Briefly describe what you need help with..."
                                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all font-medium resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-brand-blue text-white hover:bg-brand-blue-dark py-6 text-lg font-bold rounded-xl mt-4 relative overflow-hidden group"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending Request...
                                    </span>
                                ) : (
                                    <>
                                        <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-10 block">Submit Request</span>
                                        <span className="absolute inset-0 z-10 flex items-center justify-center translate-y-10 group-hover:translate-y-0 transition-transform duration-300">
                                            Confirm & Send
                                        </span>
                                    </>
                                )}
                            </Button>
                        </form>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
};
