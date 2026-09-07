import { MessageCircle } from "lucide-react";

import spiceBanner from "@/assets/spice-experience.jpg";
import { Button } from "@/components/ui/button";
import { business } from "@/lib/products";
import { generalEnquiryMessage, openWhatsApp } from "@/lib/whatsapp";

export function CTASection({
  title = "Your Favourite Spices Are Just a Message Away.",
  description = "Send us your order on WhatsApp and we will confirm availability, delivery charges and the final amount right away.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-lg border border-gold/50 shadow-lift">
        <img
          src={spiceBanner}
          alt="Mounds of red chilli, turmeric, coriander and masala powders"
          width={1920}
          height={912}
          loading="lazy"
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-brand/82" />
        <div className="relative px-6 py-16 text-center sm:px-12 sm:py-24">
          <p className="text-eyebrow text-gold">WhatsApp Ordering</p>
           <h2 className="mx-auto mt-4 max-w-3xl text-4xl leading-tight text-brand-foreground sm:text-5xl">
            {title}
          </h2>
           <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-brand-foreground/80 sm:text-base">
            {description}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              size="lg"
              variant="whatsapp"
              onClick={() => openWhatsApp(generalEnquiryMessage)}
            >
              <MessageCircle /> Order on WhatsApp
            </Button>
            <a
              href={`tel:${business.phoneDial}`}
              className="font-display text-2xl text-gold"
            >
              {business.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
