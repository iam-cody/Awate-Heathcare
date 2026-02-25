import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const NewsletterCTA = () => {
  return (
    <section className="py-16">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="gradient-cta rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary-foreground/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-primary-foreground/10 rounded-full translate-x-1/4 translate-y-1/4" />

          <div className="relative z-10 max-w-2xl mx-auto text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto">
              <Mail className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold !text-primary-foreground font-display">
              Stay Updated on Health & Wellness
            </h2>
            <p className="text-primary-foreground/80 text-sm">
              Subscribe to our newsletter for expert health tips, hospital updates, and exclusive offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <Input
                placeholder="Enter your email"
                type="email"
                className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button className="bg-primary-foreground text-destructive font-semibold hover:bg-primary-foreground/90 shrink-0">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterCTA;
