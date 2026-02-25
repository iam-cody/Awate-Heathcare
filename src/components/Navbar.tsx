import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Team", href: "#team" },
  { label: "FAQ", href: "#faq" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border">
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img
            src="/logo.png"
            alt="Awate Healthcare Logo"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-primary hover:text-secondary transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors font-medium">
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
          <Button className="bg-accent text-accent-foreground hover:bg-destructive/90 transition-colors">
            Book Appointment
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-card border-t border-border px-4 pb-4">
          <nav className="flex flex-col gap-1 py-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-secondary hover:bg-muted rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <Button className="w-full gradient-cta text-primary-foreground border-0 mt-2">
            Book Appointment
          </Button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
