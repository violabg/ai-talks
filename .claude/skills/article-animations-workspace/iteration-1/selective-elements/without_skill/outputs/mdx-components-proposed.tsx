import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { animatedMdxComponents } from "@/components/mdx-animated";

// ---------------------------------------------------------------------------
// Static (non-animated) component overrides
// ---------------------------------------------------------------------------

const staticMdxComponents: MDXComponents = {
  blockquote: ({ children }) => (
    <blockquote className="pl-6 border-primary border-l-[3px] font-medium text-[--foreground]/80 text-[1.1em] not-italic leading-relaxed">
      {children}
    </blockquote>
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

// ---------------------------------------------------------------------------
// Merged export — animated components take precedence over static ones for
// the elements that have scroll-triggered entrance animations (h2, h3, img,
// pre). All other elements fall through to the static overrides above.
// ---------------------------------------------------------------------------

export const mdxComponents: MDXComponents = {
  ...staticMdxComponents,
  ...animatedMdxComponents,
};
