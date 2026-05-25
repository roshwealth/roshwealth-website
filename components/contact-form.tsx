"use client";

import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  goal: "",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      setStatus("success");
      setForm(initialState);
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field
          label="Name"
          value={form.name}
          onChange={(value) => setForm((current) => ({ ...current, name: value }))}
        />
        <Field
          label="Email"
          type="email"
          value={form.email}
          onChange={(value) => setForm((current) => ({ ...current, email: value }))}
        />
        <Field
          label="Phone"
          value={form.phone}
          onChange={(value) => setForm((current) => ({ ...current, phone: value }))}
        />
        <Field
          label="Primary Goal"
          placeholder="Retirement, SIP planning, portfolio review..."
          value={form.goal}
          onChange={(value) => setForm((current) => ({ ...current, goal: value }))}
        />
      </div>
      <label className="grid gap-2 text-sm text-[var(--muted)]">
        <span>Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          placeholder="Tell us what you would like help with."
          className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-white outline-none placeholder:text-[var(--muted)] focus:border-[var(--gold)]"
        />
      </label>
      <button
        type="submit"
        disabled={status === "loading"}
        className="h-12 rounded-full bg-[linear-gradient(135deg,#f3cf7d_0%,#c89c44_100%)] px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "loading" ? "Sending..." : "Request Consultation"}
      </button>
      {status === "success" ? (
        <p className="text-sm text-[var(--gold)]">
          Thanks. Your consultation request has been received.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-rose-300">
          Something went wrong. Please try again or use WhatsApp.
        </p>
      ) : null}
    </form>
  );
}

function Field({
  label,
  type = "text",
  value,
  onChange,
  placeholder
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm text-[var(--muted)]">
      <span>{label}</span>
      <input
        required
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        className="h-12 rounded-full border border-white/10 bg-white/5 px-5 text-white outline-none placeholder:text-[var(--muted)] focus:border-[var(--gold)]"
      />
    </label>
  );
}
