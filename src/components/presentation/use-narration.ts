"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Speaks a silent utterance so iOS unlocks the audio context.
 * Must be called synchronously inside a user-gesture handler.
 */
function primeAudioContext() {
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
  /** Call from any user-gesture handler. On iOS, primes the audio context on first
   *  interaction so that narration can play when `savedEnabled = true` is restored
   *  silently (no dialog). No-op once audio is already primed or narration is off. */
  onUserGesture: () => void;
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
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceUri, setSelectedVoiceUri] = useState("");
  const [narrationId, setNarrationId] = useState("");
  const [showInitialDialog, setShowInitialDialog] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // True once primeAudioContext() has been called inside a user-gesture handler.
  // iOS silently blocks speak() without this, but desktop browsers don't need it.
  // Used only by onUserGesture to decide whether to prime + replay on first tap.
  const audioPrimedRef = useRef(false);

  // Always-fresh refs for use inside stable callbacks (onUserGesture, playSlideRef).
  const currentSlideRef = useRef(currentSlide);
  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  // ─── Voice loading ───────────────────────────────────────────────────────────
  // Persistent listener — Chrome and iOS return [] on the first synchronous
  // getVoices() call; voices arrive only after the voiceschanged event fires.
  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateVoices = () => {
      const voices = window.speechSynthesis.getVoices();
      const italianVoices = voices.filter((v) => v.lang.startsWith("it"));
      if (italianVoices.length === 0) return;

      setAvailableVoices(italianVoices);

      const savedVoice = localStorage.getItem(VOICE_STORAGE_KEY);
      if (savedVoice && italianVoices.some((v) => v.voiceURI === savedVoice)) {
        setSelectedVoiceUri(savedVoice);
      } else {
        const googleVoice = italianVoices.find((v) => v.name.includes("Google"));
        const defaultVoice =
          googleVoice ??
          italianVoices.find((v) => v.localService) ??
          italianVoices[0];
        // Only set if nothing is already selected (don't overwrite on re-fire).
        if (defaultVoice) setSelectedVoiceUri((prev) => prev || defaultVoice.voiceURI);
      }
    };

    updateVoices();
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", updateVoices);
  }, []);

  // ─── One-time initialization ─────────────────────────────────────────────────
  // Runs after voices are available so the dialog is never shown on a blank list.
  useEffect(() => {
    if (hasInitialized || availableVoices.length === 0) return;

    const savedEnabled = localStorage.getItem(STORAGE_KEY);

    if (savedEnabled === null) {
      // First visit: ask the user. Their click IS the iOS gesture gate.
      setShowInitialDialog(true);
    } else if (savedEnabled === "true") {
      // Returning user who said yes: restore silently.
      // audioPrimedRef stays false — onUserGesture handles iOS on first tap.
      setEnabled(true);
      setNarrationId(`narration-${Date.now()}`);
    }
    // savedEnabled === "false": leave enabled=false, no dialog.

    setHasInitialized(true);
  }, [availableVoices, hasInitialized]);

  // ─── Core actions ─────────────────────────────────────────────────────────────
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

      delayTimeoutRef.current = setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = speechData.voice ?? "it-IT";
        utterance.rate = 1.0;

        if (selectedVoiceUri) {
          const voice = availableVoices.find((v) => v.voiceURI === selectedVoiceUri);
          if (voice) utterance.voice = voice;
        }

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
      }, 1000);
    },
    [speechData, availableVoices, selectedVoiceUri, stop],
  );

  const toggleEnabled = useCallback(() => {
    if (!enabled) {
      primeAudioContext();
      audioPrimedRef.current = true;
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

  const handleInitialChoice = useCallback(
    (choice: boolean) => {
      setShowInitialDialog(false);
      localStorage.setItem(STORAGE_KEY, String(choice));

      if (choice) {
        primeAudioContext();
        audioPrimedRef.current = true;
        setEnabled(true);
        setNarrationId(`narration-${Date.now()}`);
        // Start playing — audio context is already unlocked by the dialog button click.
        playSlide(currentSlide);
      } else {
        setEnabled(false);
      }
    },
    [playSlide, currentSlide],
  );

  /**
   * Called from any user-gesture handler in the presentation shell.
   * On iOS, the first tap primes the audio context so that narration can play
   * after a silent restore (savedEnabled = "true"). No-op once primed or if
   * narration is disabled.
   */
  const onUserGesture = useCallback(() => {
    if (enabled && !audioPrimedRef.current) {
      primeAudioContext();
      audioPrimedRef.current = true;
      playSlideRef.current(currentSlideRef.current);
    }
  }, [enabled]);

  // ─── Stable ref for playSlide ─────────────────────────────────────────────────
  // Keeps onUserGesture and the auto-play effect stable when voice settings change.
  // Voice changes take effect on the next slide, which is intentional.
  const playSlideRef = useRef(playSlide);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    playSlideRef.current = playSlide;
  }, [playSlide]);

  // ─── Auto-play on slide change ────────────────────────────────────────────────
  useEffect(() => {
    if (enabled && speechData) {
      playSlideRef.current(currentSlide);
    } else {
      stop();
    }
  }, [currentSlide, enabled, speechData, stop]);

  // ─── Cleanup on unmount ───────────────────────────────────────────────────────
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
    onUserGesture,
  };
}
