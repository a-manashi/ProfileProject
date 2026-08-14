import { Pause, Play, Square, Volume2 } from "lucide-react";
import type { AvatarState } from "@/lib/chat/types";

type VoiceControlsProps = {
  state: AvatarState;
  canSpeak: boolean;
  onListen: () => void;
  onPause: () => void;
  onResume: () => void;
  onStop: () => void;
};

export function VoiceControls({
  state,
  canSpeak,
  onListen,
  onPause,
  onResume,
  onStop,
}: VoiceControlsProps) {
  if (!canSpeak) return null;

  if (state === "speaking") {
    return (
      <div className="mt-2 flex items-center gap-2">
        <p className="mr-auto font-mono text-[11px] text-accent">Speaking...</p>
        <button
          type="button"
          onClick={onPause}
          className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-ink hover:border-accent/40"
        >
          <Pause size={12} /> Pause
        </button>
        <button
          type="button"
          onClick={onStop}
          className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-ink hover:border-accent/40"
        >
          <Square size={12} /> Stop
        </button>
      </div>
    );
  }

  if (state === "paused") {
    return (
      <div className="mt-2 flex items-center gap-2">
        <p className="mr-auto font-mono text-[11px] text-mute">Paused</p>
        <button
          type="button"
          onClick={onResume}
          className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-ink hover:border-accent/40"
        >
          <Play size={12} /> Resume
        </button>
        <button
          type="button"
          onClick={onStop}
          className="inline-flex items-center gap-1 rounded-md border border-line px-2 py-1 text-xs text-ink hover:border-accent/40"
        >
          <Square size={12} /> Stop
        </button>
      </div>
    );
  }

  return (
    <div className="mt-2">
      <button
        type="button"
        onClick={onListen}
        className="inline-flex items-center gap-1.5 rounded-md border border-line px-2 py-1 text-xs text-mute hover:border-accent/40 hover:text-ink"
      >
        <Volume2 size={12} /> Listen
      </button>
    </div>
  );
}
