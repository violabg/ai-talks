"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Speaks a silent utterance so iOS unlocks the audio context on user gesture. */
function primeAudio() {
  try {
    const p = new SpeechSynthesisUtterance("");
    window.speechSynthesis.speak(p);
    setTimeout(() => window.speechSynthesis.cancel(), 80);
  } catch {
    // ignore
  }
}

export interface SpeechData {
  voice?: string;
  slides: { text: string }[];
}

export interface NarrationState {
  enabled: boolean;
  playing: boolean;
  wordPulse: number;
  availableVoices: SpeechSynthesisVoice[];
  selectedVoiceUri: string;
  setSelectedVoiceUri: (uri: string) => void;
  toggleEnabled: () => void;
  stop: () => void;
  narrationId: string;
  showInitialDialog: boolean;
  setShowInitialDialog: (show: boolean) => void;
  handleInitialChoice: (enabled: boolean) => void;
}

const STORAGE_KEY = "presentation-narration-enabled";
const VOICE_STORAGE_KEY = "presentation-narration-voice";

export function useNarration(
  speechData: SpeechData | null,
  currentSlide: number,
): NarrationState {
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [wordPulse, setWordPulse] = useState(0);
  const [availableVoices, setAvailableVoices] = useState<
    SpeechSynthesisVoice[]
  >([]);
  const [selectedVoiceUri, setSelectedVoiceUri] = useState("");
  const [narrationId, setNarrationId] = useState("");
  const [showInitialDialog, setShowInitialDialog] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize voices and settings
  useEffect(() => {
    if (typeof window === "undefined" || hasInitialized) return;

    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const italianVoices = voices.filter((v) => v.lang.startsWith("it"));
      setAvailableVoices(italianVoices);

      // Check localStorage for previous preference
      const savedEnabled = localStorage.getItem(STORAGE_KEY);
      const savedVoice = localStorage.getItem(VOICE_STORAGE_KEY);

      if (savedVoice && italianVoices.some((v) => v.voiceURI === savedVoice)) {
        setSelectedVoiceUri(savedVoice);
      } else if (italianVoices.length > 0) {
        // Set default voice: prefer Google, then local system voice
        const googleVoice = italianVoices.find((v) =>
          v.name.includes("Google"),
        );
        const defaultVoice = googleVoice ?? italianVoices.find((v) => v.localService) ?? italianVoices[0];
        if (defaultVoice) {
          setSelectedVoiceUri(defaultVoice.voiceURI);
        }
      }

      if (savedEnabled !== null) {
        // Don't auto-start speech on load — require a user gesture to actually start
        if (savedEnabled === "true") {
          setShowInitialDialog(true);
        } else {
          setEnabled(false);
        }
      } else if (italianVoices.length > 0) {
        setShowInitialDialog(true);
      }

      setHasInitialized(true);
    };

    updateVoices();
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", updateVoices);
  }, [hasInitialized]);

  const stop = useCallback(() => {
    if (typeof window === "undefined") return;
    if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    setPlaying(false);
  }, []);

  const playSlide = useCallback(
    (index: number) => {
      if (typeof window === "undefined" || !speechData) return;
      const text = speechData.slides[index]?.text;

      stop();

      if (!text) return;

      // Delay speech by 1 second
      delayTimeoutRef.current = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = speechData.voice ?? "it-IT";
        utterance.rate = 1.0;

        // Find and set the selected voice
        if (selectedVoiceUri) {
          const voice = availableVoices.find(
            (v) => v.voiceURI === selectedVoiceUri,
          );
          if (voice) utterance.voice = voice;
        }

        utterance.onstart = () => setPlaying(true);
        utterance.onend = () => {
          setPlaying(false);
          utteranceRef.current = null;
        };
        utterance.onerror = (e) => {
          setPlaying(false);
          utteranceRef.current = null;
        };
        utterance.onboundary = (e) => {
          if (e.name === "word") setWordPulse((n) => n + 1);
        };

        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
      }, 1000);
    },
    [speechData, availableVoices, selectedVoiceUri, stop],
  );

  const toggleEnabled = useCallback(() => {
    if (!enabled) {
      primeAudio();
      setEnabled(true);
      setNarrationId(`narration-${Date.now()}`);
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      stop();
      setEnabled(false);
      localStorage.setItem(STORAGE_KEY, "false");
    }
  }, [enabled, stop]);

  const handleSelectVoice = useCallback((uri: string) => {
    setSelectedVoiceUri(uri);
    localStorage.setItem(VOICE_STORAGE_KEY, uri);
  }, []);

  const handleInitialChoice = useCallback((choice: boolean) => {
    setShowInitialDialog(false);
    localStorage.setItem(STORAGE_KEY, String(choice));

    if (choice) {
      primeAudio();
      setEnabled(true);
      setNarrationId(`narration-${Date.now()}`);
      // Start playing the current slide now that the user granted permission
      playSlide(currentSlide);
    } else {
      setEnabled(false);
    }
  }, [playSlide, currentSlide]);

  // Keep a stable ref to playSlide so the effect below doesn't re-run
  // when voice/voice-uri changes (intentional: voice takes effect on next slide).
  const playSlideRef = useRef(playSlide);
  useEffect(() => {
    playSlideRef.current = playSlide;
  }, [playSlide]);

  // Auto-play on slide change when enabled
  useEffect(() => {
    if (enabled && speechData) {
      playSlideRef.current(currentSlide);
    } else {
      // Syncing with external SpeechSynthesis API — setState inside effect is intentional.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      stop();
    }
  }, [currentSlide, enabled, speechData, stop]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") {
        window.speechSynthesis.cancel();
      }
      if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
    };
  }, []);

  return {
    enabled,
    playing,
    wordPulse,
    availableVoices,
    selectedVoiceUri,
    setSelectedVoiceUri: handleSelectVoice,
    toggleEnabled,
    stop,
    narrationId,
    showInitialDialog,
    setShowInitialDialog,
    handleInitialChoice,
  };
}
