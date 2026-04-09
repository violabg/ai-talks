import { auth, isAllowedAdmin } from "@/lib/auth"
import { getAllArticlePublishedStates, setArticlePublished } from "@/lib/kv"
import { getArticleSlugsFromDisk } from "@/lib/articles"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"
import matter from "gray-matter"
import fs from "fs"
import path from "path"

export async function POST() {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (!isAllowedAdmin(session.user.email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

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
      // Revalidate so Vercel regenerates the page with the correct published state
      revalidatePath(`/articles/${slug}`)
      if (isPublished) {
        revalidatePath("/")
        revalidatePath("/articles")
      }
    } catch {
      // Skip unreadable files
    }
  }

  return NextResponse.json({ initialized, skipped })
}
