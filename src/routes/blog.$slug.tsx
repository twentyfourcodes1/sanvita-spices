import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CalendarDays, Clock } from "lucide-react";

import { CTASection } from "@/components/site/CTASection";
import { Reveal } from "@/components/site/primitives";
import { Button } from "@/components/ui/button";
import {
  formatBlogDate,
  getBlogPost,
  relatedBlogPosts,
} from "@/lib/blog";
import { business, getProduct } from "@/lib/products";

const site = "https://sanvita-spices.lovable.app";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Article not found | Sanvita Premium Spices" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const { post } = loaderData;
    const url = `${site}/blog/${params.slug}`;
    return {
      meta: [
        { title: post.metaTitle },
        { name: "description", content: post.metaDescription },
        { property: "og:title", content: post.metaTitle },
        { property: "og:description", content: post.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.metaDescription,
            datePublished: post.publishedAt,
            dateModified: post.publishedAt,
            mainEntityOfPage: { "@type": "WebPage", "@id": url },
            author: { "@type": "Organization", name: business.company },
            publisher: { "@type": "Organization", name: business.company },
          }),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${site}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Spice Journal",
                item: `${site}/blog`,
              },
              { "@type": "ListItem", position: 3, name: post.title, item: url },
            ],
          }),
        },
      ],
    };
  },
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = relatedBlogPosts(post.slug);
  const linkedProducts = post.relatedProductSlugs
    .map((slug) => getProduct(slug))
    .filter((product) => product !== undefined);

  return (
    <>
      <article>
        <header className="bg-brand py-14 text-brand-foreground">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <nav
              aria-label="Breadcrumb"
              className="text-xs font-semibold uppercase tracking-wide text-brand-foreground/60"
            >
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-2 text-gold">/</span>
              <Link to="/blog" className="hover:text-primary">
                Spice Journal
              </Link>
            </nav>
            <p className="text-eyebrow mt-6 text-primary">{post.category}</p>
            <h1 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              {post.title}
            </h1>
            <div className="gold-rule mt-6 w-24" />
            <div className="mt-6 flex flex-wrap items-center gap-5 text-xs font-semibold uppercase tracking-wide text-brand-foreground/60">
              <span className="inline-flex items-center gap-1.5">
                <CalendarDays className="size-3.5 text-gold" />
                {formatBlogDate(post.publishedAt)}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="size-3.5 text-gold" />
                {post.readMinutes} min read
              </span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6">
          <Reveal>
            <img
              src={post.image}
              alt={post.imageAlt}
              width={1024}
              height={1024}
              className="w-full rounded-lg border border-gold/50 object-cover shadow-lift"
            />
          </Reveal>

          <p className="mt-10 text-lg leading-relaxed text-foreground">
            {post.intro}
          </p>

          {post.sections.map((section) => (
            <section key={section.heading} className="mt-10">
              <h2 className="text-3xl leading-snug">{section.heading}</h2>
              <div className="gold-rule mt-4 w-16" />
              {section.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="mt-4 text-base leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-5 space-y-3">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-base leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="mt-14 rounded-lg border border-gold/40 bg-secondary/60 p-8">
            <h2 className="text-3xl">Frequently asked</h2>
            <div className="gold-rule mt-4 w-16" />
            <dl className="mt-6 space-y-6">
              {post.faqs.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-display text-xl">{faq.question}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {linkedProducts.length > 0 ? (
            <section className="mt-14">
              <h2 className="text-3xl">Spices from this article</h2>
              <div className="gold-rule mt-4 w-16" />
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {linkedProducts.map((product) => (
                  <Link
                    key={product.slug}
                    to="/products/$slug"
                    params={{ slug: product.slug }}
                    className="hover-lift flex items-center gap-4 rounded-lg border border-gold/40 bg-card p-4 shadow-soft"
                  >
                    <img
                      src={product.image}
                      alt={product.imageAlt}
                      width={96}
                      height={96}
                      loading="lazy"
                      className="size-20 rounded-md object-cover"
                    />
                    <span>
                      <span className="block font-display text-xl">
                        {product.name}
                      </span>
                      <span className="mt-1 block text-xs text-muted-foreground">
                        {product.tagline}
                      </span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {related.length > 0 ? (
            <section className="mt-14">
              <h2 className="text-3xl">Keep reading</h2>
              <div className="gold-rule mt-4 w-16" />
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    to="/blog/$slug"
                    params={{ slug: item.slug }}
                    className="hover-lift block rounded-lg border border-gold/40 bg-card p-5 shadow-soft"
                  >
                    <p className="text-eyebrow text-spice">{item.category}</p>
                    <span className="mt-2 block font-display text-xl leading-snug">
                      {item.title}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-12 text-center">
            <Button asChild size="lg" variant="outline">
              <Link to="/blog">Back to Spice Journal</Link>
            </Button>
          </div>
        </div>
      </article>

      <CTASection />
      <div className="h-10" />
    </>
  );
}
