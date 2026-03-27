import { mdxComponents } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { getAllArticleSlugs, getArticleSource } from "@/lib/articles";
import type { ArticleFrontmatter } from "@/types/article";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const source = getArticleSource(slug);
    const { frontmatter } = await compileMDX<ArticleFrontmatter>({
      source,
      options: { parseFrontmatter: true },
    });
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    };
  } catch {
    return { title: "Articolo non trovato" };
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let source: string;
  try {
    source = getArticleSource(slug);
  } catch {
    notFound();
  }

  const { content, frontmatter } = await compileMDX<ArticleFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  });

  const date = new Date(frontmatter.date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const readingTime = Math.max(1, Math.ceil(source.split(/\s+/).length / 200));

  return (
    <div className="relative">
      {/* Article header — full width with editorial feel */}
      <header className="bg-[--card] border-[--border] border-b">
        <div className="mx-auto px-6 pt-16 pb-12 max-w-6xl">
          {/* Back link */}
          <Link
            href="/articles"
            className="group inline-flex items-center gap-2 mb-10 text-[--muted-foreground] hover:text-[--foreground] text-sm transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              &larr;
            </span>
            Tutti gli articoli
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {frontmatter.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="font-normal text-xs uppercase tracking-wide"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title — serif, editorial */}
          <h1 className="mb-6 font-display font-bold text-4xl sm:text-5xl leading-[1.1] tracking-tight">
            {frontmatter.title}
          </h1>

          {/* Description */}
          <p className="mb-8 max-w-2xl text-[--muted-foreground] text-lg leading-relaxed">
            {frontmatter.description}
          </p>

          {/* Meta line */}
          <div className="flex items-center gap-3 text-[--muted-foreground] text-sm">
            {frontmatter.author && (
              <>
                <span className="font-medium text-[--foreground]">
                  {frontmatter.author}
                </span>
                <span className="text-[--border]">/</span>
              </>
            )}
            <time>{date}</time>
            <span className="text-[--border]">/</span>
            <span>{readingTime} min di lettura</span>
          </div>
        </div>
      </header>

      {/* Article body */}
      <article className="mx-auto px-6 py-14 max-w-6xl">
        <div className="max-w-none font-prose prose prose-lg">{content}</div>
      </article>

      {/* Article footer */}
      <footer className="mx-auto px-6 pb-20 max-w-6xl">
        <div className="pt-8 border-[--border] border-t">
          <Link
            href="/articles"
            className="group inline-flex items-center gap-2 font-medium text-[--primary] hover:text-[--foreground] text-sm transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              &larr;
            </span>
            Torna agli articoli
          </Link>
        </div>
      </footer>
    </div>
  );
}
