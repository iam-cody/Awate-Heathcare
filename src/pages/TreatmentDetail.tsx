import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Activity, Beaker, Bone, Brain, Baby, Droplets } from "lucide-react";

// Mock Data for Treatments
const treatmentsData: Record<string, any> = {
    cardiology: {
        title: "Cardiology",
        contentImg: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        overview: "Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. There are few types of Cardiology which a Premium Life Care suggestive doctor or the team assesses you in terms of your qualification to get proper cardiology checkups in place.",
        diseases: [
            "High Blood Pressure", "Heart Attacks", "Coronary Artery Disease", "Valvular Disease", "Congenital Heart Defects", "Heart Failure"
        ],
        symptoms: [
            "Chest pain, heaviness or discomfort (Angina)", "Nausea, indigestion, heartburn", "Shortness of breath", "Dizziness or lightheadedness", "Sweating, irregular heartbeats"
        ],
        procedures: [
            { name: "Premium Heart Pace Maker", range: "₹4,15,000 - ₹4,98,000", days: "8 Days" },
            { name: "Premium Bypass Surgery", range: "₹5,39,500 - ₹6,22,500", days: "10 Days" },
            { name: "Premium CABG", range: "₹5,81,000 - ₹7,05,500", days: "14 Days" },
            { name: "Premium Heart Valve Replacement", range: "₹4,98,000 - ₹6,64,000", days: "12 Days" },
            { name: "Premium Pediatric Heart Surgery", range: "₹4,56,500 - ₹7,05,500", days: "10 Days" },
            { name: "Cardiothoracic Surgery", range: "₹6,64,000 - ₹8,30,000", days: "14 Days" },
        ],
        faqs: [
            { q: "What should I know before I travel to India for Medical treatment?", a: "You should carry all your previous medical reports, valid passport, medical visa, and ensure your finances are arranged before flying." },
            { q: "Can I choose my preferred doctor or hospital?", a: "Yes, we provide you with multiple options from top-tier hospitals and specialists. You have complete freedom to choose." },
            { q: "What document is required to get a medical visa?", a: "You need a medical invitation letter from the chosen hospital, which we will help arrange as soon as your treatment plan is finalized." }
        ]
    },
    orthopedics: {
        title: "Orthopedics",
        contentImg: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
        overview: "Orthopedics involves the treatment of the musculoskeletal system. This includes your bones, joints, ligaments, tendons, and muscles. Our partner specialists utilize the latest minimally invasive techniques to ensure rapid recovery and lasting mobility.",
        diseases: [
            "Osteoarthritis", "Rheumatoid Arthritis", "Bone Fractures", "Spinal Disorders", "Sports Injuries", "Torn Ligaments"
        ],
        symptoms: [
            "Severe joint pain or stiffness", "Swelling or tenderness around a joint", "Limited range of motion", "Numbness or tingling", "Inability to bear weight"
        ],
        procedures: [
            { name: "Total Knee Replacement", range: "₹3,73,500 - ₹4,98,000", days: "7 Days" },
            { name: "Total Hip Replacement", range: "₹4,15,000 - ₹5,39,500", days: "8 Days" },
            { name: "Spinal Fusion Surgery", range: "₹4,98,000 - ₹7,05,500", days: "10 Days" },
            { name: "Arthroscopy (Knee/Shoulder)", range: "₹2,07,500 - ₹3,32,000", days: "3 Days" },
            { name: "ACL Reconstruction", range: "₹2,90,500 - ₹4,15,000", days: "5 Days" },
            { name: "Scoliosis Surgery", range: "₹7,47,000 - ₹9,96,000", days: "14 Days" },
        ],
        faqs: [
            { q: "How long does recovery take after knee replacement?", a: "Most patients can walk with support within 24 hours. Full recovery and return to normal activities typically takes 3 to 6 weeks." },
            { q: "Are the implants used of top quality?", a: "Yes, our partner hospitals use only US FDA-approved, globally recognized implants from top manufacturers." },
            { q: "Will I need physical therapy?", a: "Yes, physical therapy is a crucial part of the recovery process. The hospital will provide the initial sessions, and we can guide your continued therapy." }
        ]
    },
    oncology: {
        title: "Oncology",
        contentImg: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200",
        overview: "Oncology is the branch of medicine dedicated to researching, identifying, and treating cancer. We partner with India's most advanced cancer care centers equipped with CyberKnife, Proton Therapy, and TrueBeam machines.",
        diseases: [
            "Breast Cancer", "Lung Cancer", "Prostate Cancer", "Leukemia & Lymphoma", "Brain Tumors", "Head & Neck Cancers"
        ],
        symptoms: [
            "Unexplained weight loss", "Fatigue or extreme tiredness", "Skin changes (yellowing, darkening)", "Changes in bowel or bladder habits", "Persistent cough or trouble breathing"
        ],
        procedures: [
            { name: "Chemotherapy (per cycle)", range: "₹41,500 - ₹1,24,500", days: "1 Day" },
            { name: "Radiation Therapy (Full Course)", range: "₹2,49,000 - ₹4,98,000", days: "30 Days" },
            { name: "Robotic Surgery for Cancer", range: "₹4,15,000 - ₹7,47,000", days: "7 Days" },
            { name: "Bone Marrow Transplant", range: "₹16,60,000 - ₹29,05,000", days: "45 Days" },
            { name: "CyberKnife Treatment", range: "₹5,81,000 - ₹8,30,000", days: "5 Days" },
            { name: "Targeted Therapy", range: "Varied", days: "Ongoing" },
        ],
        faqs: [
            { q: "Do you offer second opinions for cancer?", a: "Yes, we highly recommend getting a second opinion through our tumor board of specialists before finalizing any major cancer treatment plan." },
            { q: "Is robotic surgery better for cancer?", a: "Robotic surgery often provides more precise tumor removal, less blood loss, and faster recovery times depending on the type and stage of cancer." },
            { q: "How long will I need to stay in India?", a: "Cancer treatments can be lengthy. Depending on if you need surgery, chemo, or radiation, stays can range from a few weeks to a few months." }
        ]
    },
    "ivf-fertility": {
        title: "IVF & Fertility",
        contentImg: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?auto=format&fit=crop&q=80&w=1200",
        overview: "In Vitro Fertilization (IVF) and Assisted Reproductive Technologies offer hope to couples struggling with infertility. Indian clinics are renowned globally for their exceptionally high success rates and state-of-the-art embryology labs.",
        diseases: [
            "Blocked Fallopian Tubes", "Male Infertility / Low Sperm Count", "Endometriosis", "Polycystic Ovary Syndrome (PCOS)", "Unexplained Infertility", "Advanced Maternal Age"
        ],
        symptoms: [
            "Inability to conceive after a year of trying", "Irregular menstrual cycles", "Pelvic pain", "Hormonal imbalances", "Previous miscarriages"
        ],
        procedures: [
            { name: "Standard IVF Cycle", range: "₹2,07,500 - ₹2,90,500", days: "21 Days" },
            { name: "IVF with ICSI", range: "₹2,49,000 - ₹3,32,000", days: "21 Days" },
            { name: "Egg Freezing", range: "₹1,24,500 - ₹2,07,500", days: "14 Days" },
            { name: "Laser Assisted Hatching", range: "₹33,200 - ₹49,800", days: "Included in IVF" },
            { name: "PGT (Genetic Testing)", range: "₹1,24,500 - ₹2,07,500", days: "Lab Wait Time" },
            { name: "Donor Egg IVF", range: "₹3,73,500 - ₹4,98,000", days: "25 Days" },
        ],
        faqs: [
            { q: "What is the success rate of IVF in India?", a: "Success rates vary based on age and clinical conditions, but top Indian clinics often see success rates between 50% to 75% per cycle." },
            { q: "How many days must I stay in India for one IVF cycle?", a: "A standard IVF cycle generally requires a stay of about 3 weeks (21 days) from the start of stimulation to the embryo transfer." },
            { q: "Do the clinics have international standards?", a: "Yes, our partner fertility clinics are accredited by international bodies and utilize world-class embryology equipment." }
        ]
    },
    neurosurgery: {
        title: "Neurosurgery",
        contentImg: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200",
        overview: "Neurosurgery deals with the surgical treatment of problems of the nervous system, including the brain, spinal cord, and peripheral nerves. We connect you with world-class neurosurgeons specializing in complex micro-neurosurgery and neuro-navigation.",
        diseases: [
            "Brain Tumors", "Spinal Cord Injuries", "Aneurysms", "Epilepsy", "Parkinson's Disease", "Herniated Discs"
        ],
        symptoms: [
            "Persistent, severe headaches", "Seizures", "Weakness or numbness in limbs", "Loss of balance or coordination", "Difficulty speaking or comprehending"
        ],
        procedures: [
            { name: "Brain Tumor Surgery", range: "₹4,98,000 - ₹8,30,000", days: "14 Days" },
            { name: "Deep Brain Stimulation (DBS)", range: "₹12,45,000 - ₹20,75,000", days: "12 Days" },
            { name: "Aneurysm Clipping/Coiling", range: "₹6,64,000 - ₹9,96,000", days: "15 Days" },
            { name: "Microdiscectomy", range: "₹3,32,000 - ₹4,98,000", days: "7 Days" },
            { name: "Craniotomy", range: "₹4,56,500 - ₹7,05,500", days: "12 Days" },
            { name: "Spinal Decompression", range: "₹3,73,500 - ₹5,81,000", days: "8 Days" },
        ],
        faqs: [
            { q: "Is Deep Brain Stimulation safe?", a: "DBS is an FDA-approved, highly effective procedure primarily for Parkinson's disease, performed by highly specialized neuro-surgical teams." },
            { q: "How long is the recovery from brain surgery?", a: "Recovery depends entirely on the type and complexity of the surgery. Hospital stay is usually 4-7 days, with several weeks of rest required afterward." },
            { q: "Do hospitals have advanced imaging?", a: "Yes, all our partner neuro-centers are equipped with high-resolution 3T MRIs, Neuro-navigation systems, and advanced operating microscopes." }
        ]
    },
    "kidney-care": {
        title: "Kidney Care (Nephrology & Urology)",
        contentImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
        overview: "Kidney care encompasses Nephrology (medical kidney conditions) and Urology (surgical kidney and tract issues). India is a leading destination for complex kidney transplants, offering robotic surgeries and comprehensive chronic kidney disease management.",
        diseases: [
            "Chronic Kidney Disease (CKD)", "Kidney Stones", "Renal Failure", "Kidney Cancer", "Polycystic Kidney Disease", "Prostate Enlargement (BPH)"
        ],
        symptoms: [
            "Changes in urination (frequency, color)", "Swelling in legs, ankles, or feet", "Severe fatigue and weakness", "High blood pressure", "Pain in the lower back or sides"
        ],
        procedures: [
            { name: "Kidney Transplant", range: "₹9,96,000 - ₹14,94,000", days: "30 Days" },
            { name: "Robotic Prostatectomy", range: "₹5,39,500 - ₹7,05,500", days: "8 Days" },
            { name: "PCNL (Kidney Stone Removal)", range: "₹2,07,500 - ₹3,32,000", days: "4 Days" },
            { name: "Dialysis (per session)", range: "₹4,150 - ₹8,300", days: "1 Day" },
            { name: "Nephrectomy (Kidney Removal)", range: "₹3,32,000 - ₹5,39,500", days: "7 Days" },
            { name: "TURP (Prostate Surgery)", range: "₹2,49,000 - ₹3,73,500", days: "5 Days" },
        ],
        faqs: [
            { q: "What are the legal requirements for a Kidney Transplant in India?", a: "India has strict organ transplant laws. Only related living donors (like siblings, parents, children, or spouse) are permitted, and all legal documentation must be strictly verified by a government committee." },
            { q: "Can a donor and patient travel back together?", a: "Yes, once cleared by the surgeon. The donor usually recovers within 7-10 days, while the patient requires 3 to 4 weeks in the country." },
            { q: "Are immunosuppressant drugs widely available?", a: "Yes, anti-rejection medications are very easily available and are highly affordable in India compared to western countries." }
        ]
    }
};

