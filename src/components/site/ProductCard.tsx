import { Link } from "@tanstack/react-router";
import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { QuantitySelector, VariantSelector } from "@/components/site/primitives";
import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/products";

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
    <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-lg border border-gold/40 bg-card shadow-soft">
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
          className="aspect-square w-full object-cover"
        />
        <img
          src={product.packImage}
          alt={product.packImageAlt}
          width={1024}
          height={1024}
          loading="lazy"
          className="pointer-events-none absolute inset-0 aspect-square w-full object-cover transition-transform duration-700 ease-out translate-y-full group-hover:translate-y-0"
        />
        {product.bestseller ? (
          <span className="text-eyebrow absolute left-4 top-4 rounded-sm bg-primary px-3 py-1.5 text-primary-foreground">
            Bestseller
          </span>
        ) : null}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-eyebrow text-brand">{product.category}</p>
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
        </div>
      </div>
    </article>
  );
}
