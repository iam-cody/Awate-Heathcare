import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%2C%20I%20need%20healthcare%20assistance"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center shadow-premium hover:scale-110 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <div className="absolute inset-0 rounded-full bg-brand-green animate-ping opacity-20 pointer-events-none group-hover:hidden" />
      <MessageCircle className="w-8 h-8 relative z-10" />
    </a>
  );
};

export default WhatsAppButton;
