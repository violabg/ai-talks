/**
 * mdx-components-proposed.tsx
 *
 * Complete updated version of src/components/mdx-components.tsx.
 * Drop this file in place of the original to activate all scroll-triggered
 * animations on MDX article content.
 *
 * Animated elements:
 *   h2, h3, h4   — fade up + underline accent grow
 *   blockquote   — slide in from left
 *   pre          — fade up (code blocks)
 *   ul, ol       — staggered children
 *   li           — stagger item (picks up parent container signal)
 *   hr           — scale-X grow from center
 *   table        — fade in as unit
 *   img          — scale + fade
 *   a            — unchanged (interactive, no scroll trigger needed)
 *   th, td       — unchanged (no per-cell animation to avoid noise)
 *
 * All animations play once (viewport: { once: true }) — safe for SSR + RSC
 * because the animated components carry "use client" inside mdx-animated.tsx.
 */

import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import {
  AnimatedBlockquote,
  AnimatedH2,
  AnimatedH3,
  AnimatedH4,
  AnimatedHr,
  AnimatedImgWrapper,
  AnimatedLi,
  AnimatedOl,
  AnimatedPre,
  AnimatedTable,
  AnimatedUl,
} from "./mdx-animated";

export const mdxComponents: MDXComponents = {
  // -------------------------------------------------------------------------
  // Images
  // -------------------------------------------------------------------------
  img: ({ src, alt }) => (
    <AnimatedImgWrapper caption={alt}>
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={800}
        height={450}
        className="rounded-[--radius-lg] ring-[--border] ring-1 w-full object-cover"
      />
    </AnimatedImgWrapper>
  ),

  // -------------------------------------------------------------------------
  // Headings
  // -------------------------------------------------------------------------
  h2: ({ children, id, className }) => (
    <AnimatedH2 id={id} className={className}>
      {children}
    </AnimatedH2>
  ),
  h3: ({ children, id, className }) => (
    <AnimatedH3 id={id} className={className}>
      {children}
    </AnimatedH3>
  ),
  h4: ({ children, id, className }) => (
    <AnimatedH4 id={id} className={className}>
      {children}
    </AnimatedH4>
  ),

  // -------------------------------------------------------------------------
  // Blockquote
  // -------------------------------------------------------------------------
  blockquote: ({ children, className }) => (
    <AnimatedBlockquote className={className}>{children}</AnimatedBlockquote>
  ),

  // -------------------------------------------------------------------------
  // Code blocks
  // -------------------------------------------------------------------------
  pre: ({ children, className, ...props }) => (
    <AnimatedPre className={className} {...props}>
      {children}
    </AnimatedPre>
  ),

  // -------------------------------------------------------------------------
  // Lists (staggered)
  // -------------------------------------------------------------------------
  ul: ({ children, className }) => (
    <AnimatedUl className={className}>{children}</AnimatedUl>
  ),
  ol: ({ children, className }) => (
    <AnimatedOl className={className}>{children}</AnimatedOl>
  ),
  li: ({ children, className }) => (
    <AnimatedLi className={className}>{children}</AnimatedLi>
  ),

  // -------------------------------------------------------------------------
  // Divider
  // -------------------------------------------------------------------------
  hr: () => <AnimatedHr />,

  // -------------------------------------------------------------------------
  // Table
  // -------------------------------------------------------------------------
  table: ({ children }) => <AnimatedTable>{children}</AnimatedTable>,
  th: ({ children }) => (
    <th className="bg-muted px-4 py-2.5 border-border border-b font-semibold text-xs text-left uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2.5 border-border border-b">{children}</td>
  ),

  // -------------------------------------------------------------------------
  // Links — no animation, preserve exact original behaviour
  // -------------------------------------------------------------------------
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
};
