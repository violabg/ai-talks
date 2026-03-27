import type { MDXComponents } from "mdx/types"
import Image from "next/image"

export const mdxComponents: MDXComponents = {
  img: ({ src, alt }) => (
    <span className="my-10 block not-prose">
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={800}
        height={450}
        className="w-full rounded-[--radius-lg] object-cover ring-1 ring-[--border]"
      />
      {alt && (
        <span className="mt-3 block text-center text-sm italic text-[--muted-foreground]">
          {alt}
        </span>
      )}
    </span>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-[3px] border-[--primary] pl-6 not-italic font-medium text-[1.1em] leading-relaxed text-[--foreground]/80">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="rounded-[--radius-lg] border border-[--border] bg-[--muted] p-5 overflow-x-auto text-sm font-mono leading-relaxed">
      {children}
    </pre>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-[--radius-lg] border border-[--border]">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border-b border-[--border] bg-[--muted] px-4 py-2.5 text-left text-xs font-semibold uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border-b border-[--border] px-4 py-2.5">{children}</td>
  ),
  hr: () => (
    <hr className="my-12 border-none h-px bg-linear-to-r from-transparent via-[--border] to-transparent" />
  ),
}
