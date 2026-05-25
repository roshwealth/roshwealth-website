"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

export function SectionIntro({
  eyebrow,
  title,
  copy,
  align = "left"
}: {
  eyebrow?: string;
  title: string;
  copy: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[var(--gold)]">{eyebrow}</p>
      ) : null}
      <h2 className="section-title text-balance">{title}</h2>
      <p className="section-copy mt-5 text-balance">{copy}</p>
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-[linear-gradient(135deg,#f3cf7d_0%,#c89c44_100%)] text-black shadow-[0_12px_30px_rgba(215,181,109,0.22)]",
    secondary:
      "border border-[var(--border)] bg-white/5 text-white hover:bg-white/10",
    ghost: "text-[var(--gold)] hover:text-[var(--gold-strong)]"
  }[variant];

  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-300 hover:-translate-y-0.5",
        styles,
        className
      )}
    >
      {children}
    </Link>
  );
}

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("container-shell", className)} {...props} />;
}

export function Reveal({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-panel rounded-[2rem] p-6 transition duration-300 hover:border-[rgba(243,207,125,0.4)] hover:bg-white/[0.07]",
        className
      )}
    >
      {children}
    </div>
  );
}
