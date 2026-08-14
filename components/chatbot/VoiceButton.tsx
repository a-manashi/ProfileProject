import { Mic, MicOff } from "lucide-react";
import { cn } from "@/lib/cn";

type VoiceButtonProps = {
  listening: boolean;
  disabled?: boolean;
  onClick: () => void;
};

export function VoiceButton({ listening, disabled, onClick }: VoiceButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={listening}
      aria-label={listening ? "Stop listening" : "Speak"}
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-md border transition-colors",
        listening
          ? "border-accent bg-accent/15 text-accent"
          : "border-line text-mute hover:border-accent/40 hover:text-ink",
        "disabled:opacity-50",
      )}
    >
      {listening ? <MicOff size={16} /> : <Mic size={16} />}
    </button>
  );
}
