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
import { ContactModal } from "@/components/ContactModal";

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
        ]
    },
    "diabetology": {
        title: "Diabetology & Metabolic Care",
        contentImg: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200",
        overview: "Expert management and reversal programs for diabetes and allied metabolic disorders. Our partnered centers provide holistic care involving nutritionists, endocrinologists, and advanced continuous glucose monitoring.",
        diseases: ["Type 1 Diabetes", "Type 2 Diabetes", "Gestational Diabetes", "Diabetic Neuropathy", "Diabetic Retinopathy", "Metabolic Syndrome"],
        symptoms: ["Increased thirst and urination", "Unexplained weight loss", "Fatigue", "Blurred vision", "Slow-healing sores"],
        procedures: [
            { name: "Comprehensive Diabetic Screening", range: "₹4,150 - ₹12,450", days: "1 Day" },
            { name: "Insulin Pump Initiation", range: "₹83,000 - ₹2,49,000", days: "3 Days" },
            { name: "Advanced Continuous Glucose Monitoring", range: "₹24,900 - ₹41,500", days: "1 Day" }
        ],
        faqs: [
            { q: "Can Type 2 Diabetes be reversed?", a: "In many cases, Type 2 diabetes can be put into remission or significantly managed through rigorous lifestyle, diet, and weight management programs under expert guidance." },
            { q: "What tests are included in the screening?", a: "Screening includes HbA1c, fasting glucose, lipid profile, kidney function tests, and eye/foot examinations." }
        ]
    },
    "dentistry": {
        title: "Advanced Dentistry & Oral Surgery",
        contentImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=1200",
        overview: "World-class dental clinics offering everything from routine cleanings to complex maxillofacial surgeries and full-mouth rehabilitations using advanced CAD/CAM technology.",
        diseases: ["Tooth Decay", "Periodontal Disease", "Impacted Wisdom Teeth", "Oral Cancer", "Malocclusion", "TMJ Disorders"],
        symptoms: ["Toothache or sensitivity", "Bleeding gums", "Jaw pain", "Difficulty chewing", "Missing teeth"],
        procedures: [
            { name: "Dental Implant (Single)", range: "₹24,900 - ₹49,800", days: "1-2 Days" },
            { name: "Full Mouth Rehabilitation", range: "₹2,49,000 - ₹5,81,000", days: "10-14 Days" },
            { name: "Root Canal Treatment", range: "₹4,150 - ₹12,450", days: "1 Day" },
            { name: "Maxillofacial Surgery", range: "₹83,000 - ₹3,32,000", days: "5 Days" },
            { name: "Smile Designing / Veneers", range: "₹41,500 - ₹1,66,000", days: "3-5 Days" }
        ],
        faqs: [
            { q: "How long does a dental implant procedure take?", a: "The surgical placement takes a few hours, but the complete process involving the crown attachment requires 3-6 months for the bone to heal." },
            { q: "Are the materials internationally certified?", a: "Yes, our partner clinics use globally renowned brands (like Nobel Biocare, Straumann) for implants and materials." }
        ]
    },
    "gynaecology": {
        title: "Gynaecology & Obstetrics",
        contentImg: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=1200",
        overview: "Comprehensive women's healthcare providing advanced minimally invasive surgeries, high-risk pregnancy management, and gynecological oncology services.",
        diseases: ["Endometriosis", "Uterine Fibroids", "PCOS", "Pelvic Organ Prolapse", "Cervical/Ovarian Cancer", "High-Risk Pregnancy"],
        symptoms: ["Irregular or heavy bleeding", "Pelvic pain", "Pain during intercourse", "Unusual discharge", "Infertility issues"],
        procedures: [
            { name: "Laparoscopic Hysterectomy", range: "₹1,24,500 - ₹2,07,500", days: "3-4 Days" },
            { name: "Myomectomy (Fibroid Removal)", range: "₹1,07,900 - ₹1,82,600", days: "3 Days" },
            { name: "Ovarian Cystectomy", range: "₹83,000 - ₹1,49,400", days: "2 Days" },
            { name: "Robotic Gynaecologic Surgery", range: "₹2,49,000 - ₹4,15,000", days: "4 Days" }
        ],
        faqs: [
            { q: "What is the advantage of laparoscopic surgery?", a: "Laparoscopic (minimally invasive) surgery results in smaller incisions, less pain, shorter hospital stays, and faster recovery." },
            { q: "Is robotic surgery safe for fibroids?", a: "Yes, robotic surgery offers unparalleled precision, making it an excellent and safe choice for complex fibroid removals." }
        ]
    },
    "urology": {
        title: "Urology & Male Health",
        contentImg: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1200",
        overview: "Expertise in addressing conditions of the male and female urinary tract, as well as the male reproductive system using advanced laser and robotic techniques.",
        diseases: ["Kidney/Bladder Stones", "Enlarged Prostate (BPH)", "Prostate Cancer", "Urinary Incontinence", "Erectile Dysfunction"],
        symptoms: ["Pain or burning during urination", "Frequent urge to urinate", "Blood in urine", "Lower abdominal or back pain", "Difficulty starting urination"],
        procedures: [
            { name: "Laser Prostate Surgery (HoLEP)", range: "₹1,24,500 - ₹2,07,500", days: "2-3 Days" },
            { name: "Robotic Radical Prostatectomy", range: "₹4,15,000 - ₹6,64,000", days: "5-7 Days" },
            { name: "Ureteroscopy / Lithotripsy", range: "₹66,400 - ₹1,24,500", days: "1-2 Days" },
            { name: "Penile Implant Surgery", range: "₹4,15,000 - ₹8,30,000", days: "3 Days" }
        ],
        faqs: [
            { q: "Is laser prostate surgery better than traditional TURP?", a: "Laser surgeries like HoLEP offer significantly less bleeding, allowing for faster recovery and usually require only an overnight hospital stay." },
            { q: "Are kidney stones always treated with surgery?", a: "No, small stones may pass naturally or be treated with medication or non-invasive shock wave therapy (ESWL)." }
        ]
    },
    "ent": {
        title: "ENT (Ear, Nose & Throat)",
        contentImg: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200",
        overview: "Specialized care for disorders of the head, neck, ear, nose, and throat, including advanced cochlear implants, sinus surgeries, and vocal cord procedures.",
        diseases: ["Hearing Loss", "Chronic Sinusitis", "Tonsillitis", "Sleep Apnea", "Vocal Cord Nodules", "Head and Neck Tumors"],
        symptoms: ["Chronic earaches or fluid discharge", "Persistent nasal congestion", "Snoring or breathing pauses during sleep", "Hoarseness", "Difficulty swallowing"],
        procedures: [
            { name: "Cochlear Implant Surgery", range: "₹6,64,000 - ₹12,45,000", days: "3-5 Days" },
            { name: "FESS (Endoscopic Sinus Surgery)", range: "₹83,000 - ₹1,49,400", days: "1-2 Days" },
            { name: "Tonsillectomy / Adenoidectomy", range: "₹49,800 - ₹83,000", days: "1 Day" },
            { name: "Sleep Apnea Surgery", range: "₹1,24,500 - ₹2,49,000", days: "2-3 Days" },
            { name: "Thyroidectomy", range: "₹1,07,900 - ₹1,82,600", days: "3 Days" }
        ],
        faqs: [
            { q: "What is the success rate of cochlear implants?", a: "Cochlear implants have a very high success rate in restoring functional hearing, especially for profound sensorineural hearing loss, followed by focused speech therapy." },
            { q: "Will I have visible scars after sinus surgery?", a: "No, FESS is performed entirely through the nostrils using endoscopes, resulting in no external scarring." }
        ]
    },
    "pulmonology": {
        title: "Pulmonology & Respiratory Care",
        contentImg: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
        overview: "Comprehensive diagnostic and therapeutic services for acute and chronic respiratory and lung conditions, utilizing state-of-the-art diagnostic imaging and bronchoscopy.",
        diseases: ["Asthma", "COPD", "Lung Cancer", "Pulmonary Fibrosis", "Tuberculosis", "Pneumonia", "Sleep Apnea"],
        symptoms: ["Chronic cough", "Shortness of breath", "Wheezing", "Chest tightness", "Coughing up blood"],
        procedures: [
            { name: "Bronchoscopy", range: "₹24,900 - ₹41,500", days: "1 Day" },
            { name: "Thoracoscopy / VATS", range: "₹1,49,400 - ₹2,49,000", days: "3-5 Days" },
            { name: "Lung Biopsy", range: "₹41,500 - ₹83,000", days: "1-2 Days" },
            { name: "Lung Volume Reduction Surgery", range: "₹2,49,000 - ₹4,15,000", days: "5-7 Days" }
        ],
        faqs: [
            { q: "Is bronchoscopy painful?", a: "No, bronchoscopy is usually performed under conscious sedation or general anesthesia, making it a painless procedure." },
            { q: "How is COPD managed?", a: "COPD is managed through bronchodilators, inhaled corticosteroids, oxygen therapy, pulmonary rehabilitation, and smoking cessation programs." }
        ]
    },
    "ophthalmology": {
        title: "Ophthalmology & Eye Care",
        contentImg: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&q=80&w=1200",
        overview: "Advanced vision correction therapies, micro-incisional surgeries, and comprehensive treatments for all complex ocular conditions ensuring the highest standards of eye care.",
        diseases: ["Cataracts", "Glaucoma", "Macular Degeneration", "Diabetic Retinopathy", "Corneal Disorders", "Refractive Errors"],
        symptoms: ["Blurry or double vision", "Halos around lights", "Loss of peripheral vision", "Eye pain or redness", "Floaters or flashes of light"],
        procedures: [
            { name: "Cataract Surgery (Phaco)", range: "₹33,200 - ₹83,000", days: "1 Day" },
            { name: "LASIK / SMILE Surgery", range: "₹49,800 - ₹1,07,900", days: "1 Day" },
            { name: "Corneal Transplant", range: "₹1,24,500 - ₹2,07,500", days: "2-3 Days" },
            { name: "Retinal Detachment Surgery", range: "₹83,000 - ₹1,66,000", days: "1-2 Days" },
            { name: "Glaucoma Surgery", range: "₹49,800 - ₹1,07,900", days: "1-2 Days" }
        ],
        faqs: [
            { q: "How quickly will my vision improve after cataract surgery?", a: "Most patients notice a significant improvement in vision within 24 to 48 hours after the procedure." },
            { q: "Is LASIK permanent?", a: "Yes, LASIK permanently reshapes the cornea. However, natural age-related changes (presbyopia) can still occur later in life." }
        ]
    },
    "general-surgery": {
        title: "General & Laparoscopic Surgery",
        contentImg: "https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=1200",
        overview: "Expertise in specialized surgical management of the abdomen, digestive tract, endocrine system, and breast, utilizing minimally invasive laparoscopic tools.",
        diseases: ["Hernia", "Gallstones", "Appendicitis", "Thyroid Disorders", "Breast Tumors", "Hemorrhoids / Fissures"],
        symptoms: ["Severe abdominal pain", "Unexplained swelling or lumps", "Difficulty swallowing", "Chronic digestive issues"],
        procedures: [
            { name: "Laparoscopic Gallbladder Removal", range: "₹66,400 - ₹1,24,500", days: "1-2 Days" },
            { name: "Laparoscopic Hernia Repair", range: "₹83,000 - ₹1,49,400", days: "1-2 Days" },
            { name: "Appendectomy", range: "₹49,800 - ₹99,600", days: "1-2 Days" },
            { name: "Laser Surgery for Piles/Fistula", range: "₹41,500 - ₹83,000", days: "1 Day" },
            { name: "Breast Lumpectomy", range: "₹83,000 - ₹1,49,400", days: "2 Days" }
        ],
        faqs: [
            { q: "What is laparoscopic surgery?", a: "Also known as keyhole surgery, it relies on small incisions and a camera, reducing blood loss, pain, and recovery time compared to open surgery." },
            { q: "How soon can I walk after a hernia operation?", a: "Most patients are encouraged to walk on the same day or the day following laparoscopic hernia surgery." }
        ]
    },
    "psychiatry": {
        title: "Psychiatry & Mental Health",
        contentImg: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200",
        overview: "Compassionate, confidential, and comprehensive psychiatric diagnosis, medication management, and specialized therapeutic counseling for mental wellness.",
        diseases: ["Clinical Depression", "Anxiety Disorders", "Bipolar Disorder", "Schizophrenia", "PTSD", "Substance Abuse"],
        symptoms: ["Persistent sadness", "Extreme mood swings", "Hallucinations", "Severe insomnia", "Social withdrawal/isolation"],
        procedures: [
            { name: "Comprehensive Psychiatric Evaluation", range: "₹4,150 - ₹12,450", days: "1 Day" },
            { name: "In-patient Rehab & Care (Per Month)", range: "₹83,000 - ₹2,49,000", days: "30 Days" },
            { name: "Cognitive Behavioral Therapy Session", range: "₹2,075 - ₹4,980", days: "1 Day" },
            { name: "Transcranial Magnetic Stimulation (TMS)", range: "₹83,000 - ₹1,66,000", days: "Course" }
        ],
        faqs: [
            { q: "Are consultations strictly confidential?", a: "Absolutely. We adhere to the strictest medical confidentiality policies globally. Your data is never shared without your explicit consent." },
            { q: "How effective is TMS for depression?", a: "TMS is an highly effective, non-invasive treatment for patients who have not responded well to traditional antidepressant medications." }
        ]
    },
    "endocrinology": {
        title: "Endocrinology & Hormone Care",
        contentImg: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=1200",
        overview: "Advanced management of diseases related to glands and hormones, offering cutting-edge diagnostics and personalized treatment regimens.",
        diseases: ["Thyroid Disorders", "PCOS", "Osteoporosis", "Adrenal Gland Disorders", "Pituitary Tumors"],
        symptoms: ["Unexplained weight changes", "Extreme fatigue", "Excessive hair growth or loss", "Bone fractures", "Irregular periods"],
        procedures: [
            { name: "Complete Endocrine Panel", range: "₹8,300 - ₹20,750", days: "1 Day" },
            { name: "Radioiodine Therapy (for Hyperthyroidism)", range: "₹33,200 - ₹66,400", days: "1-2 Days" },
            { name: "Thyroid Nodule Ablation", range: "₹83,000 - ₹1,49,400", days: "1 Day" }
        ],
        faqs: [
            { q: "What is an endocrinologist?", a: "A doctor who specializes in diagnosing and treating conditions caused by hormone imbalances or gland problems." },
            { q: "How is PCOS treated?", a: "PCOS is typically managed through a combination of lifestyle changes, hormone therapy, and medications to regulate insulin." }
        ]
    },
    "bariatric-surgery": {
        title: "Bariatric & Weight Loss Surgery",
        contentImg: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200",
        overview: "Life-changing surgical procedures designed to induce significant weight loss and resolve severe obesity-related conditions like type 2 diabetes and hypertension.",
        diseases: ["Severe Obesity", "Metabolic Syndrome", "Obesity-induced Sleep Apnea", "Type 2 Diabetes associated with Obesity"],
        symptoms: ["BMI over 35/40", "Joint pain due to weight", "Chronic fatigue", "Unsuccessful long-term weight loss via diet/exercise"],
        procedures: [
            { name: "Laparoscopic Gastric Bypass", range: "₹3,32,000 - ₹4,98,000", days: "3-4 Days" },
            { name: "Laparoscopic Sleeve Gastrectomy", range: "₹2,49,000 - ₹4,15,000", days: "3 Days" },
            { name: "Intragastric Balloon Placement", range: "₹1,49,400 - ₹2,49,000", days: "1-2 Days" },
            { name: "Gastric Banding", range: "₹2,49,000 - ₹3,73,500", days: "3 Days" }
        ],
        faqs: [
            { q: "How much weight can I expect to lose?", a: "Most patients lose 50% to 80% of their excess body weight within 12-18 months of surgery, depending on the procedure and lifestyle changes." },
            { q: "Will bariatric surgery cure my diabetes?", a: "In a vast majority of cases, bariatric surgeries (like Gastric Bypass) cause an immediate and long-term remission of Type 2 Diabetes." }
        ]
    },
    "plastic-surgery": {
        title: "Plastic, Reconstructive & Aesthetic Surgery",
        contentImg: "https://images.unsplash.com/photo-1512736912-cd9f15fe2305?auto=format&fit=crop&q=80&w=1200",
        overview: "Enhance your natural beauty and reconstruct bodily defects using highly precise, technologically advanced aesthetic and reconstructive surgical techniques.",
        diseases: ["Burn Injuries", "Congenital Defects (e.g., Cleft Lip)", "Breast Cancer (Reconstruction)", "Trauma/Scarring", "Aesthetic Dissatisfaction"],
        symptoms: ["Physical disfigurement", "Functional impairment due to trauma", "Breathing issues (deviated septum)", "Excess skin/fat"],
        procedures: [
            { name: "Rhinoplasty (Nose Job)", range: "₹83,000 - ₹2,07,500", days: "1-2 Days" },
            { name: "Breast Augmentation/Reduction", range: "₹1,24,500 - ₹2,49,000", days: "1-2 Days" },
            { name: "Liposuction / Body Contouring", range: "₹83,000 - ₹2,49,000", days: "1-2 Days" },
            { name: "Facelift (Rhytidectomy)", range: "₹1,49,400 - ₹3,32,000", days: "1-2 Days" },
            { name: "Hair Transplant (FUE)", range: "₹49,800 - ₹1,24,500", days: "1 Day" }
        ],
        faqs: [
            { q: "Is plastic surgery safe in India?", a: "Yes, our partner surgeons are board-certified and internationally trained, operating in JCI-accredited facilities with state-of-the-art sterile protocols." },
            { q: "How long does bruising last after a facelift?", a: "Most swelling and bruising peak at 2-3 days and gradually resolve over 10 to 14 days." }
        ]
    },
    "transplant": {
        title: "Organ Transplant Services",
        contentImg: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80&w=1200",
        overview: "India's highest success rate programs for Liver, Heart, Bone Marrow, and Kidney transplants with world-class post-operative care and immunosuppression management.",
        diseases: ["End-Stage Liver Disease (Cirrhosis)", "Heart Failure", "Leukemia/Lymphoma (BMT)", "End-Stage Renal Disease", "Severe Lung Disease"],
        symptoms: ["Severe jaundice", "Extreme breathlessness", "Complete organ failure indicators", "Unresponsive to typical medications"],
        procedures: [
            { name: "Liver Transplant", range: "₹18,26,000 - ₹24,90,000", days: "21-30 Days" },
            { name: "Bone Marrow Transplant (Allogeneic)", range: "₹16,60,000 - ₹29,05,000", days: "40-60 Days" },
            { name: "Heart Transplant", range: "₹20,75,000 - ₹33,20,000", days: "25-35 Days" },
            { name: "Kidney Transplant", range: "₹9,96,000 - ₹14,94,000", days: "21-30 Days" }
        ],
        faqs: [
            { q: "Do you arrange the organ donor?", a: "No. By law, living donors must be close family relatives. Cadaver (deceased) organ waiting lists are primarily for Indian citizens. You must bring a compatible family donor." },
            { q: "What is the legality for foreign patients?", a: "Foreign patients and their donors require clearance from the Authorization Committee. We help facilitate all embassy interactions and legal paperwork." }
        ]
    },
    "paediatric": {
        title: "Paediatrics & Neonatology",
        contentImg: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=1200",
        overview: "Compassionate, specialized care for infants, children, and adolescents, featuring advanced NICUs and pediatric intensive care units.",
        diseases: ["Congenital Heart Defects", "Pediatric Cancer", "Cerebral Palsy", "Genetic Disorders", "Neonatal Complications"],
        symptoms: ["Failure to thrive", "Developmental delays", "Chronic pediatric infections", "Visible physical anomalies at birth"],
        procedures: [
            { name: "Pediatric Cardiac Surgery", range: "₹3,32,000 - ₹6,64,000", days: "10-14 Days" },
            { name: "Cochlear Implant (Child)", range: "₹7,47,000 - ₹13,28,000", days: "3-5 Days" },
            { name: "NICU Care (Per Day)", range: "₹16,600 - ₹33,200", days: "Varies" },
            { name: "Pediatric Orthopedic Correction", range: "₹1,24,500 - ₹3,32,000", days: "3-5 Days" }
        ],
        faqs: [
            { q: "Can parents stay with the child in the hospital?", a: "Yes, premium private rooms are designed to accommodate at least one parent comfortably alongside the child during their stay." },
            { q: "Are pediatric surgeons different from general surgeons?", a: "Absolutely. Pediatric surgeons undergo specialized years of training focusing specifically on the delicate surgical needs of growing children." }
        ]
    },
    "gastroenterology": {
        title: "Gastroenterology & Hepatology",
        contentImg: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80&w=1200",
        overview: "Expert diagnosis and advanced endoscopic treatments for digestive tract, liver, and pancreatic disorders, emphasizing minimally invasive solutions.",
        diseases: ["Gastric Ulcers", "Hepatitis B/C", "Crohn's Disease", "Ulcerative Colitis", "Liver Cirrhosis", "Pancreatitis", "Gallstones"],
        symptoms: ["Chronic stomach pain", "Severe acid reflux or heartburn", "Blood in stool", "Jaundice (yellowing of skin)", "Unexplained digestive issues"],
        procedures: [
            { name: "Diagnostic Endoscopy/Colonoscopy", range: "₹8,300 - ₹20,750", days: "1 Day" },
            { name: "ERCP (Bile Duct Stone Removal)", range: "₹49,800 - ₹99,600", days: "1-2 Days" },
            { name: "Laparoscopic Cholecystectomy", range: "₹66,400 - ₹1,24,500", days: "1-2 Days" },
            { name: "Hepatitis Treatment Plan", range: "₹41,500 - ₹1,66,000", days: "Outpatient" },
            { name: "Bowel Resection Surgery", range: "₹1,66,000 - ₹3,32,000", days: "4-6 Days" }
        ],
        faqs: [
            { q: "Is a colonoscopy painful?", a: "A colonoscopy is performed under sedation or light anesthesia, making the procedure highly comfortable and painless." },
            { q: "What causes liver cirrhosis?", a: "Cirrhosis commonly results from chronic alcohol abuse, chronic viral hepatitis (B or C), or non-alcoholic fatty liver disease (NAFLD)." }
        ]
    }
};

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

    const formattedTitle = treatmentId
        ? treatmentId.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
        : "Treatment";

    const genericTreatment = {
        title: formattedTitle,
        contentImg: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200",
        overview: `Comprehensive care and advanced treatment options for ${formattedTitle}. Our network of top hospitals provides world-class specialists and cutting-edge technology for international patients.`,
        diseases: ["General conditions", "Advanced complications", "Specialized cases", "Preventive care"],
        symptoms: ["Variable symptoms", "Consult with a specialist for detailed symptoms"],
        procedures: [
            { name: "Consultation & Diagnostics", range: "₹4,150 - ₹12,450", days: "1 Day" },
            { name: "Standard Procedure", range: "₹83,000 - ₹2,49,000", days: "3 Days" },
            { name: "Advanced Treatment", range: "₹2,49,000 - ₹4,98,000", days: "7 Days" }
        ],
        faqs: [
            { q: "How long does the treatment typically take?", a: "The duration depends on the specific condition and treatment plan recommended by our specialists." },
            { q: "Do you provide tele-consultation before travel?", a: "Yes, we always arrange secure video consultations with the senior doctor before you travel to India." },
            { q: "Is the cost covered by my medical insurance?", a: "Many treatments are handled by international insurances. We can assist you with all necessary documentation." }
        ]
    };

    const data = treatmentsData[treatmentId as string] || genericTreatment;

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
                            <img src={data.contentImg} alt="Treatment Overview" className="w-full h-full object-cover" />
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

                                        <ContactModal triggerClassName="w-full mt-6">
                                            <button className="w-full bg-primary text-white font-bold py-3 rounded-xl text-sm hover:bg-brand-blue transition-colors shadow-md">
                                                Book Now
                                            </button>
                                        </ContactModal>
                                    </div>
                                ))}
                            </div>

                            <p className="text-sm text-brand-red font-medium italic mt-4">
                                Note: Costing shown is a rough estimate. Please contact us for exact customized quotes based on your medical reports.
                            </p>
                        </div>

                        {/* Huge CTA */}
                        <ContactModal triggerClassName="w-full">
                            <button className="w-full bg-brand-red text-white hover:bg-red-600 transition-colors py-5 rounded-2xl font-bold text-lg shadow-xl shadow-brand-red/20 active:scale-[0.98]">
                                Get Free Quotes
                            </button>
                        </ContactModal>

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
                                <ContactModal triggerClassName="w-full relative z-10">
                                    <button className="bg-white text-primary w-full py-3 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">
                                        Contact Us Now
                                    </button>
                                </ContactModal>
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
