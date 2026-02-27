import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-background selection:bg-brand-blue selection:text-white">
            <Navbar />

            <div className="pt-32 pb-16 container-max max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold font-display text-primary mb-8">Privacy Policy</h1>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
                    <p>
                        Awate Healthcare ("we," "our," or "us") collects personal information that you provide to us voluntarily. This includes your name, email address, phone number, and any medical information or reports you choose to share with us for the purpose of facilitating your medical treatment in India.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect strictly for:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Providing you with accurate medical quotes and treatment plans from our partner hospitals.</li>
                        <li>Communicating with you regarding your medical journey, visa assistance, and accommodation.</li>
                        <li>Improving our website and services based on user feedback.</li>
                    </ul>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Data Security and Medical Privacy</h2>
                    <p>
                        Your medical records and personal data are strictly confidential. We employ industry-standard security measures to protect your information and only share your medical reports with verified doctors and hospitals after obtaining your explicit consent. We strictly adhere to international medical privacy standards.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Third-Party Sharing</h2>
                    <p>
                        We do not sell, trade, or rent your personal identification information to others. We only share necessary medical information with our direct partner hospitals for the sole purpose of evaluating your case.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Contact Us</h2>
                    <p>
                        If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at: <br /><br />
                        <strong>Email:</strong> info@awatehealthcare.com <br />
                        <strong>Phone:</strong> +91 98765 43210
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default PrivacyPolicy;
