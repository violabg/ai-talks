import { covers } from "@/components/covers";
import { DraftBadge } from "@/components/draft-badge";
import { Badge } from "@/components/ui/badge";
import { formatArticleDateTime, shouldShowDraftBadge } from "@/lib/articles";
import type { Article } from "@/types/article";
import Link from "next/link";
import { createElement, Suspense, ViewTransition } from "react";

interface ArticleCardProps {
  article: Article;
}

function DefaultArticleCardCover() {
  return (
    <pre className="mx-auto w-fit text-muted-foreground/70 whitespace-pre">
      <span className="text-primary/70">{"╭──────────────────╮"}</span>
      {"\n"}
      <span className="text-primary/70">{"│"}</span>
      <span>{"   ASCII cover    "}</span>
      <span className="text-primary/70">{"│"}</span>
      {"\n"}
      <span className="text-primary/70">{"│"}</span>
      <span>{"  coming soon...  "}</span>
      <span className="text-primary/70">{"│"}</span>
      {"\n"}
      <span className="text-primary/70">{"╰──────────────────╯"}</span>
    </pre>
  );
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { slug, frontmatter } = article;
  const CoverComponent = covers[slug] ?? DefaultArticleCardCover;
  const date = formatArticleDateTime(frontmatter.date);
  const showDraftBadge = shouldShowDraftBadge(
    frontmatter,
    article.kvPublished ?? null,
  );

  return (
    <Link
      href={`/articles/${slug}`}
      className="group flex flex-col justify-between bg-card hover:shadow-md dark:hover:shadow-[0_0_12px_color-mix(in_oklch,var(--primary)_15%,transparent)] p-6 border border-border hover:border-primary/40 rounded-xl transition-all duration-200 accent-top-line"
    >
      <ViewTransition name={`article-cover-${slug}`}>
        <div
          className="relative flex justify-center items-center bg-muted/30 dark:bg-black/50 -mx-6 -mt-6 mb-4 py-4 rounded-t-xl min-h-50 overflow-hidden font-mono text-xs leading-tight select-none"
          aria-hidden="true"
        >
          <Suspense
            fallback={<div className="bg-muted/30 h-32 animate-pulse" />}
          >
            {createElement(CoverComponent)}
          </Suspense>
        </div>
      </ViewTransition>
      <div>
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <ViewTransition name={`article-date-${slug}`}>
            <time className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
              {date}
            </time>
          </ViewTransition>
          {showDraftBadge && <DraftBadge compact />}
          {frontmatter.featured && (
            <>
              <span className="text-border">·</span>
              <span className="font-sans font-medium text-primary text-xs">
                ★ In evidenza
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <ViewTransition name={`article-title-${slug}`}>
          <h3 className="mb-3 font-display font-medium group-hover:text-primary text-xl leading-snug tracking-tight transition-colors duration-200">
            {frontmatter.title}
          </h3>
        </ViewTransition>

        {/* Description */}
        <ViewTransition name={`article-desc-${slug}`}>
          <p className="mb-6 font-sans text-muted-foreground text-sm line-clamp-3 leading-relaxed">
            {frontmatter.description}
          </p>
        </ViewTransition>
      </div>

      {/* Tags */}
      <ViewTransition name={`article-tags-${slug}`}>
        <div className="flex flex-wrap gap-1.5">
          {frontmatter.tags?.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-primary/8 border-primary/20 font-sans font-medium text-[10px] text-primary uppercase tracking-wider"
            >
              {tag}
            </Badge>
          ))}
          {(frontmatter.tags?.length ?? 0) > 3 && (
            <span className="self-center font-sans text-[10px] text-muted-foreground">
              +{(frontmatter.tags?.length ?? 0) - 3}
            </span>
          )}
        </div>
      </ViewTransition>

      {/* Hover arrow */}
      <span className="flex items-center self-end gap-1 opacity-0 group-hover:opacity-100 mt-2 font-sans text-muted-foreground text-xs transition-opacity duration-200">
        Leggi{" "}
        <span className="inline-block transition-transform group-hover:translate-x-0.5">
          →
        </span>
      </span>
    </Link>
  );
}
