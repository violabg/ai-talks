import { auth } from "@/lib/auth"
import { setArticleFeatured, setArticlePublished } from "@/lib/kv"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

type Body =
  | { field: "published"; value: boolean }
  | { field: "featured"; value: boolean }

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const { slug } = await params
  const body = (await request.json()) as Body

  if (body.field === "published") {
    await setArticlePublished(slug, body.value)
    revalidatePath("/")
    revalidatePath("/articles")
    revalidatePath(`/articles/${slug}`)
  } else if (body.field === "featured") {
    await setArticleFeatured(slug, body.value)
    revalidatePath("/")
    revalidatePath("/articles")
  }

  return NextResponse.json({ slug, field: body.field, value: body.value })
}
