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
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg text-white">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "About Us", "Our Process", "Hospital Network", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/\s/g, "")}`} className="group flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-all text-sm">
                    <span className="w-1.5 h-px bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg text-white">Top Treatments</h4>
            <ul className="space-y-3">
              {["Cardiology", "Orthopedics", "Oncology", "IVF & Fertility", "Kidney Care"].map((t) => (
                <li key={t}>
                  <a href="#treatments" className="group flex items-center gap-2 text-primary-foreground/70 hover:text-white transition-all text-sm">
                    <span className="w-1.5 h-px bg-brand-red opacity-0 group-hover:opacity-100 transition-opacity" />
                    {t}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-display font-bold text-lg text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Call Anytime</p>
                  <p className="text-sm font-semibold text-white/80">+91 98765 43210</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Email Us</p>
                  <p className="text-sm font-semibold text-white/80">info@awatehealthcare.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-brand-green" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Office</p>
                  <p className="text-sm font-semibold text-white/80">Mumbai, India</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-primary-foreground/40 font-medium">
            © {new Date().getFullYear()} Awate Healthcare Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm font-bold text-primary-foreground/40 hover:text-primary-foreground/60">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
