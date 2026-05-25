import Link from "next/link";

import { Container } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section-space">
      <Container className="text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--gold)]">Page Not Found</p>
        <h1
          className="mt-6 text-[3rem] tracking-[-0.05em] text-white"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The page you are looking for does not exist.
        </h1>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[var(--gold)] px-5 py-3 text-sm font-semibold text-black">
          Return Home
        </Link>
      </Container>
    </section>
  );
}
