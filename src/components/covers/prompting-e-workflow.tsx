export function PromptingEWorkflow() {
  // Every boxed line = 28 chars
  return (
    <pre className="mx-auto w-fit whitespace-pre">
      <span className="text-chart-3">{"╭─ prompt ─────────────────╮"}</span>
      {"\n"}
      <span className="text-chart-3">{"│"}</span>
      <span className="text-muted-foreground/50">{" 1 "}</span>
      <span className="text-chart-1">{"CONTEXT"}</span>
      <span className="text-muted-foreground/50">{"       ░░░░░░░░ "}</span>
      <span className="text-chart-3">{"│"}</span>
      {"\n"}
      <span className="text-chart-3">{"│"}</span>
      <span className="text-muted-foreground/50">{" 2 "}</span>
      <span className="text-primary">{"OBJECTIVE"}</span>
      <span className="text-muted-foreground/50">{"     ░░░░░░░░ "}</span>
      <span className="text-chart-3">{"│"}</span>
      {"\n"}
      <span className="text-chart-3">{"│"}</span>
      <span className="text-muted-foreground/50">{" 3 "}</span>
      <span className="text-chart-5">{"CONSTRAINTS"}</span>
      <span className="text-muted-foreground/50">{"   ░░░░░░░░ "}</span>
      <span className="text-chart-3">{"│"}</span>
      {"\n"}
      <span className="text-chart-3">{"│"}</span>
      <span className="text-muted-foreground/50">{" 4 "}</span>
      <span className="text-chart-2">{"SUCCESS"}</span>
      <span className="text-muted-foreground/50">{"       ░░░░░░░░ "}</span>
      <span className="text-chart-3">{"│"}</span>
      {"\n"}
      <span className="text-chart-3">{"╰─────────────┬────────────╯"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"              │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"  "}</span>
      <span className="text-primary">{"plan"}</span>
      <span className="text-muted-foreground/50">{" ──> "}</span>
      <span className="text-primary">{"act"}</span>
      <span className="text-muted-foreground/50">{" ──> "}</span>
      <span className="text-chart-2">{"verify"}</span>
      <span className="text-muted-foreground/50">{" ──╮"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">
        {"  ╰────────────────────────╯"}
      </span>
    </pre>
  );
}
