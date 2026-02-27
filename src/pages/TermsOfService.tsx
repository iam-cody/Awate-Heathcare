import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-background selection:bg-brand-blue selection:text-white">
            <Navbar />

            <div className="pt-32 pb-16 container-max max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-primary mb-8">Terms of Service</h1>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using the Awate Healthcare website and services, you accept and agree to be bound by the terms and provisions of this agreement.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Description of Services</h2>
                    <p>
                        Awate Healthcare acts as a medical travel facilitator. We provide information, coordinate with medical professionals and hospitals in India, and assist with your travel arrangements. We are not a medical facility, nor do we provide actual medical diagnosis or treatments directly.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Medical Disclaimer</h2>
                    <p>
                        The content provided on this website, including pricing, treatment overviews, and timelines, is for general informational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Quotes and Payments</h2>
                    <p>
                        Any cost estimates or quotes provided are approximations based on general cases. The final cost of treatment is determined by the treating hospital after a thorough physical examination and necessary tests upon arrival in India.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Limitation of Liability</h2>
                    <p>
                        Awate Healthcare shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services or the medical treatments provided by the partner hospitals. Your agreement for medical treatment is strictly between you and the chosen hospital facility.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Modification of Terms</h2>
                    <p>
                        We reserve the right to change these conditions from time to time as we see fit and your continued use of the site will signify your acceptance of any adjustment to these terms.
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default TermsOfService;
