import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";
import coachAsset from "@/assets/uploads/coach-hero.jpg";
import { SocialLinks } from "@/components/site/SocialLinks";
import {
  Target, Eye, HeartPulse, Trophy, Award, Dumbbell, Activity, HeartHandshake,
  Scale, Pill, Timer, Sparkles, BadgeCheck, GraduationCap,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About PentaFit — Richard George, Founder & Transformation Specialist" },
      { name: "description", content: "Meet Richard (Ashish) George — Fitness Expert, Founder of PentaFit, certified transformation specialist coaching elite clients, athletes and busy professionals since 2016." },
      { property: "og:title", content: "About PentaFit — Founder Richard George" },
      { property: "og:description", content: "Founder Richard George — transformation specialist coaching since 2016. K11 certified, GLP-1 specialist, ex-HealthifyMe consultant." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: coachAsset },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const EXPERTISE = [
  { i: Award, t: "Elite One-on-One Coaching" },
  { i: Trophy, t: "Competitive Bodybuilding Coaching" },
  { i: Dumbbell, t: "Strength & Conditioning" },
  { i: Activity, t: "Metabolic Health Optimization" },
  { i: Scale, t: "Weight Loss & Weight Gain Coaching" },
  { i: Pill, t: "Medical & GLP-1 Coaching" },
  { i: Timer, t: "Endurance & Performance Training" },
  { i: HeartHandshake, t: "Women's Wellness & Hormonal Health" },
];

const CREDENTIALS = [
  "Professional Fitness Coach Since 2016",
  "5+ Years Expert Consultant at HealthifyMe",
  "Certified Master Trainer (Medifit)",
  "K11 Certified Fitness Professional",
  "Advanced Sports Nutritionist",
  "Supplement Coach",
  "Certified Fat Loss Expert",
  "Weight Management Expert",
  "GLP-1 & Metabolic Health Specialist",
  "Certified Kettlebell Coach Level 1",
  "Certified Kettlebell Coach Level 2",
  "Medical Condition Coaching Specialist",
];

const VALUES = [
  { i: Target, t: "Mission", d: "Engineer bodies that serve your lifestyle — not consume it." },
  { i: Eye, t: "Vision", d: "Build India's most trusted personalized transformation ecosystem." },
  { i: HeartPulse, t: "Philosophy", d: "Evidence-based fitness, sustainable lifestyle design, real accountability." },
  { i: Sparkles, t: "Standard", d: "Precision-based one-on-one coaching that delivers real-world results." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About PentaFit"
        title="Meet Richard (Ashish) George — Founder & Transformation Specialist"
        subtitle="Fitness Expert & Founder of PentaFit. Coaching elite clients, athletes and busy professionals since 2016."
      />

      {/* Founder profile */}
      <section className="container-prose py-20 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="hover-zoom rounded-3xl overflow-hidden border border-border shadow-card">
          <img
            src={coachAsset}
            alt="Richard George — Founder & Head Coach, PentaFit"
            className="w-full h-[560px] object-cover"
            loading="eager"
            width={1280}
            height={720}
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Founder & Head Coach</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-extrabold font-display">
            Richard (Ashish) <span className="text-brand-dark">George</span>
          </h2>
          <p className="mt-2 text-sm font-semibold text-foreground/80">
            Fitness Expert & Transformation Specialist | Founder of PentaFit
          </p>
          <p className="mt-5 text-lg italic text-muted-foreground border-l-4 border-brand pl-4">
            "I believe that true transformation is not just about physical change—it's about mastering the science of your own body."
          </p>
          <p className="mt-5 text-muted-foreground">
            With a professional coaching career spanning since 2016, Richard George is a transformation specialist dedicated to helping individuals achieve sustainable and measurable results.
          </p>
          <p className="mt-3 text-muted-foreground">
            Over the last decade, he has consistently delivered elite-level coaching for a diverse clientele ranging from high-profile celebrities to individuals seeking complete lifestyle transformations.
          </p>
          <ul className="mt-5 grid gap-2">
            {[
              "5+ Years as Fitness Consultant at HealthifyMe",
              "International Online Coaching for NRI Clients",
              "State-Level Bodybuilding Coach",
              "Coaching athletes from Gold Medalists to Champion of Champions",
              "One-on-One Personalized Coaching Specialist",
            ].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <BadgeCheck className="h-5 w-5 text-brand-dark shrink-0 mt-0.5" />
                <span className="text-foreground/90">{x}</span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-3">
            <span className="text-sm font-semibold text-muted-foreground">Follow Richard:</span>
            <SocialLinks />
          </div>
        </Reveal>
      </section>

      {/* Philosophy */}
      <section className="bg-surface">
        <div className="container-prose py-20 text-center max-w-3xl mx-auto">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Coaching Philosophy</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">
              "Precision-based one-on-one coaching that delivers real-world results."
            </h2>
            <p className="mt-5 text-muted-foreground text-lg">
              The PentaFit approach combines evidence-based fitness, personalized nutrition, sustainable lifestyle design, accountability systems, performance optimization and long-term health transformation.
            </p>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5 text-left">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={i * 60}>
                <div className="rounded-2xl bg-card border border-border p-6 h-full hover-lift">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand-dark"><v.i className="h-6 w-6" /></div>
                  <h3 className="mt-4 text-lg font-bold">{v.t}</h3>
                  <p className="mt-2 text-muted-foreground text-sm">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="container-prose py-20">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Core Expertise</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">Specialized across every transformation goal</h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {EXPERTISE.map((e, i) => (
            <Reveal key={e.t} delay={i * 50}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 hover-lift">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand-dark group-hover:bg-brand group-hover:text-brand-foreground transition">
                  <e.i className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-base font-bold font-display">{e.t}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-surface">
        <div className="container-prose py-20">
          <Reveal className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Credentials</p>
            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">Certified, qualified, proven</h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {CREDENTIALS.map((c, i) => (
              <Reveal key={c} delay={i * 30}>
                <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 hover-lift">
                  <GraduationCap className="h-5 w-5 text-brand-dark shrink-0" />
                  <span className="font-semibold text-sm">{c}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Founder message */}
      <section className="container-prose py-20">
        <Reveal>
          <div className="rounded-3xl bg-gradient-dark text-foreground p-10 md:p-14 text-center shadow-card border border-border">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Founder's Message</p>
            <p className="mt-5 text-2xl md:text-3xl font-display font-extrabold leading-snug max-w-3xl mx-auto">
              "I don't just give you a plan; I empower you with the knowledge to maintain your results for a lifetime. Let's build the best version of you together."
            </p>
            <p className="mt-5 text-brand font-semibold">— Richard George</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-6 py-3 font-semibold hover:bg-brand-dark transition">Book a free consultation</Link>
              <SocialLinks variant="dark" />
            </div>
          </div>
        </Reveal>
      </section>

      <CtaBand title="Ready to build your transformation" />
    </>
  );
}
