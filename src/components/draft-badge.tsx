import { Badge } from "@/components/ui/badge";

interface DraftBadgeProps {
  compact?: boolean;
}

export function DraftBadge({ compact = false }: DraftBadgeProps) {
  return (
    <Badge
      className={
        compact
          ? "border-amber-300/70 bg-amber-500/15 px-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-900 shadow-[inset_0_0_0_1px_color-mix(in_oklch,var(--color-amber-500)_18%,transparent)] dark:border-amber-400/45 dark:bg-amber-300/12 dark:text-amber-100"
          : "border-amber-300/80 bg-amber-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-amber-900 shadow-[0_10px_30px_-18px_color-mix(in_oklch,var(--color-amber-500)_70%,transparent),inset_0_0_0_1px_color-mix(in_oklch,var(--color-amber-500)_18%,transparent)] dark:border-amber-400/45 dark:bg-amber-300/12 dark:text-amber-100"
      }
    >
      <span className="bg-amber-600 dark:bg-amber-300 rounded-full size-1.5" />
      Draft
    </Badge>
  );
}
