"use client";

import { useEffect, useRef, useState } from "react";
import { ChatbotLauncher } from "@/components/chatbot/ChatbotLauncher";
import { ChatbotWindow } from "@/components/chatbot/ChatbotWindow";

export function AskAbdulAI() {
  const [open, setOpen] = useState(false);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      {open ? (
        <ChatbotWindow
          onClose={() => {
            setOpen(false);
            window.setTimeout(() => launcherRef.current?.focus(), 0);
          }}
        />
      ) : (
        <ChatbotLauncher ref={launcherRef} onOpen={() => setOpen(true)} />
      )}
    </>
  );
}
