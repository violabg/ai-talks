import type { Article, ArticleFrontmatter } from "@/types/article"
import fs from "fs"
import matter from "gray-matter"
import path from "path"

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles")
const isDevelopment = process.env.NODE_ENV === "development"

function getArticleFilePath(slug: string): string {
  return path.join(ARTICLES_DIR, `${slug}.mdx`)
}

function readArticle(slug: string): Article & { source: string } {
  const filePath = getArticleFilePath(slug)
  const source = fs.readFileSync(filePath, "utf-8")
  const { data } = matter(source)

  return {
    slug,
    source,
    frontmatter: data as ArticleFrontmatter,
  }
}

function getArticleTimestamp(date: string): number {
  return new Date(date).getTime()
}

function isArticlePublished(frontmatter: ArticleFrontmatter): boolean {
  return frontmatter.published === true
}

function isArticleVisible(frontmatter: ArticleFrontmatter): boolean {
  return isDevelopment || isArticlePublished(frontmatter)
}

function getArticleSlugsFromDisk(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []

  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getAllArticles(): Article[] {
  return getArticleSlugsFromDisk()
    .map(readArticle)
    .filter(({ frontmatter }) => isArticleVisible(frontmatter))
    .map(({ source, ...article }) => article)
    .sort(
      (a, b) =>
        getArticleTimestamp(b.frontmatter.date) -
          getArticleTimestamp(a.frontmatter.date) ||
        a.slug.localeCompare(b.slug)
    )
}

export function getAllArticleSlugs(): string[] {
  return getAllArticles().map(({ slug }) => slug)
}

export function getArticleSource(slug: string): string {
  const { source, frontmatter } = readArticle(slug)

  if (!isArticleVisible(frontmatter)) {
    throw new Error(`Article not found: ${slug}`)
  }

  return source
}

export function getFeaturedArticles(): Article[] {
  return getAllArticles().filter((a) => a.frontmatter.featured)
}

export function formatArticleDateTime(date: string): string {
  return new Intl.DateTimeFormat("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).format(new Date(date))
}

export function isDraftArticle(frontmatter: ArticleFrontmatter): boolean {
  return !isArticlePublished(frontmatter)
}

export function shouldShowDraftBadge(frontmatter: ArticleFrontmatter): boolean {
  return isDevelopment && isDraftArticle(frontmatter)
}
