import { Link } from "@tanstack/react-router";
import { MessageCircle, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { QuantitySelector, VariantSelector } from "@/components/site/primitives";
import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";
import { openWhatsApp, productEnquiryMessage } from "@/lib/whatsapp";

export function ProductCard({ product }: { product: Product }) {
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

  return (
    <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-gold/40 bg-card shadow-soft">
      <Link
        to="/products/$slug"
        params={{ slug: product.slug }}
        className="relative block overflow-hidden"
        aria-label={`View ${product.name}`}
      >
        <img
          src={product.image}
          alt={product.imageAlt}
          width={1024}
          height={1024}
          loading="lazy"
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-107"
        />
        {product.bestseller ? (
          <span className="text-eyebrow absolute left-4 top-4 rounded-full bg-primary px-3 py-1.5 text-primary-foreground">
            Bestseller
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-eyebrow text-spice">{product.category}</p>
        <h3 className="mt-2 text-2xl leading-snug">
          <Link to="/products/$slug" params={{ slug: product.slug }}>
            {product.name}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {product.short}
        </p>

        <div className="mt-5">
          <VariantSelector
            variants={product.variants}
            value={variantLabel}
            onChange={setVariantLabel}
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="font-display text-3xl leading-none">
            {formatPrice(variant.price)}
          </p>
          <QuantitySelector value={quantity} onChange={setQuantity} size="sm" />
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <Button onClick={handleAdd} className="w-full">
            <ShoppingBag /> Add to Cart
          </Button>
          <div className="flex gap-2">
            <Button asChild variant="outline" size="sm" className="flex-1">
              <Link to="/products/$slug" params={{ slug: product.slug }}>
                View Product
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex-1 text-primary"
              onClick={() =>
                openWhatsApp(
                  productEnquiryMessage(product.name, variant.label, quantity),
                )
              }
            >
              <MessageCircle /> Enquire
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
