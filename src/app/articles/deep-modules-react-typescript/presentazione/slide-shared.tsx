import { FadeIn } from "@/components/presentation/slide-primitives";
export { FadeIn };

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

export { ArrowTip } from "@/components/presentation/slide-primitives";
