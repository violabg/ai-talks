"use client";

import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

// ---------------------------------------------------------------------------
// Shared animation preset
// ---------------------------------------------------------------------------

const FADE_UP = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut" },
} as const;

// ---------------------------------------------------------------------------
// Animated heading wrappers
// ---------------------------------------------------------------------------

function AnimatedH2({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <motion.h2 {...FADE_UP} {...(props as object)}>
      {children}
    </motion.h2>
  );
}

function AnimatedH3({
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <motion.h3 {...FADE_UP} {...(props as object)}>
      {children}
    </motion.h3>
  );
}

// ---------------------------------------------------------------------------
// Animated image wrapper
// ---------------------------------------------------------------------------

function AnimatedImg({ src, alt }: { src?: string; alt?: string }) {
  return (
    <motion.span
      className="block my-10 not-prose"
      {...FADE_UP}
      // motion.span does not accept `as` — we cast via style override
      style={{ display: "block" }}
    >
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
    </motion.span>
  );
}

// ---------------------------------------------------------------------------
// Animated code block wrapper
// ---------------------------------------------------------------------------

function AnimatedPre({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) {
  return (
    <motion.pre
      {...FADE_UP}
      {...(props as object)}
      className={cn(
        "bg-muted p-5 border border-border rounded-lg! overflow-x-auto font-mono text-sm leading-relaxed",
        className,
      )}
    >
      {children}
    </motion.pre>
  );
}

// ---------------------------------------------------------------------------
// Exported animated MDX component overrides
// ---------------------------------------------------------------------------

export const animatedMdxComponents: MDXComponents = {
  h2: AnimatedH2,
  h3: AnimatedH3,
  img: AnimatedImg,
  pre: AnimatedPre,
};
