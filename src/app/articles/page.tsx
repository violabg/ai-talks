import { ArticleCard } from "@/components/article-card";
import { ArticleSearch } from "@/components/article-search";
import { getAllArticles } from "@/lib/articles";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Articoli",
  description: "Tutti gli articoli su AI, sviluppo e best practice.",
};

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function ArticlesPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const allArticles = getAllArticles();

  const articles = q
    ? allArticles.filter(({ frontmatter }) => {
        const query = q.toLowerCase();
        return (
          frontmatter.title.toLowerCase().includes(query) ||
          frontmatter.description.toLowerCase().includes(query) ||
          frontmatter.tags?.some((tag) => tag.toLowerCase().includes(query))
        );
      })
    : allArticles;

  return (
    <div className="mx-auto px-6 py-20 max-w-6xl">
      <div className="mb-10">
        <p className="mb-2 font-medium text-[--primary] text-xs uppercase tracking-[0.2em]">
          Archivio
        </p>
        <h1 className="mb-4 font-display text-4xl sm:text-5xl tracking-tight">
          Articoli
        </h1>
        <p className="max-w-lg text-[--muted-foreground] text-lg">
          Guide pratiche, best practice e idee per sviluppare con
          l&apos;intelligenza artificiale.
        </p>
      </div>

      <div className="mb-8">
        <Suspense fallback={null}>
          <ArticleSearch />
        </Suspense>
      </div>

      {articles.length > 0 ? (
        <div className="gap-px grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[--border] border border-[--border] rounded-xl overflow-hidden">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="py-20 text-[--muted-foreground] text-center">
          {q ? (
            <>
              <p className="text-lg italic">
                Nessun articolo trovato per &ldquo;{q}&rdquo;.
              </p>
              <p className="mt-2 text-sm">Prova con un termine diverso.</p>
            </>
          ) : (
            <>
              <p className="text-lg italic">
                Nessun articolo ancora pubblicato.
              </p>
              <p className="mt-2 text-sm">Torna presto!</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
