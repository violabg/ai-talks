"use client";

import * as motion from "motion/react-client";
import { ArrowTip, SlideFrame, SlideHeading } from "./slide-shared";

const DUMPS = [
  { y: 65, label: "dump stack", detail: "pila + return address" },
  { y: 135, label: "dump memoria", detail: "zero page, pagine arbitrarie" },
  { y: 205, label: "dump registri", detail: "PC, A, X, Y, flags" },
  {
    y: 275,
    label: "breakpoint su PC",
    detail: "stop condizionale + ispezione",
  },
];

export function Slide06Emulator() {
  return (
    <SlideFrame>
      <div className="flex flex-col flex-1 px-6 py-6">
        <SlideHeading
          eyebrow="caso 1 — emulatore 6502"
          title="Strumentare prima di modificare"
          description="Prima di ottimizzare l'emulatore, costruisci il canale che ti farà sapere in qualunque momento cosa sta succedendo dentro."
        />
        <div className="flex flex-1 justify-center items-center mt-4">
          <div className="w-full max-w-5xl">
            <svg viewBox="0 0 820 420" className="w-full">
              {/* Agent */}
              <motion.g
                initial={{ opacity: 0, x: -14 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.45 }}
              >
                <rect
                  x="40"
                  y="170"
                  width="140"
                  height="80"
                  rx="14"
                  fill="color-mix(in srgb, var(--pres-accent) 12%, transparent)"
                  stroke="var(--pres-accent)"
                  strokeWidth="1.8"
                />
                <text
                  x="110"
                  y="205"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="16"
                  fontFamily="monospace"
                >
                  Agente
                </text>
                <text
                  x="110"
                  y="228"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="12"
                  fontFamily="monospace"
                >
                  modifica emu
                </text>
              </motion.g>

              {/* Agent -> probe */}
              <motion.path
                d="M 184 210 L 262 210"
                stroke="var(--pres-accent)"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              />
              <ArrowTip
                x={266}
                y={210}
                color="var(--pres-accent)"
                delay={0.9}
              />

              {/* Probe */}
              <motion.g
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                style={{ transformOrigin: "340px 210px" }}
              >
                <rect
                  x="270"
                  y="170"
                  width="140"
                  height="80"
                  rx="14"
                  fill="color-mix(in srgb, var(--pres-blue) 14%, transparent)"
                  stroke="var(--pres-blue)"
                  strokeWidth="1.8"
                />
                <text
                  x="340"
                  y="205"
                  textAnchor="middle"
                  fill="var(--pres-text)"
                  fontSize="16"
                  fontFamily="monospace"
                >
                  TCP probe
                </text>
                <text
                  x="340"
                  y="228"
                  textAnchor="middle"
                  fill="var(--pres-text-sub)"
                  fontSize="12"
                  fontFamily="monospace"
                >
                  canale ispezione
                </text>
              </motion.g>

              {/* Probe -> junction */}
              <motion.path
                d="M 414 210 L 455 210"
                stroke="var(--pres-blue)"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 0.75, duration: 0.35 }}
              />

              {/* Vertical bus */}
              <motion.path
                d="M 455 65 L 455 275"
                stroke="var(--pres-blue)"
                strokeWidth="2.5"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ delay: 1.0, duration: 0.55 }}
              />

              {DUMPS.map((d, i) => (
                <motion.g
                  key={d.label}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 + i * 0.12, duration: 0.4 }}
                >
                  <path
                    d={`M 455 ${d.y} L 496 ${d.y}`}
                    stroke="var(--pres-blue)"
                    strokeWidth="2"
                    fill="none"
                  />
                  <ArrowTip
                    x={500}
                    y={d.y}
                    color="var(--pres-blue)"
                    delay={1.3 + i * 0.12}
                  />
                  <rect
                    x="500"
                    y={d.y - 22}
                    width="280"
                    height="44"
                    rx="10"
                    fill="color-mix(in srgb, var(--pres-blue) 8%, transparent)"
                    stroke="var(--pres-blue)"
                    strokeWidth="1.5"
                  />
                  <text
                    x="514"
                    y={d.y - 4}
                    fill="var(--pres-text)"
                    fontSize="14"
                    fontFamily="monospace"
                  >
                    {d.label}
                  </text>
                  <text
                    x="514"
                    y={d.y + 14}
                    fill="var(--pres-text-sub)"
                    fontSize="11"
                    fontFamily="monospace"
                  >
                    {d.detail}
                  </text>
                </motion.g>
              ))}

              {/* Diagnostic feedback loop */}
              <motion.path
                d="M 640 302 L 640 360 L 110 360 L 110 258"
                stroke="var(--pres-success)"
                strokeWidth="2.5"
                fill="none"
                strokeDasharray="7 6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.0, duration: 0.6 }}
              />
              <ArrowTip
                x={110}
                y={254}
                angle={-90}
                color="var(--pres-success)"
                delay={2.6}
              />
              <motion.text
                x="378"
                y="352"
                textAnchor="middle"
                fill="var(--pres-success)"
                fontSize="12"
                fontFamily="monospace"
                letterSpacing="0.18em"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4 }}
              >
                DIAGNOSI ISPEZIONABILE
              </motion.text>
            </svg>
          </div>
        </div>
      </div>
    </SlideFrame>
  );
}
