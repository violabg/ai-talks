import { ArticleToggle } from "@/components/admin/publish-toggle"
import { SyncButton } from "@/components/admin/sync-button"
import { formatArticleDateTime, getAllArticlesUnfiltered } from "@/lib/articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Admin — Articoli",
}

export default async function AdminPage() {
  const articles = await getAllArticlesUnfiltered()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="font-display font-semibold text-2xl tracking-tight">
            Articoli
          </h1>
          <p className="mt-1 text-muted-foreground text-sm">
            {articles.length} articol{articles.length === 1 ? "o" : "i"} totali
          </p>
        </div>
        <SyncButton />
      </div>

      {/* Header row */}
      <div className="flex items-center gap-4 mb-2 px-4">
        <div className="flex-1" />
        <span className="w-28 font-mono text-muted-foreground text-xs text-center">
          pubblicato
        </span>
        <span className="w-28 font-mono text-muted-foreground text-xs text-center">
          in evidenza
        </span>
      </div>

      <div className="space-y-2">
        {articles.map((article) => {
          const effectivePublished =
            article.kvPublished ?? article.frontmatter.published ?? false
          const effectiveFeatured =
            article.kvFeatured ?? article.frontmatter.featured ?? false

          return (
            <div
              key={article.slug}
              className="flex items-center gap-4 bg-card p-4 border border-border rounded-lg"
            >
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">
                  {article.frontmatter.title}
                </p>
                <p className="mt-0.5 font-mono text-muted-foreground text-xs truncate">
                  {article.slug}
                  {" · "}
                  {formatArticleDateTime(article.frontmatter.date)}
                  {article.kvPublished === null && (
                    <span className="ml-2 text-amber-500">⚠ non in KV</span>
                  )}
                </p>
              </div>

              <div className="w-28 flex justify-center">
                <ArticleToggle
                  slug={article.slug}
                  field="published"
                  initialValue={effectivePublished}
                  onLabel="live"
                  offLabel="draft"
                  onColor="bg-primary"
                />
              </div>

              <div className="w-28 flex justify-center">
                <ArticleToggle
                  slug={article.slug}
                  field="featured"
                  initialValue={effectiveFeatured}
                  onLabel="★ sì"
                  offLabel="no"
                  onColor="bg-amber-500"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
