import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-[--border] border-t">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mx-auto px-6 py-10 max-w-6xl text-[--muted-foreground] text-sm">
        <p className="font-mono text-xs tracking-wide">
          &copy; {new Date().getFullYear()} AI Course
        </p>
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="hover:text-[--foreground] transition-colors"
          >
            Home
          </Link>
          <Link
            href="/articles"
            className="hover:text-[--foreground] transition-colors"
          >
            Articoli
          </Link>
        </nav>
      </div>
    </footer>
  );
}
