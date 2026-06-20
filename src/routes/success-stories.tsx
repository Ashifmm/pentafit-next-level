import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import t1 from "@/assets/transformation-1.png";
import t2 from "@/assets/transformation-2.png";
import t3 from "@/assets/transformation-3.png";
import { Star } from "lucide-react";

export const Route = createFileRoute("/success-stories")({
  head: () => ({
    meta: [
      { title: "Success Stories — Real PentaFit Transformations" },
      { name: "description", content: "See real PentaFit transformations: before/after photos, client journeys, weight lost, muscle built and lives changed." },
      { property: "og:title", content: "PentaFit Success Stories" },
      { property: "og:description", content: "Real client transformations and verified results from PentaFit coaching." },
      { property: "og:url", content: "/success-stories" },
    ],
    links: [{ rel: "canonical", href: "/success-stories" }],
  }),
  component: SuccessPage,
});

function SuccessPage() {
  const stories = [
    { img: t1, t: "Executive Lean-Down", who: "Senior Manager · 34", lost: "-14 kg in 22 weeks", q: "I'd given up on losing weight while working 60-hour weeks. PentaFit's coach actually engineered a plan around my calendar. The compounding showed up." },
    { img: t2, t: "Muscle Architecture", who: "Engineer · 27", lost: "+6 kg lean mass", q: "Six months in and I look like a different human. The accountability and plan adaptation is what separates this from anything I've tried." },
    { img: t3, t: "Athletic Endurance", who: "Athlete · 24", lost: "+38% strength benchmarks", q: "Progress tracking and weekly programming changes broke every plateau I had. The PentaFit team treats this like science." },
  ];
  return (
    <>
      <PageHero eyebrow="Success Stories" title="Real bodies. Real numbers. Real adherence." subtitle="Every transformation below is a real PentaFit member who showed up, weighed in, and trusted the system." />
      <section className="container-prose py-20 grid gap-16">
        {stories.map((s, i) => (
          <Reveal key={s.t} delay={i * 60}>
            <article className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>:first-child]:order-2" : ""}`}>
              <div className="hover-zoom rounded-3xl overflow-hidden border border-border">
                <img src={s.img} alt={s.t} className="w-full h-[480px] object-cover" loading="lazy" />
              </div>
              <div>
                <div className="inline-flex rounded-full bg-brand/10 text-brand-dark text-xs font-bold uppercase tracking-wider px-2.5 py-1">Verified transformation</div>
                <h2 className="mt-3 text-3xl md:text-4xl font-extrabold font-display">{s.t}</h2>
                <p className="mt-1 text-muted-foreground">{s.who}</p>
                <div className="mt-5 text-3xl font-extrabold text-brand-dark">{s.lost}</div>
                <div className="mt-4 flex gap-0.5 text-brand">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-4 text-lg text-foreground/90 italic">"{s.q}"</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <CtaBand title="Your story could be next" />
    </>
  );
}