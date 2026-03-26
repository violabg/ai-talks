import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[--border] bg-[--background]/95 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
          <span className="text-[--primary]">AI</span>
          <span>Course</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link
            href="/"
            className="text-[--muted-foreground] hover:text-[--foreground] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/articles"
            className="text-[--muted-foreground] hover:text-[--foreground] transition-colors"
          >
            Articoli
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
