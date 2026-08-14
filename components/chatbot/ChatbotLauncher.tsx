import { forwardRef } from "react";

type ChatbotLauncherProps = {
  onOpen: () => void;
};

export const ChatbotLauncher = forwardRef<HTMLButtonElement, ChatbotLauncherProps>(
  function ChatbotLauncher({ onOpen }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onOpen}
        aria-label="Open Ask Abdul AI"
        className="ask-launcher group fixed right-4 bottom-4 z-[60] flex flex-col items-center gap-2 md:right-6 md:bottom-6"
      >
        <span className="ask-launcher-face relative flex size-16 items-center justify-center rounded-full border border-accent/30 bg-surface shadow-[0_0_24px_rgba(34,211,238,0.16)]">
          <svg viewBox="0 0 64 64" className="size-10" aria-hidden>
            <circle cx="32" cy="32" r="22" fill="none" stroke="#22d3ee" strokeOpacity="0.35" />
            <circle cx="24" cy="30" r="2.2" fill="#22d3ee" />
            <circle cx="40" cy="30" r="2.2" fill="#22d3ee" />
            <path
              d="M26 38 C30 41, 34 41, 38 38"
              fill="none"
              stroke="#22d3ee"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </span>
        <span className="rounded-md border border-line bg-surface/90 px-2 py-1 font-mono text-[10px] tracking-[0.14em] text-accent uppercase opacity-90 group-hover:opacity-100">
          Ask Abdul AI
        </span>
      </button>
    );
  },
);
