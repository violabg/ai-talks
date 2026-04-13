export function MigrareLibrerieConAi() {
  // Each box = 12 chars, gap = 5 chars, total = 29
  return (
    <div className="relative bg-muted/30 dark:bg-muted/20 py-4 font-mono text-xs leading-tight select-none overflow-hidden" aria-hidden="true">
      <pre className="whitespace-pre mx-auto w-fit">
        <span className="text-chart-5">{"┌── v2.1 ──┐"}</span>
        <span className="text-muted-foreground/50">{"     "}</span>
        <span className="text-chart-2">{"┌── v5.0 ──┐"}</span>
        {"\n"}
        <span className="text-chart-5">{"│"}</span>
        <span className="text-muted-foreground/50">{" ░░░░░░░░ "}</span>
        <span className="text-chart-5">{"│"}</span>
        <span className="text-muted-foreground/50">{"     "}</span>
        <span className="text-chart-2">{"│"}</span>
        <span className="text-muted-foreground/50">{" ░░░░░░░░ "}</span>
        <span className="text-chart-2">{"│"}</span>
        {"\n"}
        <span className="text-chart-5">{"│"}</span>
        <span className="text-muted-foreground">{" outdated "}</span>
        <span className="text-chart-5">{"│"}</span>
        <span className="text-muted-foreground/50">{"     "}</span>
        <span className="text-chart-2">{"│"}</span>
        <span className="text-foreground">{" migrated "}</span>
        <span className="text-chart-2">{"│"}</span>
        {"\n"}
        <span className="text-chart-5">{"└──────────┘"}</span>
        <span className="text-muted-foreground/50">{"     "}</span>
        <span className="text-chart-2">{"└──────────┘"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"      ╲  ──────>  ╱"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"       "}</span>
        <span className="text-primary">{"codemod"}</span>
        <span className="text-muted-foreground/50">{" + "}</span>
        <span className="text-primary">{"AI"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"─────────────────────────────"}</span>
        {"\n"}
        <span className="text-chart-2">{"+"}</span>
        <span className="text-muted-foreground">{" types "}</span>
        <span className="text-chart-2">{"+"}</span>
        <span className="text-muted-foreground">{" tests "}</span>
        <span className="text-chart-2">{"+"}</span>
        <span className="text-muted-foreground">{" build "}</span>
        <span className="text-chart-2">{"+"}</span>
        <span className="text-muted-foreground">{" deploy"}</span>
      </pre>
    </div>
  )
}
