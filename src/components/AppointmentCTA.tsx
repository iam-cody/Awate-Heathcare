import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const AppointmentCTA = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="gradient-healthcare rounded-3xl p-8 md:p-14 text-center relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold !text-primary-foreground font-display">
              Schedule Your Appointment Today
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              Don't wait to get the care you need. Our patient coordinators are ready to help you
              find the right doctor and hospital for your treatment.
            </p>
            <Button
              size="lg"
              className="gradient-cta text-primary-foreground border-0 hover:opacity-90 gap-2 px-8 mt-2"
            >
              Book Appointment <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentCTA;
