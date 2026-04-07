import * as motion from "motion/react-client";
import type { ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SlideTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto w-full max-w-6xl">
      <FadeIn>
        <p className="mb-4 font-mono text-[var(--pres-accent)] text-xs uppercase tracking-[0.28em]">
          {eyebrow}
        </p>
      </FadeIn>
      <FadeIn delay={0.08}>
        <h2 className="font-semibold text-3xl sm:text-4xl lg:text-5xl tracking-tight">
          {title}
        </h2>
      </FadeIn>
      {subtitle && (
        <FadeIn delay={0.16}>
          <p className="mt-4 max-w-3xl text-[var(--pres-muted)] text-base sm:text-lg">
            {subtitle}
          </p>
        </FadeIn>
      )}
    </div>
  );
}
