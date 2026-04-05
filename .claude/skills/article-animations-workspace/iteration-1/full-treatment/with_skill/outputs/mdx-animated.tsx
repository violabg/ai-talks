"use client";

import * as motion from "motion/react-client";
import type React from "react";
import { cn } from "@/lib/utils";

// ─── Headings ─────────────────────────────────────────────────────────────────

export function AnimatedH2({ children, ...props }: React.ComponentProps<"h2">) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.h2>
  );
}

export function AnimatedH3({ children, ...props }: React.ComponentProps<"h3">) {
  return (
    <motion.h3
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.h3>
  );
}

// ─── Paragraph ────────────────────────────────────────────────────────────────
// Fade only — vertical movement on every paragraph would feel jittery.

export function AnimatedP({ children, ...props }: React.ComponentProps<"p">) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.p>
  );
}

// ─── Blockquote ───────────────────────────────────────────────────────────────
// Slide from the left to echo the visual left border.

export function AnimatedBlockquote({
  children,
  className,
  ...props
}: React.ComponentProps<"blockquote">) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "pl-6 border-primary border-l-[3px] font-medium text-[--foreground]/80 text-[1.1em] not-italic leading-relaxed",
        className,
      )}
      {...props}
    >
      {children}
    </motion.blockquote>
  );
}

// ─── Code block ───────────────────────────────────────────────────────────────

export function AnimatedPre({
  children,
  className,
  ...props
}: React.ComponentProps<"pre">) {
  return (
    <motion.pre
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className={cn(
        "bg-muted p-5 border border-border rounded-lg! overflow-x-auto font-mono text-sm leading-relaxed",
        className,
      )}
      {...props}
    >
      {children}
    </motion.pre>
  );
}

// ─── Image wrapper ────────────────────────────────────────────────────────────
// Subtle scale + fade so the image visually "lands".

export function AnimatedFigure({
  children,
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("block my-10 not-prose", className)}
      {...props}
    >
      {children}
    </motion.span>
  );
}

// ─── Lists with staggered children ────────────────────────────────────────────

const listContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export function AnimatedUl({
  children,
  ...props
}: React.ComponentProps<"ul">) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={listContainerVariants}
      {...props}
    >
      {children}
    </motion.ul>
  );
}

export function AnimatedOl({
  children,
  ...props
}: React.ComponentProps<"ol">) {
  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={listContainerVariants}
      {...props}
    >
      {children}
    </motion.ol>
  );
}

export function AnimatedLi({
  children,
  ...props
}: React.ComponentProps<"li">) {
  return (
    <motion.li variants={listItemVariants} {...props}>
      {children}
    </motion.li>
  );
}

// ─── Table wrapper ────────────────────────────────────────────────────────────

export function AnimatedTableWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="my-6 border border-border rounded-lg overflow-x-auto"
    >
      <table className="w-full text-sm border-collapse">{children}</table>
    </motion.div>
  );
}

// ─── Horizontal rule ──────────────────────────────────────────────────────────
// Draws itself outward from the center.

export function AnimatedHr({
  className,
  ...props
}: React.ComponentProps<"hr">) {
  return (
    <motion.hr
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0.5 }}
      className={cn(
        "bg-linear-to-r from-transparent to-transparent my-12 via-border border-none h-px",
        className,
      )}
      {...props}
    />
  );
}
