"use server"

import { auth } from "@/lib/auth"
import { isAdmin } from "@/lib/admin"
import {
  setArticlePublished,
  setArticleFeatured,
  getAllArticlePublishedStates,
} from "@/lib/kv"
import { getArticleSlugsFromDisk } from "@/lib/articles"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"
import matter from "gray-matter"
import fs from "fs"
import path from "path"

async function requireAdmin() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (!session?.user) throw new Error("Unauthorized")
  if (!await isAdmin(session.user.email)) throw new Error("Forbidden")
}

export async function toggleArticleField(
  slug: string,
  field: "published" | "featured",
  value: boolean
): Promise<{ error?: string }> {
  try {
    await requireAdmin()

    if (field === "published") {
      await setArticlePublished(slug, value)
      revalidatePath("/")
      revalidatePath("/articles")
      revalidatePath(`/articles/${slug}`)
    } else if (field === "featured") {
      await setArticleFeatured(slug, value)
      revalidatePath("/")
      revalidatePath("/articles")
    }

    return {}
  } catch (err) {
    return { error: err instanceof Error ? err.message : "Unknown error" }
  }
}

export async function syncArticles(): Promise<{
  initialized: string[]
  skipped: string[]
  error?: string
}> {
  try {
    await requireAdmin()

    const slugs = getArticleSlugsFromDisk()
    const kvStates = await getAllArticlePublishedStates()

    const initialized: string[] = []
    const skipped: string[] = []

    for (const slug of slugs) {
      if (slug in kvStates) {
        skipped.push(slug)
        continue
      }

      const filePath = path.join(
        process.cwd(),
        "content",
        "articles",
        `${slug}.mdx`
      )
      try {
        const source = fs.readFileSync(filePath, "utf-8")
        const { data } = matter(source)
        const isPublished = data.published === true
        await setArticlePublished(slug, isPublished)
        initialized.push(slug)
        revalidatePath(`/articles/${slug}`)
        if (isPublished) {
          revalidatePath("/")
          revalidatePath("/articles")
        }
      } catch {
        // Skip unreadable files
      }
    }

    return { initialized, skipped }
  } catch (err) {
    return {
      initialized: [],
      skipped: [],
      error: err instanceof Error ? err.message : "Unknown error",
    }
  }
}
