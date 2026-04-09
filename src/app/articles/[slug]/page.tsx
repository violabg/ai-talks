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
import { getArticlePublished } from "@/lib/kv";
import { hasPresentation } from "@/lib/presentations";
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
  return (await getAllArticleSlugs()).map((slug) => ({ slug }));
}

export const dynamicParams = true;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const source = await getArticleSource(slug);
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
    source = await getArticleSource(slug);
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

  const kvPublished = await getArticlePublished(slug);
  const date = formatArticleDateTime(frontmatter.date);
  const showDraftBadge = shouldShowDraftBadge(frontmatter, kvPublished);
  const sections = extractArticleSections(source);
  const hasSections = sections.length > 0;
  const pageShellClass = hasSections
    ? "mx-auto max-w-7xl px-6"
    : "mx-auto max-w-3xl px-6";
  const articleGridClass = hasSections
    ? "lg:grid lg:grid-cols-[minmax(0,52rem)_minmax(14rem,1fr)] lg:items-start lg:gap-12"
    : undefined;

  const readingTime = Math.max(1, Math.ceil(source.split(/\s+/).length / 200));
  const showPresentation = hasPresentation(slug);

  return (
    <div className="relative">
      {/* Article header */}
      <div className="relative bg-muted border-border border-b overflow-hidden">
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 20% 50%, color-mix(in oklch, var(--primary) 6%, transparent) 0%, transparent 70%)",
          }}
        />
        <div className={pageShellClass}>
          <div className={articleGridClass}>
            <div className="pt-14 pb-12 min-w-0 lg:max-w-none max-w-3xl">
              {/* Back link */}
              <Link
                href="/articles"
                className="group inline-flex items-center gap-2 mb-10 font-mono text-muted-foreground hover:text-foreground text-xs uppercase tracking-wider transition-colors"
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
                      className="bg-primary/8 border-primary/20 font-sans font-medium text-primary text-xs uppercase tracking-wide"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </ViewTransition>

              {/* Title */}
              <ViewTransition name={`article-title-${slug}`}>
                <h1 className="mb-5 font-display font-medium text-4xl sm:text-5xl text-balance leading-[1.08] tracking-tight">
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
                <span className="bg-muted-foreground/10 px-2 py-0.5 rounded font-mono text-xs">
                  {readingTime} min
                </span>
              </div>

              {showPresentation && (
                <Link
                  href={`/articles/${slug}/presentazione`}
                  className="group inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 mt-6 px-4 py-2 border border-primary/20 rounded-lg font-medium text-primary text-sm transition-colors"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="group-hover:scale-110 transition-transform"
                  >
                    <rect
                      x="1"
                      y="2"
                      width="14"
                      height="10"
                      rx="1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6.5 5.5L10.5 7.5L6.5 9.5V5.5Z"
                      fill="currentColor"
                    />
                    <line
                      x1="8"
                      y1="12"
                      x2="8"
                      y2="14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <line
                      x1="5"
                      y1="14"
                      x2="11"
                      y2="14"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  Inizia presentazione
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className={pageShellClass}>
        <div className={articleGridClass}>
          <article className="lg:pl-8 lg:border-primary/15 lg:border-l-2 min-w-0 lg:max-w-none max-w-3xl">
            <div className="py-14 max-w-none prose-h1:text-4xl sm:prose-h1:text-5xl prose prose-lg">
              {content}
            </div>
          </article>

          {hasSections && (
            <aside className="hidden lg:block lg:top-[var(--header-height)] lg:sticky lg:self-start pt-8">
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
