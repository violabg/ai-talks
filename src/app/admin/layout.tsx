import { SignOutButton } from "@/components/admin/sign-out-button"
import { auth } from "@/lib/auth"
import { isAdmin } from "@/lib/admin"
import { headers } from "next/headers"
import Link from "next/link"
import type { ReactNode } from "react"

export default async function AdminLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await auth.api.getSession({ headers: await headers() })

  if (!session?.user) {
    return <>{children}</>
  }

  const authorized = await isAdmin(session.user.email)

  if (!authorized) {
    return <>{children}</>
  }

  return (
    <div className="flex flex-col min-h-[calc(100vh-var(--header-height,0px))]">
      {/* Admin toolbar */}
      <div className="flex justify-between items-center px-6 py-2 border-border border-b bg-muted/50">
        <span className="font-mono text-muted-foreground text-xs uppercase tracking-widest">
          Admin
        </span>
        <div className="flex items-center gap-4">
          <Link
            href="/admin/users"
            className="text-muted-foreground hover:text-foreground text-xs transition-colors"
          >
            Utenti
          </Link>
          <span className="text-muted-foreground text-xs">
            {session.user.email}
          </span>
          <SignOutButton />
        </div>
      </div>
      <main className="flex-1 mx-auto px-6 py-10 w-full max-w-4xl">
        {children}
      </main>
    </div>
  )
}
