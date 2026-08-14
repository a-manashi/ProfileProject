import { Send } from "lucide-react";
import { VoiceButton } from "@/components/chatbot/VoiceButton";

type ChatInputProps = {
  value: string;
  listening: boolean;
  disabled?: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
  onVoice: () => void;
};

export function ChatInput({
  value,
  listening,
  disabled,
  onChange,
  onSubmit,
  onVoice,
}: ChatInputProps) {
  return (
    <form
      className="flex items-center gap-2 rounded-xl border border-line bg-canvas p-2"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <VoiceButton listening={listening} disabled={disabled} onClick={onVoice} />
      <label className="sr-only" htmlFor="ask-abdul-input">
        Ask a question
      </label>
      <input
        id="ask-abdul-input"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Ask a question..."
        maxLength={800}
        disabled={disabled || listening}
        className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-mute disabled:opacity-60"
      />
      <button
        type="submit"
        disabled={disabled || listening || !value.trim()}
        aria-label="Send question"
        className="inline-flex size-10 items-center justify-center rounded-md bg-accent text-canvas transition-colors hover:bg-accent-hover disabled:opacity-40"
      >
        <Send size={15} />
      </button>
    </form>
  );
}
