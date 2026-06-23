import { Instagram, Youtube } from "lucide-react";
import { INSTAGRAM_URL, YOUTUBE_URL } from "./constants";

export function SocialLinks({ className = "", iconSize = 16, variant = "default" }: { className?: string; iconSize?: number; variant?: "default" | "dark" | "ghost" }) {
  const base =
    variant === "dark"
      ? "bg-white/10 hover:bg-brand text-white"
      : variant === "ghost"
      ? "border border-border hover:border-brand hover:text-brand-dark text-foreground"
      : "bg-brand/10 hover:bg-brand text-brand-dark hover:text-brand-foreground";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="PentaFit on Instagram"
        className={`rounded-full p-2 transition ${base}`}
      >
        <Instagram style={{ width: iconSize, height: iconSize }} />
      </a>
      <a
        href={YOUTUBE_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="PentaFit on YouTube"
        className={`rounded-full p-2 transition ${base}`}
      >
        <Youtube style={{ width: iconSize, height: iconSize }} />
      </a>
    </div>
  );
}
