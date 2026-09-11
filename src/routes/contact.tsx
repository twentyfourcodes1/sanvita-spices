import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { business } from "@/lib/products";
import { openWhatsApp } from "@/lib/whatsapp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Sanvita" },
      {
        name: "description",
        content:
          "Contact Sanvita International Traders in Vijayapura, Karnataka — call +91 89518 53252, message us on WhatsApp or email info@sanvitainternationaltraders.com.",
      },
      {
        property: "og:title",
        content: "Contact | Sanvita",
      },
      {
        property: "og:description",
        content:
          "Reach our team in Vijayapura for orders, pack sizes and bulk enquiries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    message: "",
  });

  const submit = () => {
    if (!form.name.trim() || !form.mobile.trim() || !form.message.trim()) {
      toast.error("Please add your name, mobile number and message.");
      return;
    }
    openWhatsApp(
      `Hello ${business.brand},

Name: ${form.name}
Mobile: ${form.mobile}${form.email ? `\nEmail: ${form.email}` : ""}

Message:
${form.message}`,
    );
    toast.success("Opening WhatsApp with your message");
  };

  const address = `${business.address.line1}, ${business.address.line2}, ${business.address.city}, ${business.address.state}`;

  return (
    <>
      <section className="bg-cream-gradient py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-eyebrow text-brand">Contact</p>
          <h1 className="mx-auto mt-3 max-w-xl text-4xl leading-tight sm:text-5xl">
            We would love to hear from you
          </h1>
          <div className="gold-rule mx-auto mt-4 w-28" />
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Questions about a product, a pack size or a larger order? Call us,
            message us on WhatsApp or send an email — we reply personally.
          </p>
        </div>
      </section>

      <section className="pt-10 pb-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <Reveal>
            <div className="rounded-lg border border-gold/40 bg-card p-8 shadow-soft">
              <h2 className="text-2xl">{business.company}</h2>
              <div className="gold-rule mt-4 w-20" />
              <address className="mt-6 space-y-4 text-sm not-italic leading-relaxed text-muted-foreground">
                <p className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>
                    {business.address.line1},<br />
                    {business.address.line2},<br />
                    {business.address.city},<br />
                    {business.address.state}
                  </span>
                </p>
                <p className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                  <a
                    href={`tel:${business.phoneDial}`}
                    className="hover:text-primary"
                  >
                    {business.phoneDisplay}
                  </a>
                </p>
                <p className="flex gap-3">
                  <MessageCircle className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>WhatsApp: {business.phoneDisplay}</span>
                </p>
                <p className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                  <a
                    href={`mailto:${business.email}`}
                    className="break-all hover:text-primary"
                  >
                    {business.email}
                  </a>
                </p>
                <p className="flex gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>
                    We respond to calls and WhatsApp messages during business
                    hours.
                  </span>
                </p>
              </address>

              <div className="mt-8 flex flex-col gap-2">
                <Button asChild>
                  <a href={`tel:${business.phoneDial}`}>
                    <Phone /> Call Us
                  </a>
                </Button>
                <Button
                  variant="whatsapp"
                  onClick={() =>
                    openWhatsApp(
                      `Hello ${business.brand}, I would like to know more about your products.`,
                    )
                  }
                >
                  <MessageCircle /> WhatsApp Us
                </Button>
                <Button asChild variant="outline">
                  <a href={`mailto:${business.email}`}>
                    <Mail /> Email Us
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="rounded-lg border border-gold/40 bg-card p-8 shadow-soft"
              onSubmit={(event) => {
                event.preventDefault();
                submit();
              }}
            >
              <h2 className="text-2xl">Send us a message</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Your message opens in WhatsApp so we can reply straight away.
              </p>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div>
                  <Label htmlFor="name" className="text-sm font-semibold">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(event) =>
                      setForm({ ...form, name: event.target.value })
                    }
                    className="mt-2 h-11 rounded-md"
                  />
                </div>
                <div>
                  <Label htmlFor="mobile" className="text-sm font-semibold">
                    Mobile *
                  </Label>
                  <Input
                    id="mobile"
                    inputMode="tel"
                    value={form.mobile}
                    onChange={(event) =>
                      setForm({ ...form, mobile: event.target.value })
                    }
                    className="mt-2 h-11 rounded-md"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email" className="text-sm font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm({ ...form, email: event.target.value })
                    }
                    className="mt-2 h-11 rounded-md"
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message" className="text-sm font-semibold">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    rows={5}
                    value={form.message}
                    onChange={(event) =>
                      setForm({ ...form, message: event.target.value })
                    }
                    className="mt-2 rounded-md"
                  />
                </div>
              </div>
              <Button type="submit" size="lg" className="mt-7 w-full">
                Send Message
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Find Us"
            title="Vijayapura, Karnataka"
            description="Our base is in KC Nagar, near DCC Bank."
          />
          <div className="mt-10 overflow-hidden rounded-lg border border-gold/50 shadow-lift">
            <iframe
              title={`Map showing ${business.company}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
              loading="lazy"
              className="h-[380px] w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
