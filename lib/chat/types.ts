export type AvatarState =
  | "idle"
  | "listening"
  | "thinking"
  | "speaking"
  | "paused"
  | "error";

export type ChatRole = "user" | "assistant";

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

export const VOICE_PREF_KEY = "ask-abdul-ai-voice-responses";

export const suggestedQuestions = [
  "What does Abdul specialize in?",
  "What kind of software does Abdul build?",
  "Tell me about his Python experience.",
  "Has Abdul worked with AWS?",
  "Tell me about his AI-assisted development.",
  "What kind of project would Abdul be a good fit for?",
];
