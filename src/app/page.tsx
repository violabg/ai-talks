import { ArticleCard } from "@/components/article-card";
import { getAllArticles, getFeaturedArticles } from "@/lib/articles";
import Link from "next/link";

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getAllArticles().slice(0, 6);
  const displayArticles =
    featuredArticles.length > 0 ? featuredArticles : recentArticles;

  return (
    <>
      {/* Hero — editorial, asymmetric */}
      <section className="relative border-[--border] border-b overflow-hidden">
        {/* Decorative line pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, var(--foreground) 0px, var(--foreground) 1px, transparent 1px, transparent 80px)",
            }}
          />
        </div>

        <div className="relative mx-auto px-6 py-28 sm:py-36 max-w-6xl">
          <div className="max-w-2xl">
            <p className="mb-4 font-medium text-[--primary] text-sm uppercase tracking-[0.2em]">
              Sviluppo &amp; Intelligenza Artificiale
            </p>
            <h1 className="mb-8 font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-tight">
              Impara a sviluppare
              <br />
              <span className="text-[--primary]">con l&apos;AI</span>
            </h1>
            <p className="mb-10 max-w-lg text-[--muted-foreground] text-lg leading-relaxed">
              Articoli, best practice e idee per integrare l&apos;intelligenza
              artificiale nel tuo workflow di sviluppo.
            </p>
            <Link
              href="/articles"
              className="group inline-flex items-center gap-3 pb-1 border-[--foreground] hover:border-[--primary] border-b-2 font-medium hover:text-[--primary] text-sm uppercase tracking-wider transition-colors"
            >
              Esplora gli articoli
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto px-6 py-20 max-w-6xl">
        <div className="flex justify-between items-end mb-12">
          <div>
            <p className="mb-2 font-medium text-[--primary] text-xs uppercase tracking-[0.2em]">
              {featuredArticles.length > 0 ? "In evidenza" : "Recenti"}
            </p>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              {featuredArticles.length > 0
                ? "Articoli selezionati"
                : "Ultimi articoli"}
            </h2>
          </div>
          <Link
            href="/articles"
            className="hidden sm:block text-[--muted-foreground] hover:text-[--foreground] text-sm underline underline-offset-4 transition-colors"
          >
            Vedi tutti
          </Link>
        </div>

        {displayArticles.length > 0 ? (
          <div className="gap-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[--border] border border-[--border] rounded-xl overflow-hidden">
            {displayArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-[--muted-foreground] text-center">
            <p className="text-lg italic">Nessun articolo ancora pubblicato.</p>
            <p className="mt-2 text-sm">Torna presto!</p>
          </div>
        )}

        <div className="sm:hidden mt-8 text-center">
          <Link
            href="/articles"
            className="text-[--muted-foreground] hover:text-[--foreground] text-sm underline underline-offset-4 transition-colors"
          >
            Vedi tutti gli articoli
          </Link>
        </div>
      </section>

      {/* Topics — refined editorial grid */}
      <section className="bg-[--card] border-[--border] border-t">
        <div className="mx-auto px-6 py-20 max-w-6xl">
          <p className="mb-2 font-medium text-[--primary] text-xs uppercase tracking-[0.2em]">
            Argomenti
          </p>
          <h2 className="mb-14 font-display text-3xl sm:text-4xl tracking-tight">
            Di cosa parliamo
          </h2>

          <div className="gap-12 md:gap-8 grid grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Workflow & Processi",
                description:
                  "Come integrare l'AI nel tuo ciclo di sviluppo senza perdere il controllo del codice.",
                number: "01",
              },
              {
                title: "Architettura",
                description:
                  "Strutturare codebase leggibili e navigabili anche per gli agenti AI.",
                number: "02",
              },
              {
                title: "Best Practice",
                description:
                  "Errori comuni da evitare e pattern da adottare quando lavori con modelli LLM.",
                number: "03",
              },
            ].map((topic) => (
              <div key={topic.title} className="group">
                <span className="block mb-4 font-mono text-[--primary] text-xs">
                  {topic.number}
                </span>
                <h3 className="mb-3 font-medium text-lg tracking-tight">
                  {topic.title}
                </h3>
                <p className="text-[--muted-foreground] text-sm leading-relaxed">
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
