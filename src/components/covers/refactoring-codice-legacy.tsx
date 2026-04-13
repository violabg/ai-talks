export function RefactoringCodiceLegacy() {
  // Every line = 27 chars
  return (
    <div className="relative bg-muted/30 dark:bg-muted/20 py-4 font-mono text-xs leading-tight select-none overflow-hidden" aria-hidden="true">
      <pre className="whitespace-pre mx-auto w-fit">
        <span className="text-muted-foreground/50">{"── legacy.ts ──────────────"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-5">{" - "}</span>
        <span className="text-muted-foreground">{"function process(     "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-5">{" - "}</span>
        <span className="text-muted-foreground">{"  data: any) {        "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-5">{" - "}</span>
        <span className="text-muted-foreground">{"  // 400 lines...     "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-2">{" + "}</span>
        <span className="text-foreground">{"function validate(    "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-2">{" + "}</span>
        <span className="text-foreground">{"function transform(   "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"│"}</span>
        <span className="text-chart-2">{" + "}</span>
        <span className="text-foreground">{"function persist(     "}</span>
        <span className="text-muted-foreground/50">{"│"}</span>
        {"\n"}
        <span className="text-muted-foreground/50">{"───────────────────────────"}</span>
        {"\n"}
        <span className="text-chart-2">{"+"}</span>
        <span className="text-muted-foreground">{" 12 tests "}</span>
        <span className="text-muted-foreground/50">{"│ "}</span>
        <span className="text-primary">{"small steps"}</span>
      </pre>
    </div>
  )
}
