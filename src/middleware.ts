import { auth, isAllowedAdmin } from "@/lib/auth"
import { type NextRequest, NextResponse } from "next/server"

export const config = {
  matcher: ["/admin/:path*"],
}

export async function middleware(request: NextRequest) {
  const isLoginPage = request.nextUrl.pathname === "/admin/login"

  const session = await auth.api.getSession({ headers: request.headers })

  if (!session?.user) {
    if (isLoginPage) return NextResponse.next()
    return NextResponse.redirect(new URL("/admin/login", request.url))
  }

  if (!isAllowedAdmin(session.user.email)) {
    if (isLoginPage) return NextResponse.next()
    return NextResponse.redirect(
      new URL("/admin/login?error=forbidden", request.url)
    )
  }

  // Logged-in admin visiting the login page → send to admin panel
  if (isLoginPage) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  return NextResponse.next()
}
