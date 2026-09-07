import { Link } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Leaf } from "lucide-react";

import logo from "@/assets/sanvita-logo-gold.png.asset.json";
import { Button } from "@/components/ui/button";
import { business, products } from "@/lib/products";
import { generalEnquiryMessage, openWhatsApp } from "@/lib/whatsapp";

function SpicePattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.06]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="spice-pattern"
            x="0"
            y="0"
            width="200"
            height="200"
            patternUnits="userSpaceOnUse"
          >
            {/* Chilli silhouette */}
            <path
              d="M24 38c8-2 18-8 24-2 4 4 2 12-6 16-10 6-26 4-32-6-4-8 4-14 14-8z"
              fill="currentColor"
            />
            {/* Coriander / cumin seeds */}
            <circle cx="110" cy="32" r="4" fill="currentColor" />
            <circle cx="120" cy="28" r="3.5" fill="currentColor" />
            <circle cx="116" cy="40" r="3" fill="currentColor" />
            {/* Star anise */}
            <path
              d="M40 112l4 10 10 2-8 7 2 10-9-6-9 6 2-10-8-7 10-2z"
              fill="currentColor"
            />
            {/* Mustard seeds */}
            <circle cx="100" cy="110" r="4" fill="currentColor" />
            <circle cx="112" cy="116" r="3.5" fill="currentColor" />
            <circle cx="96" cy="122" r="3" fill="currentColor" />
            {/* Leaf / bay */}
            <path
              d="M150 24c16-8 32 4 28 24-8 14-30 12-40 2-8-10 0-22 12-26z"
              fill="currentColor"
            />
            {/* Turmeric root / finger */}
            <path
              d="M155 150c10-2 18 6 16 16-4 10-18 8-22-2-2-8 2-14 6-14z"
              fill="currentColor"
            />
            <circle cx="175" cy="165" r="5" fill="currentColor" />
            {/* Small peppercorn */}
            <circle cx="70" cy="160" r="3.5" fill="currentColor" />
            <circle cx="80" cy="168" r="3" fill="currentColor" />
            <circle cx="62" cy="170" r="2.5" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#spice-pattern)" />
      </svg>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-gold/40 bg-brand text-brand-foreground">
      <SpicePattern />

      {/* Heritage banner */}
      <div className="relative border-b border-gold/20 px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-eyebrow text-primary">The Sanvita Heritage</p>
          <h2 className="mt-3 font-display text-2xl italic leading-tight md:text-3xl">
            Vijayapura&apos;s Authentic Spices
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-brand-foreground/70">
            Freshly prepared, carefully packed, and delivered across India — so
            every meal carries the warmth of home.
          </p>
          <div className="mx-auto mt-6 flex max-w-md items-center justify-center gap-3">
            <div className="gold-rule flex-1" />
            <Leaf className="size-5 text-gold" />
            <div className="gold-rule flex-1" />
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-1">
          <img
            src={logo.url}
            alt={`${business.brand} logo`}
            width={236}
            height={100}
            loading="lazy"
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-brand-foreground/70">
            {business.brand} brings authentic aroma, colour and flavour to
            everyday Indian cooking — carefully prepared and freshly packed in
            Vijayapura, Karnataka.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-brand-secondary/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-primary">
            <span className="inline-block size-2 rounded-full bg-gold" />
            Made in Karnataka, India
          </div>
        </div>

        <div>
          <h3 className="text-eyebrow text-primary">Quick Links</h3>
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
                  className="group inline-flex items-center gap-2 text-brand-foreground/70 transition-all hover:translate-x-1 hover:text-primary"
                >
                  <span className="h-px w-0 bg-gold transition-all group-hover:w-3" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow text-primary">Products</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {products.map((product) => (
              <li key={product.slug}>
                <Link
                  to="/products/$slug"
                  params={{ slug: product.slug }}
                  className="group inline-flex items-center gap-2 text-brand-foreground/70 transition-all hover:translate-x-1 hover:text-primary"
                >
                  <span className="h-px w-0 bg-gold transition-all group-hover:w-3" />
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-eyebrow text-primary">Contact</h3>
          <address className="mt-5 space-y-4 text-sm not-italic text-brand-foreground/70">
            <p className="font-semibold text-brand-foreground">
              {business.company}
            </p>
            <p className="flex gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-brand-secondary/50">
                <MapPin className="size-4 text-gold" />
              </span>
              <span>
                {business.address.line1}, {business.address.line2},{" "}
                {business.address.city}, {business.address.state}
              </span>
            </p>
            <p className="flex gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-brand-secondary/50">
                <Phone className="size-4 text-gold" />
              </span>
              <a
                href={`tel:${business.phoneDial}`}
                className="transition-colors hover:text-primary"
              >
                {business.phoneDisplay}
              </a>
            </p>
            <p className="flex gap-3">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-brand-secondary/50">
                <Mail className="size-4 text-gold" />
              </span>
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
            className="mt-6 w-full shadow-lift transition-transform hover:-translate-y-1 sm:w-auto"
            onClick={() => openWhatsApp(generalEnquiryMessage)}
          >
            <MessageCircle /> Order on WhatsApp
          </Button>
        </div>
      </div>

      <div className="relative border-t border-gold/30 px-4 py-6 text-center text-xs text-brand-foreground/60 sm:px-6">
        <p>
          © {new Date().getFullYear()} {business.company}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
