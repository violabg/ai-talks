import { GithubSignInButton } from "@/components/admin/github-sign-in-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin Login",
}

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center py-24">
      <div className="space-y-6 w-full max-w-sm">
        <div>
          <h1 className="font-display font-semibold text-2xl tracking-tight">
            Accesso admin
          </h1>
          <p className="mt-1 text-muted-foreground text-sm">
            Accedi con il tuo account GitHub.
          </p>
        </div>
        <GithubSignInButton />
      </div>
    </div>
  )
}
