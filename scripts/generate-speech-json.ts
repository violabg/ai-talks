/**
 * Generate speech.json for a presentation from its article's MDX content.
 *
 * Usage: npx tsx scripts/generate-speech-json.ts <slug>
 *
 * Reads content/articles/<slug>.mdx, strips markdown formatting,
 * splits by ## headings, counts slides from the presentation's slides.tsx,
 * distributes sections across slides, and writes speech.json.
 *
 * The output is a first draft — manually refine the text for natural narration.
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: npx tsx scripts/generate-speech-json.ts <slug>");
  process.exit(1);
}

const ROOT = path.resolve(new URL("..", import.meta.url).pathname);
const articlePath = path.join(ROOT, "content/articles", `${slug}.mdx`);
const slidesPath = path.join(
  ROOT,
  "src/app/articles",
  slug,
  "presentazione/slides.tsx",
);
const outputPath = path.join(
  ROOT,
  "src/app/articles",
  slug,
  "presentazione/speech.json",
);

if (!fs.existsSync(articlePath)) {
  console.error(`Article not found: ${articlePath}`);
  process.exit(1);
}

if (!fs.existsSync(slidesPath)) {
  console.error(`Presentation not found: ${slidesPath}`);
  process.exit(1);
}

// Parse article
const raw = fs.readFileSync(articlePath, "utf-8");
const { content } = matter(raw);

// Strip markdown formatting to get plain prose
function stripMarkdown(text: string): string {
  return (
    text
      // Remove code blocks (``` ... ```)
      .replace(/```[\s\S]*?```/g, "")
      // Remove inline code
      .replace(/`[^`]+`/g, "")
      // Remove images
      .replace(/!\[.*?\]\(.*?\)/g, "")
      // Remove links, keep text
      .replace(/\[([^\]]+)\]\(.*?\)/g, "$1")
      // Remove headings markers
      .replace(/^#{1,6}\s+/gm, "")
      // Remove horizontal rules
      .replace(/^---+$/gm, "")
      // Remove bold/italic markers
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      // Remove list markers
      .replace(/^[\s]*[-*]\s+/gm, "")
      // Remove numbered list markers
      .replace(/^[\s]*\d+\.\s+/gm, "")
      // Collapse multiple newlines
      .replace(/\n{3,}/g, "\n\n")
      .trim()
  );
}

// Split content by ## headings
function splitSections(text: string): { title: string; body: string }[] {
  const sections: { title: string; body: string }[] = [];
  const parts = text.split(/^## /m);

  // First part is the intro (before first ##)
  const intro = parts[0]?.trim();
  if (intro) {
    sections.push({ title: "intro", body: stripMarkdown(intro) });
  }

  // Remaining parts are ## sections
  for (let i = 1; i < parts.length; i++) {
    const lines = parts[i].split("\n");
    const title = lines[0].trim();
    const body = stripMarkdown(lines.slice(1).join("\n"));
    sections.push({ title, body });
  }

  return sections;
}

// Count slides from slides.tsx by counting slide imports
const slidesContent = fs.readFileSync(slidesPath, "utf-8");
const slideImports = slidesContent.match(
  /import\s+\{[^}]+\}\s+from\s+"\.\/slide-\d+/g,
);
const slideCount = slideImports?.length ?? 0;

if (slideCount === 0) {
  console.error("Could not detect slides in slides.tsx");
  process.exit(1);
}

// Extract slide keys from useMemo array
const keyMatches = slidesContent.match(/key="([^"]+)"/g);
const slideLabels =
  keyMatches?.map((k) => k.replace(/key="([^"]+)"/, "$1")) ?? [];

const sections = splitSections(content);

console.log(`Article sections: ${sections.length}`);
console.log(`Slides: ${slideCount}`);
console.log(`Slide labels: ${slideLabels.join(", ")}`);

// Distribute sections across slides proportionally
const slides: { text: string }[] = [];
const sectionsPerSlide = Math.max(1, sections.length / slideCount);

for (let i = 0; i < slideCount; i++) {
  const startIdx = Math.floor(i * sectionsPerSlide);
  const endIdx = Math.min(
    Math.floor((i + 1) * sectionsPerSlide),
    sections.length,
  );

  const text = sections
    .slice(startIdx, endIdx)
    .map((s) => s.body)
    .join("\n\n")
    .trim();

  // Truncate to ~200 words for natural narration length
  const words = text.split(/\s+/);
  const truncated =
    words.length > 200 ? words.slice(0, 200).join(" ") + "..." : text;

  slides.push({ text: truncated });
}

const speechData = {
  voice: "Fritz-PlayAI",
  slides,
};

fs.writeFileSync(outputPath, JSON.stringify(speechData, null, 2) + "\n");
console.log(`\nWritten to ${outputPath}`);
console.log(
  "Review and refine the text for natural narration before using TTS.",
);
