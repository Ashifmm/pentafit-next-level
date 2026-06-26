import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Download, Star, Apple, Smartphone, Dumbbell, Salad, LineChart, HeartPulse, Users, Bell, Activity, Footprints, Trophy, ArrowRight, ShieldCheck } from "lucide-react";
import heroAsset from "@/assets/uploads/coach-hero.jpg";
import appMockup from "@/assets/app-mockup.jpg";
import story1 from "@/assets/uploads/story-1.jpg";
import story2 from "@/assets/uploads/story-2.jpg";
import story4 from "@/assets/uploads/story-4.jpg";
const heroImg = heroAsset;
const coach = heroAsset;
const t1 = story1;
const t2 = story4;
const t3 = story2;
import { TEL, WHATSAPP_URL, PLAY_STORE, APP_STORE } from "@/components/site/constants";
import { Reveal, Counter } from "@/components/site/Reveal";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PentaFit — Transform Your Body With Personalized Fitness & Nutrition Coaching" },
      { name: "description", content: "Personalized workout plans, expert nutrition guidance, progress tracking, accountability and the PentaFit mobile app — all in one premium ecosystem." },
      { property: "og:title", content: "PentaFit — Personalized Fitness & Nutrition Coaching" },
      { property: "og:description", content: "Customized coaching, tracking and accountability for real transformations. Download the PentaFit app today." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "PentaFit",
          description: "Personalized fitness and nutrition transformation coaching.",
          telephone: "+91-90745-83726",
          priceRange: "₹₹",
          areaServed: "IN",
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "412" },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <SocialProof />
      <WhyChoose />
      <HowItWorks />
      <AppShowcase />
      <Transformations />
      <Coaches />
      <Testimonials />
      <FAQ />
      <CtaBand />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-foreground">
      <div className="absolute inset-0">
        <img src={heroImg} alt="PentaFit transformation coaching" className="h-full w-full object-cover opacity-50" width={1600} height={1200} fetchPriority="high" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      </div>
      <div className="relative container-prose pt-16 lg:pt-24 pb-20 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center min-h-[88vh]">
        <div className="lg:col-span-7 animate-fade-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" /> India's premium transformation ecosystem
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-7xl font-extrabold font-display tracking-tight">
            Transform Your Body With <span className="text-brand">Personalized</span> Fitness & Nutrition Coaching
          </h1>
          <p className="mt-5 text-lg lg:text-xl text-primary-foreground/80 max-w-2xl">
            Get customized workout plans, expert nutrition guidance, progress tracking, accountability, and continuous support — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={TEL} className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3.5 font-semibold text-brand-foreground hover:bg-brand-dark shadow-glow transition">
              <Phone className="h-5 w-5" /> Call Now
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3.5 font-semibold hover:bg-white/90 transition">
              <MessageCircle className="h-5 w-5" /> WhatsApp Now
            </a>
            <a href={PLAY_STORE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3.5 font-semibold hover:bg-white/10 transition">
              <Download className="h-5 w-5" /> Download App
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-foreground/85">
            <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand" /> Certified Coaches</div>
            <div className="flex items-center gap-2"><Star className="h-4 w-4 text-brand fill-brand" /> 4.9/5 from 412+ clients</div>
            <div className="flex items-center gap-2"><Trophy className="h-4 w-4 text-brand" /> 1,200+ transformations</div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-card hover-lift">
            <div className="flex items-center justify-between text-xs text-foreground/75">
              <span>Live Progress</span>
              <span className="rounded-full bg-brand/20 text-brand px-2 py-0.5">Week 8</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {[
                { l: "Fat Lost", v: "-7.4 kg" },
                { l: "Muscle Gain", v: "+2.1 kg" },
                { l: "Adherence", v: "94%" },
              ].map((s) => (
                <div key={s.l} className="rounded-xl bg-white/5 p-3">
                  <div className="text-2xl font-bold text-brand">{s.v}</div>
                  <div className="text-[11px] uppercase tracking-wider text-foreground/70">{s.l}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-2xl overflow-hidden">
              <img src={t2} alt="Client transformation" className="h-64 w-full object-cover" width={800} height={600} loading="lazy" />
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm">
              <div className="h-8 w-8 rounded-full bg-brand/30 grid place-items-center"><HeartPulse className="h-4 w-4 text-brand" /></div>
              <span className="text-foreground/85">Plan adapted by your coach this week</span>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 rounded-2xl bg-brand text-brand-foreground p-4 shadow-card animate-float">
            <div className="text-3xl font-extrabold">98%</div>
            <div className="text-xs uppercase tracking-wider">client goal hit rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialProof() {
  const stats = [
    { n: 1200, s: "+", l: "Transformations Delivered" },
    { n: 8500, s: "+", l: "App Members" },
    { n: 412, s: "+", l: "5★ Reviews" },
    { n: 98, s: "%", l: "Goal Hit Rate" },
  ];
  return (
    <section className="bg-surface">
      <div className="container-prose py-14 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => (
          <Reveal key={s.l} className="text-center">
            <div className="text-4xl lg:text-5xl font-extrabold font-display text-brand">
              <Counter to={s.n} suffix={s.s} />
            </div>
            <div className="mt-2 text-sm font-medium text-foreground/85">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { i: Salad, t: "Personalized Nutrition", d: "Custom meal plans built around your goals, lifestyle and food preferences." },
    { i: Dumbbell, t: "Custom Workout Plans", d: "Programs designed for your body, equipment access and weekly schedule." },
    { i: LineChart, t: "Progress Tracking", d: "Weekly check-ins with biometrics, photos and adaptive plan adjustments." },
    { i: Users, t: "Accountability Coaching", d: "Real coaches that keep you consistent through the messy weeks." },
    { i: HeartPulse, t: "Lifestyle Transformation", d: "Sleep, stress, steps and recovery — we engineer the full system." },
    { i: Smartphone, t: "Premium Mobile App", d: "Tracking, education and your coach in your pocket, 24/7." },
  ];
  return (
    <section className="container-prose py-24">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Why PentaFit</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">An ecosystem engineered for real results</h2>
        <p className="mt-4 text-muted-foreground text-lg">No fad diets. No generic templates. Just data‑driven coaching backed by science and humans who care.</p>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 60}>
            <div className="group h-full rounded-2xl border border-border bg-card p-7 hover-lift">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand-dark group-hover:bg-brand group-hover:text-brand-foreground transition">
                <it.i className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold font-display">{it.t}</h3>
              <p className="mt-2 text-muted-foreground">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { t: "Consultation", d: "We listen — to your goals, history, frustrations, and what's failed before." },
    { t: "Assessment", d: "Body composition, lifestyle audit, lab markers (optional) and movement screening." },
    { t: "Personalized Plan", d: "Your nutrition, training and lifestyle blueprint, mapped into the app." },
    { t: "Tracking & Accountability", d: "Weekly check-ins, daily logging and a coach in your corner." },
    { t: "Transformation Success", d: "You hit your target — and learn how to keep it for life." },
  ];
  return (
    <section className="bg-surface">
      <div className="container-prose py-24">
        <Reveal className="text-center max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">How it works</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">From first call to lifelong transformation</h2>
        </Reveal>
        <div className="mt-14 relative">
          <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />
          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.t} delay={i * 100}>
                <div className="rounded-2xl bg-card p-6 border border-border h-full hover-lift relative">
                  <div className="absolute -top-5 left-6 h-10 w-10 rounded-full bg-gradient-brand text-brand-foreground grid place-items-center font-extrabold shadow-glow">{i + 1}</div>
                  <h3 className="mt-6 text-lg font-bold">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AppShowcase() {
  const features = [
    { i: Salad, t: "Diet Tracking" },
    { i: Dumbbell, t: "Workout Tracking" },
    { i: Footprints, t: "Step Tracking" },
    { i: LineChart, t: "Progress Tracking" },
    { i: Activity, t: "Weekly Analysis" },
    { i: Trophy, t: "Goal Monitoring" },
    { i: Users, t: "Community Access" },
    { i: Bell, t: "Smart Notifications" },
  ];
  return (
    <section className="bg-black text-foreground overflow-hidden border-y border-border">
      <div className="container-prose py-24 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="order-2 lg:order-1">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">The PentaFit App</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">
            Your coach, plan and progress — <span className="text-brand">in your pocket</span>
          </h2>
          <p className="mt-5 text-foreground/80 text-lg">
            One app for everything. Log meals in seconds, follow your workouts, watch your progress chart climb, and message your coach without missing a beat.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3">
            {features.map((f) => (
              <div key={f.t} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-3 py-3">
                <f.i className="h-5 w-5 text-brand" />
                <span className="text-sm font-medium">{f.t}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PLAY_STORE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white text-black px-5 py-3 font-semibold hover:bg-white/90 transition">
              <Smartphone className="h-5 w-5" /> Get on Play Store
            </a>
            <a href={APP_STORE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-5 py-3 font-semibold hover:bg-white/10 transition">
              <Apple className="h-5 w-5" /> Download for iPhone
            </a>
          </div>
        </Reveal>
        <Reveal delay={120} className="order-1 lg:order-2">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover-zoom">
            <img src={appMockup} alt="PentaFit mobile app on iPhone" className="w-full h-auto animate-float" width={1400} height={1200} loading="lazy" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Transformations() {
  const items = [
    { src: t1, t: "Executive Lean-Down", d: "Lost 14 kg in 22 weeks while juggling 60-hour work weeks." },
    { src: t2, t: "Muscle Architecture", d: "Built lean muscle and dialed in nutrition for visible definition." },
    { src: t3, t: "Athletic Endurance", d: "Doubled strength benchmarks and unlocked peak conditioning." },
  ];
  return (
    <section className="container-prose py-24">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Real transformations</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">Results you can actually see</h2>
      </Reveal>
      <div className="mt-12 grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 80}>
            <article className="group rounded-2xl overflow-hidden bg-card border border-border hover-lift">
              <div className="hover-zoom">
                <img src={it.src} alt={it.t} className="w-full h-80 object-cover" width={800} height={1000} loading="lazy" />
              </div>
              <div className="p-6">
                <div className="inline-flex rounded-full bg-brand/10 text-brand-dark text-xs font-bold uppercase tracking-wider px-2.5 py-1">Verified result</div>
                <h3 className="mt-3 text-xl font-bold font-display">{it.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
                <Link to="/success-stories" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-dark hover:gap-2 transition-all">Read the story <ArrowRight className="h-4 w-4" /></Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Coaches() {
  const list = [
    { name: "Richard George", role: "Founder · Head Coach", cred: ["Professional Fitness Coach Since 2016", "5+ Years Expert Consultant at HealthifyMe", "K11 Certified · Advanced Sports Nutritionist"], img: coach },
  ];
  return (
    <section className="bg-surface">
      <div className="container-prose py-24">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Meet your coach</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">Coached by a transformation specialist since 2016</h2>
        </Reveal>
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          {list.map((c) => (
            <Reveal key={c.name}>
              <div className="rounded-3xl overflow-hidden hover-zoom border border-border bg-card">
                <img src={c.img} alt={c.name} className="w-full h-[520px] object-cover" width={1000} height={1200} loading="lazy" />
              </div>
            </Reveal>
          ))}
          <Reveal delay={120}>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Founder & Head Coach</p>
            <h3 className="mt-3 text-4xl md:text-5xl font-extrabold font-display">Richard (Ashish) <span className="text-brand-dark">George</span></h3>
            <p className="mt-2 text-sm font-semibold text-foreground/80">Fitness Expert & Transformation Specialist | Founder of PentaFit</p>
            <p className="mt-5 text-lg text-muted-foreground italic">"I believe that true transformation is not just about physical change—it's about mastering the science of your own body."</p>
            <div className="mt-6 grid gap-2">
              {["Professional Fitness Coach Since 2016", "5+ Years Expert Consultant at HealthifyMe", "K11 Certified · Advanced Sports Nutritionist", "GLP-1 & Metabolic Health Specialist", "State-Level Bodybuilding Coach"].map((c) => (
                <div key={c} className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 hover-lift">
                  <span className="h-2 w-2 rounded-full bg-brand" />
                  <span className="font-semibold">{c}</span>
                </div>
              ))}
            </div>
            <div className="mt-6"><Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold hover:opacity-90 transition">Read full profile</Link></div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    { n: "Aakash R.", r: "Lost 12 kg in 18 weeks", q: "PentaFit didn't hand me a PDF. They handed me a system, a coach, and a way of life that actually fits my work." },
    { n: "Priya M.", r: "Down 9 kg, gained energy", q: "I've tried four 'diet plans'. This one finally worked because someone was watching, adjusting, and pushing me forward weekly." },
    { n: "Rohan S.", r: "Built lean muscle", q: "The app is genuinely premium. Tracking is effortless and the coach feedback is sharp. I look forward to my check-ins." },
  ];
  return (
    <section className="bg-surface">
      <div className="container-prose py-24">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Loved by clients</p>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">Real words from real members</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {t.map((x, i) => (
            <Reveal key={x.n} delay={i * 80}>
              <div className="rounded-2xl bg-card border border-border p-7 h-full hover-lift">
                <div className="flex gap-0.5 text-brand">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                <p className="mt-4 text-foreground/90">"{x.q}"</p>
                <div className="mt-5 pt-5 border-t border-border">
                  <div className="font-semibold">{x.n}</div>
                  <div className="text-sm text-muted-foreground">{x.r}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: "How is PentaFit different from a regular gym trainer or diet app?", a: "We combine 1:1 coaching, science-backed nutrition, adaptive programming and the PentaFit app into one ecosystem — your coach actually reviews your week and adjusts." },
    { q: "Do I need a gym to follow your programs?", a: "No. We build plans for home, hotel rooms and full gyms. Equipment access is just one variable we plan around." },
    { q: "How soon can I expect results?", a: "Most clients see visible body composition change between 4–8 weeks when adherence is above 80%." },
    { q: "Is the app free?", a: "The app is included with every coaching plan, and a free tier is available for tracking and community access." },
    { q: "How do I get started?", a: "Tap Call Now or WhatsApp Now — we'll book your free consultation within 24 hours." },
  ];
  return (
    <section className="container-prose py-24">
      <Reveal className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-dark">Questions</p>
        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold font-display tracking-tight">Frequently asked</h2>
      </Reveal>
      <div className="mt-10 grid gap-3 max-w-3xl">
        {faqs.map((f, i) => (
          <Reveal key={f.q} delay={i * 50}>
            <details className="group rounded-2xl border border-border bg-card p-5 open:shadow-card transition">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold list-none">
                {f.q}
                <span className="h-7 w-7 grid place-items-center rounded-full bg-brand/10 text-brand-dark group-open:rotate-45 transition">+</span>
              </summary>
              <p className="mt-3 text-muted-foreground">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
