"use client";

import * as motion from "motion/react-client";

// AnimatedH2 — fade + rise for section headings
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

// AnimatedH3 — same treatment as h2, slightly faster
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

// AnimatedImg — fade + subtle scale for visual anchors
// Wraps a <span> because the img override renders a block <span> with caption.
export function AnimatedImgWrapper({ children, ...props }: React.ComponentProps<"span">) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{ display: "block" }}
      {...props}
    >
      {children}
    </motion.span>
  );
}

// AnimatedPre — fade + rise for code blocks (distinct content units)
export function AnimatedPre({ children, className, ...props }: React.ComponentProps<"pre">) {
  return (
    <motion.pre
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.pre>
  );
}
