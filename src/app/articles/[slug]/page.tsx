import { mdxComponents } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import { getAllArticleSlugs, getArticleSource } from "@/lib/articles";
import type { ArticleFrontmatter } from "@/types/article";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

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
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
    },
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
      {/* Article header */}
      <div className="border-b border-border bg-muted">
        <div className="mx-auto px-6 pt-14 pb-12 max-w-3xl">
          {/* Back link */}
          <Link
            href="/articles"
            className="group inline-flex items-center gap-2 mb-10 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            Tutti gli articoli
          </Link>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {frontmatter.tags?.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="font-sans font-medium text-xs uppercase tracking-wide"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Title */}
          <h1 className="mb-5 font-display font-medium text-4xl sm:text-5xl leading-[1.08] tracking-tight">
            {frontmatter.title}
          </h1>

          {/* Description */}
          <p className="mb-8 font-sans text-muted-foreground text-lg leading-relaxed">
            {frontmatter.description}
          </p>

          {/* Meta line */}
          <div className="flex items-center gap-3 font-sans text-sm text-muted-foreground">
            {frontmatter.author && (
              <>
                <span className="font-medium text-foreground">
                  {frontmatter.author}
                </span>
                <span className="text-border">·</span>
              </>
            )}
            <time>{date}</time>
            <span className="text-border">·</span>
            <span>{readingTime} min di lettura</span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <article className="mx-auto px-6 py-14 max-w-3xl">
        <div className="prose prose-lg max-w-none">{content}</div>
      </article>

      {/* Article footer */}
      <div className="mx-auto px-6 pb-20 max-w-3xl">
        <div className="pt-8 border-t border-border">
          <Link
            href="/articles"
            className="group inline-flex items-center gap-2 font-sans font-medium text-sm text-primary hover:text-foreground transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">
              ←
            </span>
            Torna agli articoli
          </Link>
        </div>
      </div>
    </div>
  );
}
