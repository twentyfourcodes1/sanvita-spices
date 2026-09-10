import { MessageCircle, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { business } from "@/lib/products";
import { generalEnquiryMessage, openWhatsApp } from "@/lib/whatsapp";

export function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="Call us"
        onClick={() => (window.location.href = `tel:${business.phoneDial}`)}
        className="pointer-events-auto size-12 rounded-full border-gold/60 bg-card/95 text-brand backdrop-blur shadow-lift hover:border-gold hover:text-primary"
      >
        <Phone className="size-5" />
      </Button>

      <Button
        type="button"
        variant="whatsapp"
        size="icon"
        aria-label="Chat with us on WhatsApp"
        onClick={() => openWhatsApp(generalEnquiryMessage)}
        className="pointer-events-auto size-14 rounded-full shadow-lift"
      >
        <MessageCircle className="size-6" />
      </Button>
    </div>
  );
}

