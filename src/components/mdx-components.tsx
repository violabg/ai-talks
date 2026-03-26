import type { MDXComponents } from "mdx/types"
import Image from "next/image"

export const mdxComponents: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-3xl font-bold mt-10 mb-4 tracking-tight leading-tight">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-2xl font-semibold mt-10 mb-4 border-b border-[--border] pb-2">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold mt-6 mb-3">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-lg font-semibold mt-4 mb-2">{children}</h4>
  ),
  p: ({ children }) => (
    <p className="mb-5 leading-7 text-[--foreground]/90">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside ml-6 mb-5 space-y-1.5">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside ml-6 mb-5 space-y-1.5">{children}</ol>
  ),
  li: ({ children }) => (
    <li className="leading-7">{children}</li>
  ),
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-[--primary] pl-5 italic text-[--muted-foreground] my-6 py-1">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="bg-[--muted] rounded px-1.5 py-0.5 text-sm font-mono text-[--foreground]">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-[--muted] rounded-[--radius-lg] p-4 overflow-x-auto mb-5 text-sm font-mono">
      {children}
    </pre>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[--foreground]">{children}</strong>
  ),
  hr: () => <hr className="border-[--border] my-8" />,
  table: ({ children }) => (
    <div className="overflow-x-auto mb-5">
      <table className="w-full border-collapse text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th className="border border-[--border] bg-[--muted] px-4 py-2 text-left font-semibold">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="border border-[--border] px-4 py-2">{children}</td>
  ),
  img: ({ src, alt }) => (
    <span className="block my-8">
      <Image
        src={src ?? ""}
        alt={alt ?? ""}
        width={800}
        height={450}
        className="rounded-[--radius-lg] w-full object-cover"
      />
      {alt && (
        <span className="block text-center text-sm text-[--muted-foreground] mt-2 italic">
          {alt}
        </span>
      )}
    </span>
  ),
}
