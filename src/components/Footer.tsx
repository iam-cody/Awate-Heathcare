import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-max section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Awate Healthcare Logo"
                className="h-10 w-auto object-contain invert"
              />
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              India's trusted healthcare guidance platform connecting patients with the best hospitals and specialists.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4 !text-primary-foreground">Quick Links</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              {["Home", "About Us", "Services", "Our Team", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s/g, "")}`} className="hover:text-primary-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-display font-semibold mb-4 !text-primary-foreground">Treatments</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              {["Cardiology", "Orthopedics", "Neurology", "Oncology", "IVF & Fertility", "Kidney Care"].map((t) => (
                <li key={t}>
                  <a href="#services" className="hover:text-primary-foreground transition-colors">{t}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold mb-4 !text-primary-foreground">Contact Us</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                info@awatehealthcare.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                Mumbai, Maharashtra, India
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-sm text-primary-foreground/60">
          © {new Date().getFullYear()} Awate Healthcare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
