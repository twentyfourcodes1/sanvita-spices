import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { generalEnquiryMessage, openWhatsApp } from "@/lib/whatsapp";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {showTop ? (
        <button
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="pointer-events-auto grid size-10 place-items-center rounded-full border border-gold/60 bg-card/90 text-foreground shadow-soft backdrop-blur transition-transform hover:-translate-y-0.5"
        >
          <ArrowUp className="size-4" />
        </button>
      ) : null}

      <button
        type="button"
        onClick={() => openWhatsApp(generalEnquiryMessage)}
        className="pointer-events-auto group flex items-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-whatsapp-foreground shadow-lift transition-transform hover:-translate-y-0.5"
      >
        <MessageCircle className="size-5" />
        <span className="hidden text-sm font-semibold sm:inline">
          Chat with us
        </span>
      </button>
    </div>
  );
}
