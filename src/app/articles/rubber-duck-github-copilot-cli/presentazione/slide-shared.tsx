import * as motion from "motion/react-client";
import type { ReactNode } from "react";

export const RUBBER_DUCK_TAGS = [
  "GitHub Copilot",
  "CLI",
  "multi-modello",
  "review",
  "MCP",
];

export const palette = {
  operator: "var(--pres-accent)",
  reviewer: "var(--pres-blue)",
  success: "var(--pres-success)",
  danger: "var(--pres-danger)",
  warning: "var(--pres-warning)",
  muted: "var(--pres-muted)",
  border: "var(--pres-border)",
  text: "var(--pres-text)",
  textSub: "var(--pres-text-sub)",
};

export function SlideFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-full py-4 sm:py-5 mx-auto w-full max-w-6xl text-(--pres-text)">
      {children}
    </div>
  );
}

export function SlideHeading({
  eyebrow,
  title,
  description,
  titleClassName = "",
  descriptionClassName = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-6"
    >
      <div className="mb-3 font-mono text-(--pres-muted) text-sm uppercase tracking-[0.24em]">
        {eyebrow}
      </div>
      <h2
        className={`max-w-4xl font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-balance ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-3 max-w-3xl text-(--pres-text-sub) text-base sm:text-lg leading-relaxed ${descriptionClassName}`}
        >
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

export function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-(--pres-border) bg-[color:var(--pres-bg-card)] shadow-[0_20px_60px_color-mix(in_srgb,var(--pres-accent)_8%,transparent)] ${className}`}
    >
      {children}
    </div>
  );
}

export function fadeIn(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.45, delay },
  } as const;
}
