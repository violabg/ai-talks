import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Article } from "@/types/article"

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  const { slug, frontmatter } = article
  const date = new Date(frontmatter.date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <Link href={`/articles/${slug}`} className="group block h-full">
      <Card className="h-full flex flex-col transition-shadow hover:shadow-md">
        <CardHeader className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            {frontmatter.featured && (
              <Badge variant="secondary">In evidenza</Badge>
            )}
          </div>
          <CardTitle className="group-hover:text-[--primary] transition-colors line-clamp-2">
            {frontmatter.title}
          </CardTitle>
          <CardDescription className="mt-2 line-clamp-3">
            {frontmatter.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-1.5">
            {frontmatter.tags?.map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <time className="text-xs text-[--muted-foreground]">{date}</time>
        </CardFooter>
      </Card>
    </Link>
  )
}
