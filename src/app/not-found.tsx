import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex flex-col justify-center items-center px-6 min-h-[70vh] text-center overflow-hidden">
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, color-mix(in oklch, var(--primary) 8%, transparent), transparent)",
        }}
      />

      {/* Giant watermark 404 */}
      <span
        className="absolute inset-0 flex items-center justify-center font-display text-[12rem] sm:text-[16rem] leading-none tracking-tight text-primary/[0.06] select-none pointer-events-none"
        aria-hidden="true"
      >
        404
      </span>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="mb-4 font-display font-medium text-3xl sm:text-4xl tracking-tight">
          Pagina non trovata
        </h1>
        <p className="mb-10 font-mono text-sm text-muted-foreground">
          Errore 404 · La pagina richiesta non esiste
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Button
            nativeButton={false}
            render={<Link href="/">Torna alla home</Link>}
          />
          <Button
            variant="ghost"
            nativeButton={false}
            render={<Link href="/articles">Vai agli articoli</Link>}
          />
        </div>
      </div>

      {/* Decorative disconnected node SVG */}
      <div
        className="absolute right-8 bottom-8 hidden opacity-[0.12] sm:block"
        aria-hidden="true"
      >
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          className="text-primary"
        >
          <circle cx="20" cy="20" r="4" fill="currentColor" />
          <circle cx="60" cy="20" r="4" fill="currentColor" />
          <circle cx="20" cy="60" r="4" fill="currentColor" />
          <circle cx="60" cy="60" r="4" fill="currentColor" />
          <line
            x1="20"
            y1="20"
            x2="60"
            y2="20"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="20"
            y1="20"
            x2="20"
            y2="60"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <line
            x1="20"
            y1="60"
            x2="60"
            y2="60"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <line
            x1="60"
            y1="20"
            x2="60"
            y2="60"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
    </div>
  );
}
