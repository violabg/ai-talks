export interface ArticleFrontmatter {
  title: string
  description: string
  date: string
  author: string
  tags: string[]
  featured?: boolean
  coverImage?: string
}

export interface Article {
  slug: string
  frontmatter: ArticleFrontmatter
}
