"use client";

/**
 * mdx-animated.tsx
 *
 * Animated MDX element wrappers that use scroll-triggered fade/rise transitions.
 * Uses `motion/react-client` (motion v12) with `whileInView` so each element
 * animates in once as the reader scrolls past it.
 *
 * Usage: import these wrappers in your mdx-components.tsx and substitute them
 * for the plain HTML elements in the `mdxComponents` map.
 */

import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import type { ComponentPropsWithoutRef } from "react";

// ---------------------------------------------------------------------------
// Shared animation config
// ---------------------------------------------------------------------------

const FADE_RISE = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 } as const,
} satisfies Pick<
  React.ComponentProps<typeof motion.div>,
  "initial" | "whileInView" | "viewport"
>;

/** Build a transition with an optional stagger delay (ms). */
function transition(delayMs = 0) {
  return { duration: 0.5, ease: "easeOut", delay: delayMs / 1000 };
}

// ---------------------------------------------------------------------------
// Animated heading wrappers
// ---------------------------------------------------------------------------

export function AnimatedH2({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <motion.h2
      {...FADE_RISE}
      transition={transition()}
      className={cn(className)}
      {...(props as object)}
    >
      {children}
    </motion.h2>
  );
}

export function AnimatedH3({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h3">) {
  return (
    <motion.h3
      {...FADE_RISE}
      transition={transition()}
      className={cn(className)}
      {...(props as object)}
    >
      {children}
    </motion.h3>
  );
}

export function AnimatedH4({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"h4">) {
  return (
    <motion.h4
      {...FADE_RISE}
      transition={transition()}
      className={cn(className)}
      {...(props as object)}
    >
      {children}
    </motion.h4>
  );
}

// ---------------------------------------------------------------------------
// Animated paragraph
// ---------------------------------------------------------------------------

export function AnimatedP({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"p">) {
  return (
    <motion.p
      {...FADE_RISE}
      transition={transition()}
      className={cn(className)}
      {...(props as object)}
    >
      {children}
    </motion.p>
  );
}

// ---------------------------------------------------------------------------
// Animated blockquote
// ---------------------------------------------------------------------------

export function AnimatedBlockquote({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <motion.blockquote
      {...FADE_RISE}
      // Slightly longer delay so it feels distinct from surrounding paragraphs
      transition={transition(60)}
      className={cn(
        "pl-6 border-primary border-l-[3px] font-medium text-[--foreground]/80 text-[1.1em] not-italic leading-relaxed",
        className,
      )}
      {...(props as object)}
    >
      {children}
    </motion.blockquote>
  );
}

// ---------------------------------------------------------------------------
// Animated code block (pre)
// ---------------------------------------------------------------------------

export function AnimatedPre({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"pre">) {
  return (
    <motion.pre
      {...FADE_RISE}
      transition={transition(40)}
      className={cn(
        "bg-muted p-5 border border-border rounded-lg! overflow-x-auto font-mono text-sm leading-relaxed",
        className,
      )}
      {...(props as object)}
    >
      {children}
    </motion.pre>
  );
}
