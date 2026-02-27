import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone } from "lucide-react";

const specialitiesList = [
    { name: "Cardiology", img: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&q=80&w=600", link: "/cardiology" },
    { name: "Orthopedics", img: "https://images.unsplash.com/photo-1583324113626-70df0f4deaab?auto=format&fit=crop&q=80&w=600", link: "/orthopedics" },
    { name: "Oncology", img: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600", link: "/oncology" },
    { name: "IVF & Fertility", img: "https://images.unsplash.com/photo-1532187875302-1df62ea53b1b?auto=format&fit=crop&q=80&w=600", link: "/ivf-fertility" },
    { name: "Neurosurgery", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=600", link: "/neurosurgery" },
    { name: "Kidney Care", img: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?auto=format&fit=crop&q=80&w=600", link: "/kidney-care" },
    { name: "Diabetology", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600", link: "/diabetology" },
    { name: "Dentistry", img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600", link: "/dentistry" },
    { name: "Gynaecology", img: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?auto=format&fit=crop&q=80&w=600", link: "/gynaecology" },
    { name: "Urology", img: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=600", link: "/urology" },
    { name: "ENT", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=600", link: "/ent" },
    { name: "Pulmonology", img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=600", link: "/pulmonology" },
    { name: "Ophthalmology", img: "https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&q=80&w=600", link: "/ophthalmology" },
    { name: "General Surgery", img: "https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80&w=600", link: "/general-surgery" },
    { name: "Psychiatry", img: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600", link: "/psychiatry" },
    { name: "Endocrinology", img: "https://images.unsplash.com/photo-1579684453423-f84349ef60b0?auto=format&fit=crop&q=80&w=600", link: "/endocrinology" },
    { name: "Bariatric Surgery", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=600", link: "/bariatric-surgery" },
    { name: "Plastic Surgery", img: "https://images.unsplash.com/photo-1512736912-cd9f15fe2305?auto=format&fit=crop&q=80&w=600", link: "/plastic-surgery" },
    { name: "Transplant", img: "https://images.unsplash.com/photo-1519494080410-f9aa76cb4283?auto=format&fit=crop&q=80&w=600", link: "/transplant" },
    { name: "Paediatric", img: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&q=80&w=600", link: "/paediatric" },
    { name: "Gastroenterology", img: "https://images.unsplash.com/photo-1584516150909-c43483ee7932?auto=format&fit=crop&q=80&w=600", link: "/gastroenterology" }
];

const wellnessList = [
    { name: "Cancer Screening Package", img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=600" },
    { name: "Diabetes Screening Package", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600" },
    { name: "Preventive Heart Package", img: "https://images.unsplash.com/photo-1505592225030-dad7a0531844?auto=format&fit=crop&q=80&w=600" },
    { name: "Executive Health Check Up", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600" },
    { name: "Female Wellness Package", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=600" },
    { name: "Male Wellness Package", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600" }
];

const alternativeList = [
    { name: "Yoga", img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600" },
    { name: "Ayurveda", img: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600" },
    { name: "Accupressure", img: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=600" },
    { name: "Naturopathy", img: "https://images.unsplash.com/photo-1542840410-3092f99611a3?auto=format&fit=crop&q=80&w=600" },
    { name: "Homeopathy", img: "https://images.unsplash.com/photo-1615486511484-92e172dc4ea0?auto=format&fit=crop&q=80&w=600" }
];

const SpecialtyCard = ({ item }: { item: any }) => {
    const content = (
        <div className="group relative h-[160px] md:h-[200px] rounded-[1.5rem] overflow-hidden shadow-md block cursor-pointer bg-primary">
            <img
                src={item.img}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110 opacity-80"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent pointer-events-none transition-all duration-300 group-hover:via-primary/60" />

            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 space-y-1.5 md:space-y-2">
                <h3 className="text-base md:text-lg font-bold text-white font-display tracking-tight leading-tight">
                    {item.name}
                </h3>
                <div className="pt-1 text-white/90 font-bold text-[9px] md:text-[10px] uppercase tracking-widest flex items-center gap-2">
                    Explore <span className="block w-4 md:w-6 h-[2px] bg-brand-red transition-all duration-300 ease-in-out group-hover:w-10 md:group-hover:w-12" />
                </div>
            </div>
        </div>
    );

    if (item.link) {
        return <Link to={item.link} className="block">{content}</Link>;
    }
    return <div>{content}</div>;
};

const SectionBadge = ({ title }: { title: string }) => (
    <div className="flex justify-center mb-10 relative z-10 w-full px-4">
        <div className="bg-brand-blue text-white font-bold px-8 py-3 rounded-full text-base md:text-lg shadow-premium w-full text-center md:w-auto">
            {title}
        </div>
    </div>
);

const Specialties = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="min-h-screen bg-slate-50 selection:bg-brand-blue selection:text-white pb-0">
            <Navbar />

            {/* Premium Hero Banner */}
            <div className="relative pt-40 pb-16 md:pt-48 md:pb-20 overflow-hidden w-full">
                {/* Background Image & Overlay */}
                <div className="absolute inset-0 w-full h-full">
                    <img
                        src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000"
                        alt="Advanced Medical Facility"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/85 backdrop-blur-sm"></div>
                </div>

                <div className="container-max relative z-10 flex flex-col items-center justify-center text-center px-4">
                    <div className="inline-block bg-brand-red/10 border border-brand-red/20 px-5 py-2 rounded-full mb-6">
                        <span className="text-white font-bold text-xs md:text-sm tracking-widest uppercase">Comprehensive Healthcare</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold font-display text-white tracking-tight mb-4">
                        All Medical Specialties
                    </h1>

                    <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
                        Explore our wide range of tailored medical treatments, holistic wellness packages, and alternative therapies provided by globally recognized experts.
                    </p>

                    <div className="flex bg-white/10 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full items-center gap-4 shadow-2xl hover:bg-white/20 transition-colors cursor-pointer group">
                        <div className="bg-brand-red p-2.5 rounded-full group-hover:scale-110 transition-transform">
                            <Phone className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-white font-bold text-sm md:text-base tracking-widest whitespace-nowrap">24/7 HELPLINE: +91 98765 43210</span>
                    </div>
                </div>
            </div>

            <div className="container-max pt-16 pb-24 space-y-20 relative px-4 md:px-0">
                {/* Specialities Section */}
                <section className="relative">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                        {specialitiesList.map((item, i) => (
                            <SpecialtyCard key={i} item={item} />
                        ))}
                    </div>
                </section>

                {/* Wellness Section */}
                <section className="relative">
                    <SectionBadge title="Health & Wellness Clinic" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
                        {wellnessList.map((item, i) => (
                            <SpecialtyCard key={i} item={item} />
                        ))}
                    </div>
                </section>

                {/* Alternative Medicine */}
                <section className="relative">
                    <SectionBadge title="Alternative Medicine" />
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-5">
                        {alternativeList.map((item, i) => (
                            <SpecialtyCard key={i} item={item} />
                        ))}
                    </div>
                </section>

            </div>

            <Footer />
        </main>
    );
};

export default Specialties;
