import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/CtaBand";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | PentaFit" },
      { name: "description", content: "How PentaFit collects, uses and protects your personal information." },
      { property: "og:title", content: "PentaFit Privacy Policy" },
      { property: "og:description", content: "How PentaFit handles your data." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Last updated: June 2026" />
      <section className="container-prose py-16 max-w-3xl">
        <h2 className="text-2xl font-bold mt-8">Overview</h2>
        <p className="mt-3 text-muted-foreground">PentaFit respects your privacy. This policy describes what information we collect, how we use it, and the choices you have. By using our website, app or services, you agree to this policy.</p>
        <h2 className="text-2xl font-bold mt-8">Information we collect</h2>
        <p className="mt-3 text-muted-foreground">Name, email, phone, fitness goals, health data you choose to share (weight, body measurements, photos), and usage analytics from our app and website.</p>
        <h2 className="text-2xl font-bold mt-8">How we use it</h2>
        <p className="mt-3 text-muted-foreground">To deliver personalized coaching, communicate with you, improve our services, and comply with legal obligations. We never sell your data.</p>
        <h2 className="text-2xl font-bold mt-8">Your rights</h2>
        <p className="mt-3 text-muted-foreground">You can request access, correction or deletion of your data anytime by emailing hello@pentafit.app.</p>
        <h2 className="text-2xl font-bold mt-8">Contact</h2>
        <p className="mt-3 text-muted-foreground">For privacy questions, email hello@pentafit.app or call +91 90745 83726.</p>
      </section>
    </>
  );
}