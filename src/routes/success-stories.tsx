import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import { X, Quote } from "lucide-react";

import s1 from "@/assets/uploads/story-1.jpg.asset.json";
import s2 from "@/assets/uploads/story-2.jpg.asset.json";
import s3 from "@/assets/uploads/story-3.jpg.asset.json";
import s4 from "@/assets/uploads/story-4.jpg.asset.json";
import s5 from "@/assets/uploads/story-5.jpg.asset.json";
import s6 from "@/assets/uploads/story-6.jpg.asset.json";
import s7 from "@/assets/uploads/story-7.jpg.asset.json";
import s8 from "@/assets/uploads/story-8.jpg.asset.json";
import s9 from "@/assets/uploads/story-9.jpg.asset.json";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Real PentaFit Transformations" },
      { name: "description", content: "Real PentaFit transformations: visible before/after results from clients who followed personalized coaching, nutrition and accountability with Richard George." },
      { property: "og:title", content: "PentaFit Success Stories" },
      { property: "og:description", content: "Verified before-and-after transformations from real PentaFit clients." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: SuccessPage,
});

const STORIES = [
  { img: s1.url, tag: "Fat Loss & Recomp", caption: "Through consistent training, personalized nutrition guidance and disciplined lifestyle changes, this transformation demonstrates what's possible with the right coaching approach." },
  { img: s2.url, tag: "Weight Loss Journey", caption: "A remarkable example of how dedication, expert guidance and a structured plan can rewrite the body composition story in months — not years." },
  { img: s3.url, tag: "Strength & Tone", caption: "This fitness journey highlights the power of structured strength training, accountability and sustainable habits for long-term, visible results." },
  { img: s4.url, tag: "Women's Wellness", caption: "Personalized coaching, hormone-aware programming and progressive nutrition turned long-standing plateaus into a sharper, stronger physique." },
  { img: s5.url, tag: "Lifestyle Transformation", caption: "Smart programming combined with weekly check-ins and adaptive coaching led to a complete lifestyle reset — not just visible aesthetics." },
  { img: s6.url, tag: "Confidence Rebuild", caption: "A real-world transformation built on adherence, mindset coaching and a plan designed around a real schedule — proof that consistency compounds." },
  { img: s7.url, tag: "Sustainable Fat Loss", caption: "Structured training, dialed-in nutrition and unwavering accountability produced a sustainable fat-loss outcome with energy levels going up, not down." },
  { img: s8.url, tag: "Body Recomposition", caption: "From metabolic restoration to dialed-in macros — a textbook example of evidence-based fat loss while preserving lean mass and strength." },
  { img: s9.url, tag: "Health Transformation", caption: "Structured nutrition, progressive overload and disciplined habits combined to deliver a powerful long-term health transformation." },
];

function SuccessPage() {
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        title="Real bodies. Real numbers. Real adherence."
        subtitle="Every transformation below is a real PentaFit client who showed up, trusted the process, and earned the result with personalized coaching."
      />

      <section className="container-prose py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {STORIES.map((s, i) => (
            <Reveal key={i} delay={(i % 3) * 80}>
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group block w-full text-left rounded-2xl overflow-hidden border border-border bg-card hover-lift focus:outline-none focus:ring-2 focus:ring-brand"
              >
                <div className="hover-zoom overflow-hidden bg-surface">
                  <img
                    src={s.img}
                    alt={`PentaFit transformation — ${s.tag}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 md:h-96 object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  />
                </div>
                <div className="p-5">
                  <span className="inline-flex rounded-full bg-brand/10 text-brand-dark text-[10px] md:text-xs font-bold uppercase tracking-wider px-2.5 py-1">{s.tag}</span>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{s.caption}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setOpen(null)}
        >
          <button
            aria-label="Close"
            className="absolute top-4 right-4 rounded-full bg-white/10 hover:bg-white/20 text-white p-2"
            onClick={() => setOpen(null)}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-5xl w-full grid lg:grid-cols-5 gap-6" onClick={(e) => e.stopPropagation()}>
            <img
              src={STORIES[open].img}
              alt={`PentaFit transformation — ${STORIES[open].tag}`}
              className="lg:col-span-3 w-full max-h-[80vh] object-contain rounded-2xl bg-black"
            />
            <div className="lg:col-span-2 rounded-2xl bg-card p-6 flex flex-col">
              <span className="inline-flex self-start rounded-full bg-brand/10 text-brand-dark text-xs font-bold uppercase tracking-wider px-2.5 py-1">
                {STORIES[open].tag}
              </span>
              <Quote className="mt-4 h-6 w-6 text-brand-dark" />
              <p className="mt-2 text-foreground/90">{STORIES[open].caption}</p>
              <p className="mt-4 text-xs text-muted-foreground">Verified PentaFit transformation. Identity withheld for privacy.</p>
            </div>
          </div>
        </div>
      )}

      <CtaBand title="Your story could be next" />
    </>
  );
}
