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
    <>
      {/* ── Content area ── */}
      <div className="mx-auto px-6 py-12 max-w-7xl">
        {/* Search + article count row */}
        <div className="flex justify-between items-center gap-4 mb-8">
          <Suspense fallback={null}>
            <ArticleSearch />
          </Suspense>
          <span className="hidden sm:block font-mono text-muted-foreground text-xs">
            {articles.length} articol{articles.length === 1 ? "o" : "i"}
          </span>
        </div>

        {articles.length > 0 ? (
          <div className="gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <div className="py-20 font-sans text-muted-foreground text-center">
            {q ? (
              <>
                <p className="text-lg">
                  Nessun articolo trovato per &ldquo;{q}&rdquo;.
                </p>
                <p className="mt-2 text-sm">Prova con un termine diverso.</p>
              </>
            ) : (
              <>
                <p className="text-lg">Nessun articolo ancora pubblicato.</p>
                <p className="mt-2 text-sm">Torna presto!</p>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
