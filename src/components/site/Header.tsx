import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle, Download, ChevronDown } from "lucide-react";
import { NAV, TEL, PHONE_DISPLAY, WHATSAPP_URL, PLAY_STORE, APP_STORE } from "./constants";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [appOpen, setAppOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md shadow-[0_1px_0_rgba(15,23,42,0.06)]" : "bg-background/70 backdrop-blur"
      }`}
    >
      <div className="container-prose flex h-16 items-center justify-between lg:h-20">
        <Link to="/" className="flex items-center gap-2 font-display font-extrabold text-xl tracking-tight">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand text-brand-foreground shadow-glow">P</span>
          <span>Penta<span className="text-brand-dark">Fit</span></span>
        </Link>

        <nav className="hidden xl:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-brand-dark" }}
              className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-brand-dark transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <SocialLinks variant="ghost" className="mr-1" />
          <a href={TEL} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-semibold hover:border-brand transition-colors">
            <Phone className="h-4 w-4 text-brand-dark" /> Call
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground hover:bg-brand-dark transition-colors">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <div className="relative" onMouseLeave={() => setAppOpen(false)}>
            <button
              onMouseEnter={() => setAppOpen(true)}
              onClick={() => setAppOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition"
            >
              <Download className="h-4 w-4" /> Download App <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {appOpen && (
              <div className="absolute right-0 mt-2 w-52 rounded-xl border border-border bg-popover p-2 shadow-card">
                <a href={PLAY_STORE} target="_blank" rel="noreferrer" className="block rounded-lg px-3 py-2 text-sm hover:bg-surface">Android · Play Store</a>
                <a href={APP_STORE} target="_blank" rel="noreferrer" className="block rounded-lg px-3 py-2 text-sm hover:bg-surface">iPhone · App Store</a>
              </div>
            )}
          </div>
        </div>

        <button className="xl:hidden inline-flex items-center justify-center rounded-md p-2" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <div className="container-prose py-4 grid gap-1">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-base font-medium hover:bg-surface">
                {n.label}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm font-semibold">
                <Phone className="h-4 w-4" /> Call
              </a>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a href={PLAY_STORE} target="_blank" rel="noreferrer" className="col-span-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                <Download className="h-4 w-4" /> Android
              </a>
              <a href={APP_STORE} target="_blank" rel="noreferrer" className="col-span-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground">
                <Download className="h-4 w-4" /> iPhone
              </a>
            </div>
            <a href={`tel:${PHONE_DISPLAY}`} className="sr-only">{PHONE_DISPLAY}</a>
            <div className="mt-3 flex justify-center"><SocialLinks /></div>
          </div>
        </div>
      )}
    </header>
  );
}