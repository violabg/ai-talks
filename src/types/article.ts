export interface ArticleFrontmatter {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  published?: boolean
  featured?: boolean
  coverImage?: string
}

export interface Article {
  slug: string
  frontmatter: ArticleFrontmatter
  /** Effective published state from KV (overrides frontmatter when set) */
  kvPublished?: boolean | null
  /** Effective featured state from KV (overrides frontmatter when set) */
  kvFeatured?: boolean | null
}

export interface ArticleSection {
  id: string
  title: string
}
