import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Flame,
  Leaf,
  Mail,
  MapPin,
  MessageCircle,
  Package,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";

import heroSpices from "@/assets/hero-spices.jpg";
import brandStory from "@/assets/brand-story.jpg";
import kitchenLifestyle from "@/assets/kitchen-lifestyle.jpg";
import spiceExperience from "@/assets/spice-experience.jpg";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { ProductCard } from "@/components/site/ProductCard";
import {
  Reveal,
  SectionHeading,
  TrustCard,
} from "@/components/site/primitives";
import { business, formatPrice, products } from "@/lib/products";
import { generalEnquiryMessage, openWhatsApp } from "@/lib/whatsapp";
import { useCart } from "@/lib/cart";
import { toast } from "sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Sanvita Premium Spices | Authentic Indian Spices, Vijayapura",
      },
      {
        name: "description",
        content:
          "Buy premium Indian spices online from Sanvita Premium Spices, Vijayapura — red chilly powder, turmeric powder, coriander powder, garam masala and peanut chutney. Order easily on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Sanvita Premium Spices | Authentic Indian Spices",
      },
      {
        property: "og:description",
        content:
          "Authentic spices. Richer flavours. Carefully prepared premium Indian spices from Vijayapura, Karnataka — order on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const trust = [
  {
    icon: <Flame className="size-6" />,
    title: "Authentic Flavour",
    description:
      "Spices prepared to taste the way home cooking should — warm, aromatic and honest.",
  },
  {
    icon: <Leaf className="size-6" />,
    title: "Carefully Selected Ingredients",
    description:
      "We choose our raw spices carefully so colour, aroma and taste stay consistent.",
  },
  {
    icon: <Package className="size-6" />,
    title: "Freshly Packed",
    description:
      "Prepared and packed in small batches so freshness reaches your kitchen.",
  },
  {
    icon: <UtensilsCrossed className="size-6" />,
    title: "Made for Everyday Cooking",
    description:
      "Balanced blends that work across dals, sabzis, gravies, biryanis and more.",
  },
];

const process = [
  {
    step: "01",
    title: "Ingredient Selection",
    text: "Raw spices are chosen for colour, aroma and cleanliness before anything else happens.",
  },
  {
    step: "02",
    title: "Preparation",
    text: "Cleaned, roasted where needed and ground to the texture each spice deserves.",
  },
  {
    step: "03",
    title: "Packing",
    text: "Packed promptly in sealed packs to protect aroma, colour and freshness.",
  },
  {
    step: "04",
    title: "Ready for Your Kitchen",
    text: "Delivered to your home so everyday cooking starts with something better.",
  },
];

const testimonials = [
  {
    quote:
      "The turmeric powder has a deep golden colour and real aroma. My dal finally tastes like my grandmother's kitchen.",
    name: "Meera Patil",
    place: "Vijayapura, Karnataka",
  },
  {
    quote:
      "Ordered the garam masala and red chilli powder on WhatsApp. The delivery was quick and the freshness is obvious the moment you open the pack.",
    name: "Ramesh Joshi",
    place: "Solapur, Maharashtra",
  },
  {
    quote:
      "Sanvita's peanut chutney powder is now a staple in our breakfast. Crisp, nutty and perfectly spiced — I've already reordered twice.",
    name: "Anita Deshpande",
    place: "Hubballi, Karnataka",
  },
];

