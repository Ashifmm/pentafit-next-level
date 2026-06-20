import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react";
import { NAV, TEL, WHATSAPP_URL, PHONE_DISPLAY, EMAIL, PLAY_STORE, APP_STORE } from "./constants";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="container-prose py-16 grid gap-10 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold font-display">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand">P</span>
            Penta<span className="text-brand">Fit</span>
          </Link>
          <p className="mt-4 text-sm text-primary-foreground/70 max-w-xs">
            A premium fitness transformation ecosystem — personalized coaching, nutrition, and tracking, engineered for real results.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-brand transition" aria-label="Instagram"><Instagram className="h-4 w-4" /></a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-brand transition" aria-label="Facebook"><Facebook className="h-4 w-4" /></a>
            <a href="#" className="rounded-full bg-white/10 p-2 hover:bg-brand transition" aria-label="YouTube"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="grid gap-2 text-sm text-primary-foreground/75">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-brand transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get in touch</h4>
          <ul className="grid gap-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-brand" /><a href={TEL}>{PHONE_DISPLAY}</a></li>
            <li className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-brand" /><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Chat on WhatsApp</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-brand" /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-brand mt-0.5" /><span>Available across India · Online & in‑person</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Download the app</h4>
          <div className="grid gap-2">
            <a href={PLAY_STORE} target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 px-4 py-3 text-sm hover:bg-brand transition">▶ Get it on Google Play</a>
            <a href={APP_STORE} target="_blank" rel="noreferrer" className="rounded-lg bg-white/10 px-4 py-3 text-sm hover:bg-brand transition"> Download on the App Store</a>
          </div>
          <div className="mt-5 text-xs text-primary-foreground/60">
            <Link to="/privacy" className="hover:text-brand">Privacy Policy</Link> · <Link to="/terms" className="hover:text-brand">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-prose py-6 text-xs text-primary-foreground/60 flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} PentaFit. All rights reserved.</span>
          <span>Engineered for transformation.</span>
        </div>
      </div>
    </footer>
  );
}