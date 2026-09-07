import { Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-eyebrow text-brand">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-4xl leading-tight sm:text-5xl">{title}</h2>
      <div
        className={cn(
          "gold-rule mt-5 w-28",
          align === "center" ? "mx-auto" : "",
        )}
      />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 120px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function QuantitySelector({
  value,
  onChange,
  size = "default",
  label = "Quantity",
}: {
  value: number;
  onChange: (next: number) => void;
  size?: "default" | "sm";
  label?: string;
}) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md border border-gold/60 bg-card",
        size === "sm" ? "gap-1 p-0.5" : "gap-2 p-1",
      )}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        aria-label="Decrease quantity"
        onClick={() => onChange(Math.max(1, value - 1))}
        className={cn(
           "grid place-items-center rounded-sm text-foreground transition-colors hover:bg-secondary",
          size === "sm" ? "size-7" : "size-9",
        )}
      >
        <Minus className={size === "sm" ? "size-3.5" : "size-4"} />
      </button>
      <span
        className={cn(
          "min-w-6 text-center font-semibold tabular-nums",
          size === "sm" ? "text-sm" : "text-base",
        )}
      >
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase quantity"
        onClick={() => onChange(value + 1)}
        className={cn(
           "grid place-items-center rounded-sm text-foreground transition-colors hover:bg-secondary",
          size === "sm" ? "size-7" : "size-9",
        )}
      >
        <Plus className={size === "sm" ? "size-3.5" : "size-4"} />
      </button>
    </div>
  );
}

export function VariantSelector({
  variants,
  value,
  onChange,
}: {
  variants: { label: string; price: number }[];
  value: string;
  onChange: (label: string) => void;
}) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Select pack size">
      {variants.map((variant) => {
        const active = variant.label === value;
        return (
          <button
            key={variant.label}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(variant.label)}
            className={cn(
              "rounded-md border px-4 py-1.5 text-sm font-semibold transition-all duration-300",
              active
                ? "border-primary bg-primary text-primary-foreground shadow-soft"
                : "border-border bg-card text-muted-foreground hover:border-gold hover:text-foreground",
            )}
          >
            {variant.label}
          </button>
        );
      })}
    </div>
  );
}

export function TrustCard({
  icon,
  title,
  description,
  className,
  variant = "light",
}: {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
  variant?: "light" | "dark";
}) {
  if (variant === "dark") {
    return (
      <div
        className={cn(
          "group relative h-full rounded-t-[100px] rounded-b-xl border border-gold/20 bg-brand-secondary p-8 pt-12 text-center transition-all duration-500 hover:-translate-y-2 hover:border-gold/60",
          className,
        )}
      >
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 grid size-16 place-items-center rounded-full bg-gold text-charcoal shadow-gold transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="mt-4 font-display text-xl font-bold text-gold">
          {title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-brand-foreground/70">
          {description}
        </p>
        <div className="absolute bottom-4 left-1/2 h-1 w-12 -translate-x-1/2 rounded-full bg-spice/30" />
      </div>
    );
  }

  return (
    <div
      className={cn(
        "hover-lift group h-full rounded-lg border border-gold/40 bg-card p-7 shadow-soft",
        className,
      )}
    >
      <div className="grid size-12 place-items-center rounded-md bg-gold-gradient text-charcoal">
        {icon}
      </div>
      <h3 className="mt-5 text-2xl">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
