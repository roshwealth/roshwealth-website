"use client";

import { useState } from "react";

export function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="grid gap-3 sm:grid-cols-[1fr_auto]"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <input
        type="email"
        required
        placeholder="Enter your email for thoughtful investor updates"
        className="h-12 rounded-full border border-white/10 bg-white/5 px-5 text-sm text-white outline-none placeholder:text-[var(--muted)] focus:border-[var(--gold)]"
      />
      <button
        type="submit"
        className="h-12 rounded-full bg-[linear-gradient(135deg,#f3cf7d_0%,#c89c44_100%)] px-5 text-sm font-semibold text-black transition hover:-translate-y-0.5"
      >
        Subscribe
      </button>
      {submitted ? (
        <p className="text-sm text-[var(--gold)] sm:col-span-2">
          Thanks. You are on the list for future investor insights.
        </p>
      ) : null}
    </form>
  );
}
