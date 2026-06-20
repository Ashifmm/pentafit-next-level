import { Phone, MessageCircle } from "lucide-react";
import { TEL, WHATSAPP_URL } from "./constants";

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-card animate-pulse-glow hover:scale-105 transition-transform"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
      </a>
      <a
        href={TEL}
        aria-label="Call now"
        className="group flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-brand-foreground shadow-card hover:scale-105 transition-transform"
      >
        <Phone className="h-5 w-5" />
        <span className="hidden sm:inline text-sm font-semibold">Call Now</span>
      </a>
    </div>
  );
}