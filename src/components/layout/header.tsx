import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export function Header() {
  return (
    <header className="top-0 z-50 sticky bg-background/85 backdrop-blur-md border-border border-b w-full">
      <div className="flex justify-between items-center mx-auto px-6 max-w-6xl h-16">
        <Link
          href="/"
          className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
        >
          <span className="font-display font-medium text-xl tracking-tight">
            <span className="text-primary">AI</span>{" "}
            <span className="text-foreground">Talks</span>
          </span>
        </Link>

        <nav className="hidden sm:flex items-center gap-1 font-sans text-sm">
          <Link
            href="/"
            className="hover:bg-muted px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-150"
          >
            Home
          </Link>
          <Link
            href="/articles"
            className="hover:bg-muted px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-150"
          >
            Articoli
          </Link>
          <Link
            href="/link-utili"
            className="hover:bg-muted px-4 py-2 rounded-lg text-muted-foreground hover:text-foreground transition-all duration-150"
          >
            Link utili
          </Link>
        </nav>

        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
