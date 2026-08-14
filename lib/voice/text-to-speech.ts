export type SpeechHandlers = {
  onStart?: () => void;
  onEnd?: () => void;
  onPause?: () => void;
  onResume?: () => void;
  onError?: () => void;
};

let current: SpeechSynthesisUtterance | null = null;

function synth() {
  if (typeof window === "undefined" || !window.speechSynthesis) return null;
  return window.speechSynthesis;
}

export function isSpeechSynthesisSupported() {
  return synth() !== null;
}

export function stop() {
  const speech = synth();
  if (!speech) return;
  current = null;
  speech.cancel();
}

export function pause() {
  const speech = synth();
  if (!speech || speech.paused) return;
  speech.pause();
}

export function resume() {
  const speech = synth();
  if (!speech || !speech.paused) return;
  speech.resume();
}

export function speak(text: string, handlers: SpeechHandlers = {}) {
  const speech = synth();
  if (!speech) {
    handlers.onError?.();
    return;
  }

  stop();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.lang = "en-US";
  current = utterance;

  utterance.onstart = () => handlers.onStart?.();
  utterance.onend = () => {
    if (current === utterance) current = null;
    handlers.onEnd?.();
  };
  utterance.onerror = () => {
    if (current === utterance) current = null;
    handlers.onError?.();
  };
  utterance.onpause = () => handlers.onPause?.();
  utterance.onresume = () => handlers.onResume?.();

  speech.speak(utterance);
}
