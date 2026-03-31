import { ArticleToc } from "@/components/article-toc";
import { DraftBadge } from "@/components/draft-badge";
import { mdxComponents } from "@/components/mdx-components";
import { Badge } from "@/components/ui/badge";
import {
  formatArticleDateTime,
  getAllArticleSlugs,
  getArticleSource,
  shouldShowDraftBadge,
} from "@/lib/articles";
import type { ArticleFrontmatter, ArticleSection } from "@/types/article";
import GithubSlugger from "github-slugger";
import matter from "gray-matter";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const prettyCodeOptions = {
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
  keepBackground: false,
};

const sectionHeadingPattern = /^##(?!#)\s+(.+)$/gm;

function normalizeHeadingText(rawHeading: string) {
  return rawHeading
    .replace(/\s+#+\s*$/g, "")
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/<[^>]+>/g, "")
    .replace(/\{[^}]+\}/g, "")
    .replace(/[>*_~]/g, "")
    .trim();
}

function extractArticleSections(source: string): ArticleSection[] {
  const slugger = new GithubSlugger();
  const markdownContent = matter(source)
    .content.replace(/```[\s\S]*?```/g, "")
    .replace(/~~~[\s\S]*?~~~/g, "");

  return Array.from(markdownContent.matchAll(sectionHeadingPattern))
    .map((match) => {
      const title = normalizeHeadingText(match[1] ?? "");

      if (!title) {
        return null;
      }

      return {
        id: slugger.slug(title),
        title,
      } satisfies ArticleSection;
    })
    .filter((section): section is ArticleSection => section !== null);
}

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
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: {
                className: ["article-heading-anchor"],
                ariaLabel: "Link alla sezione",
              },
            },
          ],
          [rehypePrettyCode, prettyCodeOptions],
        ],
      },
    },
    components: mdxComponents,
  });

  const date = formatArticleDateTime(frontmatter.date);
  const showDraftBadge = shouldShowDraftBadge(frontmatter);
  const sections = extractArticleSections(source);
  const hasSections = sections.length > 0;
  const pageShellClass = hasSections
    ? "mx-auto max-w-6xl px-6"
    : "mx-auto max-w-3xl px-6";
  const articleGridClass = hasSections
    ? "lg:grid lg:grid-cols-[minmax(0,48rem)_minmax(14rem,1fr)] lg:items-start lg:gap-12"
    : undefined;

  const readingTime = Math.max(1, Math.ceil(source.split(/\s+/).length / 200));

  return (
    <div className="relative">
      {/* Article header */}
      <div className="bg-muted border-border border-b">
        <div className={pageShellClass}>
          <div className={articleGridClass}>
            <div className="pt-14 pb-12 min-w-0 lg:max-w-none max-w-3xl">
              {/* Back link */}
              <Link
                href="/articles"
                className="group inline-flex items-center gap-2 mb-10 font-sans text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                <span className="transition-transform group-hover:-translate-x-0.5">
                  ←
                </span>
                Tutti gli articoli
              </Link>

              {showDraftBadge && (
                <div className="mb-6">
                  <DraftBadge />
                </div>
              )}

              {/* Tags */}
              <ViewTransition name={`article-tags-${slug}`}>
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
              </ViewTransition>

              {/* Title */}
              <ViewTransition name={`article-title-${slug}`}>
                <h1 className="mb-5 font-display font-medium text-4xl sm:text-5xl leading-[1.08] tracking-tight">
                  {frontmatter.title}
                </h1>
              </ViewTransition>

              {/* Description */}
              <ViewTransition name={`article-desc-${slug}`}>
                <p className="mb-8 max-w-2xl font-sans text-muted-foreground text-lg leading-relaxed">
                  {frontmatter.description}
                </p>
              </ViewTransition>

              {/* Meta line */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-sans text-muted-foreground text-sm">
                {frontmatter.author && (
                  <>
                    <span className="font-medium text-foreground">
                      {frontmatter.author}
                    </span>
                    <span className="text-border">·</span>
                  </>
                )}
                <ViewTransition name={`article-date-${slug}`}>
                  <time>{date}</time>
                </ViewTransition>
                <span className="text-border">·</span>
                <span>{readingTime} min di lettura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className={pageShellClass}>
        <div className={articleGridClass}>
          <article className="min-w-0 lg:max-w-none max-w-3xl">
            <div className="py-14 max-w-none prose-h1:text-4xl sm:prose-h1:text-5xl prose prose-lg">
              {content}
            </div>
          </article>

          {hasSections && (
            <aside className="hidden lg:block lg:top-[var(--header-height)] lg:sticky lg:self-start pt-8 lg:max-h-[calc(100vh-var(--header-height))] overflow-y-auto">
              <ArticleToc sections={sections} />
            </aside>
          )}
        </div>
      </div>

      {/* Article footer */}
      <div className={pageShellClass}>
        <div className={articleGridClass}>
          <div className="pt-8 pb-20 border-border border-t lg:max-w-none max-w-3xl">
            <Link
              href="/articles"
              className="group inline-flex items-center gap-2 font-sans font-medium text-primary hover:text-foreground text-sm transition-colors"
            >
              <span className="transition-transform group-hover:-translate-x-0.5">
                ←
              </span>
              Torna agli articoli
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
