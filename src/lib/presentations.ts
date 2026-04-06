import fs from "fs";
import path from "path";

const PRESENTATIONS_DIR = path.join(
  process.cwd(),
  "content",
  "presentations",
);

const ARTICLES_APP_DIR = path.join(process.cwd(), "src", "app", "articles");

export function hasPresentation(slug: string): boolean {
  return fs.existsSync(path.join(ARTICLES_APP_DIR, slug, "presentazione"));
}
