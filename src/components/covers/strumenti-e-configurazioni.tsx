export function StrumentiEConfigurazioni() {
  // Every boxed line = 26 chars
  return (
    <pre className="mx-auto w-fit whitespace-pre">
      <span className="text-muted-foreground/50">
        {"╭─ config layers ────────╮"}
      </span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-primary">{" o "}</span>
      <span className="text-foreground">{"instructions"}</span>
      <span className="text-muted-foreground/50">{"    ░░░░ "}</span>
      <span className="text-muted-foreground/50">{"│"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-3">{" o "}</span>
      <span className="text-foreground">{"skills"}</span>
      <span className="text-muted-foreground/50">{"      ░░░░░░░░ "}</span>
      <span className="text-muted-foreground/50">{"│"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-1">{" o "}</span>
      <span className="text-foreground">{"agents"}</span>
      <span className="text-muted-foreground/50">{"    ░░░░░░░░░░ "}</span>
      <span className="text-muted-foreground/50">{"│"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-4">{" o "}</span>
      <span className="text-foreground">{"MCP"}</span>
      <span className="text-muted-foreground/50">{"     ░░░░░░░░░░░░ "}</span>
      <span className="text-muted-foreground/50">{"│"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-2">{" o "}</span>
      <span className="text-foreground">{"hooks"}</span>
      <span className="text-muted-foreground/50">{" ░░░░░░░░░░░░░░ "}</span>
      <span className="text-muted-foreground/50">{"│"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">
        {"╰────────────────────────╯"}
      </span>
    </pre>
  );
}
