import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactModal } from "@/components/ContactModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Treatments", href: "/#treatments" },
  { label: "Our Process", href: "/#process" },
  { label: "FAQ", href: "/#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
        }`}
    >
      <div className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center transition-transform hover:scale-105">
          <img
            src="/logo.png"
            alt="Awate Healthcare Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-bold text-primary hover:text-brand-red transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-primary font-bold hover:text-brand-red transition-colors">
            <div className="w-8 h-8 rounded-full bg-brand-blue/5 flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
            +91 98765 43210
          </a>
          <ContactModal>
            <Button className="bg-accent text-accent-foreground hover:bg-brand-red-dark font-bold px-6 shadow-premium transition-all hover:scale-105">
              Book Free Consultation
            </Button>
          </ContactModal>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2 text-primary" onClick={() => setOpen(!open)}>
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-x-0 top-[64px] bg-white border-t border-brand-blue/5 shadow-2xl transition-all duration-300 lg:hidden ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <div className="p-6 space-y-6">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-lg font-bold text-primary hover:bg-brand-blue/5 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-6 border-t border-brand-blue/5 space-y-4">
            <ContactModal>
              <Button className="w-full bg-accent text-white h-14 text-lg font-bold rounded-xl shadow-premium">
                Book Free Consultation
              </Button>
            </ContactModal>
            <div className="flex items-center justify-center gap-2 text-primary font-bold">
              <Phone className="w-5 h-5 text-brand-green" />
              +91 98765 43210
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
