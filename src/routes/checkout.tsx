import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, ShieldCheck, ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCart } from "@/lib/cart";
import { business, formatPrice } from "@/lib/products";
import {
  cartOrderMessage,
  openWhatsApp,
  type CheckoutDetails,
} from "@/lib/whatsapp";

export const Route = createFileRoute("/checkout")({
  head: () => ({
    meta: [
      { title: "Checkout | Sanvita Premium Spices" },
      {
        name: "description",
        content:
          "Enter your delivery details and place your spice order on WhatsApp with Sanvita Premium Spices, Vijayapura. No online payment required.",
      },
      { property: "og:title", content: "Checkout | Sanvita Premium Spices" },
      {
        property: "og:description",
        content:
          "Share your delivery details and send your order to us directly on WhatsApp.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: CheckoutPage,
});

type Errors = Partial<Record<keyof CheckoutDetails, string>>;

const emptyForm: CheckoutDetails = {
  fullName: "",
  mobile: "",
  email: "",
  address: "",
  landmark: "",
  city: "",
  state: "Karnataka",
  pincode: "",
  notes: "",
};

function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [form, setForm] = useState<CheckoutDetails>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof CheckoutDetails, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const next: Errors = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!/^[0-9+\-\s]{10,15}$/.test(form.mobile.trim()))
      next.mobile = "Enter a valid mobile number.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email.trim()))
      next.email = "Enter a valid email address, or leave it empty.";
    if (form.address.trim().length < 10)
      next.address = "Please enter your full delivery address.";
    if (!form.city.trim()) next.city = "Please enter your city.";
    if (!form.state.trim()) next.state = "Please enter your state.";
    if (!/^[1-9][0-9]{5}$/.test(form.pincode.trim()))
      next.pincode = "Enter a valid 6-digit pincode.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const placeOrder = () => {
    if (items.length === 0) {
      toast.error("Your cart is empty.");
      return;
    }
    if (!validate()) {
      toast.error("Please complete the required fields.");
      return;
    }
    openWhatsApp(cartOrderMessage(items, subtotal, form));
    setSent(true);
    toast.success("Order details opened in WhatsApp", {
      description: "Send the message to us to confirm your order.",
    });
  };

  if (items.length === 0) {
    return (
      <section className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <div className="mx-auto grid size-16 place-items-center rounded-full bg-gold-gradient text-charcoal">
          <ShoppingBasket className="size-7" />
        </div>
        <h1 className="mt-6 text-4xl">Your spice basket is empty.</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Add a few spices before heading to checkout.
        </p>
        <Button asChild size="lg" className="mt-7">
          <Link to="/products">Explore Our Spices</Link>
        </Button>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-eyebrow text-spice">Checkout</p>
      <h1 className="mt-3 text-4xl sm:text-5xl">Delivery Details</h1>
      <div className="gold-rule mt-5 w-28" />
      <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
        There is no online payment. Fill in your details and we will receive
        your full order on WhatsApp, then confirm availability, delivery charges
        and the final amount.
      </p>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <form
          className="rounded-3xl border border-gold/40 bg-card p-7 shadow-soft"
          onSubmit={(event) => {
            event.preventDefault();
            placeOrder();
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Full Name *"
              value={form.fullName}
              error={errors.fullName}
              onChange={(v) => update("fullName", v)}
            />
            <Field
              label="Mobile Number *"
              value={form.mobile}
              error={errors.mobile}
              inputMode="tel"
              onChange={(v) => update("mobile", v)}
            />
            <Field
              label="Email"
              value={form.email ?? ""}
              error={errors.email}
              type="email"
              onChange={(v) => update("email", v)}
              className="sm:col-span-2"
            />
            <div className="sm:col-span-2">
              <Label htmlFor="address" className="text-sm font-semibold">
                Delivery Address *
              </Label>
              <Textarea
                id="address"
                rows={3}
                value={form.address}
                onChange={(event) => update("address", event.target.value)}
                className="mt-2 rounded-2xl"
              />
              {errors.address ? (
                <p className="mt-1 text-xs text-destructive">
                  {errors.address}
                </p>
              ) : null}
            </div>
            <Field
              label="Landmark"
              value={form.landmark ?? ""}
              onChange={(v) => update("landmark", v)}
            />
            <Field
              label="City *"
              value={form.city}
              error={errors.city}
              onChange={(v) => update("city", v)}
            />
            <Field
              label="State *"
              value={form.state}
              error={errors.state}
              onChange={(v) => update("state", v)}
            />
            <Field
              label="Pincode *"
              value={form.pincode}
              error={errors.pincode}
              inputMode="numeric"
              onChange={(v) => update("pincode", v)}
            />
            <div className="sm:col-span-2">
              <Label htmlFor="notes" className="text-sm font-semibold">
                Order Notes
              </Label>
              <Textarea
                id="notes"
                rows={3}
                value={form.notes ?? ""}
                onChange={(event) => update("notes", event.target.value)}
                placeholder="Anything we should know about your order?"
                className="mt-2 rounded-2xl"
              />
            </div>
          </div>

          <Button type="submit" size="lg" variant="whatsapp" className="mt-8 w-full">
            <MessageCircle /> Place Order on WhatsApp
          </Button>

          {sent ? (
            <div className="mt-5 rounded-2xl border border-gold/50 bg-secondary/70 p-5 text-sm">
              <p className="font-semibold">Order sent to WhatsApp</p>
              <p className="mt-1 text-muted-foreground">
                Your cart is still saved. Clear it once we have confirmed your
                order.
              </p>
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="mt-4"
                onClick={() => {
                  clear();
                  setSent(false);
                  toast.success("Cart cleared");
                }}
              >
                Order Sent / Clear Cart
              </Button>
            </div>
          ) : null}
        </form>

        <aside className="h-fit rounded-3xl border border-gold/40 bg-secondary/70 p-7 shadow-soft">
          <h2 className="text-2xl">Order Summary</h2>
          <ul className="mt-5 space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex gap-3">
                <img
                  src={item.image}
                  alt={item.name}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="size-14 rounded-xl object-cover"
                />
                <div className="min-w-0 flex-1 text-sm">
                  <p className="font-semibold leading-tight">{item.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {item.variant} × {item.quantity}
                  </p>
                </div>
                <p className="font-semibold tabular-nums">
                  {formatPrice(item.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex items-baseline justify-between border-t border-gold/40 pt-5">
            <span className="text-eyebrow text-muted-foreground">Subtotal</span>
            <span className="font-display text-3xl">
              {formatPrice(subtotal)}
            </span>
          </div>
          <p className="mt-4 flex gap-2 text-xs text-muted-foreground">
            <ShieldCheck className="size-4 shrink-0 text-gold" />
            Your details are sent only to {business.company} on WhatsApp.
          </p>
        </aside>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  error,
  type = "text",
  inputMode,
  className,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  type?: string;
  inputMode?: "tel" | "numeric" | "text" | undefined;
  className?: string | undefined;
}) {
  const id = label.replace(/\W+/g, "-").toLowerCase();
  return (
    <div className={className}>
      <Label htmlFor={id} className="text-sm font-semibold">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        inputMode={inputMode}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 h-11 rounded-full"
      />
      {error ? <p className="mt-1 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}
