import { DraftBadge } from "@/components/draft-badge";
import { Badge } from "@/components/ui/badge";
import { formatArticleDateTime, shouldShowDraftBadge } from "@/lib/articles";
import type { Article } from "@/types/article";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { slug, frontmatter } = article;
  const date = formatArticleDateTime(frontmatter.date);
  const showDraftBadge = shouldShowDraftBadge(frontmatter);

  return (
    <Link
      href={`/articles/${slug}`}
      className="group flex flex-col justify-between bg-card hover:shadow-md p-6 border border-border hover:border-primary/40 rounded-xl transition-all duration-200"
    >
      <div>
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <time className="font-sans text-muted-foreground text-xs">
            {date}
          </time>
          {showDraftBadge && <DraftBadge compact />}
          {frontmatter.featured && (
            <>
              <span className="text-border">·</span>
              <span className="font-sans font-medium text-primary text-xs">
                In evidenza
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 font-display font-medium group-hover:text-primary text-xl leading-snug tracking-tight transition-colors duration-200">
          {frontmatter.title}
        </h3>

        {/* Description */}
        <p className="mb-6 font-sans text-muted-foreground text-sm line-clamp-3 leading-relaxed">
          {frontmatter.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {frontmatter.tags?.slice(0, 3).map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="font-sans font-medium text-[10px] uppercase tracking-wider"
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
    </Link>
  );
}
