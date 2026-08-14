"use client";

import { useEffect, useId, useRef, useState } from "react";
import { X } from "lucide-react";
import { AIAvatar } from "@/components/chatbot/AIAvatar";
import { ChatInput } from "@/components/chatbot/ChatInput";
import { ChatMessage } from "@/components/chatbot/ChatMessage";
import { SuggestedQuestions } from "@/components/chatbot/SuggestedQuestions";
import { VoiceControls } from "@/components/chatbot/VoiceControls";
import { VoiceStatus } from "@/components/chatbot/VoiceStatus";
import type { AvatarState, ChatMessage as ChatMessageType } from "@/lib/chat/types";
import { VOICE_PREF_KEY } from "@/lib/chat/types";
import {
  createSpeechRecognizer,
  isSpeechRecognitionSupported,
  voiceErrorMessage,
  type RecognitionError,
} from "@/lib/voice/speech-recognition";
import { pause, resume, speak, stop } from "@/lib/voice/text-to-speech";

type ChatbotWindowProps = {
  onClose: () => void;
};

function createId() {
  return crypto.randomUUID();
}

export function ChatbotWindow({ onClose }: ChatbotWindowProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<ReturnType<typeof createSpeechRecognizer>>(null);
  const listenTimer = useRef<number | null>(null);

  const [messages, setMessages] = useState<ChatMessageType[]>([]);
  const [input, setInput] = useState("");
  const [interim, setInterim] = useState("");
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [avatarState, setAvatarState] = useState<AvatarState>("idle");
  const [busy, setBusy] = useState(false);
  const [voicePref, setVoicePref] = useState(
    () =>
      typeof window !== "undefined" &&
      window.localStorage.getItem(VOICE_PREF_KEY) === "on",
  );

  useEffect(() => {
    closeRef.current?.focus();

    const mobile = window.matchMedia("(max-width: 767px)").matches;
    if (mobile) document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
      stop();
      recognitionRef.current?.abort();
      if (listenTimer.current) window.clearTimeout(listenTimer.current);
    };
  }, []);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, interim, status, error]);

  function setVoicePreference(next: boolean) {
    setVoicePref(next);
    window.localStorage.setItem(VOICE_PREF_KEY, next ? "on" : "off");
  }

  function speakReply(message: ChatMessageType) {
    speak(message.content, {
      onStart: () => {
        setAvatarState("speaking");
        setStatus("Speaking...");
      },
      onEnd: () => {
        setAvatarState("idle");
        setStatus("");
      },
      onPause: () => {
        setAvatarState("paused");
        setStatus("Paused");
      },
      onResume: () => {
        setAvatarState("speaking");
        setStatus("Speaking...");
      },
      onError: () => {
        setAvatarState("idle");
        setStatus("");
      },
    });
  }

  async function sendMessage(text: string, fromVoice: boolean) {
    const content = text.trim();
    if (!content || busy) return;

    stop();
    recognitionRef.current?.abort();
    setError("");
    setInterim("");
    setInput("");

    const userMessage: ChatMessageType = { id: createId(), role: "user", content };
    const history = [...messages, userMessage];
    setMessages(history);
    setBusy(true);
    setAvatarState("thinking");
    setStatus("Thinking...");

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          voice: fromVoice || voicePref,
          messages: history.map((item) => ({
            role: item.role,
            content: item.content,
          })),
        }),
      });

      const data = (await response.json()) as { reply?: string; error?: string };
      if (!response.ok || !data.reply) {
        throw new Error(data.error || "I couldn't reach the assistant just now. Please try again.");
      }

      const assistantMessage: ChatMessageType = {
        id: createId(),
        role: "assistant",
        content: data.reply,
      };
      setMessages((current) => [...current, assistantMessage]);
      setAvatarState("idle");
      setStatus("");

      if (fromVoice || voicePref) {
        speakReply(assistantMessage);
      }
    } catch (caught) {
      setAvatarState("error");
      setStatus("");
      setError(
        caught instanceof Error
          ? caught.message
          : "I couldn't reach the assistant just now. Please try again.",
      );
    } finally {
      setBusy(false);
    }
  }

  function clearListenTimer() {
    if (listenTimer.current) {
      window.clearTimeout(listenTimer.current);
      listenTimer.current = null;
    }
  }

  function handleVoiceError(code: RecognitionError) {
    clearListenTimer();
    setInterim("");
    setStatus("");
    setAvatarState("error");
    setError(voiceErrorMessage(code));
  }

  function toggleListening() {
    if (avatarState === "listening") {
      clearListenTimer();
      recognitionRef.current?.stop();
      setAvatarState("idle");
      setStatus("");
      setInterim("");
      return;
    }

    if (busy) return;

    if (!isSpeechRecognitionSupported()) {
      handleVoiceError("unsupported");
      return;
    }

    setError("");
    setAvatarState("listening");
    setStatus("Listening...");

    const recognizer = createSpeechRecognizer({
      onInterim: setInterim,
      onFinal: (transcript) => {
        clearListenTimer();
        setInterim("");
        void sendMessage(transcript, true);
      },
      onError: handleVoiceError,
      onEnd: () => {
        clearListenTimer();
        setInterim("");
        setAvatarState((current) => (current === "listening" ? "idle" : current));
        setStatus((current) => (current === "Listening..." ? "" : current));
      },
    });

    if (!recognizer) {
      handleVoiceError("unsupported");
      return;
    }

    recognitionRef.current = recognizer;
    try {
      recognizer.start();
    } catch {
      handleVoiceError("unknown");
      return;
    }

    listenTimer.current = window.setTimeout(() => {
      recognizer.abort();
      handleVoiceError("timeout");
    }, 12000);
  }

  const lastAssistant = [...messages].reverse().find((item) => item.role === "assistant");

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="ask-window fixed inset-x-0 bottom-0 z-[60] flex h-[min(100dvh,100%)] max-h-[100dvh] flex-col border-t border-line bg-surface shadow-[-8px_0_40px_rgba(0,0,0,0.35)] md:inset-auto md:right-6 md:bottom-6 md:h-[640px] md:w-[420px] md:rounded-2xl md:border"
    >
      <header className="flex items-start justify-between border-b border-line px-4 py-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-accent" aria-hidden />
            <h2 id={titleId} className="font-mono text-xs tracking-[0.18em] text-ink uppercase">
              Ask Abdul AI
            </h2>
          </div>
          <p className="mt-1 pl-4 font-mono text-[10px] tracking-[0.16em] text-mute uppercase">
            AI Portfolio Assistant
          </p>
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close Ask Abdul AI"
          className="inline-flex size-9 items-center justify-center rounded-md border border-line text-mute hover:text-ink"
        >
          <X size={16} />
        </button>
      </header>

      <div className="border-b border-line px-4 py-4 text-center">
        <AIAvatar state={avatarState} />
        <p className="mt-2 text-sm text-ink">Hi, I&apos;m Abdul&apos;s AI assistant.</p>
        <p className="mt-1 text-xs text-mute">
          Ask me about Abdul&apos;s experience, projects, skills, or engineering approach.
        </p>
      </div>

      <div ref={listRef} className="min-h-0 flex-1 space-y-3 overflow-y-auto px-4 py-3">
        {messages.length === 0 ? (
          <SuggestedQuestions
            disabled={busy || avatarState === "listening"}
            onSelect={(question) => void sendMessage(question, false)}
          />
        ) : (
          messages.map((message) => <ChatMessage key={message.id} message={message} />)
        )}

        <VoiceStatus status={status} transcript={interim} />

        {error ? (
          <p role="alert" className="text-sm text-mute">
            {error}
          </p>
        ) : null}

        {lastAssistant ? (
          <VoiceControls
            state={avatarState}
            canSpeak={Boolean(lastAssistant)}
            onListen={() => speakReply(lastAssistant)}
            onPause={pause}
            onResume={resume}
            onStop={() => {
              stop();
              setAvatarState("idle");
              setStatus("");
            }}
          />
        ) : null}
      </div>

      <div className="border-t border-line px-4 py-3">
        <label className="mb-2 flex items-center justify-between text-xs text-mute">
          <span>Voice responses</span>
          <button
            type="button"
            role="switch"
            aria-checked={voicePref}
            onClick={() => setVoicePreference(!voicePref)}
            className="rounded-md border border-line px-2 py-1 font-mono text-[11px] text-ink"
          >
            {voicePref ? "ON" : "OFF"}
          </button>
        </label>
        <ChatInput
          value={input}
          listening={avatarState === "listening"}
          disabled={busy}
          onChange={setInput}
          onSubmit={() => void sendMessage(input, false)}
          onVoice={toggleListening}
        />
      </div>

      <p className="sr-only" aria-live="polite">
        {status || error}
      </p>
    </div>
  );
}
