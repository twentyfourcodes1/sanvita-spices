import { createFileRoute, Link } from "@tanstack/react-router";
import { Flame, Leaf, Package, UtensilsCrossed } from "lucide-react";

import brandStory from "@/assets/brand-story.jpg";
import kitchenLifestyle from "@/assets/kitchen-lifestyle.jpg";
import heroSpices from "@/assets/hero-spices.jpg";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import {
  Reveal,
  SectionHeading,
  TrustCard,
} from "@/components/site/primitives";
import { business, products } from "@/lib/products";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Sanvita International Traders | Premium Indian Spices" },
      {
        name: "description",
        content:
          "Sanvita International Traders is a small-scale premium spices business in Vijayapura, Karnataka, creating authentic Indian spices under the Sanvita Premium Spices brand.",
      },
      {
        property: "og:title",
        content: "About Sanvita International Traders",
      },
      {
        property: "og:description",
        content:
          "Our story, philosophy and approach to preparing authentic Indian spices in Vijayapura, Karnataka.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <img
          src={heroSpices}
          alt="Bowls of Indian spice powders on ivory linen"
          width={1920}
          height={1200}
          className="h-[380px] w-full object-cover sm:h-[460px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/75 to-brand/20" />
        <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-14 text-center">
          <p className="text-eyebrow text-primary">Our Story</p>
          <h1 className="mt-4 max-w-3xl text-5xl leading-tight text-brand-foreground sm:text-6xl">
            Built around flavour, made for everyday kitchens
          </h1>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="The Company"
              title="About Sanvita International Traders"
            />
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                {business.company} is a small-scale premium food and spices
                business based in Vijayapura, Karnataka. We work with a
                deliberately small range so that every product gets real
                attention — from the raw spice we choose to the pack that
                reaches your kitchen.
              </p>
              <p>
                Being small is our advantage. We prepare in modest batches,
                check our own work, and speak to customers directly over a phone
                call or a WhatsApp message.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={brandStory}
              alt="Indian spices being ground by hand with brass bowls nearby"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full rounded-lg border border-gold/50 object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="The Brand"
              title={`Introducing ${business.brand}`}
              description="Our brand exists for one reason: to make the spices in your kitchen worth reaching for. Colour that shows, aroma that carries, taste that stays honest."
            />
          </Reveal>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {[
              {
                title: "Our Philosophy",
                text: "Spices should taste like themselves. We do not chase shortcuts or heavy blending — we keep preparation simple and let ingredients lead.",
              },
              {
                title: "Our Approach to Quality",
                text: "Careful selection, clean preparation, correct grind and prompt packing. Each step protects colour, aroma and freshness.",
              },
              {
                title: "Traditional Flavours, Modern Kitchens",
                text: "Familiar tastes in convenient packs that suit busy households, small families and everyday cooking.",
              },
            ].map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="h-full rounded-lg border border-gold/40 bg-card p-8 shadow-soft">
                  <h3 className="text-2xl">{item.title}</h3>
                  <div className="gold-rule mt-4 w-20" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <img
              src={kitchenLifestyle}
              alt="Indian curry cooking in a pan beside a brass spice box"
              width={1408}
              height={1008}
              loading="lazy"
              className="w-full rounded-lg border border-gold/50 object-cover shadow-lift"
            />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Why Choose Sanvita"
              title="Small batches, steady standards"
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {[
                {
                  icon: <Flame className="size-5" />,
                  title: "Authentic Flavour",
                  description: "Prepared to taste the way home cooking should.",
                },
                {
                  icon: <Leaf className="size-5" />,
                  title: "Selected Ingredients",
                  description: "Chosen for colour, aroma and cleanliness.",
                },
                {
                  icon: <Package className="size-5" />,
                  title: "Freshly Packed",
                  description: "Sealed promptly to hold aroma and colour.",
                },
                {
                  icon: <UtensilsCrossed className="size-5" />,
                  title: "Everyday Cooking",
                  description: "Balanced for dals, sabzis, gravies and rice.",
                },
              ].map((item) => (
                <TrustCard key={item.title} {...item} />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading eyebrow="Our Products" title="What we make" />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {products.map((product, index) => (
              <Reveal key={product.slug} delay={index * 70}>
                <Link
                  to="/products/$slug"
                  params={{ slug: product.slug }}
                  className="hover-lift block overflow-hidden rounded-lg border border-gold/40 bg-card shadow-soft"
                >
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="aspect-square w-full object-cover"
                  />
                  <span className="block p-4 text-center font-display text-lg">
                    {product.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/products">Shop All Spices</Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="mt-20">
        <CTASection />
      </div>
      <div className="h-10" />
    </>
  );
}
