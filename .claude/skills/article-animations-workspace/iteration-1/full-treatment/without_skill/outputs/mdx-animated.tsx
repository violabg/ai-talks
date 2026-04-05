"use client";

/**
 * mdx-animated.tsx
 *
 * Scroll-triggered animated wrappers for MDX content elements.
 * Built on top of Motion (motion/react-client) — already a project dependency.
 *
 * All animations use `whileInView` with `once: true` so they play exactly once
 * as the element scrolls into the viewport. No layout shift: initial states use
 * opacity + transform only (no height/width changes).
 *
 * Usage: import individual components and use them as MDX component overrides
 * inside mdxComponents (see mdx-components-proposed.tsx).
 */

import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// ---------------------------------------------------------------------------
// Shared transition presets
// ---------------------------------------------------------------------------

const EASE_OUT = [0.16, 1, 0.3, 1] as const; // snappy ease-out-expo feel

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.55, ease: EASE_OUT, delay },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const slideLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -16 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE_OUT, delay },
});

// ---------------------------------------------------------------------------
// AnimatedH2
// ---------------------------------------------------------------------------

/**
 * Animated <h2>. Slides up + fades in.
 * Includes a subtle left-bar accent that grows in width on enter.
 */
export function AnimatedH2({
  children,
  className,
  id,
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <motion.h2
      id={id}
      className={cn("group relative", className)}
      {...fadeUp(0)}
    >
      {/* Animated underline accent */}
      <motion.span
        aria-hidden="true"
        className="absolute -bottom-1 left-0 h-[2px] bg-primary/40 rounded-full"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay: 0.15 }}
        style={{ width: "100%" }}
      />
      {children}
    </motion.h2>
  );
}

// ---------------------------------------------------------------------------
// AnimatedH3
// ---------------------------------------------------------------------------

export function AnimatedH3({
  children,
  className,
  id,
}: ComponentPropsWithoutRef<"h3">) {
  return (
    <motion.h3 id={id} className={cn(className)} {...fadeUp(0)}>
      {children}
    </motion.h3>
  );
}

// ---------------------------------------------------------------------------
// AnimatedH4
// ---------------------------------------------------------------------------

export function AnimatedH4({
  children,
  className,
  id,
}: ComponentPropsWithoutRef<"h4">) {
  return (
    <motion.h4 id={id} className={cn(className)} {...fadeUp(0)}>
      {children}
    </motion.h4>
  );
}

// ---------------------------------------------------------------------------
// AnimatedBlockquote
// ---------------------------------------------------------------------------

/**
 * Animated blockquote: slides in from the left and fades in.
 * Matches the existing border-left styling from mdx-components.tsx.
 */
export function AnimatedBlockquote({
  children,
  className,
}: ComponentPropsWithoutRef<"blockquote">) {
  return (
    <motion.blockquote
      className={cn(
        "pl-6 border-primary border-l-[3px] font-medium text-[--foreground]/80 text-[1.1em] not-italic leading-relaxed",
        className,
      )}
      {...slideLeft(0)}
    >
      {children}
    </motion.blockquote>
  );
}

// ---------------------------------------------------------------------------
// AnimatedPre  (code blocks)
// ---------------------------------------------------------------------------

/**
 * Animated <pre> (code blocks): fades in with a subtle upward drift.
 * Preserves all existing visual styles from the original pre override.
 */
export function AnimatedPre({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"pre">) {
  return (
    <motion.pre
      {...(props as object)}
      className={cn(
        "bg-muted p-5 border border-border rounded-lg! overflow-x-auto font-mono text-sm leading-relaxed",
        className,
      )}
      {...fadeUp(0)}
    >
      {children}
    </motion.pre>
  );
}

// ---------------------------------------------------------------------------
// AnimatedUl  (unordered lists with staggered children)
// ---------------------------------------------------------------------------

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: EASE_OUT },
  },
};

/**
 * Animated <ul>: the container observes the viewport and triggers a stagger
 * on direct <li> children as they enter the screen.
 */
export function AnimatedUl({
  children,
  className,
}: ComponentPropsWithoutRef<"ul">) {
  return (
    <motion.ul
      className={cn(className)}
      variants={listContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.ul>
  );
}

// ---------------------------------------------------------------------------
// AnimatedOl  (ordered lists with staggered children)
// ---------------------------------------------------------------------------

/**
 * Animated <ol>: same stagger pattern as AnimatedUl.
 */
export function AnimatedOl({
  children,
  className,
}: ComponentPropsWithoutRef<"ol">) {
  return (
    <motion.ol
      className={cn(className)}
      variants={listContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.ol>
  );
}

// ---------------------------------------------------------------------------
// AnimatedLi
// ---------------------------------------------------------------------------

/**
 * Animated <li>: picks up the stagger signal from AnimatedUl/AnimatedOl parent.
 * Falls back gracefully when used outside a variants container.
 */
export function AnimatedLi({
  children,
  className,
}: ComponentPropsWithoutRef<"li">) {
  return (
    <motion.li className={cn(className)} variants={listItemVariants}>
      {children}
    </motion.li>
  );
}

// ---------------------------------------------------------------------------
// AnimatedHr
// ---------------------------------------------------------------------------

/**
 * Animated <hr>: grows from the center outward as it enters the viewport.
 */
export function AnimatedHr() {
  return (
    <motion.hr
      className="bg-linear-to-r from-transparent to-transparent my-12 via-border border-none h-px"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.7, ease: EASE_OUT }}
      style={{ originX: "50%" }}
    />
  );
}

// ---------------------------------------------------------------------------
// AnimatedTable
// ---------------------------------------------------------------------------

/**
 * Animated table wrapper: fades in as a unit.
 */
export function AnimatedTable({
  children,
  className,
}: ComponentPropsWithoutRef<"table">) {
  return (
    <motion.div
      className={cn("my-6 border border-border rounded-lg overflow-x-auto", className)}
      {...fadeIn(0)}
    >
      <table className="w-full text-sm border-collapse">{children}</table>
    </motion.div>
  );
}

// ---------------------------------------------------------------------------
// AnimatedImg
// ---------------------------------------------------------------------------

/**
 * Animated image block: fades in with a gentle scale-up from 0.97 → 1.
 * Wraps the Next.js Image component (caller must supply the Image element).
 */
export function AnimatedImgWrapper({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <motion.span
      className="block my-10 not-prose"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      style={{ display: "block" }}
    >
      {children}
      {caption && (
        <span className="block mt-3 text-[--muted-foreground] text-sm text-center italic">
          {caption}
        </span>
      )}
    </motion.span>
  );
}
