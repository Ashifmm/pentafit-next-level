import { Phone, MessageCircle, Download } from "lucide-react";
import { TEL, WHATSAPP_URL, PLAY_STORE } from "./constants";
import { Reveal } from "./Reveal";

export function CtaBand({
  title = "Your transformation starts today",
  subtitle = "Join hundreds of clients reshaping their lives with PentaFit's personalized coaching.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-gradient-dark text-primary-foreground">
      <div className="container-prose py-20 lg:py-28 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-display tracking-tight">
            {title.split(" ").slice(0, -2).join(" ")} <span className="text-brand">{title.split(" ").slice(-2).join(" ")}</span>
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-primary-foreground/75">{subtitle}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={TEL} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-brand-foreground hover:bg-brand-dark transition shadow-glow">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 font-semibold hover:bg-surface transition">
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
            <a href={PLAY_STORE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold hover:bg-white/10 transition">
              <Download className="h-5 w-5" /> Download App
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="bg-gradient-dark text-primary-foreground">
      <div className="container-prose pt-24 pb-20 lg:pt-32 lg:pb-24">
        <Reveal>
          {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">{eyebrow}</p>}
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold font-display tracking-tight max-w-4xl">{title}</h1>
          {subtitle && <p className="mt-5 max-w-2xl text-lg text-primary-foreground/75">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}