import { suggestedQuestions } from "@/lib/chat/types";

type SuggestedQuestionsProps = {
  onSelect: (question: string) => void;
  disabled?: boolean;
};

export function SuggestedQuestions({ onSelect, disabled }: SuggestedQuestionsProps) {
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
        Try asking
      </p>
      <ul className="flex flex-col gap-2">
        {suggestedQuestions.map((question) => (
          <li key={question}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => onSelect(question)}
              className="w-full rounded-lg border border-line bg-canvas px-3 py-2 text-left text-sm text-mute transition-colors hover:border-accent/40 hover:text-ink disabled:opacity-50"
            >
              {question}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
