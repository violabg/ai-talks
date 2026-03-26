import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[--border] mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[--muted-foreground]">
        <p>
          © {new Date().getFullYear()} AI Course. Tutti i diritti riservati.
        </p>
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-[--foreground] transition-colors">
            Home
          </Link>
          <Link href="/articles" className="hover:text-[--foreground] transition-colors">
            Articoli
          </Link>
        </nav>
      </div>
    </footer>
  )
}
