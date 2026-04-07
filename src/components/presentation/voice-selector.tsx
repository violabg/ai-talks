"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNarrationContext } from "./narration-provider";

export function VoiceSelector() {
  const { availableVoices, selectedVoiceUri, setSelectedVoiceUri } =
    useNarrationContext();

  if (availableVoices.length === 0) return null;

  const handleVoiceChange = (value: string | null) => {
    if (value) setSelectedVoiceUri(value);
  };

  return (
    <Select value={selectedVoiceUri} onValueChange={handleVoiceChange}>
      <SelectTrigger className="w-40 h-8 text-xs">
        <SelectValue placeholder="Seleziona voce" />
      </SelectTrigger>
      <SelectContent>
        {availableVoices.map((voice) => (
          <SelectItem key={voice.voiceURI} value={voice.voiceURI}>
            {voice.name}
            {voice.localService && " (locale)"}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
