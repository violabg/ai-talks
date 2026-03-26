import { compileMDX } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import Link from "next/link"
import { getAllArticleSlugs, getArticleSource } from "@/lib/articles"
import { mdxComponents } from "@/components/mdx-components"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import type { ArticleFrontmatter } from "@/types/article"
import type { Metadata } from "next"

export async function generateStaticParams() {
  return getAllArticleSlugs().map((slug) => ({ slug }))
}

export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  try {
    const source = getArticleSource(slug)
    const { frontmatter } = await compileMDX<ArticleFrontmatter>({
      source,
      options: { parseFrontmatter: true },
    })
    return {
      title: frontmatter.title,
      description: frontmatter.description,
    }
  } catch {
    return { title: "Articolo non trovato" }
  }
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let source: string
  try {
    source = getArticleSource(slug)
  } catch {
    notFound()
  }

  const { content, frontmatter } = await compileMDX<ArticleFrontmatter>({
    source,
    options: { parseFrontmatter: true },
    components: mdxComponents,
  })

  const date = new Date(frontmatter.date).toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      {/* Back link */}
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild>
          <Link href="/articles">← Tutti gli articoli</Link>
        </Button>
      </div>

      {/* Article header */}
      <header className="mb-10">
        <div className="flex flex-wrap gap-2 mb-4">
          {frontmatter.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl font-bold tracking-tight leading-tight mb-4">
          {frontmatter.title}
        </h1>
        <p className="text-[--muted-foreground] text-lg leading-relaxed mb-4">
          {frontmatter.description}
        </p>
        <div className="flex items-center gap-4 text-sm text-[--muted-foreground]">
          {frontmatter.author && <span>{frontmatter.author}</span>}
          <time>{date}</time>
        </div>
      </header>

      <hr className="border-[--border] mb-10" />

      {/* Article content */}
      <article>{content}</article>
    </div>
  )
}
