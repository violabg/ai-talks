"use client";

import { cn } from "@/lib/utils";
import * as motion from "motion/react-client";
import Image from "next/image";

type ChildrenProps = {
  children?: React.ReactNode;
  className?: string;
  id?: string;
};

// Headings
export function AnimatedH2({ children, className, id }: ChildrenProps) {
  return (
    <motion.h2
      id={id}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.h2>
  );
}

export function AnimatedH3({ children, className, id }: ChildrenProps) {
  return (
    <motion.h3
      id={id}
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.h3>
  );
}

// Paragraphs — fade only, no vertical movement to avoid jitter
export function AnimatedP({ children, className }: ChildrenProps) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.p>
  );
}

// Blockquote — fade + slight slide from left
export function AnimatedBlockquote({ children }: ChildrenProps) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="pl-6 border-primary border-l-[3px] font-medium text-[--foreground]/80 text-[1.1em] not-italic leading-relaxed"
    >
      {children}
    </motion.blockquote>
  );
}

// Code blocks
export function AnimatedPre({ children, className }: ChildrenProps) {
  return (
    <motion.pre
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "bg-muted p-5 border border-border rounded-lg! overflow-x-auto font-mono text-sm leading-relaxed",
        className,
      )}
    >
      {children}
    </motion.pre>
  );
}

// Lists with staggered children
const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const listItemVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

export function AnimatedUl({ children, className }: ChildrenProps) {
  return (
    <motion.ul
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={listVariants}
    >
      {children}
    </motion.ul>
  );
}

export function AnimatedOl({ children, className }: ChildrenProps) {
  return (
    <motion.ol
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={listVariants}
    >
      {children}
    </motion.ol>
  );
}

export function AnimatedLi({ children, className }: ChildrenProps) {
  return (
    <motion.li className={className} variants={listItemVariants}>
      {children}
    </motion.li>
  );
}

// Table wrapper
export function AnimatedTable({ children }: ChildrenProps) {
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

// Horizontal rule — scale from center
export function AnimatedHr() {
  return (
    <motion.hr
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0.5 }}
      className="bg-linear-to-r from-transparent to-transparent my-12 via-border border-none h-px"
    />
  );
}

// Image with subtle scale
export function AnimatedImg({ src, alt }: { src?: string; alt?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="block my-10 not-prose"
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
