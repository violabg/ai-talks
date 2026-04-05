/**
 * mdx-components-proposed.tsx
 *
 * Full replacement for src/components/mdx-components.tsx that wires up
 * the animated element wrappers from mdx-animated.tsx.
 *
 * Animated elements:
 *   h2, h3, h4  — fade/rise on scroll
 *   p           — fade/rise on scroll
 *   blockquote  — fade/rise on scroll (slight delay)
 *   pre         — fade/rise on scroll (slight delay)
 *
 * Non-animated elements (unchanged from original):
 *   img, table, th, td, hr, a
 *
 * IMPORTANT: The animated wrappers are "use client" components. Next.js App
 * Router allows server components to import and render client components, so
 * this file itself can remain a plain (server-compatible) module — no
 * "use client" directive needed here.
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
  AnimatedP,
  AnimatedPre,
} from "./mdx-animated";

export const mdxComponents: MDXComponents = {
  // -------------------------------------------------------------------------
  // Animated headings
  // -------------------------------------------------------------------------
  h2: ({ children, className, ...props }) => (
    <AnimatedH2 className={cn(className)} {...props}>
      {children}
    </AnimatedH2>
  ),

  h3: ({ children, className, ...props }) => (
    <AnimatedH3 className={cn(className)} {...props}>
      {children}
    </AnimatedH3>
  ),

  h4: ({ children, className, ...props }) => (
    <AnimatedH4 className={cn(className)} {...props}>
      {children}
    </AnimatedH4>
  ),

  // -------------------------------------------------------------------------
  // Animated paragraph
  // -------------------------------------------------------------------------
  p: ({ children, className, ...props }) => (
    <AnimatedP className={cn(className)} {...props}>
      {children}
    </AnimatedP>
  ),

  // -------------------------------------------------------------------------
  // Animated blockquote (retains original styling)
  // -------------------------------------------------------------------------
  blockquote: ({ children }) => (
    <AnimatedBlockquote>{children}</AnimatedBlockquote>
  ),

  // -------------------------------------------------------------------------
  // Animated code block (retains original styling)
  // -------------------------------------------------------------------------
  pre: ({ children, className, ...props }) => (
    <AnimatedPre className={className} {...props}>
      {children}
    </AnimatedPre>
  ),

  // -------------------------------------------------------------------------
  // Unchanged elements
  // -------------------------------------------------------------------------
  img: ({ src, alt }) => (
    <span className="block my-10 not-prose">
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
    </span>
  ),

  table: ({ children }) => (
    <div className="my-6 border border-border rounded-lg overflow-x-auto">
      <table className="w-full text-sm border-collapse">{children}</table>
    </div>
  ),

  th: ({ children }) => (
    <th className="bg-muted px-4 py-2.5 border-border border-b font-semibold text-xs text-left uppercase tracking-wider">
      {children}
    </th>
  ),

  td: ({ children }) => (
    <td className="px-4 py-2.5 border-border border-b">{children}</td>
  ),

  hr: () => (
    <hr className="bg-linear-to-r from-transparent to-transparent my-12 via-border border-none h-px" />
  ),

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
