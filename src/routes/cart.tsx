import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShoppingBasket, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/site/primitives";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { cartOrderMessage, openWhatsApp } from "@/lib/whatsapp";

export const Route = createFileRoute("/cart")({
  head: () => ({
    meta: [
      { title: "Your Cart | Sanvita Premium Spices" },
      {
        name: "description",
        content:
          "Review the spices in your basket, adjust quantities and continue to WhatsApp checkout with Sanvita Premium Spices.",
      },
      { property: "og:title", content: "Your Cart | Sanvita Premium Spices" },
      {
        property: "og:description",
        content:
          "Review your spice order and place it on WhatsApp — no online payment needed.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CartPage,
});

function CartPage() {
  const { items, subtotal, setQuantity, removeItem, clear, hydrated } =
    useCart();

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-eyebrow text-brand">Your Order</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Spice Basket</h1>
      <div className="gold-rule mt-5 w-28" />

      {!hydrated ? (
        <div className="mt-12 space-y-4">
          {[0, 1].map((key) => (
            <div
              key={key}
              className="h-28 animate-pulse rounded-3xl bg-secondary"
            />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="mt-14 rounded-lg border border-gold/40 bg-card p-14 text-center shadow-soft">
          <div className="mx-auto grid size-16 place-items-center rounded-full bg-gold-gradient text-charcoal">
            <ShoppingBasket className="size-7" />
          </div>
          <h2 className="mt-6 text-3xl">Your spice basket is empty.</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Add a few everyday essentials and place your order on WhatsApp.
          </p>
          <Button asChild size="lg" className="mt-7">
            <Link to="/products">Explore Our Spices</Link>
          </Button>
        </div>
      ) : (
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <ul className="divide-y divide-border rounded-lg border border-gold/40 bg-card px-6 shadow-soft">
            {items.map((item) => (
              <li key={item.id} className="flex gap-5 py-6">
                <img
                  src={item.image}
                  alt={item.name}
                  width={128}
                  height={128}
                  loading="lazy"
                  className="size-24 shrink-0 rounded-2xl object-cover sm:size-28"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <Link
                        to="/products/$slug"
                        params={{ slug: item.slug }}
                        className="font-display text-2xl hover:text-primary"
                      >
                        {item.name}
                      </Link>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Pack: {item.variant} · {formatPrice(item.price)} each
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Remove ${item.name}`}
                      className="text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <Trash2 className="size-4" />
                    </button>
                  </div>
                  <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
                    <QuantitySelector
                      value={item.quantity}
                      onChange={(next) => setQuantity(item.id, next)}
                      size="sm"
                    />
                    <p className="font-display text-2xl">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-lg border border-gold/40 bg-secondary p-7 shadow-soft">
            <h2 className="text-2xl">Order Summary</h2>
            <dl className="mt-5 space-y-3 text-sm">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">
                    {item.name} ({item.variant}) × {item.quantity}
                  </dt>
                  <dd className="font-semibold tabular-nums">
                    {formatPrice(item.price * item.quantity)}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex items-baseline justify-between border-t border-gold/40 pt-5">
              <span className="text-eyebrow text-muted-foreground">
                Subtotal
              </span>
              <span className="font-display text-3xl">
                {formatPrice(subtotal)}
              </span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              Delivery charges and the final amount are confirmed with you on
              WhatsApp.
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <Button asChild size="lg">
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button
                variant="whatsapp"
                onClick={() => openWhatsApp(cartOrderMessage(items, subtotal))}
              >
                <MessageCircle /> WhatsApp Checkout
              </Button>
              <div className="flex gap-2">
                <Button asChild variant="outline" size="sm" className="flex-1">
                  <Link to="/products">Continue Shopping</Link>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={clear}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </aside>
        </div>
      )}
    </section>
  );
}
