import { cn } from "@/lib/cn";
import type { ChatMessage as ChatMessageType } from "@/lib/chat/types";

type ChatMessageProps = {
  message: ChatMessageType;
};

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex", isUser ? "justify-end" : "justify-start")}>
      <p
        className={cn(
          "max-w-[90%] rounded-xl px-3 py-2 text-sm leading-relaxed",
          isUser
            ? "bg-canvas text-ink"
            : "border border-accent/20 bg-accent/10 text-ink",
        )}
      >
        {message.content}
      </p>
    </div>
  );
}
