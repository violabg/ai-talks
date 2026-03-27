import { ArticleCard } from "@/components/article-card";
import { Button } from "@/components/ui/button";
import { getAllArticles, getFeaturedArticles } from "@/lib/articles";
import Link from "next/link";

export default function HomePage() {
  const featuredArticles = getFeaturedArticles();
  const recentArticles = getAllArticles().slice(0, 6);
  const displayArticles =
    featuredArticles.length > 0 ? featuredArticles : recentArticles;

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[--background] to-[--muted]/30 px-4 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-6 font-bold text-5xl leading-tight tracking-tight">
            Impara a sviluppare con l&apos;AI
          </h1>
          <p className="mb-8 text-[--muted-foreground] text-xl leading-relaxed">
            Articoli, best practice e idee per integrare l&apos;intelligenza
            artificiale nel tuo workflow di sviluppo.
          </p>
          <Button
            size="lg"
            nativeButton={false}
            render={<Link href="/articles">Esplora gli articoli</Link>}
          />
        </div>
      </section>

      {/* Articles Grid */}
      <section className="mx-auto px-4 py-16 w-full max-w-6xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-bold text-3xl">
            {featuredArticles.length > 0 ? "In evidenza" : "Articoli recenti"}
          </h2>
          <Button
            variant="outline"
            size="sm"
            nativeButton={false}
            render={<Link href="/articles">Vedi tutti</Link>}
          ></Button>
        </div>

        {displayArticles.length > 0 ? (
          <div className="gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {displayArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-[--muted-foreground] text-center">
            <p className="text-lg">Nessun articolo ancora pubblicato.</p>
            <p className="mt-2 text-sm">Torna presto!</p>
          </div>
        )}
      </section>

      {/* Topics Section */}
      <section className="bg-[--muted]/30 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 font-bold text-3xl text-center">
            Di cosa parliamo
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-[--muted-foreground] text-center">
            Esploriamo le sfide pratiche dello sviluppo con l&apos;AI: dai
            workflow alle architetture, dalle best practice agli strumenti.
          </p>
          <div className="gap-6 grid grid-cols-1 md:grid-cols-3">
            {[
              {
                title: "Workflow & Processi",
                description:
                  "Come integrare l'AI nel tuo ciclo di sviluppo senza perdere il controllo del codice.",
                icon: "⚙️",
              },
              {
                title: "Architettura",
                description:
                  "Strutturare codebase leggibili e navigabili anche per gli agenti AI.",
                icon: "🏗️",
              },
              {
                title: "Best Practice",
                description:
                  "Errori comuni da evitare e pattern da adottare quando lavori con modelli LLM.",
                icon: "✅",
              },
            ].map((topic) => (
              <div
                key={topic.title}
                className="bg-[--card] p-6 border border-[--border] rounded-[--radius-lg]"
              >
                <div className="mb-3 text-3xl">{topic.icon}</div>
                <h3 className="mb-2 font-semibold text-lg">{topic.title}</h3>
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
