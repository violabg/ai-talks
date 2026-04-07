"use client";

import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";
import { useNarrationContext } from "./narration-provider";

export function AudioOrb() {
  const { playing, wordPulse } = useNarrationContext();
  const [amplitude, setAmplitude] = useState(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const pulseRef = useRef<number>(0);
  const lastPulseRef = useRef<number>(0);

  // Inject a spike each time a new word fires
  useEffect(() => {
    if (wordPulse !== lastPulseRef.current) {
      lastPulseRef.current = wordPulse;
      pulseRef.current = 1;
    }
  }, [wordPulse]);

  useEffect(() => {
    if (!playing) {
      setAmplitude(0);
      cancelAnimationFrame(rafRef.current);
      return;
    }

    startTimeRef.current = performance.now();

    function tick(now: number) {
      const elapsed = (now - startTimeRef.current) / 1000;

      // Smooth base oscillation (breathing rhythm)
      const base = 0.25 + Math.sin(elapsed * 2.4) * 0.12;

      // Decaying word-boundary spike (~150ms half-life)
      const spike = pulseRef.current;
      pulseRef.current = spike * 0.82; // decay per frame

      setAmplitude(Math.min(1, base + spike * 0.65));
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [playing]);

  const scale = 1 + amplitude * 0.38;
  const glowSize = 10 + amplitude * 26;
  const glowOpacity = 0.2 + amplitude * 0.5;
  const innerOpacity = 0.35 + amplitude * 0.5;

  return (
    <AnimatePresence>
      {playing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-8 right-8 z-50 pointer-events-none"
        >
          <motion.div
            animate={{ scale }}
            transition={{ duration: 0.08, ease: "linear" }}
            className="relative size-11"
          >
            {/* Outer glow */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: `0 0 ${glowSize}px rgba(167, 139, 250, ${glowOpacity})`,
                transition: "box-shadow 0.08s linear",
              }}
            />
            {/* Base ring */}
            <div className="absolute inset-0 rounded-full bg-[#a78bfa]/20 backdrop-blur-sm" />
            {/* Inner fill */}
            <div
              className="absolute inset-1 rounded-full bg-[#a78bfa]"
              style={{
                opacity: innerOpacity,
                transition: "opacity 0.08s linear",
              }}
            />
            {/* Center dot */}
            <div className="absolute inset-3 rounded-full bg-[#a78bfa]" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
