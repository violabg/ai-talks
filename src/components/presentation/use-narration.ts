"use client";

import { useCallback, useEffect, useReducer, useRef, useState } from "react";

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

// ─── State machine ─────────────────────────────────────────────────────────────
//
//   idle ──(voices loaded, no pref)──► dialog ──(accept)──► enabled
//        ──(voices loaded, true)────► enabled               ↑
//        ──(voices loaded, false)───► disabled ◄──(decline)─┘
//                                      │  ▲
//                                   toggle toggle
//                                      ▼  │
//                                    enabled

type NarrationStatus = "idle" | "dialog" | "enabled" | "disabled";

interface ReducerState {
  status: NarrationStatus;
  playing: boolean;
  narrationId: string;
}

type Action =
  | { type: "VOICES_LOADED"; savedEnabled: string | null }
  | { type: "DIALOG_ACCEPT" }
  | { type: "DIALOG_DECLINE" }
  | { type: "TOGGLE_ON" }
  | { type: "TOGGLE_OFF" }
  | { type: "SPEECH_START" }
  | { type: "SPEECH_END" };

function reducer(state: ReducerState, action: Action): ReducerState {
  switch (action.type) {
    case "VOICES_LOADED": {
      if (state.status !== "idle") return state; // idempotent
      if (action.savedEnabled === null) return { ...state, status: "dialog" };
      if (action.savedEnabled === "true")
        return { ...state, status: "enabled", narrationId: `narration-${Date.now()}` };
      return { ...state, status: "disabled" };
    }
    case "DIALOG_ACCEPT":
      if (state.status !== "dialog") return state;
      return { ...state, status: "enabled", narrationId: `narration-${Date.now()}` };
    case "DIALOG_DECLINE":
      if (state.status !== "dialog") return state;
      return { ...state, status: "disabled" };
    case "TOGGLE_ON":
      if (state.status !== "disabled") return state;
      return { ...state, status: "enabled", narrationId: `narration-${Date.now()}` };
    case "TOGGLE_OFF":
      if (state.status !== "enabled") return state;
      return { ...state, status: "disabled", playing: false };
    case "SPEECH_START":
      return { ...state, playing: true };
    case "SPEECH_END":
      return { ...state, playing: false };
    default:
      return state;
  }
}

// ─── Public interface ──────────────────────────────────────────────────────────

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
  handleInitialChoice: (enabled: boolean) => void;
  /** Call from any user-gesture handler. On iOS, primes the audio context on the
   *  first interaction after a silent restore (savedEnabled = "true"). No-op once
   *  already primed or when narration is off. */
  onUserGesture: () => void;
}

const STORAGE_KEY = "presentation-narration-enabled";
const VOICE_STORAGE_KEY = "presentation-narration-voice";

// ─── Hook ──────────────────────────────────────────────────────────────────────

export function useNarration(
  speechData: SpeechData | null,
  currentSlide: number,
): NarrationState {
  const [{ status, playing, narrationId }, dispatch] = useReducer(reducer, {
    status: "idle",
    playing: false,
    narrationId: "",
  });

  // Ancillary state: async-loaded voice data, not part of the lifecycle machine.
  const [availableVoices, setAvailableVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceUri, setSelectedVoiceUri] = useState("");
  // High-frequency word-boundary counter for the audio orb animation.
  const [wordPulse, setWordPulse] = useState(0);

  const enabled = status === "enabled";
  const showInitialDialog = status === "dialog";

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const delayTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  // True once primeAudioContext() has been called in a user-gesture handler.
  // iOS blocks speechSynthesis.speak() without this; desktop doesn't need it.
  const audioPrimedRef = useRef(false);
  // Always-fresh slide index for onUserGesture (avoids adding currentSlide to its deps).
  const currentSlideRef = useRef(currentSlide);
  useEffect(() => {
    currentSlideRef.current = currentSlide;
  }, [currentSlide]);

  // ─── Voice loading ────────────────────────────────────────────────────────────
  // Persistent listener because Chrome / iOS return [] on the first getVoices()
  // call and only populate after the voiceschanged event.
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
        // Only set if nothing is selected yet — don't overwrite on re-fire.
        if (defaultVoice) setSelectedVoiceUri((prev) => prev || defaultVoice.voiceURI);
      }
    };

    updateVoices();
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices);
    return () =>
      window.speechSynthesis.removeEventListener("voiceschanged", updateVoices);
  }, []);

  // ─── One-time initialization ──────────────────────────────────────────────────
  // Waits for voices so the dialog is never shown on an empty voice list.
  useEffect(() => {
    if (status !== "idle" || availableVoices.length === 0) return;
    dispatch({ type: "VOICES_LOADED", savedEnabled: localStorage.getItem(STORAGE_KEY) });
  }, [availableVoices, status]);

  // ─── Core actions ─────────────────────────────────────────────────────────────
  const stop = useCallback(() => {
    if (typeof window === "undefined") return;
    if (delayTimeoutRef.current) clearTimeout(delayTimeoutRef.current);
    window.speechSynthesis.cancel();
    utteranceRef.current = null;
    dispatch({ type: "SPEECH_END" });
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

        utterance.onstart = () => dispatch({ type: "SPEECH_START" });
        utterance.onend = () => {
          dispatch({ type: "SPEECH_END" });
          utteranceRef.current = null;
        };
        utterance.onerror = () => {
          dispatch({ type: "SPEECH_END" });
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
      dispatch({ type: "TOGGLE_ON" });
      localStorage.setItem(STORAGE_KEY, "true");
    } else {
      stop();
      dispatch({ type: "TOGGLE_OFF" });
      localStorage.setItem(STORAGE_KEY, "false");
    }
  }, [enabled, stop]);

  const handleSelectVoice = useCallback((uri: string) => {
    setSelectedVoiceUri(uri);
    localStorage.setItem(VOICE_STORAGE_KEY, uri);
  }, []);

  const handleInitialChoice = useCallback(
    (choice: boolean) => {
      localStorage.setItem(STORAGE_KEY, String(choice));
      if (choice) {
        primeAudioContext();
        audioPrimedRef.current = true;
        dispatch({ type: "DIALOG_ACCEPT" });
        // Start playing — audio context is unlocked by the dialog button click.
        playSlide(currentSlide);
      } else {
        dispatch({ type: "DIALOG_DECLINE" });
      }
    },
    [playSlide, currentSlide],
  );

  const onUserGesture = useCallback(() => {
    if (enabled && !audioPrimedRef.current) {
      primeAudioContext();
      audioPrimedRef.current = true;
      playSlideRef.current(currentSlideRef.current);
    }
  }, [enabled]);

  // ─── Stable ref for playSlide ──────────────────────────────────────────────────
  // Keeps onUserGesture and the auto-play effect stable when voice settings change
  // (voice changes intentionally take effect only on the next slide).
  const playSlideRef = useRef(playSlide);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    playSlideRef.current = playSlide;
  }, [playSlide]);

  // ─── Auto-play on slide change ─────────────────────────────────────────────────
  useEffect(() => {
    if (enabled && speechData) {
      playSlideRef.current(currentSlide);
    } else {
      stop();
    }
  }, [currentSlide, enabled, speechData, stop]);

  // ─── Cleanup on unmount ────────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      if (typeof window !== "undefined") window.speechSynthesis.cancel();
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
    handleInitialChoice,
    onUserGesture,
  };
}
