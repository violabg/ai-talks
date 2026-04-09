import { GithubSignInButton } from "@/components/admin/github-sign-in-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Login",
}

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="flex justify-center items-center py-24">
      <div className="space-y-6 w-full max-w-sm">
        <div>
          <h1 className="font-display font-semibold text-2xl tracking-tight">
            Accesso admin
          </h1>
          <p className="mt-1 text-muted-foreground text-sm">
            Riservato agli utenti autorizzati.
          </p>
        </div>

        {error === "forbidden" && (
          <p className="text-destructive text-sm">
            Il tuo account GitHub non è autorizzato ad accedere.
          </p>
        )}

        <GithubSignInButton />
      </div>
    </div>
  )
}
