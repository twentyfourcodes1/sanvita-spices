import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ChevronRight,
  Flame,
  MessageCircle,
  Package,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/site/CTASection";
import { ProductCard } from "@/components/site/ProductCard";
import {
  QuantitySelector,
  Reveal,
  SectionHeading,
  VariantSelector,
} from "@/components/site/primitives";
import { useCart } from "@/lib/cart";
import {
  business,
  formatPrice,
  getProduct,
  products,
  relatedProducts,
} from "@/lib/products";
import { openWhatsApp, productEnquiryMessage } from "@/lib/whatsapp";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Product not found | Sanvita Premium Spices" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { product } = loaderData;
    const title = `${product.name} | ${business.brand}`;
    return {
      meta: [
        { title },
        { name: "description", content: product.short },
        { property: "og:title", content: title },
        { property: "og:description", content: product.short },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.short,
            brand: { "@type": "Brand", name: business.brand },
            offers: product.variants.map((variant) => ({
              "@type": "Offer",
              name: variant.label,
              sku: variant.sku,
              price: variant.price,
              priceCurrency: "INR",
              availability: "https://schema.org/InStock",
            })),
          }),
        },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { product } = Route.useLoaderData();
  const { addItem, openCart } = useCart();
  const [variantLabel, setVariantLabel] = useState(product.variants[0]!.label);
  const [quantity, setQuantity] = useState(1);

  const variant =
    product.variants.find((v) => v.label === variantLabel) ??
    product.variants[0]!;

  const handleAdd = () => {
    addItem({
      slug: product.slug,
      name: product.name,
      variant: variant.label,
      price: variant.price,
      image: product.image,
      quantity,
    });
    toast.success(`${product.name} (${variant.label}) added to cart`, {
      description: `Quantity ${quantity} · ${formatPrice(variant.price * quantity)}`,
      action: { label: "View cart", onClick: openCart },
    });
  };

  const related = relatedProducts(product.slug);

  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8"
      >
        <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
          <li>
            <Link to="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <ChevronRight className="size-3" />
          <li>
            <Link to="/products" className="hover:text-primary">
              Products
            </Link>
          </li>
          <ChevronRight className="size-3" />
          <li aria-current="page" className="font-semibold text-foreground">
            {product.name}
          </li>
        </ol>
      </nav>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <div className="group overflow-hidden rounded-lg border border-gold/50 shadow-lift">
              <img
                src={gallery[activeImage]!.src}
                alt={gallery[activeImage]!.alt}
                width={1024}
                height={1024}
                className="aspect-square w-full bg-card object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-4 flex gap-3">
              {gallery.map((shot, index) => (
                <button
                  key={shot.src}
                  type="button"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View ${shot.alt}`}
                  aria-current={index === activeImage}
                  className={`overflow-hidden rounded-md border transition ${
                    index === activeImage
                      ? "border-gold ring-2 ring-gold/40"
                      : "border-gold/40 hover:border-gold"
                  }`}
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    width={160}
                    height={160}
                    className="size-20 bg-card object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { icon: <Flame className="size-4" />, label: "Authentic taste" },
                { icon: <Package className="size-4" />, label: "Freshly packed" },
                {
                  icon: <Sparkles className="size-4" />,
                  label: "Aromatic grind",
                },
              ].map((item) => (
                <div
                  key={item.label}
                   className="flex flex-col items-center gap-2 rounded-md border border-gold/40 bg-card p-3 text-center text-[11px] font-semibold text-muted-foreground"
                >
                  <span className="text-gold">{item.icon}</span>
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-eyebrow text-brand">{product.category}</p>
            <h1 className="mt-3 text-4xl leading-tight sm:text-5xl">
              {product.name}
            </h1>
            <p className="mt-2 font-display text-xl text-spice">
              {product.tagline}
            </p>
            <div className="gold-rule mt-5 w-32" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {product.short}
            </p>

            <p className="mt-7 font-display text-4xl">
              {formatPrice(variant.price)}
              <span className="ml-2 font-sans text-sm text-muted-foreground">
                / {variant.label} · SKU {variant.sku}
              </span>
            </p>

            <div className="mt-7">
              <p className="text-eyebrow text-muted-foreground">Select pack</p>
              <div className="mt-3">
                <VariantSelector
                  variants={product.variants}
                  value={variantLabel}
                  onChange={setVariantLabel}
                />
              </div>
            </div>

            <div className="mt-6">
              <p className="text-eyebrow text-muted-foreground">Quantity</p>
              <div className="mt-3">
                <QuantitySelector value={quantity} onChange={setQuantity} />
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="flex-1" onClick={handleAdd}>
                <ShoppingBag /> Add to Cart
              </Button>
              <Button
                size="lg"
                variant="whatsapp"
                className="flex-1"
                onClick={() =>
                  openWhatsApp(
                    productEnquiryMessage(
                      product.name,
                      variant.label,
                      quantity,
                    ),
                  )
                }
              >
                <MessageCircle /> Order on WhatsApp
              </Button>
            </div>

            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {product.highlights.map((highlight) => (
                <li
                  key={highlight}
                   className="flex gap-2 rounded-md bg-secondary px-4 py-3 text-sm"
                >
                  <Sparkles className="mt-0.5 size-4 shrink-0 text-gold" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-lg border border-gold/40 bg-card p-7 shadow-soft lg:col-span-2">
            <h2 className="text-2xl">About this spice</h2>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              {product.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-8 text-xl">Usage &amp; cooking ideas</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {product.usage.map((idea) => (
                <li key={idea} className="flex gap-2">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {idea}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {product.ingredients ? (
               <div className="rounded-lg border border-gold/40 bg-card p-7 shadow-soft">
                <h3 className="text-xl">Ingredients</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {product.ingredients.map((item) => (
                    <li
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
             <div className="rounded-lg border border-gold/40 bg-card p-7 shadow-soft">
              <h3 className="text-xl">Storage</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.storage}
              </p>
            </div>
             <div className="rounded-lg bg-brand p-7 text-brand-foreground shadow-lift">
              <h3 className="text-xl">Need help choosing?</h3>
              <p className="mt-2 text-sm opacity-90">
                Message us on WhatsApp and we will help with pack sizes and bulk
                orders.
              </p>
              <Button
                variant="gold"
                className="mt-5 w-full"
                onClick={() =>
                  openWhatsApp(
                    `Hello ${business.brand}, I need help choosing the right pack of ${product.name}.`,
                  )
                }
              >
                <MessageCircle /> Chat with us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="You may also like"
              title="Related spices"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <ProductCard product={item} />
              </Reveal>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Browse all {products.length} spices on the{" "}
            <Link to="/products" className="font-semibold text-primary">
              products page
            </Link>
            .
          </p>
        </div>
      </section>

      <div className="mt-20">
        <CTASection />
      </div>

      {/* Mobile sticky action bar */}
      <div className="sticky bottom-0 z-30 mt-16 border-t border-gold/40 bg-background/95 px-4 py-3 backdrop-blur lg:hidden">
        <div className="flex items-center gap-2">
          <Button className="flex-1" onClick={handleAdd}>
            <ShoppingBag /> Add to Cart
          </Button>
          <Button
            variant="whatsapp"
            className="flex-1"
            onClick={() =>
              openWhatsApp(
                productEnquiryMessage(product.name, variant.label, quantity),
              )
            }
          >
            <MessageCircle /> WhatsApp
          </Button>
        </div>
      </div>
    </>
  );
}
