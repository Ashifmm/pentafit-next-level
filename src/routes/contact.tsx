import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { PageHero } from "@/components/site/CtaBand";
import { Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";
import { TEL, WHATSAPP_URL, PHONE_DISPLAY, EMAIL } from "@/components/site/constants";

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
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's build your transformation plan." subtitle="Pick the fastest channel — phone, WhatsApp or the form. We respond within minutes during working hours." />
      <section className="container-prose py-20 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-3">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
            <h2 className="text-2xl font-bold font-display">Book a free consultation</h2>
            <p className="mt-1 text-muted-foreground">Tell us about your goal — a coach will reach out within 24 hours.</p>
            {sent ? (
              <div className="mt-8 rounded-2xl bg-brand/10 text-brand-dark p-6 font-semibold">Thanks! We'll be in touch within 24 hours.</div>
            ) : (
              <form
                className="mt-6 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <Field label="Full name" name="name" required />
                  <Field label="Phone" name="phone" type="tel" required />
                </div>
                <Field label="Email" name="email" type="email" required />
                <div className="grid md:grid-cols-2 gap-4">
                  <Select label="Primary goal" name="goal" options={["Weight loss", "Fat loss & recomp", "Muscle gain", "Lifestyle change"]} />
                  <Select label="Preferred plan" name="plan" options={["Starter", "Pro", "Elite", "Not sure yet"]} />
                </div>
                <Field label="Tell us a bit about you" name="message" textarea />
                <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 transition">
                  <Send className="h-4 w-4" /> Send enquiry
                </button>
              </form>
            )}
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
          <div className="rounded-2xl overflow-hidden border border-border bg-surface aspect-[4/3] grid place-items-center text-muted-foreground text-sm">
            Map placeholder
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Field({ label, name, type = "text", required, textarea }: { label: string; name: string; type?: string; required?: boolean; textarea?: boolean }) {
  const cls = "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 transition";
  return (
    <label className="block text-sm font-semibold">
      {label}
      {textarea ? <textarea name={name} required={required} rows={4} className={cls} /> : <input type={type} name={name} required={required} className={cls} />}
    </label>
  );
}
function Select({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <label className="block text-sm font-semibold">
      {label}
      <select name={name} className="mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 transition">
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}