import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import {
  AnimatedBlockquote,
  AnimatedH2,
  AnimatedH3,
  AnimatedHr,
  AnimatedLi,
  AnimatedOl,
  AnimatedP,
  AnimatedPre,
  AnimatedUl,
} from "@/components/mdx-animated";

export const mdxComponents: MDXComponents = {
  // ── Headings ──────────────────────────────────────────────────────────────
  h2: AnimatedH2,
  h3: AnimatedH3,

  // ── Body text ─────────────────────────────────────────────────────────────
  p: AnimatedP,

  // ── Lists ─────────────────────────────────────────────────────────────────
  ul: AnimatedUl,
  ol: AnimatedOl,
  li: AnimatedLi,

  // ── Block elements with custom styling ────────────────────────────────────
  blockquote: AnimatedBlockquote,

  pre: ({ children, className, ...props }) => (
    <AnimatedPre
      {...props}
      className={cn(
        "bg-muted p-5 border border-border rounded-lg! overflow-x-auto font-mono text-sm leading-relaxed",
        className,
      )}
    >
      {children}
    </AnimatedPre>
  ),

  hr: ({ className, ...props }) => (
    <AnimatedHr
      className={cn(
        "bg-linear-to-r from-transparent to-transparent my-12 via-border border-none h-px",
        className,
      )}
      {...props}
    />
  ),

  // ── Image ─────────────────────────────────────────────────────────────────
  // Wrapped in a motion.span for a subtle fade + scale entrance.
  // The outer <span> provides the block layout; the motion animation sits on
  // the same element so no extra wrapper div pollutes the prose flow.
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

  // ── Table ─────────────────────────────────────────────────────────────────
  // Kept as-is (no animation) — the wrapper div would need "use client" for
  // motion, and tables are uncommon enough that the prose rendering is fine.
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

  // ── Links ─────────────────────────────────────────────────────────────────
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
