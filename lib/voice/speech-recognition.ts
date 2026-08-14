export type RecognitionError =
  | "unsupported"
  | "denied"
  | "no-microphone"
  | "no-speech"
  | "timeout"
  | "network"
  | "unknown";

export type RecognitionHandlers = {
  onInterim?: (text: string) => void;
  onFinal?: (text: string) => void;
  onError?: (code: RecognitionError) => void;
  onEnd?: () => void;
};

type BrowserSpeechRecognition = {
  lang: string;
  interimResults: boolean;
  continuous: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: ((event: { error?: string }) => void) | null;
  onend: (() => void) | null;
};

type SpeechRecognitionEventLike = {
  resultIndex: number;
  results: ArrayLike<{
    isFinal: boolean;
    0: { transcript: string };
  }>;
};

type SpeechRecognitionCtor = new () => BrowserSpeechRecognition;

function getSpeechRecognitionCtor(): SpeechRecognitionCtor | null {
  if (typeof window === "undefined") return null;
  const speechWindow = window as Window & {
    SpeechRecognition?: SpeechRecognitionCtor;
    webkitSpeechRecognition?: SpeechRecognitionCtor;
  };
  return speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition ?? null;
}

export function isSpeechRecognitionSupported() {
  return getSpeechRecognitionCtor() !== null;
}

function mapError(code?: string): RecognitionError {
  switch (code) {
    case "not-allowed":
    case "service-not-allowed":
      return "denied";
    case "audio-capture":
      return "no-microphone";
    case "no-speech":
      return "no-speech";
    case "network":
      return "network";
    case "aborted":
      return "unknown";
    default:
      return "unknown";
  }
}

export function createSpeechRecognizer(handlers: RecognitionHandlers) {
  const Ctor = getSpeechRecognitionCtor();
  if (!Ctor) {
    handlers.onError?.("unsupported");
    return null;
  }

  const recognition = new Ctor();
  recognition.lang = "en-US";
  recognition.interimResults = true;
  recognition.continuous = false;
  recognition.maxAlternatives = 1;

  let finished = false;

  recognition.onresult = (event) => {
    let interim = "";
    let finalText = "";

    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const result = event.results[i];
      const transcript = result?.[0]?.transcript ?? "";
      if (result.isFinal) finalText += transcript;
      else interim += transcript;
    }

    if (interim) handlers.onInterim?.(interim.trim());
    if (finalText.trim()) {
      finished = true;
      handlers.onFinal?.(finalText.trim());
    }
  };

  recognition.onerror = (event) => {
    if (event.error === "aborted") return;
    handlers.onError?.(mapError(event.error));
  };

  recognition.onend = () => {
    if (!finished) handlers.onEnd?.();
  };

  return {
    start() {
      finished = false;
      recognition.start();
    },
    stop() {
      recognition.stop();
    },
    abort() {
      recognition.abort();
    },
  };
}

export function voiceErrorMessage(code: RecognitionError) {
  switch (code) {
    case "denied":
      return "Microphone access was denied. You can still type your question.";
    case "no-microphone":
      return "No microphone was found. You can type your question instead.";
    case "unsupported":
    case "timeout":
    case "no-speech":
    case "network":
    case "unknown":
    default:
      return "Voice input isn't available right now. You can type your question instead.";
  }
}
