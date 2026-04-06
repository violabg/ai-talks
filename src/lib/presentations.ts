import type { PresentationData } from "@/types/presentation";
import fs from "fs";
import path from "path";

const PRESENTATIONS_DIR = path.join(
  process.cwd(),
  "content",
  "presentations",
);

export function hasPresentation(slug: string): boolean {
  return fs.existsSync(path.join(PRESENTATIONS_DIR, `${slug}.json`));
}

export function getPresentation(slug: string): PresentationData {
  const filePath = path.join(PRESENTATIONS_DIR, `${slug}.json`);
  const content = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(content) as PresentationData;
}

export function getAllPresentationSlugs(): string[] {
  if (!fs.existsSync(PRESENTATIONS_DIR)) return [];
  return fs
    .readdirSync(PRESENTATIONS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => f.replace(/\.json$/, ""));
}
