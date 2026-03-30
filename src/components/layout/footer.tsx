import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-4 mx-auto px-6 py-10 max-w-6xl text-muted-foreground">
        <p className="font-sans text-xs tracking-wide">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">AI Talks</span>
          {" "}— Sviluppo &amp; Intelligenza Artificiale
        </p>
        <nav className="flex items-center gap-1 font-sans text-sm">
          <Link
            href="/"
            className="px-3 py-1.5 rounded-lg hover:text-foreground hover:bg-muted transition-all duration-150"
          >
            Home
          </Link>
          <Link
            href="/articles"
            className="px-3 py-1.5 rounded-lg hover:text-foreground hover:bg-muted transition-all duration-150"
          >
            Articoli
          </Link>
        </nav>
      </div>
    </footer>
  );
}
