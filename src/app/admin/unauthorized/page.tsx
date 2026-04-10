import { SignOutButton } from "@/components/admin/sign-out-button"
import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accesso non autorizzato",
}

export default async function UnauthorizedPage() {
  const session = await auth.api.getSession({ headers: await headers() })

  return (
    <div className="flex justify-center items-center py-24">
      <div className="space-y-6 w-full max-w-sm text-center">
        <div>
          <h1 className="font-display font-semibold text-2xl tracking-tight">
            Accesso non autorizzato
          </h1>
          <p className="mt-2 text-muted-foreground text-sm">
            Il tuo account non è autorizzato ad accedere all&apos;area admin.
          </p>
          {session?.user?.email && (
            <p className="mt-1 font-mono text-muted-foreground text-xs">
              {session.user.email}
            </p>
          )}
        </div>
        <SignOutButton />
      </div>
    </div>
  )
}
