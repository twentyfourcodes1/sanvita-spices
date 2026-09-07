import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import logo from "@/assets/sanvita-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { business, products } from "@/lib/products";
import { generalEnquiryMessage, openWhatsApp } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-gold/40 bg-secondary/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <img
            src={logo.url}
            alt={`${business.brand} logo`}
            width={220}
            height={140}
            loading="lazy"
            className="h-14 w-auto rounded-md"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {business.brand} brings authentic aroma, colour and flavour to
            everyday Indian cooking — carefully prepared and freshly packed in
            Vijayapura, Karnataka.
          </p>
        </div>

        <div>
          <h3 className="text-eyebrow text-spice">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { label: "Home", to: "/" as const },
              { label: "About", to: "/about" as const },
              { label: "Products", to: "/products" as const },
              { label: "Contact", to: "/contact" as const },
            ].map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow text-spice">Products</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: product.slug }}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow text-spice">Contact</h3>
          <address className="mt-5 space-y-3 text-sm not-italic text-muted-foreground">
            <p className="font-semibold text-foreground">{business.company}</p>
            <p className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0 text-gold" />
              <span>
                {business.address.line1}, {business.address.line2},{" "}
                {business.address.city}, {business.address.state}
              </span>
            </p>
            <p className="flex gap-2">
              <Phone className="size-4 shrink-0 text-gold" />
              <a
                href={`tel:${business.phoneDial}`}
                className="transition-colors hover:text-primary"
              >
                {business.phoneDisplay}
              </a>
            </p>
            <p className="flex gap-2">
              <Mail className="size-4 shrink-0 text-gold" />
              <a
                href={`mailto:${business.email}`}
                className="break-all transition-colors hover:text-primary"
              >
                {business.email}
              </a>
            </p>
          </address>
          <Button
            variant="whatsapp"
            className="mt-5 w-full sm:w-auto"
            onClick={() => openWhatsApp(generalEnquiryMessage)}
          >
            <MessageCircle /> Order on WhatsApp
          </Button>
        </div>
      </div>

      <div className="border-t border-gold/40 px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} {business.company}. All Rights Reserved.
      </div>
    </footer>
  );
}
