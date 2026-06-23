export const PHONE = "+919074583726";
export const PHONE_DISPLAY = "+91 90745 83726";
export const TEL = `tel:${PHONE}`;
export const WHATSAPP_URL = `https://wa.me/919074583726?text=${encodeURIComponent("Hi PentaFit, I'd like to know more about your coaching programs.")}`;
export const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.app.pentafit";
export const APP_STORE = "https://apps.apple.com/in/app/pentafit/id6757516669";
export const EMAIL = "hello@pentafit.app";

export const INSTAGRAM_URL = "https://www.instagram.com/pentafitbyrichard";
export const YOUTUBE_URL = "https://youtube.com/@pentafitbyrichard13";

export function waLeadUrl(payload: Record<string, string | undefined>) {
  const lines = [
    "*New Website Lead*",
    "",
    `*Name:* ${payload.name || "-"}`,
    `*Phone:* ${payload.phone || "-"}`,
    `*Goal:* ${payload.goal || "-"}`,
    `*Program:* ${payload.program || "-"}`,
    `*Email:* ${payload.email || "-"}`,
    `*Message:* ${payload.message || "-"}`,
    "",
    `*Submission Time:* ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`,
  ];
  return `https://wa.me/919074583726?text=${encodeURIComponent(lines.join("\n"))}`;
}

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/programs", label: "Programs" },
  { to: "/success-stories", label: "Success Stories" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;