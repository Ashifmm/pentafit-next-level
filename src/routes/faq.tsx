import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, PageHero } from "@/components/site/CtaBand";

const faqs = [
  { q: "How is PentaFit different from a regular gym trainer or diet app?", a: "We combine 1:1 coaching, science-backed nutrition, adaptive programming and the PentaFit app into one ecosystem — your coach actually reviews your week and adjusts your plan." },
  { q: "Do I need a gym to follow your programs?", a: "No. We build plans for home, hotel rooms and full gyms. Equipment access is just one variable we plan around." },
  { q: "How soon can I expect results?", a: "Most clients see visible body composition change between 4-8 weeks when adherence is above 80%." },
  { q: "Is the PentaFit app free?", a: "The app is included with every coaching plan, and a free tier is available for tracking and community access." },
  { q: "Do you offer vegetarian / vegan nutrition?", a: "Yes. We build plans for vegetarian, vegan, eggetarian and non-vegetarian preferences." },
  { q: "Can I switch plans later?", a: "Absolutely. You can upgrade or downgrade between Starter, Pro and Elite anytime." },
  { q: "What is your refund policy?", a: "We offer a 7-day satisfaction window on first-time enrollments. See our Terms for details." },
  { q: "How do I get started?", a: "Tap Call Now or WhatsApp Now — we'll book your free consultation within 24 hours." },
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Frequently Asked Questions | PentaFit" },
      { name: "description", content: "Answers to common questions about PentaFit coaching, programs, the mobile app, pricing and getting started." },
      { property: "og:title", content: "PentaFit FAQ" },
      { property: "og:description", content: "Everything you need to know about PentaFit coaching and the app." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: FAQPage,
});

function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Everything you wanted to ask." subtitle="Still unsure? WhatsApp us — a real human responds within minutes." />
      <section className="container-prose py-20 max-w-3xl">
        <div className="grid gap-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 40}>
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
      <CtaBand />
    </>
  );
}