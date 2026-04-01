import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      {/* ── Top band ─────────────────────────────────────────────── */}
      <div className="relative bg-muted border-border border-t overflow-hidden">
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />
        <div className="relative flex sm:flex-row flex-col justify-between items-start sm:items-center gap-6 mx-auto px-6 py-10 max-w-6xl">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <span className="font-display font-semibold text-foreground text-lg tracking-tight">
              AI Talks
            </span>
            <span className="text-muted-foreground text-sm">
              Sviluppo &amp; Intelligenza Artificiale
            </span>
          </div>

          {/* Nav */}
          <nav className="flex items-center gap-1 font-sans text-muted-foreground text-sm">
            <Link
              href="/"
              className="hover:bg-background px-3 py-1.5 rounded-lg hover:text-foreground transition-all duration-150"
            >
              Home
            </Link>
            <Link
              href="/articles"
              className="hover:bg-background px-3 py-1.5 rounded-lg hover:text-foreground transition-all duration-150"
            >
              Articoli
            </Link>
            <Link
              href="/link-utili"
              className="hover:bg-background px-3 py-1.5 rounded-lg hover:text-foreground transition-all duration-150"
            >
              Link utili
            </Link>
          </nav>
        </div>
      </div>

      {/* ── Bottom strip ─────────────────────────────────────────── */}
      <div className="border-border/50 border-t">
        <div className="flex flex-row justify-between items-center gap-4 mx-auto px-6 py-4 max-w-6xl">
          {/* Copyright */}
          <p className="font-sans text-muted-foreground text-xs">
            &copy; {year} AI Talks
          </p>
        </div>
      </div>
    </footer>
  );
}
