import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Mail, MapPin, Instagram, Youtube, Globe } from "lucide-react";
import { NAV, TEL, WHATSAPP_URL, PHONE_DISPLAY, EMAIL, PLAY_STORE, APP_STORE, INSTAGRAM_URL, YOUTUBE_URL } from "./constants";

export function Footer() {
  return (
    <footer className="bg-surface text-foreground mt-24 border-t border-border">
      <div className="container-prose py-16 grid gap-10 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 text-2xl font-extrabold font-display">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand">P</span>
            Penta<span className="text-brand">Fit</span>
          </Link>
          <p className="mt-4 text-sm text-muted-foreground max-w-xs">
            A premium fitness transformation ecosystem — personalized coaching, nutrition, and tracking, engineered for real results.
          </p>
          <div className="mt-5 flex gap-3">
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-brand transition" aria-label="PentaFit on Instagram"><Instagram className="h-4 w-4" /></a>
            <a href={YOUTUBE_URL} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 p-2 hover:bg-brand transition" aria-label="PentaFit on YouTube"><Youtube className="h-4 w-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="grid gap-2 text-sm text-muted-foreground">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-brand transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Get in touch</h4>
          <ul className="grid gap-3 text-sm text-muted-foreground">
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
          <div className="mt-5 text-xs text-muted-foreground">
            <Link to="/privacy" className="hover:text-brand">Privacy Policy</Link> · <Link to="/terms" className="hover:text-brand">Terms</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-prose py-6 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} PentaFit. All rights reserved.</span>
          <span>Engineered for transformation.</span>
        </div>
      </div>
      <div className="border-t border-border bg-background">
        <div className="container-prose flex flex-col items-center justify-between gap-3 py-5 text-center text-xs text-muted-foreground sm:flex-row sm:text-left">
          <p>
            Designed by{" "}
            <a
              href="https://growthgrid-nine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-foreground transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              GrowthGrid
            </a>
          </p>
          <address className="flex flex-col items-center gap-2 not-italic sm:flex-row sm:gap-5">
            <a
              href="https://growthgrid-nine.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Visit the GrowthGrid website"
            >
              <Globe className="h-3.5 w-3.5" aria-hidden="true" />
              growthgrid-nine.vercel.app
            </a>
            <a
              href="tel:9958539886"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              aria-label="Call GrowthGrid at 9958539886"
            >
              <Phone className="h-3.5 w-3.5" aria-hidden="true" />
              9958539886
            </a>
          </address>
        </div>
      </div>
    </footer>
  );
}