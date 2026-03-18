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
                    <p>Last updated: 18/03/2026</p>

                    <p>
                        Awate Healthcare ("we", "our", or "us") is committed to protecting the privacy and security of our users. This Privacy Policy explains how we collect, use, store, and protect your personal information when you visit our website or use our services.
                    </p>
                    <p>
                        By using our website, you agree to the collection and use of information in accordance with this policy.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">1. Information We Collect</h2>
                    <p>We may collect the following types of information:</p>
                    
                    <h3 className="text-xl font-bold text-primary mt-4 mb-2">Personal Information</h3>
                    <p>When you contact us or request medical consultation, we may collect:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Full name</li>
                        <li>Email address</li>
                        <li>Phone number</li>
                        <li>Country of residence</li>
                        <li>Passport details (if required for travel assistance)</li>
                    </ul>

                    <h3 className="text-xl font-bold text-primary mt-4 mb-2">Medical Information</h3>
                    <p>To assist with treatment coordination, we may collect:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Medical reports</li>
                        <li>Diagnostic scans</li>
                        <li>Treatment history</li>
                        <li>Current health condition</li>
                    </ul>
                    <p>This information is only collected when voluntarily provided by the user.</p>

                    <h3 className="text-xl font-bold text-primary mt-4 mb-2">Technical Information</h3>
                    <p>When you visit our website, we may automatically collect:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>IP address</li>
                        <li>Browser type</li>
                        <li>Device information</li>
                        <li>Website usage data</li>
                    </ul>
                    <p>This helps us improve website performance and user experience.</p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">2. How We Use Your Information</h2>
                    <p>We use your information strictly for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Connecting you with appropriate hospitals and doctors in India</li>
                        <li>Providing treatment cost estimates and medical opinions</li>
                        <li>Coordinating consultations and appointments</li>
                        <li>Assisting with travel and accommodation arrangements</li>
                        <li>Improving our website services and user experience</li>
                        <li>Responding to your inquiries and support requests</li>
                    </ul>
                    <p>We do not use your information for unrelated marketing purposes without your consent.</p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">3. Medical Privacy & Confidentiality</h2>
                    <p>We understand the sensitivity of medical data. Your medical information:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Is treated as strictly confidential</li>
                        <li>Is shared only with verified hospitals or doctors</li>
                        <li>Is shared only after receiving your consent</li>
                    </ul>
                    <p>Awate Healthcare follows industry best practices to ensure the protection of medical records.</p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">4. Data Security</h2>
                    <p>We implement appropriate security measures to protect your personal information, including:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Secure servers</li>
                        <li>Encrypted data transmission</li>
                        <li>Restricted access to sensitive information</li>
                    </ul>
                    <p>However, while we strive to protect your data, no internet transmission can be guaranteed to be completely secure.</p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">5. Third-Party Sharing</h2>
                    <p>We do not sell, trade, or rent your personal information. Your information may only be shared with:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Partner hospitals</li>
                        <li>Medical specialists</li>
                        <li>Diagnostic centers</li>
                    </ul>
                    <p>This sharing occurs only for evaluating your medical condition and arranging treatment.</p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">6. Cookies and Website Analytics</h2>
                    <p>Our website may use cookies and analytics tools to improve user experience. Cookies help us:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Understand website traffic</li>
                        <li>Improve performance</li>
                        <li>Remember user preferences</li>
                    </ul>
                    <p>You can disable cookies in your browser settings if you prefer.</p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">7. International Patients</h2>
                    <p>
                        Awate Healthcare serves international patients seeking treatment in India. By submitting your information through our website, you acknowledge that your information may be shared with healthcare providers in India for the purpose of treatment coordination.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">8. Data Retention</h2>
                    <p>
                        We retain personal and medical information only for as long as necessary to provide our services or comply with legal obligations. Once the information is no longer required, it is securely deleted.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">9. Your Rights</h2>
                    <p>Depending on applicable laws, you may have the right to:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Request access to your personal data</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Withdraw consent for data processing</li>
                    </ul>
                    <p>To exercise these rights, please contact us.</p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">10. Links to Third-Party Websites</h2>
                    <p>
                        Our website may contain links to hospital websites or third-party services. Awate Healthcare is not responsible for the privacy practices of external websites. We recommend reviewing their privacy policies separately.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">11. Changes to This Privacy Policy</h2>
                    <p>
                        Awate Healthcare reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated revision date.
                    </p>

                    <h2 className="text-2xl font-bold text-primary mt-8 mb-4">12. Contact Us</h2>
                    <p>If you have questions about this Privacy Policy or how your information is handled, please contact us:</p>
                    <p><strong>Awate Healthcare</strong></p>
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

export default PrivacyPolicy;
