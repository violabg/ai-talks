export function MigrareLibrerieConAi() {
  // Each box = 12 chars, gap = 5 chars, total = 29
  return (
    <pre className="mx-auto w-fit whitespace-pre">
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
      <span className="text-muted-foreground/50">
        {"─────────────────────────────"}
      </span>
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
  );
}