const defaultTreatment = treatmentsData.cardiology;

const sidebarMenus = [
    { name: "Cardiology", path: "/cardiology" },
    { name: "Orthopedics", path: "/orthopedics" },
    { name: "IVF & Fertility", path: "/ivf-fertility" },
    { name: "Oncology", path: "/oncology" },
    { name: "Neurosurgery", path: "/neurosurgery" },
    { name: "Kidney Care", path: "/kidney-care" },
    { name: "Urology", path: "/urology" },
    { name: "Gastroenterology", path: "/gastroenterology" }
];

const TreatmentDetail = () => {
    const { treatmentId } = useParams();

    // Use specific data if exists, otherwise fallback to default (Cardiology) for now
    const data = treatmentsData[treatmentId as string] || { ...defaultTreatment, title: treatmentId ? treatmentId.charAt(0).toUpperCase() + treatmentId.slice(1).replace('-', ' ') : "Treatment" };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [treatmentId]);

    return (
        <main className="min-h-screen bg-background selection:bg-brand-blue selection:text-white">
            <Navbar />

            {/* Push content down so it clears the fixed Navbar */}
            <div className="container-max py-16 pt-32 md:pt-40">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Main Content Area (Left) */}
                    <div className="lg:w-[75%] space-y-10">
                        {/* Content Header Image */}
                        <div className="w-full h-[400px] rounded-3xl overflow-hidden shadow-premium">
                            <img src={data.contentImg || defaultTreatment.contentImg} alt="Treatment Overview" className="w-full h-full object-cover" />
                        </div>

                        {/* Overview Section */}
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold text-primary font-display pb-2 border-b-2 border-brand-blue/10 inline-block">Overview</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {data.overview}
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Diseases List */}
                            <div className="space-y-4 p-6 bg-brand-light/40 rounded-2xl border border-brand-blue/5">
                                <h3 className="text-xl font-bold text-primary font-display">Types of Diseases handled by {data.title}</h3>
                                <ul className="space-y-3">
                                    {data.diseases.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-brand-blue mt-2" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Symptoms List */}
                            <div className="space-y-4 p-6 bg-white shadow-sm rounded-2xl border border-slate-100">
                                <h3 className="text-xl font-bold text-primary font-display">Common Symptoms</h3>
                                <ul className="space-y-3">
                                    {data.symptoms.map((item: string, i: number) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                                            <div className="min-w-1.5 min-h-1.5 w-1.5 h-1.5 rounded-full bg-brand-red mt-2" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Procedures Pricing Section */}
                        <div className="space-y-6 pt-6">
                            <h3 className="text-2xl font-bold text-primary font-display">Cost of Some Major Procedures</h3>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {data.procedures.map((proc: any, i: number) => (
                                    <div key={i} className="bg-white border border-brand-blue/10 p-6 rounded-2xl shadow-premium hover:-translate-y-1 transition-transform duration-300">
                                        <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1.5">Procedure</div>
                                        <div className="font-bold text-primary text-sm mb-5 leading-tight h-[40px]">{proc.name}</div>

                                        <div className="space-y-4">
                                            <div>
                                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Total Range</div>
                                                <div className="text-brand-blue font-bold text-sm bg-brand-light/50 inline-block px-3 py-1 rounded-md">{proc.range}</div>
                                            </div>

                                            <div>
                                                <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Estimated Stay</div>
                                                <div className="text-slate-700 font-bold text-sm flex items-center gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                                    {proc.days}
                                                </div>
                                            </div>
                                        </div>

                                        <button className="w-full mt-6 bg-primary text-white font-bold py-3 rounded-xl text-sm hover:bg-brand-blue transition-colors shadow-md">
                                            Book Now
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-brand-red font-medium italic mt-4">
                                Note: Costing shown is a rough estimate. Please contact us for exact customized quotes based on your medical reports.
                            </p>
                        </div>

                        {/* Huge CTA */}
                        <button className="w-full bg-brand-red text-white hover:bg-red-600 transition-colors py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-red/20 active:scale-[0.98]">
                            Get Free Quotes
                        </button>

                        {/* FAQs Accordion */}
                        <div className="space-y-6 pt-10 border-t border-slate-100">
                            <h3 className="text-2xl font-bold text-primary font-display">Frequently Asked Questions</h3>
                            <Accordion type="single" collapsible className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 p-2">
                                {data.faqs.map((faq: any, i: number) => (
                                    <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100 last:border-0 px-4">
                                        <AccordionTrigger className="text-left font-display font-semibold text-primary hover:text-brand-blue transition-colors py-4">
                                            {faq.q}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-muted-foreground leading-relaxed pt-1 pb-5">
                                            {faq.a}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                    </div>

                    {/* Sidebar Area (Right) */}
                    <div className="lg:w-[25%] mt-12 lg:mt-0">
                        <div className="sticky top-28 bg-white rounded-3xl p-6 shadow-premium border border-slate-100">
                            <h4 className="text-brand-red font-bold text-sm uppercase tracking-widest mb-6 pb-4 border-b border-slate-100">
                                Medical Treatments
                            </h4>
                            <div className="flex flex-col space-y-1">
                                {sidebarMenus.map((menu, i) => {
                                    const isActive = menu.path === `/${treatmentId}` || (treatmentId === undefined && menu.path === '/cardiology');
                                    return (
                                        <Link
                                            key={i}
                                            to={menu.path}
                                            className={`px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                                                ? "bg-brand-light text-brand-blue shadow-sm"
                                                : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                                                }`}
                                        >
                                            {menu.name}
                                        </Link>
                                    );
                                })}
                            </div>

                            {/* Quick Contact Box */}
                            <div className="mt-8 bg-primary rounded-2xl p-6 text-white text-center shadow-lg relative overflow-hidden group">
                                <div className="absolute inset-0 bg-brand-blue/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
                                <h5 className="font-display font-bold text-xl mb-2 relative z-10">Need Assistance?</h5>
                                <p className="text-white/80 text-sm mb-6 relative z-10">Our doctors and coordinators are available 24/7 to guide you.</p>
                                <button className="bg-white text-primary w-full py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors relative z-10">
                                    Contact Us Now
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
            <WhatsAppButton />
        </main>
    );
};

export default TreatmentDetail;
