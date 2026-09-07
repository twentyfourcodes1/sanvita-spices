import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
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
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="pointer-events-auto bg-card/90 backdrop-blur"
        >
          <ArrowUp className="size-4" />
        </Button>
      ) : null}

      <Button
        type="button"
        variant="whatsapp"
        onClick={() => openWhatsApp(generalEnquiryMessage)}
        className="pointer-events-auto h-11 px-4 shadow-lift"
      >
        <MessageCircle className="size-5" />
        <span className="hidden text-sm font-semibold sm:inline">
          Chat with us
        </span>
      </Button>
    </div>
  );
}
