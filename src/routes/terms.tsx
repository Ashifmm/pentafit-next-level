import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/CtaBand";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | PentaFit" },
      { name: "description", content: "Terms and conditions governing the use of PentaFit's website, app and coaching services." },
      { property: "og:title", content: "PentaFit Terms & Conditions" },
      { property: "og:description", content: "Terms governing the use of PentaFit services." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" subtitle="Last updated: June 2026" />
      <section className="container-prose py-16 max-w-3xl">
        <h2 className="text-2xl font-bold mt-8">1. Acceptance</h2>
        <p className="mt-3 text-muted-foreground">By accessing PentaFit services you agree to these terms. If you don't agree, please don't use our services.</p>
        <h2 className="text-2xl font-bold mt-8">2. Health disclaimer</h2>
        <p className="mt-3 text-muted-foreground">PentaFit provides fitness and nutrition coaching, not medical advice. Consult your physician before starting any program, especially if you have a medical condition.</p>
        <h2 className="text-2xl font-bold mt-8">3. Payments & refunds</h2>
        <p className="mt-3 text-muted-foreground">All fees are billed in advance. First-time enrollments include a 7-day satisfaction window. Refunds beyond this period are evaluated case-by-case.</p>
        <h2 className="text-2xl font-bold mt-8">4. Account responsibilities</h2>
        <p className="mt-3 text-muted-foreground">You're responsible for the accuracy of information you share and for keeping your account credentials secure.</p>
        <h2 className="text-2xl font-bold mt-8">5. Intellectual property</h2>
        <p className="mt-3 text-muted-foreground">All content, plans and materials provided by PentaFit are for your personal use only and may not be redistributed.</p>
        <h2 className="text-2xl font-bold mt-8">6. Contact</h2>
        <p className="mt-3 text-muted-foreground">Questions? Email <a className="text-brand" href="mailto:richad.george@gmail.com">richad.george@gmail.com</a> or call +91 90745 83726.</p>
      </section>
    </>
  );
}