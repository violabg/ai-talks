import * as motion from "motion/react-client";
import type { ReactNode } from "react";

export const COLORS = {
  bg: "var(--pres-bg)",
  text: "var(--pres-text)",
  muted: "var(--pres-muted)",
  accent: "var(--pres-accent)",
  success: "var(--pres-success)",
  warning: "var(--pres-warning)",
  danger: "var(--pres-danger)",
  border: "var(--pres-border)",
} as const;

export function FadeIn({
  delay = 0,
  children,
  className,
}: {
  delay?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInLeft({
  delay = 0,
  children,
  className,
}: {
  delay?: number;
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -18 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
