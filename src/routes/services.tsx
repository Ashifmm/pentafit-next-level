import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import { Phone, MessageCircle, CalendarCheck, Flame, Dumbbell, HeartPulse, Trophy, Sparkles } from "lucide-react";
import { TEL, WHATSAPP_URL } from "@/components/site/constants";
import svcFatloss from "@/assets/services/svc-fatloss.jpg";
import svcHypertrophy from "@/assets/services/svc-hypertrophy.jpg";
import svcLongevity from "@/assets/services/svc-longevity.jpg";
import svcApex from "@/assets/services/svc-apex.jpg";
import svcLifestyle from "@/assets/services/svc-lifestyle.jpg";

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
    {
      img: svcFatloss,
      icon: Flame,
      title: "The Transformation Blueprint",
      category: "Fat Loss & Metabolic Reset",
      bestFor: "Individuals looking to achieve significant body recomposition.",
      description:
        "A science-backed program designed to torch stubborn fat while optimizing your metabolism. This plan combines precision-based nutrition protocols with strategic training to ensure sustainable fat loss, leaving you leaner, healthier, and more energetic.",
    },
    {
      img: svcHypertrophy,
      icon: Dumbbell,
      title: "Muscle Hypertrophy Pro",
      category: "Muscle Gain & Bodybuilding",
      bestFor: "Those focused on natural bodybuilding and lean muscle growth.",
      description:
        "Built for those serious about their physique. We focus on training volume, intensity, and precise nutrient timing to maximize muscle protein synthesis. Whether you are a beginner or a seasoned lifter, this plan is engineered for maximum muscle hypertrophy and aesthetic progression.",
    },
    {
      img: svcLongevity,
      icon: HeartPulse,
      title: "Pentafit Longevity & Wellness",
      category: "GLP-1 Support & Weight Management",
      bestFor: "Individuals utilizing GLP-1 therapy who want to optimize their results safely.",
      description:
        "A specialized, medically-informed program designed to complement GLP-1 protocols. The primary focus is preventing muscle loss, ensuring optimal protein intake, and maintaining metabolic function, ensuring a safe and sustainable weight-management journey.",
    },
    {
      img: svcApex,
      icon: Trophy,
      title: "Apex Strength & Endurance",
      category: "Performance Optimization",
      bestFor: "Athletes and fitness enthusiasts looking to push physical limits.",
      description:
        "Designed to build raw power and elite-level endurance. We combine functional strength training with advanced cardiovascular conditioning to improve overall athletic performance, helping individuals become stronger, faster, and more resilient.",
    },
    {
      img: svcLifestyle,
      icon: Sparkles,
      title: "Lifestyle Mastery",
      category: "Habit Transformation",
      bestFor: "Busy professionals and beginners seeking a complete lifestyle transformation.",
      description:
        "Fitness is a skill, not just a workout. This holistic program focuses on habit formation, nutritional education, and routine building. The goal is to integrate health into everyday life and create sustainable long-term success.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Premium coaching, engineered around your goal."
        subtitle="Five focused programs — each personally designed and adjusted by Coach Richard (Ashish) George."
      />
      <section className="container-prose py-20">
        <div className="grid gap-10">
          {services.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <Reveal key={s.title} delay={i * 60}>
                <article
                  className={`group grid lg:grid-cols-2 gap-0 overflow-hidden rounded-3xl border border-border bg-card shadow-card hover-lift ${
                    reverse ? "lg:[&>div:first-child]:order-2" : ""
                  }`}
                >
                  <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[420px] bg-surface">
                    <img
                      src={s.img}
                      alt={`${s.title} — ${s.category}`}
                      loading="lazy"
                      decoding="async"
                      width={1280}
                      height={896}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-brand text-brand-foreground px-3 py-1 text-xs font-bold uppercase tracking-wider shadow-glow">
                      <Icon className="h-3.5 w-3.5" /> {s.category}
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl lg:text-3xl font-extrabold font-display tracking-tight">{s.title}</h2>
                    <p className="mt-3 text-sm font-semibold text-brand-dark uppercase tracking-wider">Best for</p>
                    <p className="mt-1 text-foreground/85">{s.bestFor}</p>
                    <p className="mt-5 text-muted-foreground leading-relaxed">{s.description}</p>
                    <p className="mt-5 text-sm italic text-foreground/70 border-l-2 border-brand pl-3">
                      Customized by Coach Richard (Ashish) George.
                    </p>
                    <div className="mt-7 flex flex-wrap gap-2.5">
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold shadow-glow hover:opacity-95 transition"
                      >
                        <CalendarCheck className="h-4 w-4" /> Book Consultation
                      </Link>
                      <a
                        href={TEL}
                        className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-semibold hover:border-brand transition"
                      >
                        <Phone className="h-4 w-4 text-brand-dark" /> Call Now
                      </a>
                      <a
                        href={WHATSAPP_URL}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90 transition"
                      >
                        <MessageCircle className="h-4 w-4" /> WhatsApp Now
                      </a>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>
      <CtaBand />
    </>
  );
}