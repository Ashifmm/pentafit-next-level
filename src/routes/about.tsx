import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import coach from "@/assets/coach-founder.jpg";
import { Target, Eye, HeartPulse, Trophy } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PentaFit — Premium Fitness Transformation Coaching" },
      { name: "description", content: "PentaFit was built to engineer real, lasting transformations. Learn our story, mission and team behind India's premium coaching ecosystem." },
      { property: "og:title", content: "About PentaFit" },
      { property: "og:description", content: "Our story, mission and the team behind India's premium fitness transformation ecosystem." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { i: Target, t: "Mission", d: "Engineer bodies that serve your lifestyle — not consume it." },
    { i: Eye, t: "Vision", d: "Build the most trusted personalized transformation ecosystem in India." },
    { i: HeartPulse, t: "Philosophy", d: "Science, structure, and a coach who actually shows up every week." },
    { i: Trophy, t: "Standard", d: "If it doesn't move your physique, energy or confidence — we change it." },
  ];
  return (
    <>
      <PageHero eyebrow="About PentaFit" title="We don't sell fitness. We engineer transformation." subtitle="PentaFit was built for the modern professional who's tired of gimmicks — and ready for a system that actually works." />
      <section className="container-prose py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="hover-zoom rounded-3xl overflow-hidden border border-border">
          <img src={coach} alt="PentaFit founder" className="w-full h-[520px] object-cover" loading="lazy" />
        </Reveal>
        <Reveal delay={120}>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display">Our story</h2>
          <p className="mt-4 text-muted-foreground text-lg">
            PentaFit was founded on a frustration: every fitness program promised transformation but delivered cookie-cutter PDFs and ghost-coaches. So we built the opposite — a coaching ecosystem where personalization, science and accountability work as a single product.
          </p>
          <p className="mt-3 text-muted-foreground text-lg">
            Today, hundreds of busy professionals, parents and athletes trust PentaFit to handle the planning so they can focus on showing up. The result: real transformations, real numbers, real adherence.
          </p>
        </Reveal>
      </section>
      <section className="bg-surface">
        <div className="container-prose py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.t} delay={i * 60}>
              <div className="rounded-2xl bg-card border border-border p-6 h-full hover-lift">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand-dark"><v.i className="h-6 w-6" /></div>
                <h3 className="mt-4 text-lg font-bold">{v.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm">{v.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="container-prose py-20">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-extrabold font-display max-w-2xl">Why PentaFit exists</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">Most fitness fails because there's no system — no plan adaptation, no feedback loop, no accountability. PentaFit closes that loop. We pair certified coaches with the PentaFit mobile app so your plan adapts as fast as your life changes.</p>
          <Link to="/services" className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-semibold hover:opacity-90 transition">Explore our services</Link>
        </Reveal>
      </section>
      <CtaBand title="Ready to build your transformation" />
    </>
  );
}