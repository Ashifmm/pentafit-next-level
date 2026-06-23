import { useState } from "react";
import { Send, Phone, MessageCircle } from "lucide-react";
import { TEL, WHATSAPP_URL, waLeadUrl } from "./constants";

type Props = {
  defaultProgram?: string;
  compact?: boolean;
};

export function LeadForm({ defaultProgram = "", compact = false }: Props) {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || "").trim(),
      phone: String(fd.get("phone") || "").trim(),
      goal: String(fd.get("goal") || "").trim(),
      program: String(fd.get("program") || defaultProgram).trim(),
      email: String(fd.get("email") || "").trim(),
      message: String(fd.get("message") || "").trim(),
    };
    if (!payload.name || !payload.phone || !payload.message) return;
    setSubmitting(true);
    try {
      // Persist via FormSubmit (no signup, free) — silent fallback if blocked
      try {
        await fetch("https://formsubmit.co/ajax/pentafitbyrichard@gmail.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            _subject: "New PentaFit Website Lead",
            ...payload,
            submitted_at: new Date().toISOString(),
          }),
        });
      } catch {
        /* non-blocking */
      }
      // Open WhatsApp with the formatted lead so it reaches the team instantly
      window.open(waLeadUrl(payload), "_blank", "noopener,noreferrer");
      setSent(true);
    } finally {
      setSubmitting(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl bg-brand/10 border border-brand/20 p-6 md:p-8 text-center">
        <h3 className="text-2xl font-extrabold font-display text-brand-dark">Thank You!</h3>
        <p className="mt-2 text-foreground/80">Your request has been received. Our team will contact you shortly.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          <a href={TEL} className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 font-semibold text-brand-foreground hover:bg-brand-dark transition">
            <Phone className="h-4 w-4" /> Call Now
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 font-semibold text-white hover:opacity-90 transition">
            <MessageCircle className="h-4 w-4" /> WhatsApp Now
          </a>
        </div>
      </div>
    );
  }

  const inputCls = "mt-1.5 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30 transition";

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <div className={compact ? "grid gap-4" : "grid md:grid-cols-2 gap-4"}>
        <label className="block text-sm font-semibold">
          Full name *
          <input name="name" required maxLength={100} className={inputCls} placeholder="Your name" />
        </label>
        <label className="block text-sm font-semibold">
          Mobile number *
          <input name="phone" type="tel" required maxLength={20} pattern="[0-9+\-\s]{7,20}" className={inputCls} placeholder="+91 ..." />
        </label>
      </div>
      <div className={compact ? "grid gap-4" : "grid md:grid-cols-2 gap-4"}>
        <label className="block text-sm font-semibold">
          Fitness goal <span className="text-muted-foreground font-normal">(optional)</span>
          <select name="goal" defaultValue="" className={inputCls}>
            <option value="">Select a goal</option>
            <option>Weight loss</option>
            <option>Fat loss & recomp</option>
            <option>Muscle gain</option>
            <option>Strength & conditioning</option>
            <option>Lifestyle transformation</option>
          </select>
        </label>
        <label className="block text-sm font-semibold">
          Email <span className="text-muted-foreground font-normal">(optional)</span>
          <input name="email" type="email" maxLength={255} className={inputCls} placeholder="you@example.com" />
        </label>
      </div>
      <input type="hidden" name="program" value={defaultProgram} />
      <label className="block text-sm font-semibold">
        Message *
        <textarea name="message" required rows={4} maxLength={1000} className={inputCls} placeholder="Tell us a bit about your goal..." />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:opacity-90 disabled:opacity-60 transition"
      >
        <Send className="h-4 w-4" /> {submitting ? "Sending..." : "Send Enquiry"}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        Your details are sent directly to our coaching team via WhatsApp.
      </p>
    </form>
  );
}
