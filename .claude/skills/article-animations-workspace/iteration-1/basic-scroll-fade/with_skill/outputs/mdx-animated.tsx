"use client";

import * as motion from "motion/react-client";

// ─── Headings ────────────────────────────────────────────────────────────────

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
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.h3>
  );
}

// ─── Paragraph ───────────────────────────────────────────────────────────────

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

// ─── Blockquote ──────────────────────────────────────────────────────────────

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
      className={
        className ??
        "pl-6 border-primary border-l-[3px] font-medium text-[--foreground]/80 text-[1.1em] not-italic leading-relaxed"
      }
      {...props}
    >
      {children}
    </motion.blockquote>
  );
}

// ─── Code block (pre) ────────────────────────────────────────────────────────

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
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.pre>
  );
}

// ─── Lists ───────────────────────────────────────────────────────────────────

const listVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
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

export function AnimatedUl({ children, ...props }: React.ComponentProps<"ul">) {
  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={listVariants}
      {...props}
    >
      {children}
    </motion.ul>
  );
}

export function AnimatedOl({ children, ...props }: React.ComponentProps<"ol">) {
  return (
    <motion.ol
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={listVariants}
      {...props}
    >
      {children}
    </motion.ol>
  );
}

export function AnimatedLi({ children, ...props }: React.ComponentProps<"li">) {
  return (
    <motion.li variants={listItemVariants} {...props}>
      {children}
    </motion.li>
  );
}

// ─── Horizontal rule ─────────────────────────────────────────────────────────

export function AnimatedHr(props: React.ComponentProps<"hr">) {
  return (
    <motion.hr
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ originX: 0.5 }}
      {...props}
    />
  );
}
