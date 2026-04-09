import { auth, isAllowedAdmin } from "@/lib/auth"
import { setArticlePublished } from "@/lib/kv"
import { headers } from "next/headers"
import { revalidatePath } from "next/cache"
import { NextResponse } from "next/server"

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session?.user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  if (!isAllowedAdmin(session.user.email)) {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 })
  }

  const { slug } = await params
  const { published } = (await request.json()) as { published: boolean }

  await setArticlePublished(slug, published)

  revalidatePath("/")
  revalidatePath("/articles")
  revalidatePath(`/articles/${slug}`)

  return NextResponse.json({ slug, published })
}
