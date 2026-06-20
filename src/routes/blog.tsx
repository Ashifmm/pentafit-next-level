import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Fitness, Nutrition & Transformation Insights | PentaFit" },
      { name: "description", content: "Practical fitness, nutrition, weight loss, workout and lifestyle guides from PentaFit coaches." },
      { property: "og:title", content: "PentaFit Blog" },
      { property: "og:description", content: "Practical guides on fat loss, nutrition, training and lifestyle change." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: BlogPage,
});

function BlogPage() {
  const cats = ["Weight Loss", "Fat Loss", "Nutrition", "Fitness Tips", "Workout Guides", "Healthy Lifestyle", "Success Stories"];
  const posts = [
    { t: "The truth about calorie deficits (and why most people get it wrong)", c: "Weight Loss", d: "A simple framework for setting a calorie target you'll actually hit." },
    { t: "Protein for fat loss: how much, when and from where", c: "Nutrition", d: "Why protein is the single highest-leverage nutrient for fat loss." },
    { t: "The 4-week home workout that builds real strength", c: "Workout Guides", d: "A bodyweight + dumbbell program for busy professionals." },
    { t: "Sleep, stress and stalls: the hidden physique killers", c: "Healthy Lifestyle", d: "Why your fat loss stalled when nothing changed on paper." },
    { t: "From 92 kg to 78 kg: how Aakash rebuilt his year", c: "Success Stories", d: "A look inside a 22-week PentaFit transformation." },
    { t: "Six fat loss myths your coach should already have killed", c: "Fat Loss", d: "Carbs at night, fasted cardio, detoxes — what actually matters." },
  ];
  return (
    <>
      <PageHero eyebrow="The PentaFit Blog" title="Practical guides for real transformation." subtitle="No hype. Just the principles, frameworks and protocols our coaches use every day." />
      <section className="container-prose py-14">
        <div className="flex flex-wrap gap-2">
          {cats.map((c) => (
            <span key={c} className="rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-semibold hover:border-brand hover:text-brand-dark cursor-pointer transition">{c}</span>
          ))}
        </div>
      </section>
      <section className="container-prose pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <Reveal key={p.t} delay={i * 50}>
            <article className="rounded-2xl border border-border bg-card overflow-hidden h-full hover-lift">
              <div className="h-44 bg-gradient-brand" />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark">{p.c}</span>
                <h2 className="mt-2 text-lg font-bold font-display leading-snug">{p.t}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
                <Link to="/blog" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:gap-2 transition-all">Read more <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>
      <CtaBand />
    </>
  );
}