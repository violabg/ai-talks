export function RefactoringCodiceLegacy() {
  // Every line = 27 chars
  return (
    <pre className="mx-auto w-fit whitespace-pre">
      <span className="text-muted-foreground/50">
        {"── legacy.ts ──────────────"}
      </span>
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
      <span className="text-muted-foreground/50">
        {"───────────────────────────"}
      </span>
      {"\n"}
      <span className="text-chart-2">{"+"}</span>
      <span className="text-muted-foreground">{" 12 tests "}</span>
      <span className="text-muted-foreground/50">{"│ "}</span>
      <span className="text-primary">{"small steps"}</span>
    </pre>
  );
}