function HomePage() {
  const { addItem, openCart } = useCart();
  const bestsellers = products.filter((product) => product.bestseller);

  const quickAdd = (slug: string) => {
    const product = products.find((entry) => entry.slug === slug);
    if (!product) return;
    const variant = product.variants[0]!;
    addItem({
      slug: product.slug,
      name: product.name,
      variant: variant.label,
      price: variant.price,
      image: product.image,
      quantity: 1,
    });
    toast.success(`${product.name} (${variant.label}) added to cart`, {
      action: { label: "View cart", onClick: openCart },
    });
  };

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img
          src={heroSpices}
          alt="Wooden bowls of red chilli powder, turmeric, coriander powder and garam masala on ivory linen"
          width={1920}
          height={1200}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/88 to-brand/25" />
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <div className="max-w-xl">
            <p className="text-eyebrow text-primary">{business.brand}</p>
            <h1 className="mt-5 text-5xl leading-[1.05] text-brand-foreground sm:text-6xl lg:text-7xl">
              Authentic Spices.
              <span className="block text-primary">Richer Flavours.</span>
            </h1>
            <div className="gold-rule mt-6 w-40" />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-brand-foreground/78 sm:text-lg">
              Bring authentic aroma, colour and flavour to everyday cooking with
              carefully prepared spices from {business.brand}.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/products">Shop Our Spices</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-brand-foreground hover:bg-gold hover:text-charcoal"
              >
                <a href="#featured">Explore Products</a>
              </Button>
            </div>
            <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
              {[
                ["05", "Signature spices"],
                ["100%", "Freshly packed"],
                ["Vijayapura", "Karnataka, India"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-2xl text-primary">
                    {value}
                  </dt>
                  <dd className="mt-1 text-xs text-brand-foreground/65">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section id="featured" className="bg-cream-gradient py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our Collection"
              title="The Sanvita Spice Shelf"
              description="Five everyday essentials, prepared with care and packed fresh — choose your pack size and add them straight to your basket."
            />
          </Reveal>
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 80}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BRAND STORY */}
      <section className="py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <div className="relative">
              <img
                src={brandStory}
                alt="Hands grinding Indian spices with brass bowls on a wooden table"
                width={1408}
                height={1008}
                loading="lazy"
                className="relative w-full rounded-lg border border-gold/50 object-cover shadow-lift"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Our Story"
              title="Spice Up Every Moment with Sanvita Spices."
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                {business.company} is a small-scale premium food and spices
                business based in Vijayapura, Karnataka. We began with a simple
                belief: everyday meals deserve spices that actually smell and
                taste like they should.
              </p>
              <p>
                Under our brand {business.brand}, we prepare a focused range of
                powders and blends. Ingredients are selected carefully, prepared
                in small batches and packed quickly, so the aroma you open at
                home is the aroma we packed.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/about">Read our story</Link>
              </Button>
              <Button
                variant="outline"
                onClick={() => openWhatsApp(generalEnquiryMessage)}
              >
                <MessageCircle /> Talk to us
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="relative overflow-hidden bg-brand py-24 text-brand-foreground">
        {/* Decorative border circles */}
        <div className="absolute top-0 left-0 h-64 w-64 -translate-x-12 -translate-y-12 rounded-full border-l border-t border-gold/20" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-24 translate-y-24 rounded-full border-r border-b border-gold/10" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-20 text-center">
              <span className="text-eyebrow text-spice">The Sanvita Promise</span>
              <h2 className="mt-4 font-display text-4xl leading-tight text-gold sm:text-5xl">
                Why Sanvita
              </h2>
              <div className="gold-rule mx-auto mt-6 w-24" />
              <p className="mx-auto mt-6 max-w-2xl text-xl font-light italic text-brand-foreground/80">
                Quality you can taste in everyday cooking
              </p>
            </div>
          </Reveal>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <TrustCard
                  {...item}
                  variant="dark"
                  className={index % 2 === 1 ? "lg:mt-6" : ""}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CINEMATIC SPICE EXPERIENCE */}
      <section className="relative mt-24 overflow-hidden">
        <img
          src={spiceExperience}
          alt="Close-up of red chilli, turmeric, coriander and masala powders side by side"
          width={1920}
          height={912}
          loading="lazy"
          className="h-[420px] w-full object-cover sm:h-[520px]"
        />
        <div className="absolute inset-0 bg-brand/65" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <p className="text-eyebrow text-gold">The Spice Experience</p>
           <h2 className="mt-4 max-w-2xl text-4xl leading-tight text-brand-foreground sm:text-5xl">
            Colour, aroma and texture — up close
          </h2>
          <ul className="mt-9 flex flex-wrap justify-center gap-3">
            {["Red Chilly", "Turmeric", "Coriander", "Garam Masala", "Peanut"].map(
              (label) => (
                <li
                  key={label}
                  className="rounded-md bg-ivory px-4 py-2 text-xs font-semibold text-brand shadow-soft"
                >
                  {label}
                </li>
              ),
            )}
          </ul>
        </div>
      </section>

      {/* BESTSELLERS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Most Loved"
              title="Bestselling Spices"
              description="Quick-add the essentials, or send a direct WhatsApp enquiry if you need a different pack size."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bestsellers.map((product, index) => (
              <Reveal key={product.slug} delay={index * 70}>
                <div className="hover-lift flex h-full flex-col overflow-hidden rounded-lg border border-gold/40 bg-card shadow-soft">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-xl">{product.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {product.tagline}
                    </p>
                    <p className="mt-3 font-display text-2xl">
                      {formatPrice(product.variants[0]!.price)}
                      <span className="ml-1 text-xs font-sans text-muted-foreground">
                        / {product.variants[0]!.label}
                      </span>
                    </p>
                    <div className="mt-4 flex flex-col gap-2">
                      <Button size="sm" onClick={() => quickAdd(product.slug)}>
                        Quick Add
                      </Button>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FROM OUR KITCHEN TO YOURS */}
      <section className="bg-secondary/60 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="From Our Kitchen to Yours"
              title="The everyday meals that deserve better spices"
              description="A weekday dal, a Sunday biryani, a quick chutney with hot rice — the food that fills Indian homes is simple. Good spices are what make it memorable."
            />
            <ul className="mt-8 space-y-4">
              {[
                "Consistent colour and aroma, batch after batch",
                "Blends balanced for family cooking, not restaurant heat",
                "Pack sizes for both small kitchens and big households",
              ].map((point) => (
                <li key={point} className="flex gap-3 text-sm">
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={kitchenLifestyle}
              alt="Freshly cooked Indian curry in a pan beside a brass spice box"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full rounded-lg border border-gold/50 object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-brand px-6 py-10 shadow-2xl md:px-12 md:py-14">
            {/* Decorative background pattern */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
              <svg
                className="size-full"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <pattern
                  id="processMandala"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z"
                    fill="var(--gold)"
                  />
                </pattern>
                <rect width="100%" height="100%" fill="url(#processMandala)" />
              </svg>
            </div>

            <Reveal>
              <div className="relative z-10 mb-10 text-center md:mb-12">
                <span className="text-eyebrow mb-4 block text-gold">
                  Our Process
                </span>
                <h2 className="font-display text-4xl italic text-brand-foreground md:text-5xl">
                  Four careful steps to your kitchen
                </h2>
                <div className="mx-auto mt-5 h-1 w-24 rounded-full bg-spice" />
              </div>
            </Reveal>

            <div className="relative z-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((item, index) => (
                <Reveal key={item.step} delay={index * 80}>
                  <div className="group relative flex h-full flex-col items-center border border-gold/20 bg-brand-secondary p-6 text-center transition-all duration-500 hover:border-gold">
                    <div className="absolute inset-0 bg-spice/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute -top-5 left-1/2 flex size-11 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-base font-bold text-brand shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {item.step}
                    </div>
                    <h3 className="relative z-10 mt-5 font-display text-xl font-bold text-gold">
                      {item.title}
                    </h3>
                    <p className="relative z-10 mt-3 text-sm leading-relaxed text-brand-foreground/80">
                      {item.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Bottom accent */}
            <div className="relative z-10 mt-10 flex justify-center opacity-20 md:mt-12">
              <div className="flex space-x-4">
                <div className="size-3 rounded-full bg-gold" />
                <div className="size-3 rounded-full bg-spice" />
                <div className="size-3 rounded-full bg-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <CTASection />

      {/* TESTIMONIALS */}
      <section className="bg-[#FDFBF6] py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="mb-20 text-center">
              <div className="inline-block border-b border-gold/40 pb-2">
                <span className="text-eyebrow text-gold">Kind Words</span>
              </div>
              <h2 className="mt-4 font-display text-4xl font-medium italic text-foreground sm:text-5xl">
                What customers will say
              </h2>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <Reveal key={index} delay={index * 90}>
                <blockquote className="group relative flex h-full flex-col items-center rounded-lg border border-gold/20 bg-card p-8 pt-10 text-center shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-lift">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FDFBF6] px-4 text-gold">
                    <Quote className="size-6 fill-current" />
                  </div>
                  <p className="mt-2 font-display text-xl italic leading-relaxed text-foreground">
                    {item.quote}
                  </p>
                  <footer className="mt-auto pt-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
                      {item.name}
                    </p>
                    <p className="mt-1 text-xs italic text-muted-foreground">
                      {item.place}
                    </p>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
          {/* Heritage divider */}
          <div className="mt-16 flex items-center justify-center gap-4 md:mt-20">
            <div className="h-px w-20 bg-gold/20" />
            <div className="size-2 rounded-full border border-gold/60" />
            <div className="h-px w-20 bg-gold/20" />
          </div>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section className="bg-secondary py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Visit or Reach Us"
              title="We are happy to help with your order"
            />
            <address className="mt-7 space-y-3 text-base not-italic leading-relaxed text-muted-foreground">
              <p className="font-semibold text-foreground">
                {business.company}
              </p>
              <p className="flex gap-3">
                <MapPin className="mt-1 size-4 shrink-0 text-gold" />
                <span>
                  {business.address.line1},<br />
                  {business.address.line2},<br />
                  {business.address.city}
                </span>
              </p>
              <p className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" />
                {business.phoneDisplay}
              </p>
              <p className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="break-all">{business.email}</span>
              </p>
            </address>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild>
                <a href={`tel:${business.phoneDial}`}>
                  <Phone /> Call Us
                </a>
              </Button>
              <Button
                variant="whatsapp"
                onClick={() => openWhatsApp(generalEnquiryMessage)}
              >
                <MessageCircle /> WhatsApp Us
              </Button>
              <Button asChild variant="outline">
                <a href={`mailto:${business.email}`}>
                  <Mail /> Email Us
                </a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="grid h-full gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <ShieldCheck className="size-5" />,
                  title: "Quality-Focused",
                  text: "Careful selection and preparation at every step.",
                },
                {
                  icon: <MessageCircle className="size-5" />,
                  title: "Secure WhatsApp Ordering",
                  text: "No online payment needed — confirm directly with us.",
                },
                {
                  icon: <Package className="size-5" />,
                  title: "Carefully Packed",
                  text: "Sealed packs that protect aroma in transit.",
                },
                {
                  icon: <Phone className="size-5" />,
                  title: "Customer Support",
                  text: "Call or message us for anything about your order.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-gold/40 bg-card p-6 shadow-soft"
                >
                  <span className="grid size-11 place-items-center rounded-md bg-gold-gradient text-charcoal">
                    {item.icon}
                  </span>
                  <h3 className="mt-4 text-lg">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
