import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    city: "Mumbai",
    treatment: "Bypass Surgery",
    text: "Awate Healthcare's team was incredible. They connected me with the top cardiac surgeon in Mumbai and managed all hospital formalities. Truly life-saving.",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704d"
  },
  {
    name: "Priya Sharma",
    city: "Delhi",
    treatment: "IVF Treatment",
    text: "From my first call to my final treatment, everything was handled with such care. They provided options that fit my budget without compromising on quality.",
    image: "https://i.pravatar.cc/150?u=a04258114e29026702d"
  },
  {
    name: "Samuel D'souza",
    city: "Goa",
    treatment: "Knee Replacement",
    text: "The cost transparency was what impressed me most. I knew exactly what I was paying for before checking into the hospital. Great coordination!",
    image: "https://i.pravatar.cc/150?u=a042581f4e29026704f"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding bg-light relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-max relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-brand-red font-bold text-sm uppercase tracking-[0.3em]">Patient Stories</span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-display">
            Restoring Health, Building Trust
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Don't just take our word for it. Hear from patients who successfully navigated their
            healthcare journeys with our support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-premium relative group hover:-translate-y-2 transition-all duration-500">
              <Quote className="absolute top-8 right-10 w-12 h-12 text-brand-blue/5 -z-0 group-hover:text-brand-blue/10 transition-colors" />

              <div className="relative z-10 space-y-6">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-brand-green text-brand-green" />
                  ))}
                </div>

                <p className="text-lg text-primary/80 font-medium leading-relaxed italic">
                  "{item.text}"
                </p>

                <div className="pt-6 border-t border-brand-blue/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-primary tracking-tight">{item.name}</p>
                      <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.city}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="px-3 py-1 bg-brand-green/10 text-brand-green text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                      Verified
                    </div>
                    <p className="text-[10px] font-bold text-muted-foreground mt-1 uppercase tracking-tighter">{item.treatment}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="text-primary font-bold text-sm uppercase tracking-[0.2em] hover:text-brand-red transition-colors flex items-center gap-3 mx-auto group">
            Watch Video Success Stories <span className="w-10 h-10 rounded-full border border-brand-blue/20 flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-all">▶</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
