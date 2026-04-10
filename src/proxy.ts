import { auth } from "@/lib/auth"
import { isAdmin } from "@/lib/admin"
import { type NextRequest, NextResponse } from "next/server"

export const config = {
  matcher: ["/admin/:path*"],
}

export async function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const isLoginPage = pathname === "/admin/login"
  const isUnauthorizedPage = pathname === "/admin/unauthorized"

  const session = await auth.api.getSession({ headers: request.headers })

  if (!session?.user) {
    if (isLoginPage || isUnauthorizedPage) return NextResponse.next()
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  const authorized = await isAdmin(session.user.email)

  if (!authorized) {
    if (isUnauthorizedPage) return NextResponse.next()
    return NextResponse.redirect(new URL("/admin/unauthorized", request.url))
  }

  // Authorized admin visiting login or unauthorized page → send to admin panel
  if (isLoginPage || isUnauthorizedPage) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return NextResponse.next()
}
