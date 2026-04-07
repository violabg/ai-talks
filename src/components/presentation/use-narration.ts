"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface SpeechData {
  voice?: string;
  slides: { text: string }[];
}

export interface NarrationState {
  enabled: boolean;
  playing: boolean;
  wordPulse: number; // increments on each word boundary, for orb animation
  toggleEnabled: () => void;
  stop: () => void;
}

export function useNarration(
  speechData: SpeechData | null,
  currentSlide: number,
): NarrationState {
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [wordPulse, setWordPulse] = useState(0);

  const voiceRef = useRef<SpeechSynthesisVoice | null>(null);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Select Italian voice once voices are available
  const selectVoice = useCallback(() => {
    const voices = window.speechSynthesis.getVoices();
    const italian = voices.find(
      (v) => v.lang.startsWith("it") && v.localService,
    ) ?? voices.find((v) => v.lang.startsWith("it"));
    if (italian) voiceRef.current = italian;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    selectVoice();
    window.speechSynthesis.addEventListener("voiceschanged", selectVoice);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", selectVoice);
  }, [selectVoice]);

  const stop = useCallback(() => {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setPlaying(false);
  }, []);

  const playSlide = useCallback(
    (index: number) => {
      if (typeof window === "undefined" || !speechData) return;
      const text = speechData.slides[index]?.text;

      window.speechSynthesis.cancel();
      utteranceRef.current = null;

      if (!text) return;

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = speechData.voice ?? "it-IT";
      utterance.rate = 1.0;
      if (voiceRef.current) utterance.voice = voiceRef.current;

      utterance.onstart = () => setPlaying(true);
      utterance.onend = () => {
        setPlaying(false);
        utteranceRef.current = null;
      };
      utterance.onerror = () => {
        setPlaying(false);
        utteranceRef.current = null;
      };
      utterance.onboundary = (e) => {
        if (e.name === "word") setWordPulse((n) => n + 1);
      };

      utteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [speechData],
  );

  const toggleEnabled = useCallback(() => {
    if (!enabled) {
      setEnabled(true);
    } else {
      stop();
      setEnabled(false);
    }
  }, [enabled, stop]);

  // Auto-play on slide change when enabled
  useEffect(() => {
    if (enabled && speechData) {
      playSlide(currentSlide);
    } else {
      stop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, enabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis.cancel();
    };
  }, []);

  return { enabled, playing, wordPulse, toggleEnabled, stop };
}
