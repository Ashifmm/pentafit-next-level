import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import { Check } from "lucide-react";
import { WHATSAPP_URL } from "@/components/site/constants";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Personalized Coaching Plans | PentaFit" },
      { name: "description", content: "Simple, premium pricing for PentaFit coaching: Starter, Pro and Elite plans. Cancel or switch anytime." },
      { property: "og:title", content: "PentaFit Pricing" },
      { property: "og:description", content: "Pick from Starter, Pro and Elite coaching plans designed for real transformation." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  const plans = [
    { name: "Starter", price: "₹4,999", period: "/month", popular: false, features: ["Personalized diet plan", "Workout template", "App access", "Weekly check-in", "Email support"] },
    { name: "Pro", price: "₹8,999", period: "/month", popular: true, features: ["1:1 coach assignment", "Custom workouts", "Adaptive nutrition", "Bi-weekly video review", "WhatsApp support", "Community access"] },
    { name: "Elite", price: "₹14,999", period: "/month", popular: false, features: ["Everything in Pro", "Daily coach access", "Lab marker review", "Habit & mindset coaching", "Priority response", "Custom protocols"] },
  ];
  return (
    <>
      <PageHero eyebrow="Pricing" title="Premium coaching. Honest pricing." subtitle="No hidden fees. No lock-in. Switch or cancel anytime." />
      <section className="container-prose py-20 grid md:grid-cols-3 gap-6">
        {plans.map((p, i) => (
          <Reveal key={p.name} delay={i * 80}>
            <div className={`relative rounded-3xl p-8 h-full border hover-lift ${p.popular ? "bg-primary text-primary-foreground border-primary shadow-card" : "bg-card border-border"}`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand text-brand-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 shadow-glow">Most Popular</div>
              )}
              <h3 className="text-2xl font-bold font-display">{p.name}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-5xl font-extrabold">{p.price}</span>
                <span className={p.popular ? "text-primary-foreground/60" : "text-muted-foreground"}>{p.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm"><Check className={`h-5 w-5 mt-0.5 ${p.popular ? "text-brand" : "text-brand-dark"}`} /><span>{f}</span></li>
                ))}
              </ul>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold transition ${p.popular ? "bg-brand text-brand-foreground hover:bg-brand-dark" : "bg-primary text-primary-foreground hover:opacity-90"}`}>
                Enroll now
              </a>
            </div>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}