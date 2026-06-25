import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import { Check, CalendarCheck, Phone, MessageCircle } from "lucide-react";
import { TEL, WHATSAPP_URL } from "@/components/site/constants";
import progWeightloss from "@/assets/programs/prog-weightloss.jpg";
import progRecomp from "@/assets/programs/prog-recomp.jpg";
import progNutrition from "@/assets/programs/prog-nutrition.jpg";
import progCoaching from "@/assets/programs/prog-coaching.jpg";
import progLifestyle from "@/assets/programs/prog-lifestyle.jpg";

export const Route = createFileRoute("/programs")({
  head: () => ({
    meta: [
      { title: "Programs — Weight Loss, Fat Loss & Lifestyle Transformation | PentaFit" },
      { name: "description", content: "Targeted PentaFit programs: weight loss, fat loss, nutrition coaching, personalized 1:1 coaching and lifestyle transformation." },
      { property: "og:title", content: "PentaFit Programs" },
      { property: "og:description", content: "Goal-targeted coaching programs designed for adherence and real results." },
      { property: "og:url", content: "/programs" },
    ],
    links: [{ rel: "canonical", href: "/programs" }],
  }),
  component: ProgramsPage,
});

function ProgramsPage() {
  const programs = [
    { img: progWeightloss, name: "Weight Loss Program", weeks: "12 weeks", goal: "Lose 6-12 kg", points: ["Calorie & macro architecture", "3-5 workouts/week", "Weekly check-ins", "Plateau-breaking protocols"] },
    { img: progRecomp, name: "Fat Loss & Recomp", weeks: "16 weeks", goal: "Lose fat + build muscle", points: ["Protein-led nutrition", "Strength-priority training", "Body composition tracking", "Refeed cycles"] },
    { img: progNutrition, name: "Nutrition Coaching", weeks: "8 weeks", goal: "Master your food", points: ["Personalized meal planning", "Eating out playbook", "Habit installation", "Optional lab marker review"] },
    { img: progCoaching, name: "Personalized 1:1 Coaching", weeks: "Ongoing", goal: "Holistic transformation", points: ["Dedicated coach", "Bi-weekly video review", "Daily WhatsApp access", "Mindset & lifestyle audit"] },
    { img: progLifestyle, name: "Lifestyle Transformation", weeks: "6 months", goal: "Sustainable change", points: ["Sleep & stress framework", "NEAT & step engineering", "Travel & social strategy", "Long-term habit lock-in"] },
  ];
  return (
    <>
      <PageHero eyebrow="Programs" title="Pick the program. We engineer the rest." subtitle="Whether you need to lose weight, drop fat, or rebuild your lifestyle — there's a PentaFit program designed for it." />
      <section className="container-prose py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card h-full hover-lift shadow-card">
              <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.goal}`}
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={896}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 rounded-full bg-brand text-brand-foreground px-3 py-1 text-[11px] font-bold uppercase tracking-wider shadow-glow">
                  {p.weeks}
                </div>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">{p.goal}</div>
                <h2 className="mt-2 text-xl font-bold font-display">{p.name}</h2>
                <ul className="mt-4 grid gap-2 text-sm">
                  {p.points.map((pt) => <li key={pt} className="flex items-start gap-2"><Check className="h-4 w-4 text-brand-dark mt-0.5 shrink-0" />{pt}</li>)}
                </ul>
                <div className="mt-6 grid gap-2">
                  <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand text-brand-foreground py-2.5 text-sm font-semibold shadow-glow hover:opacity-95 transition">
                    <CalendarCheck className="h-4 w-4" /> Book Consultation
                  </Link>
                  <div className="grid grid-cols-2 gap-2">
                    <a href={TEL} className="inline-flex items-center justify-center gap-2 rounded-full border border-border py-2 text-xs font-semibold hover:border-brand transition">
                      <Phone className="h-3.5 w-3.5 text-brand-dark" /> Call
                    </a>
                    <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground py-2 text-xs font-semibold hover:opacity-90 transition">
                      <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}