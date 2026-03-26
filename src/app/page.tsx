import Link from "next/link"
import { getAllArticles, getFeaturedArticles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  const featuredArticles = getFeaturedArticles()
  const recentArticles = getAllArticles().slice(0, 6)
  const displayArticles = featuredArticles.length > 0 ? featuredArticles : recentArticles

  return (
    <>
      {/* Hero */}
      <section className="py-24 px-4 text-center bg-gradient-to-b from-[--background] to-[--muted]/30">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-5xl font-bold tracking-tight mb-6 leading-tight">
            Impara a sviluppare con l&apos;AI
          </h1>
          <p className="text-xl text-[--muted-foreground] mb-8 leading-relaxed">
            Articoli, best practice e idee per integrare l&apos;intelligenza
            artificiale nel tuo workflow di sviluppo.
          </p>
          <Button asChild size="lg">
            <Link href="/articles">Esplora gli articoli</Link>
          </Button>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-4 mx-auto max-w-6xl w-full">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">
            {featuredArticles.length > 0 ? "In evidenza" : "Articoli recenti"}
          </h2>
          <Button variant="outline" asChild>
            <Link href="/articles">Vedi tutti</Link>
          </Button>
        </div>

        {displayArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[--muted-foreground]">
            <p className="text-lg">Nessun articolo ancora pubblicato.</p>
            <p className="text-sm mt-2">Torna presto!</p>
          </div>
        )}
      </section>

      {/* Topics Section */}
      <section className="py-16 px-4 bg-[--muted]/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-center">Di cosa parliamo</h2>
          <p className="text-[--muted-foreground] text-center mb-10 max-w-2xl mx-auto">
            Esploriamo le sfide pratiche dello sviluppo con l&apos;AI: dai workflow
            alle architetture, dalle best practice agli strumenti.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                className="p-6 rounded-[--radius-lg] border border-[--border] bg-[--card]"
              >
                <div className="text-3xl mb-3">{topic.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{topic.title}</h3>
                <p className="text-sm text-[--muted-foreground] leading-relaxed">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
