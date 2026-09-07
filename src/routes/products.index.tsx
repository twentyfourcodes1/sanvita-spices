import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProductCard } from "@/components/site/ProductCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/primitives";
import { categories, products } from "@/lib/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Buy Indian Spices Online | Sanvita Premium Spices" },
      {
        name: "description",
        content:
          "Shop premium spices from Sanvita — red chilly powder, turmeric powder, coriander powder, garam masala and peanut chutney. Choose pack sizes and order on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Discover the Flavours of Sanvita | Premium Indian Spices",
      },
      {
        property: "og:description",
        content:
          "Browse our full range of premium Indian spices with editable pack sizes and easy WhatsApp ordering.",
      },
    ],
  }),
  component: ProductsPage,
});

type Sort = "featured" | "price-asc" | "price-desc" | "name";

function ProductsPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("featured");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase().replace("chilli", "chilly");
    let list = products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;
      const matchesQuery =
        !q ||
        [product.name, product.short, product.tagline, product.category]
          .join(" ")
          .toLowerCase()
          .includes(q);
      return matchesCategory && matchesQuery;
    });

    if (sort === "price-asc")
      list = [...list].sort(
        (a, b) => a.variants[0]!.price - b.variants[0]!.price,
      );
    if (sort === "price-desc")
      list = [...list].sort(
        (a, b) => b.variants[0]!.price - a.variants[0]!.price,
      );
    if (sort === "name")
      list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [query, category, sort]);

  return (
    <>
      <section className="bg-cream-gradient py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-eyebrow text-brand">Our Products</p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl leading-tight sm:text-6xl">
            Discover the Flavours of Sanvita
          </h1>
          <div className="gold-rule mx-auto mt-6 w-32" />
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            Five carefully prepared spices for everyday Indian cooking. Pick
            your pack size, add to cart and place the order on WhatsApp.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="surface-glass flex flex-col gap-4 rounded-lg p-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-sm">
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search spices…"
                aria-label="Search products"
                className="h-11 rounded-md pl-11"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                  className={cn(
                     "rounded-md border px-4 py-2 text-xs font-semibold transition-all",
                    category === item
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-gold hover:text-foreground",
                  )}
                >
                  {item}
                </button>
              ))}
            </div>

            <Select value={sort} onValueChange={(v) => setSort(v as Sort)}>
             <SelectTrigger className="h-11 w-full rounded-md lg:w-52">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-asc">Price: low to high</SelectItem>
                <SelectItem value="price-desc">Price: high to low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            Showing {visible.length} of {products.length} products
          </p>

          {visible.length === 0 ? (
            <div className="mt-16 rounded-lg border border-gold/40 bg-card p-14 text-center shadow-soft">
              <h2 className="text-2xl">No spices match that search</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Try a different word — for example turmeric, chilli or masala.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {visible.map((product, index) => (
                <Reveal key={product.slug} delay={index * 70}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
      <div className="h-10" />
    </>
  );
}
