import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { Reveal, SectionHeading } from "@/components/site/primitives";
import { blogPosts, formatBlogDate } from "@/lib/blog";
import { business } from "@/lib/products";

const title = "Spice Journal | Sanvita";
const description =
  "Practical guides on Indian spices from Sanvita Premium Spices, Vijayapura — how to check purity, store powders, use turmeric and garam masala, and cook everyday dishes.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sanvita-spices.lovable.app/blog" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://sanvita-spices.lovable.app/blog" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Sanvita Spice Journal",
          url: "https://sanvita-spices.lovable.app/blog",
          publisher: { "@type": "Organization", name: business.company },
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            datePublished: post.publishedAt,
            url: `https://sanvita-spices.lovable.app/blog/${post.slug}`,
          })),
        }),
      },
    ],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <section className="bg-brand py-16 text-brand-foreground sm:py-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-eyebrow text-primary">Spice Journal</p>
          <h1 className="mt-4 font-display text-5xl leading-tight sm:text-6xl">
            Guides for cooking with real spices
          </h1>
          <div className="gold-rule mx-auto mt-6 w-28" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-brand-foreground/75">
            Straightforward advice from our kitchen in Vijayapura — how to judge
            quality, store powders properly, and get more flavour out of the
            spices you already own.
          </p>
        </div>
      </section>

      {featured ? (
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Reveal>
              <Link
                to="/blog/$slug"
                params={{ slug: featured.slug }}
                className="hover-lift grid overflow-hidden rounded-lg border border-gold/40 bg-card shadow-soft lg:grid-cols-2"
              >
                <img
                  src={featured.image}
                  alt={featured.imageAlt}
                  width={1024}
                  height={1024}
                  className="h-64 w-full object-cover sm:h-80 lg:h-full lg:max-h-[420px]"
                />
                <div className="p-8 sm:p-10">
                  <p className="text-eyebrow text-spice">
                    {featured.category}
                  </p>
                  <h2 className="mt-4 text-3xl leading-tight sm:text-4xl">
                    {featured.title}
                  </h2>
                  <div className="gold-rule mt-5 w-24" />
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                    {featured.excerpt}
                  </p>
                  <PostMeta post={featured} />
                </div>
              </Link>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="bg-secondary/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="All Articles"
              title="Read the journal"
              description="Short, practical reads on Indian spices and everyday cooking."
            />
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, index) => (
              <Reveal key={post.slug} delay={index * 80}>
                <Link
                  to="/blog/$slug"
                  params={{ slug: post.slug }}
                  className="hover-lift flex h-full flex-col overflow-hidden rounded-lg border border-gold/40 bg-card shadow-soft"
                >
                  <img
                    src={post.image}
                    alt={post.imageAlt}
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-48 w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-eyebrow text-spice">{post.category}</p>
                    <h3 className="mt-3 text-2xl leading-snug">{post.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <PostMeta post={post} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-16">
        <CTASection />
      </div>
      <div className="h-10" />
    </>
  );
}

function PostMeta({
  post,
}: {
  post: { publishedAt: string; readMinutes: number };
}) {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
      <span className="inline-flex items-center gap-1.5">
        <CalendarDays className="size-3.5 text-gold" />
        {formatBlogDate(post.publishedAt)}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Clock className="size-3.5 text-gold" />
        {post.readMinutes} min read
      </span>
    </div>
  );
}
