import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <h1 className="text-8xl font-bold text-[--muted-foreground] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-4">Pagina non trovata</h2>
      <p className="text-[--muted-foreground] mb-8 max-w-md">
        La pagina che stai cercando non esiste o è stata spostata.
      </p>
      <Button asChild>
        <Link href="/">Torna alla home</Link>
      </Button>
    </div>
  )
}
