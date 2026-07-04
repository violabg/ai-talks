import type { Element, Root } from "hast";
import { visit } from "unist-util-visit";

export function rehypeMermaidPre() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "pre" || !parent || typeof index !== "number") {
        return;
      }

      const code = node.children.find(
        (child): child is Element =>
          child.type === "element" && child.tagName === "code"
      );

      if (!code) return;

      const className = code.properties?.className;
      const classes = Array.isArray(className) ? className : [className];
      const isMermaid = classes.some(
        (c) => typeof c === "string" && c === "language-mermaid"
      );

      if (!isMermaid) return;

      const value = code.children
        .filter((child): child is { type: "text"; value: string } =>
          child.type === "text"
        )
        .map((child) => child.value)
        .join("");

      const replacement: Element = {
        type: "element",
        tagName: "pre",
        properties: { className: ["mermaid"] },
        children: [{ type: "text", value }],
      };

      parent.children[index] = replacement;
    });
  };
}
