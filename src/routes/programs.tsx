import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import { Check } from "lucide-react";

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
    { name: "Weight Loss Program", weeks: "12 weeks", goal: "Lose 6-12 kg", points: ["Calorie & macro architecture", "3-5 workouts/week", "Weekly check-ins", "Plateau-breaking protocols"] },
    { name: "Fat Loss & Recomp", weeks: "16 weeks", goal: "Lose fat + build muscle", points: ["Protein-led nutrition", "Strength-priority training", "Body composition tracking", "Refeed cycles"] },
    { name: "Nutrition Coaching", weeks: "8 weeks", goal: "Master your food", points: ["Personalized meal planning", "Eating out playbook", "Habit installation", "Optional lab marker review"] },
    { name: "Personalized 1:1 Coaching", weeks: "Ongoing", goal: "Holistic transformation", points: ["Dedicated coach", "Bi-weekly video review", "Daily WhatsApp access", "Mindset & lifestyle audit"] },
    { name: "Lifestyle Transformation", weeks: "6 months", goal: "Sustainable change", points: ["Sleep & stress framework", "NEAT & step engineering", "Travel & social strategy", "Long-term habit lock-in"] },
  ];
  return (
    <>
      <PageHero eyebrow="Programs" title="Pick the program. We engineer the rest." subtitle="Whether you need to lose weight, drop fat, or rebuild your lifestyle — there's a PentaFit program designed for it." />
      <section className="container-prose py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {programs.map((p, i) => (
          <Reveal key={p.name} delay={i * 60}>
            <article className="rounded-2xl border border-border bg-card p-7 h-full hover-lift">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-brand-dark">{p.weeks}</span>
                <span className="rounded-full bg-surface px-2 py-0.5 text-muted-foreground">{p.goal}</span>
              </div>
              <h2 className="mt-4 text-xl font-bold font-display">{p.name}</h2>
              <ul className="mt-4 grid gap-2 text-sm">
                {p.points.map((pt) => <li key={pt} className="flex items-start gap-2"><Check className="h-4 w-4 text-brand-dark mt-0.5" />{pt}</li>)}
              </ul>
              <Link to="/contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-primary text-primary-foreground py-2.5 font-semibold hover:opacity-90 transition">Apply now</Link>
            </article>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}