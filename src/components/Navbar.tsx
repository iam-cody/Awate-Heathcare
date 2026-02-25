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
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-max flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gradient-healthcare flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A</span>
          </div>
          <div className="leading-tight">
            <span className="font-display font-bold text-lg text-primary block leading-none">Awate</span>
            <span className="text-xs text-muted-foreground tracking-wide">Healthcare</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-secondary transition-colors rounded-md"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-colors">
            <Phone className="w-4 h-4" />
            +91 98765 43210
          </a>
          <Button className="gradient-cta text-primary-foreground border-0 hover:opacity-90 transition-opacity">
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
