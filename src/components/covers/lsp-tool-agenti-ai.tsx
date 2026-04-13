export function LspToolAgentiAi() {
  // Every boxed line = 25 chars
  return (
    <pre className="mx-auto w-fit whitespace-pre">
      <span className="text-muted-foreground/50">
        {"╭─ LSP ─────────────────╮"}
      </span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-5">{" x "}</span>
      <span className="text-muted-foreground">{"err: "}</span>
      <span className="text-foreground">{"Type 'string'"}</span>
      <span className="text-muted-foreground/50">{"  │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-1">{" @ "}</span>
      <span className="text-muted-foreground">{"ref: "}</span>
      <span className="text-foreground">{"3 references"}</span>
      <span className="text-muted-foreground/50">{"   │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│"}</span>
      <span className="text-chart-2">{" + "}</span>
      <span className="text-muted-foreground">{"def: "}</span>
      <span className="text-foreground">{"auth.ts:42"}</span>
      <span className="text-muted-foreground/50">{"     │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">
        {"├───────────────────────┤"}
      </span>
      {"\n"}
      <span className="text-muted-foreground/50">{"│ "}</span>
      <span className="text-primary">{"agent"}</span>
      <span className="text-muted-foreground/50">{" <── "}</span>
      <span className="text-chart-3">{"LSP"}</span>
      <span className="text-muted-foreground/50">{" ─> "}</span>
      <span className="text-primary">{"code"}</span>
      <span className="text-muted-foreground/50">{" │"}</span>
      {"\n"}
      <span className="text-muted-foreground/50">
        {"╰───────────────────────╯"}
      </span>
    </pre>
  );
}
