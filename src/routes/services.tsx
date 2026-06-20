import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import { Salad, Dumbbell, LineChart, Users, HeartPulse, Activity, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Personalized Coaching, Nutrition & Tracking | PentaFit" },
      { name: "description", content: "Personalized nutrition, custom workouts, progress tracking, accountability coaching, lifestyle and community — explore every PentaFit service." },
      { property: "og:title", content: "PentaFit Services" },
      { property: "og:description", content: "A complete fitness transformation stack: nutrition, training, tracking, accountability, community." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const services = [
    { i: Salad, t: "Personalized Nutrition Coaching", d: "Macro-mapped meal plans, real Indian food, weekly adjustments based on your progress data.", benefits: ["Custom calorie & macro targets", "Vegetarian / non-veg flexibility", "Eating-out playbooks", "Weekly plan tuning"] },
    { i: Dumbbell, t: "Custom Workout Programming", d: "Periodized training built around your goal, equipment access and lifestyle.", benefits: ["Home / gym / hotel ready", "Video form library", "Progressive overload built-in", "Mobility & recovery"] },
    { i: LineChart, t: "Weight Loss Programs", d: "Sustainable fat loss without crash diets — engineered for adherence first.", benefits: ["Smart calorie deficits", "Refeed & diet break protocols", "Stall-busting strategies", "Habit framework"] },
    { i: HeartPulse, t: "Fat Loss & Recomposition", d: "Lose fat and build lean muscle simultaneously — the right way.", benefits: ["Body composition tracking", "Protein-led nutrition", "Strength priority training", "Sleep & stress audit"] },
    { i: Activity, t: "Progress Tracking & Analytics", d: "Weekly metrics, photos and trends — your coach acts on the numbers.", benefits: ["Adaptive plan updates", "Biometric tracking", "Photo progress timeline", "Goal pacing"] },
    { i: Users, t: "Accountability & Community", d: "1:1 coach access plus a private community of serious members.", benefits: ["Daily logging review", "WhatsApp coach access", "Community challenges", "Mindset coaching"] },
  ];
  return (
    <>
      <PageHero eyebrow="Services" title="A complete transformation stack — built around you." subtitle="Every service connects into one personalized system, tracked inside the PentaFit app." />
      <section className="container-prose py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.t} delay={i * 60}>
              <article className="rounded-2xl border border-border bg-card p-7 h-full hover-lift">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand-dark"><s.i className="h-6 w-6" /></div>
                <h2 className="mt-5 text-2xl font-bold font-display">{s.t}</h2>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
                <ul className="mt-5 grid gap-2">
                  {s.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm"><span className="h-1.5 w-1.5 rounded-full bg-brand" />{b}</li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:gap-2 transition-all">Book a free consult <ArrowRight className="h-4 w-4" /></Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}