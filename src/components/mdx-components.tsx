import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import {
  AnimatedBlockquote,
  AnimatedH2,
  AnimatedH3,
  AnimatedHr,
  AnimatedImg,
  AnimatedLi,
  AnimatedOl,
  AnimatedP,
  AnimatedPre,
  AnimatedTable,
  AnimatedUl,
} from "./mdx-animated";

export const mdxComponents: MDXComponents = {
  h2: AnimatedH2,
  h3: AnimatedH3,
  p: AnimatedP,
  ul: AnimatedUl,
  ol: AnimatedOl,
  li: AnimatedLi,
  blockquote: AnimatedBlockquote,
  pre: AnimatedPre,
  table: AnimatedTable,
  hr: AnimatedHr,
  img: AnimatedImg,
  th: ({ children }) => (
    <th className="bg-muted px-4 py-2.5 border-border border-b font-semibold text-xs text-left uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-2.5 border-border border-b">{children}</td>
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
