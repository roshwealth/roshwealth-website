"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 16) {
        setOpen(true);
      }
    };

    const timer = window.setTimeout(() => {
      document.addEventListener("mouseout", handleMouseLeave);
    }, 4000);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] grid place-items-center bg-black/70 px-4">
      <div className="glass-panel relative w-full max-w-xl rounded-[2rem] p-8">
        <button
          type="button"
          className="absolute right-4 top-4 rounded-full border border-white/10 p-2 text-white"
          onClick={() => setOpen(false)}
          aria-label="Close popup"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-sm uppercase tracking-[0.32em] text-[var(--gold)]">Before You Leave</p>
        <h3 className="mt-4 text-3xl font-semibold text-white">Get a calm second opinion on your portfolio.</h3>
        <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
          Request a portfolio review and we will help you think through allocation, discipline,
          and long-term fit.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="/contact"
            className="inline-flex rounded-full bg-[linear-gradient(135deg,#f3cf7d_0%,#c89c44_100%)] px-5 py-3 text-sm font-semibold text-black"
          >
            Request Review
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="inline-flex rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white"
          >
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
