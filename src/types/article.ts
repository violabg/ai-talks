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
}

export interface ArticleSection {
  id: string
  title: string
}
