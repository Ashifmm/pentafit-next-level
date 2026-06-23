import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/CtaBand";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { TEL, WHATSAPP_URL, PHONE_DISPLAY, EMAIL } from "@/components/site/constants";
import { LeadForm } from "@/components/site/LeadForm";
import { SocialLinks } from "@/components/site/SocialLinks";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact PentaFit — Book a Free Consultation" },
      { name: "description", content: "Book a free consultation, call us at +91 90745 83726 or WhatsApp our team. We respond within minutes." },
      { property: "og:title", content: "Contact PentaFit" },
      { property: "og:description", content: "Book a free consultation or get in touch with our team." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build your transformation plan." subtitle="Pick the fastest channel — phone, WhatsApp or the form. We respond within minutes during working hours." />
      <section className="container-prose py-20 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-3">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
            <h2 className="text-2xl font-bold font-display">Book a free consultation</h2>
            <p className="mt-1 text-muted-foreground">Tell us about your goal — your details reach our coaching team instantly via WhatsApp.</p>
            <div className="mt-6">
              <LeadForm />
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-2 grid gap-4">
          <a href={TEL} className="rounded-2xl border border-border bg-card p-6 hover-lift flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand-dark grid place-items-center"><Phone className="h-5 w-5" /></div>
            <div><div className="text-sm text-muted-foreground">Call us</div><div className="text-lg font-bold">{PHONE_DISPLAY}</div></div>
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="rounded-2xl border border-border bg-card p-6 hover-lift flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand-dark grid place-items-center"><MessageCircle className="h-5 w-5" /></div>
            <div><div className="text-sm text-muted-foreground">WhatsApp</div><div className="text-lg font-bold">Chat with us instantly</div></div>
          </a>
          <a href={`mailto:${EMAIL}`} className="rounded-2xl border border-border bg-card p-6 hover-lift flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand-dark grid place-items-center"><Mail className="h-5 w-5" /></div>
            <div><div className="text-sm text-muted-foreground">Email</div><div className="text-lg font-bold">{EMAIL}</div></div>
          </a>
          <div className="rounded-2xl border border-border bg-card p-6 flex items-start gap-4">
            <div className="h-12 w-12 rounded-xl bg-brand/10 text-brand-dark grid place-items-center"><MapPin className="h-5 w-5" /></div>
            <div><div className="text-sm text-muted-foreground">Coverage</div><div className="text-lg font-bold">Across India · Online & in-person</div></div>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="text-sm text-muted-foreground">Follow PentaFit</div>
            <div className="mt-3"><SocialLinks /></div>
          </div>
        </Reveal>
      </section>
    </>
  );
}