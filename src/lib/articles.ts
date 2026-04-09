import {
  getAllArticleFeaturedStates,
  getAllArticlePublishedStates,
  getArticlePublished,
} from "@/lib/kv"
import type { Article, ArticleFrontmatter } from "@/types/article"
import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { ENV } from "varlock/env"

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles")
export const isDevelopment = ENV.APP_ENV === "development";

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

function isArticlePublished(
  frontmatter: ArticleFrontmatter,
  kvPublished: boolean | null
): boolean {
  if (kvPublished !== null) return kvPublished
  return frontmatter.published === true
}

function isArticleVisible(
  frontmatter: ArticleFrontmatter,
  kvPublished: boolean | null
): boolean {
  return isDevelopment || isArticlePublished(frontmatter, kvPublished)
}

export function getArticleSlugsFromDisk(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) return []

  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

function sortArticles<T extends Article>(articles: T[]): T[] {
  return articles.sort(
    (a, b) =>
      getArticleTimestamp(b.frontmatter.date) -
        getArticleTimestamp(a.frontmatter.date) ||
      a.slug.localeCompare(b.slug)
  )
}

export async function getAllArticles(): Promise<Article[]> {
  const [kvPublished, kvFeatured] = await Promise.all([
    getAllArticlePublishedStates(),
    getAllArticleFeaturedStates(),
  ])

  const articles = getArticleSlugsFromDisk()
    .map(readArticle)
    .filter(({ slug, frontmatter }) =>
      isArticleVisible(frontmatter, kvPublished[slug] ?? null)
    )
    .map(({ source: _source, ...article }) => ({
      ...article,
      kvPublished: kvPublished[article.slug] ?? null,
      kvFeatured: kvFeatured[article.slug] ?? null,
    }))

  return sortArticles(articles)
}

export async function getAllArticlesUnfiltered(): Promise<Article[]> {
  const [kvPublished, kvFeatured] = await Promise.all([
    getAllArticlePublishedStates(),
    getAllArticleFeaturedStates(),
  ])

  const articles = getArticleSlugsFromDisk()
    .map(readArticle)
    .map(({ source: _source, ...article }) => ({
      ...article,
      kvPublished: kvPublished[article.slug] ?? null,
      kvFeatured: kvFeatured[article.slug] ?? null,
    }))

  return sortArticles(articles)
}

export async function getAllArticleSlugs(): Promise<string[]> {
  return (await getAllArticles()).map(({ slug }) => slug)
}

export async function getArticleSource(slug: string): Promise<string> {
  const { source, frontmatter } = readArticle(slug)
  const kvPublished = await getArticlePublished(slug)

  if (!isArticleVisible(frontmatter, kvPublished)) {
    throw new Error(`Article not found: ${slug}`)
  }

  return source
}

export async function getFeaturedArticles(): Promise<Article[]> {
  return (await getAllArticles()).filter((a) => {
    // KV featured takes precedence over frontmatter
    if (a.kvFeatured !== null && a.kvFeatured !== undefined) return a.kvFeatured
    return a.frontmatter.featured === true
  })
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

export function isDraftArticle(
  frontmatter: ArticleFrontmatter,
  kvPublished: boolean | null = null
): boolean {
  if (kvPublished !== null) return !kvPublished
  return frontmatter.published !== true
}

export function shouldShowDraftBadge(
  frontmatter: ArticleFrontmatter,
  kvPublished: boolean | null = null
): boolean {
  return isDevelopment && isDraftArticle(frontmatter, kvPublished)
}
