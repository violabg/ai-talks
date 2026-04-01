import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { getAllArticles, getFeaturedArticles } from "@/lib/articles";
import type { LucideIcon } from "lucide-react";
import { CheckCircle, Layers, Workflow } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getAllArticles().slice(0, 6);
  const displayArticles =
    featuredArticles.length > 0 ? featuredArticles : recentArticles;

  return (
    <>
      {/* Hero */}
      <section className="relative border-border border-b overflow-hidden">
        {/* Warm gradient mesh */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 60% at 5% 50%, color-mix(in oklch, var(--primary) 10%, transparent) 0%, transparent 60%), radial-gradient(ellipse 50% 80% at 95% 20%, color-mix(in oklch, var(--primary) 6%, transparent) 0%, transparent 55%), radial-gradient(ellipse 70% 50% at 60% 100%, color-mix(in oklch, var(--primary) 4%, transparent) 0%, transparent 50%)",
          }}
        />
        <div className="absolute inset-0 dot-grid" aria-hidden="true" />

        {/* Right-side neural network decoration */}
        <div
          className="hidden lg:block top-1/2 right-12 absolute opacity-[0.08] -translate-y-1/2"
          aria-hidden="true"
        >
          <svg
            width="200"
            height="160"
            viewBox="0 0 200 160"
            fill="none"
            className="text-primary"
          >
            {[0, 1, 2, 3].map((col) =>
              [0, 1, 2].map((row) => (
                <circle
                  key={`${col}-${row}`}
                  cx={30 + col * 50}
                  cy={20 + row * 60}
                  r={4 + ((col + row) % 3) * 3}
                  fill="currentColor"
                  opacity={0.3 + ((col * row) % 3) * 0.25}
                />
              )),
            )}
            <line
              x1="30"
              y1="20"
              x2="80"
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            />
            <line
              x1="80"
              y1="80"
              x2="130"
              y2="20"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.15"
            />
            <line
              x1="130"
              y1="20"
              x2="180"
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            />
            <line
              x1="80"
              y1="80"
              x2="130"
              y2="140"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.15"
            />
            <line
              x1="130"
              y1="140"
              x2="180"
              y2="80"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.2"
            />
            <line
              x1="30"
              y1="80"
              x2="80"
              y2="140"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.15"
            />
          </svg>
        </div>

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--foreground) 0.6px, transparent 0.6px)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="relative mx-auto px-6 pt-28 sm:pt-40 pb-24 sm:pb-32 max-w-6xl">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 bg-primary/8 mb-5 px-3 py-1 border border-primary/30 rounded-full font-mono font-medium text-primary text-xs uppercase tracking-[0.18em]">
              <span className="inline-block bg-primary rounded-full w-1.5 h-1.5" />
              Sviluppo &amp; Intelligenza Artificiale
            </span>
            <h1 className="mb-8 font-display font-medium text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              Impara a sviluppare
              <br />
              <em className="text-primary not-italic">con l&apos;AI</em>
            </h1>
            <div className="bg-primary mb-8 rounded-full w-16 h-0.5" />
            <p className="mb-12 max-w-xl font-sans text-muted-foreground text-lg sm:text-xl leading-relaxed">
              Articoli, best practice e idee per integrare l&apos;intelligenza
              artificiale nel tuo workflow di sviluppo.
            </p>
            <Button
              size={"lg"}
              nativeButton={false}
              render={
                <Link href="/articles">
                  Esplora gli articoli
                  <span className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              }
            ></Button>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto px-6 py-20 max-w-6xl">
        <div className="flex justify-between items-end mb-6">
          <div>
            <span className="inline-flex items-center gap-2 bg-primary/8 mb-3 px-3 py-1 border border-primary/30 rounded-full font-mono font-medium text-primary text-xs uppercase tracking-[0.18em]">
              <span className="inline-block bg-primary rounded-full w-1.5 h-1.5" />
              {featuredArticles.length > 0 ? "In evidenza" : "Recenti"}
            </span>
            <h2 className="font-display font-medium text-3xl sm:text-4xl tracking-tight">
              {featuredArticles.length > 0
                ? "Articoli selezionati"
                : "Ultimi articoli"}
            </h2>
          </div>
          <Button
            variant={"ghost"}
            size={"lg"}
            nativeButton={false}
            render={<Link href="/articles">Vedi tutti →</Link>}
          ></Button>
        </div>

        <hr className="bg-gradient-to-r from-primary/40 via-primary/10 to-transparent mb-10 border-0 h-px" />

        {displayArticles.length > 0 ? (
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 font-sans text-muted-foreground text-center">
            <p className="text-lg italic">Nessun articolo ancora pubblicato.</p>
            <p className="mt-2 text-sm">Torna presto!</p>
          </div>
        )}

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/articles"
            className="font-sans text-muted-foreground hover:text-foreground text-sm underline underline-offset-4 transition-colors"
          >
            Vedi tutti gli articoli
          </Link>
        </div>
      </section>

      {/* Topics */}
      <section className="relative bg-muted border-border border-t overflow-hidden">
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle, var(--foreground) 0.5px, transparent 0.5px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div className="relative mx-auto px-6 py-20 max-w-6xl">
          <p className="mb-2 font-mono font-medium text-primary text-xs uppercase tracking-[0.18em]">
            Argomenti
          </p>
          <h2 className="mb-14 font-display font-medium text-3xl sm:text-4xl tracking-tight">
            Di cosa parliamo
          </h2>

          <div className="gap-8 grid grid-cols-1 md:grid-cols-3">
            {(
              [
                {
                  title: "Workflow & Processi",
                  description:
                    "Come integrare l'AI nel tuo ciclo di sviluppo senza perdere il controllo del codice.",
                  number: "01",
                  icon: Workflow,
                },
                {
                  title: "Architettura",
                  description:
                    "Strutturare codebase leggibili e navigabili anche per gli agenti AI.",
                  number: "02",
                  icon: Layers,
                },
                {
                  title: "Best Practice",
                  description:
                    "Errori comuni da evitare e pattern da adottare quando lavori con modelli LLM.",
                  number: "03",
                  icon: CheckCircle,
                },
              ] satisfies {
                title: string;
                description: string;
                number: string;
                icon: LucideIcon;
              }[]
            ).map((topic) => (
              <div
                key={topic.title}
                className="relative bg-card p-6 border border-border border-l-2 border-l-primary rounded-xl overflow-hidden"
              >
                <span className="top-3 right-4 absolute font-mono text-primary/[0.06] text-6xl pointer-events-none select-none">
                  {topic.number}
                </span>
                <topic.icon className="mb-3 size-5 text-primary/60" />
                <h3 className="mb-3 font-display font-medium text-xl tracking-tight">
                  {topic.title}
                </h3>
                <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
