export function CliVsIdeAgentiAi() {
  // Each box = 15 chars, gap = 2 chars, total = 32
  return (
    <pre className="mx-auto w-fit whitespace-pre">
      <span className="text-chart-3">{"╭─ CLI ───────╮"}</span>
      <span className="text-muted-foreground">{"  "}</span>
      <span className="text-chart-1">{"╭─ IDE ───────╮"}</span>
      {"\n"}
      <span className="text-chart-3">{"│"}</span>
      <span className="text-muted-foreground">{" $ "}</span>
      <span className="text-foreground">{"claude"}</span>
      <span className="text-muted-foreground">{"    "}</span>
      <span className="text-chart-3">{"│"}</span>
      <span className="text-muted-foreground">{"  "}</span>
      <span className="text-chart-1">{"│"}</span>
      <span className="text-muted-foreground/50">{" ┌─────────┐ "}</span>
      <span className="text-chart-1">{"│"}</span>
      {"\n"}
      <span className="text-chart-3">{"│"}</span>
      <span className="text-chart-2">{" > "}</span>
      <span className="text-muted-foreground">{"reading.. "}</span>
      <span className="text-chart-3">{"│"}</span>
      <span className="text-muted-foreground">{"  "}</span>
      <span className="text-chart-1">{"│"}</span>
      <span className="text-muted-foreground/50">{" │ "}</span>
      <span className="text-chart-1">{"code"}</span>
      <span className="text-muted-foreground/50">{"    │ "}</span>
      <span className="text-chart-1">{"│"}</span>
      {"\n"}
      <span className="text-chart-3">{"│"}</span>
      <span className="text-chart-2">{" > "}</span>
      <span className="text-muted-foreground">{"editing.. "}</span>
      <span className="text-chart-3">{"│"}</span>
      <span className="text-muted-foreground">{"  "}</span>
      <span className="text-chart-1">{"│"}</span>
      <span className="text-muted-foreground/50">{" │  "}</span>
      <span className="text-muted-foreground">{"░░░░░"}</span>
      <span className="text-muted-foreground/50">{"  │ "}</span>
      <span className="text-chart-1">{"│"}</span>
      {"\n"}
      <span className="text-chart-3">{"│"}</span>
      <span className="text-chart-2">{" + "}</span>
      <span className="text-foreground">{"done"}</span>
      <span className="text-muted-foreground">{"      "}</span>
      <span className="text-chart-3">{"│"}</span>
      <span className="text-muted-foreground">{"  "}</span>
      <span className="text-chart-1">{"│"}</span>
      <span className="text-muted-foreground/50">{" └─────────┘ "}</span>
      <span className="text-chart-1">{"│"}</span>
      {"\n"}
      <span className="text-chart-3">{"╰─────────────╯"}</span>
      <span className="text-muted-foreground">{"  "}</span>
      <span className="text-chart-1">{"╰─────────────╯"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"       ╰────── "}</span>
      <span className="text-primary">{"vs"}</span>
      <span className="text-muted-foreground/50">{" ──────╯"}</span>
    </pre>
  );
}
