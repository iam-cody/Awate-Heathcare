import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import appointmentImg from "@/assets/appointment-bg.jpg";

const AppointmentForm = () => {
  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Book Your Appointment Today
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fill out the form and our patient coordinator will contact you within 30 minutes
              to discuss your healthcare needs and connect you with the right specialist.
            </p>

            <form className="space-y-4 pt-2" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Full Name" className="bg-background" />
                <Input placeholder="Phone Number" type="tel" className="bg-background" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Email Address" type="email" className="bg-background" />
                <Input placeholder="City" className="bg-background" />
              </div>
              <Textarea placeholder="Describe your medical concern..." className="bg-background min-h-[100px]" />
              <Button type="submit" size="lg" className="w-full sm:w-auto gradient-cta text-primary-foreground border-0 hover:opacity-90 px-10">
                Submit
              </Button>
            </form>
          </div>

          <div className="hidden lg:block rounded-2xl overflow-hidden shadow-card-hover">
            <img
              src={appointmentImg}
              alt="Doctor consulting with patient"
              className="w-full h-full object-cover min-h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
