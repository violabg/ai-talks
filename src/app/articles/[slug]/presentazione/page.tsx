import { Presentation } from "@/components/presentation";
import { getArticleSource } from "@/lib/articles";
import {
  getAllPresentationSlugs,
  getPresentation,
} from "@/lib/presentations";
import type { ArticleFrontmatter } from "@/types/article";
import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return getAllPresentationSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const source = getArticleSource(slug);
    const { frontmatter } = await compileMDX<ArticleFrontmatter>({
      source,
      options: { parseFrontmatter: true },
    });
    return {
      title: `Presentazione: ${frontmatter.title}`,
      description: frontmatter.description,
    };
  } catch {
    return { title: "Presentazione non trovata" };
  }
}

export default async function PresentazionePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let presentation;
  try {
    presentation = getPresentation(slug);
  } catch {
    notFound();
  }

  return <Presentation slides={presentation.slides} slug={slug} />;
}
