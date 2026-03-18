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

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. Eligibility</h2>
                    <p>
                        Users must be 18 years or older to use the services of Awate Healthcare and must have the legal capacity to enter into this agreement.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Scope of Services</h2>
                    <p>
                        Awate Healthcare is a medical travel facilitator that connects patients with hospitals and specialists in India and assists with consultation coordination, hospital appointments, travel assistance, and treatment planning. Awate Healthcare does not provide medical treatment directly.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Medical Disclaimer</h2>
                    <p>
                        All information on the website including treatment details, pricing, and timelines is for informational purposes only and does not replace professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Accuracy of Information</h2>
                    <p>
                        Awate Healthcare makes reasonable efforts to ensure accuracy, but treatment details, pricing, and timelines may change based on hospital evaluation and medical condition.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Quotes and Pricing</h2>
                    <p>
                        Treatment cost estimates or quotes provided are approximations based on general cases. The final costs are determined by the treating hospital after medical examination and required tests upon arrival in India.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. Appointment & Consultation Policy</h2>
                    <p>
                        Appointments depend on doctor and hospital availability. Awate Healthcare is not responsible for rescheduling or cancellations by hospitals.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Payment Policy</h2>
                    <p>
                        Payments for treatment are generally made directly to the hospital or medical provider. Awate Healthcare may charge service or facilitation fees for coordination services.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Cancellation Policy</h2>
                    <p>
                        Service fees may be non-refundable depending on the stage of consultation or hospital booking.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Patient Responsibility</h2>
                    <p>
                        Patients must provide accurate medical information, reports, and documentation necessary for consultation and treatment.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">11. Travel and Visa Disclaimer</h2>
                    <p>
                        Awate Healthcare may assist with travel arrangements but is not responsible for visa approval, immigration decisions, or travel disruptions.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">12. Third-Party Services</h2>
                    <p>
                        Awate Healthcare connects users with third-party hospitals and healthcare providers and is not responsible for their services, policies, or treatment outcomes.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">13. Limitation of Liability</h2>
                    <p>
                        Awate Healthcare shall not be liable for medical outcomes, complications, or negligence by hospitals, doctors, or medical providers. We shall not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">14. Intellectual Property</h2>
                    <p>
                        All website content including logos, design, text, and images belong to Awate Healthcare and cannot be copied or reused without permission.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">15. Privacy Policy Reference</h2>
                    <p>
                        Use of the website and our services is also governed by our Privacy Policy, which is incorporated into these terms by reference.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">16. Governing Law</h2>
                    <p>
                        These terms shall be governed by the laws of India and any disputes will fall under the jurisdiction of Mumbai, Maharashtra courts.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">17. Changes to Terms</h2>
                    <p>
                        Awate Healthcare reserves the right to update these terms at any time. Your continued use of the site will signify your acceptance of any adjustment to these terms.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">18. Contact Information</h2>
                    <p>
                        <strong>Email:</strong> awatehealthcare@gmail.com <br />
                        <strong>Phone:</strong> +91 72080 80848 <br />
                        <strong>Office:</strong> AL-5/2/11, Sec-16, Airoli, Navi Mumbai 400708
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default TermsOfService;
