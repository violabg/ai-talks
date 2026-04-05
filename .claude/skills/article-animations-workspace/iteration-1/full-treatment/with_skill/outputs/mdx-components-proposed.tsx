import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import {
  AnimatedBlockquote,
  AnimatedFigure,
  AnimatedH2,
  AnimatedH3,
  AnimatedHr,
  AnimatedLi,
  AnimatedOl,
  AnimatedP,
  AnimatedPre,
  AnimatedTableWrapper,
  AnimatedUl,
} from "@/components/mdx-animated";

export const mdxComponents: MDXComponents = {
  // ── Image: subtle scale + fade entrance ───────────────────────────────────
  img: ({ src, alt }) => (
    <AnimatedFigure>
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={800}
        height={450}
        className="rounded-[--radius-lg] ring-[--border] ring-1 w-full object-cover"
      />
      {alt && (
        <span className="block mt-3 text-[--muted-foreground] text-sm text-center italic">
          {alt}
        </span>
      )}
    </AnimatedFigure>
  ),

  // ── Blockquote: slide from left ────────────────────────────────────────────
  blockquote: ({ children }) => (
    <AnimatedBlockquote>{children}</AnimatedBlockquote>
  ),

  // ── Code blocks: fade + rise ───────────────────────────────────────────────
  pre: ({ children, className, ...props }) => (
    <AnimatedPre className={cn(className)} {...props}>
      {children}
    </AnimatedPre>
  ),

  // ── Table: fade + rise wrapper ─────────────────────────────────────────────
  table: ({ children }) => (
    <AnimatedTableWrapper>{children}</AnimatedTableWrapper>
  ),
  th: ({ children }) => (
    <th className="bg-muted px-4 py-2.5 border-border border-b font-semibold text-xs text-left uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2.5 border-border border-b">{children}</td>
  ),

  // ── Horizontal rule: draws itself from the center outward ──────────────────
  hr: () => <AnimatedHr />,

  // ── Links: no animation — inline elements inherit parent animation ─────────
  a: ({ href, children, ...props }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        href={href}
        {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
        {...props}
      >
        {children}
        {isExternal && (
          <ExternalLink
            className="inline-block opacity-60 mb-0.5 ml-1 size-3 text-foreground"
            aria-hidden="true"
          />
        )}
      </a>
    );
  },

  // ── Headings: fade + rise to signal section transitions ───────────────────
  h2: ({ children, ...props }) => (
    <AnimatedH2 {...props}>{children}</AnimatedH2>
  ),
  h3: ({ children, ...props }) => (
    <AnimatedH3 {...props}>{children}</AnimatedH3>
  ),

  // ── Paragraph: fade only (no vertical shift — too many of them) ───────────
  p: ({ children, ...props }) => <AnimatedP {...props}>{children}</AnimatedP>,

  // ── Lists: container fades in, items stagger sequentially ─────────────────
  ul: ({ children, ...props }) => (
    <AnimatedUl {...props}>{children}</AnimatedUl>
  ),
  ol: ({ children, ...props }) => (
    <AnimatedOl {...props}>{children}</AnimatedOl>
  ),
  li: ({ children, ...props }) => (
    <AnimatedLi {...props}>{children}</AnimatedLi>
  ),
};
