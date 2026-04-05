import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import {
  AnimatedH2,
  AnimatedH3,
  AnimatedImgWrapper,
  AnimatedPre,
} from "@/components/mdx-animated";

export const mdxComponents: MDXComponents = {
  // --- Animated elements ---

  h2: AnimatedH2,
  h3: AnimatedH3,

  img: ({ src, alt }) => (
    <AnimatedImgWrapper className="block my-10 not-prose">
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
    </AnimatedImgWrapper>
  ),

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

  // --- Static elements (unchanged) ---

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
