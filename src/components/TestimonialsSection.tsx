import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Delhi",
    text: "Awate Healthcare made my mother's knee replacement journey so smooth. From hospital selection to post-surgery follow-up, they were with us every step.",
    rating: 5,
  },
  {
    name: "Rajesh Kumar",
    location: "Chennai",
    text: "I was confused about where to get my cardiac bypass done. The team at Awate guided me to one of the best hospitals and saved me nearly 40% on costs.",
    rating: 5,
  },
  {
    name: "Anitha Desai",
    location: "Mumbai",
    text: "The second opinion service was invaluable. They connected me with a specialist who suggested a much less invasive procedure. Highly recommend!",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Discover What Our Patients Have to Say
          </h2>
          <p className="text-muted-foreground">
            Real stories from real patients who trusted us with their healthcare journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow duration-300 relative">
              <Quote className="w-8 h-8 text-secondary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-healthcare flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">{t.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
