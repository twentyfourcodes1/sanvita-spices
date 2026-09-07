import { Link, useRouterState } from "@tanstack/react-router";
import {
  Menu,
  MessageCircle,
  Search,
  ShoppingBag,
  X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import logo from "@/assets/sanvita-logo.jpeg.asset.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useCart } from "@/lib/cart";
import { business, formatPrice, products } from "@/lib/products";
import { generalEnquiryMessage, openWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Contact", to: "/contact" },
] as const;

export function Header() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((product) =>
      [product.name, product.category, product.short, product.tagline]
        .join(" ")
        .toLowerCase()
        .includes(q.replace("chilli", "chilly")),
    );
  }, [query]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-gold/30 bg-brand text-brand-foreground transition-all duration-500",
        scrolled
          ? "shadow-lift"
          : "",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label={business.brand}>
          <img
            src={logo.url}
            alt={`${business.brand} logo`}
            width={176}
            height={112}
            className="h-11 w-auto rounded-md sm:h-12"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-md px-4 py-2 text-sm font-semibold text-brand-foreground/70 transition-colors hover:bg-primary/10 hover:text-primary"
              activeProps={{ className: "bg-primary/12 text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Search products"
            onClick={() => setSearchOpen(true)}
            className="grid size-10 place-items-center rounded-md text-brand-foreground transition-colors hover:bg-primary/15 hover:text-primary"
          >
            <Search className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Chat with us on WhatsApp"
            onClick={() => openWhatsApp(generalEnquiryMessage)}
            className="hidden size-10 place-items-center rounded-md text-primary transition-colors hover:bg-primary/15 sm:grid"
          >
            <MessageCircle className="size-5" />
          </button>
          <button
            type="button"
            aria-label={`Open cart, ${count} items`}
            onClick={openCart}
            className="relative grid size-10 place-items-center rounded-md text-brand-foreground transition-colors hover:bg-primary/15 hover:text-primary"
          >
            <ShoppingBag className="size-5" />
            {count > 0 ? (
              <span className="absolute -right-0.5 -top-0.5 grid min-w-5 place-items-center rounded-full bg-spice px-1 text-[11px] font-bold text-spice-foreground">
                {count}
              </span>
            ) : null}
          </button>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="grid size-10 place-items-center rounded-md text-brand-foreground transition-colors hover:bg-primary/15 hover:text-primary md:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-gold/30 bg-brand px-4 pb-5 pt-3 text-brand-foreground md:hidden">
          <nav className="flex flex-col" aria-label="Mobile">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-gold/20 py-3 font-display text-2xl text-brand-foreground"
                activeProps={{ className: "text-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button
            variant="whatsapp"
            className="mt-4 w-full"
            onClick={() => openWhatsApp(generalEnquiryMessage)}
          >
            <MessageCircle /> Order on WhatsApp
          </Button>
        </div>
      ) : null}

      <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogContent className="max-w-lg rounded-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">
              Search our spices
            </DialogTitle>
          </DialogHeader>
          <Input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try turmeric, chilli powder, garam masala…"
            className="h-12 rounded-md"
          />
          <ul className="max-h-72 space-y-1 overflow-y-auto">
            {results.length === 0 ? (
              <li className="px-2 py-6 text-center text-sm text-muted-foreground">
                No spices match that search yet.
              </li>
            ) : (
              results.map((product) => (
                <li key={product.slug}>
                  <Link
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="flex items-center gap-3 rounded-md p-2 transition-colors hover:bg-secondary"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      width={56}
                      height={56}
                      loading="lazy"
                      className="size-12 rounded-md object-cover"
                    />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate font-semibold">
                        {product.name}
                      </span>
                      <span className="block text-xs text-muted-foreground">
                        {product.category}
                      </span>
                    </span>
                    <span className="font-display text-lg">
                      {formatPrice(product.variants[0]!.price)}
                    </span>
                  </Link>
                </li>
              ))
            )}
          </ul>
        </DialogContent>
      </Dialog>
    </header>
  );
}
