import { Link } from "@tanstack/react-router";
import { MessageCircle, ShoppingBasket, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { QuantitySelector } from "@/components/site/primitives";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { cartOrderMessage, openWhatsApp } from "@/lib/whatsapp";

export function CartDrawer() {
  const {
    items,
    subtotal,
    isOpen,
    closeCart,
    setQuantity,
    removeItem,
    clear,
    count,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => (open ? null : closeCart())}>
      <SheetContent className="flex w-full flex-col gap-0 bg-background p-0 sm:max-w-md">
        <SheetHeader className="border-b border-gold/40 px-6 py-5 text-left">
          <SheetTitle className="font-display text-2xl">
            Your Spice Basket{count ? ` (${count})` : ""}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="grid size-16 place-items-center rounded-md bg-gold-gradient text-charcoal">
              <ShoppingBasket className="size-7" />
            </div>
            <p className="font-display text-2xl">Your spice basket is empty.</p>
            <p className="text-sm text-muted-foreground">
              Add a few everyday essentials and place your order on WhatsApp.
            </p>
            <Button asChild onClick={closeCart}>
              <Link to="/products">Explore Our Spices</Link>
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 divide-y divide-border overflow-y-auto px-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 py-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={96}
                    height={96}
                    loading="lazy"
                    className="size-20 shrink-0 rounded-2xl object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-semibold leading-tight">
                          {item.name}
                        </p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
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
                    <div className="mt-3 flex items-center justify-between">
                      <QuantitySelector
                        size="sm"
                        value={item.quantity}
                        onChange={(next) => setQuantity(item.id, next)}
                      />
                      <p className="font-display text-xl">
                        {formatPrice(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

          <div className="border-t border-gold/40 bg-secondary px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-eyebrow text-muted-foreground">
                  Subtotal
                </span>
                <span className="font-display text-3xl">
                  {formatPrice(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Delivery charges and final amount are confirmed on WhatsApp.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <Button asChild size="lg" onClick={closeCart}>
                  <Link to="/checkout">Proceed to Checkout</Link>
                </Button>
                <Button
                  variant="whatsapp"
                  onClick={() =>
                    openWhatsApp(cartOrderMessage(items, subtotal))
                  }
                >
                  <MessageCircle /> WhatsApp Checkout
                </Button>
                <div className="flex gap-2">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={closeCart}
                  >
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
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
