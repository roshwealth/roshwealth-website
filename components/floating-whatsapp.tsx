import { MessageCircleMore } from "lucide-react";

import { siteConfig } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsappNumber}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-3 rounded-full border border-[rgba(243,207,125,0.25)] bg-black/80 px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl transition hover:-translate-y-1"
      aria-label="Chat with Roshwealth on WhatsApp"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[var(--gold)] text-black">
        <MessageCircleMore className="h-5 w-5" />
      </span>
      <span className="hidden sm:inline">WhatsApp Us</span>
    </a>
  );
}
