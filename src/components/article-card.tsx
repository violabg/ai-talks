import { Badge } from "@/components/ui/badge";
import type { Article } from "@/types/article";
import Link from "next/link";

interface ArticleCardProps {
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { slug, frontmatter } = article;
  const date = new Date(frontmatter.date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/articles/${slug}`}
      className="group flex flex-col justify-between bg-card border border-border rounded-xl p-6 transition-all duration-200 hover:border-primary/40 hover:shadow-md"
    >
      <div>
        {/* Meta row */}
        <div className="mb-4 flex items-center gap-2">
          <time className="font-sans text-xs text-muted-foreground">{date}</time>
          {frontmatter.featured && (
            <>
              <span className="text-border">·</span>
              <span className="font-sans text-xs font-medium text-primary">
                In evidenza
              </span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="mb-3 font-display font-medium text-xl leading-snug tracking-tight transition-colors duration-200 group-hover:text-primary">
          {frontmatter.title}
        </h3>

        {/* Description */}
        <p className="mb-6 font-sans text-sm leading-relaxed text-muted-foreground line-clamp-3">
          {frontmatter.description}
        </p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {frontmatter.tags?.slice(0, 3).map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="font-sans text-[10px] font-medium uppercase tracking-wider"
          >
            {tag}
          </Badge>
        ))}
        {(frontmatter.tags?.length ?? 0) > 3 && (
          <span className="font-sans text-[10px] text-muted-foreground self-center">
            +{(frontmatter.tags?.length ?? 0) - 3}
          </span>
        )}
      </div>
    </Link>
  );
}
