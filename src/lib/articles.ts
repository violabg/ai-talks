import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { Article, ArticleFrontmatter } from "@/types/article"

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles")

export function getAllArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getAllArticles(): Article[] {
  return getAllArticleSlugs()
    .map((slug) => {
      const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`)
      const source = fs.readFileSync(filePath, "utf-8")
      const { data } = matter(source)
      return {
        slug,
        frontmatter: data as ArticleFrontmatter,
      }
    })
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    )
}

export function getArticleSource(slug: string): string {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`)
  return fs.readFileSync(filePath, "utf-8")
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((a) => a.frontmatter.featured)
}
