import { getAllArticles } from "@/lib/articles"
import { ArticleCard } from "@/components/article-card"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Articoli",
  description: "Tutti gli articoli su AI, sviluppo e best practice.",
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Articoli</h1>
        <p className="text-[--muted-foreground] text-lg">
          Guide pratiche, best practice e idee per sviluppare con l&apos;intelligenza artificiale.
        </p>
      </div>

      {articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-[--muted-foreground]">
          <p className="text-lg">Nessun articolo ancora pubblicato.</p>
          <p className="text-sm mt-2">Torna presto!</p>
        </div>
      )}
    </div>
  )
}
