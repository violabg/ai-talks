import * as motion from "motion/react-client";
import { FadeIn, SlideFrame, SlideHeading } from "./slide-shared";

export function Slide05ContextPointers() {
  return (
    <SlideFrame>
      <SlideHeading
        eyebrow="04 / reference branch"
        title="Reference di branch: carica solo cio che serve"
        description="Se un template serve solo in una branch, non deve vivere nel file principale."
      />
      <FadeIn delay={0.15} className="flex items-center justify-center">
        <svg
          viewBox="0 0 820 360"
          className="max-h-[280px] w-full max-w-4xl"
          role="img"
          aria-label="Diagramma di skill con reference esterne"
        >
          {[
            [
              60,
              120,
              210,
              100,
              "SKILL.md",
              "steps comuni",
              "var(--pres-accent)",
            ],
            [
              330,
              40,
              210,
              92,
              "ADR ref",
              "solo branch ADR",
              "var(--pres-blue)",
            ],
            [
              330,
              220,
              210,
              92,
              "Glossario ref",
              "solo branch context",
              "var(--pres-success)",
            ],
            [
              610,
              130,
              160,
              92,
              "Output",
              "handoff pulito",
              "var(--pres-warning)",
            ],
          ].map(([x, y, width, height, title, subtitle, color], index) => (
            <motion.g
              key={String(title)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.16 }}
            >
              <rect
                x={x as number}
                y={y as number}
                width={width as number}
                height={height as number}
                rx="18"
                fill="var(--pres-bg-card)"
                stroke={color as string}
                strokeWidth="2"
              />
              <text
                x={(x as number) + (width as number) / 2}
                y={(y as number) + 40}
                textAnchor="middle"
                fill={color as string}
                fontSize="20"
                fontWeight="700"
              >
                {title as string}
              </text>
              <text
                x={(x as number) + (width as number) / 2}
                y={(y as number) + 66}
                textAnchor="middle"
                fill="var(--pres-muted)"
                fontSize="15"
              >
                {subtitle as string}
              </text>
            </motion.g>
          ))}
          <motion.path
            d="M270 145 L330 86"
            stroke="var(--pres-muted)"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          />
          <motion.path
            d="M270 195 L330 266"
            stroke="var(--pres-muted)"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
          />
          <motion.path
            d="M540 86 L610 160"
            stroke="var(--pres-muted)"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
          <motion.path
            d="M540 266 L610 190"
            stroke="var(--pres-muted)"
            strokeWidth="2"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.05 }}
          />
        </svg>
      </FadeIn>
    </SlideFrame>
  );
}
