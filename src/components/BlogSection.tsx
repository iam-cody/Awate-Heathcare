import { ArrowRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    img: blog1,
    category: "Family Health",
    title: "Top 5 Preventive Health Checkups Every Family Needs",
    date: "Feb 20, 2026",
  },
  {
    img: blog2,
    category: "Medical Technology",
    title: "How AI Is Transforming Diagnosis in Indian Hospitals",
    date: "Feb 15, 2026",
  },
  {
    img: blog3,
    category: "Nutrition",
    title: "A Complete Guide to Post-Surgery Nutrition and Recovery",
    date: "Feb 10, 2026",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Blog</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
            Discover Health & Wellness Insights
          </h2>
          <p className="text-muted-foreground">
            Stay informed with the latest healthcare tips, medical breakthroughs, and wellness advice.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <article key={i} className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow duration-300 group cursor-pointer">
              <div className="overflow-hidden h-48">
                <img
                  src={post.img}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-2.5 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="font-semibold text-foreground font-display leading-snug group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>
                <a href="#" className="inline-flex items-center gap-1 text-sm text-secondary font-medium hover:underline">
                  Read More <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
