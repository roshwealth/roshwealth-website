import { siteConfig } from "@/lib/site";

import { Button, Container } from "./ui";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black/80 py-3 backdrop-blur-xl md:hidden">
      <Container className="flex items-center gap-3">
        <Button href="/contact" className="flex-1">
          Book Consultation
        </Button>
        <Button href={`https://wa.me/${siteConfig.whatsappNumber}`} variant="secondary" className="flex-1">
          WhatsApp
        </Button>
      </Container>
    </div>
  );
}
