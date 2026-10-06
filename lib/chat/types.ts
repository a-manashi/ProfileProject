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
  "What services does Abdul offer?",
  "Can Abdul modernize a legacy PHP application?",
  "What kind of project would Abdul be a good fit for?",
  "How do I start a project with Abdul?",
  "Tell me about his Python and FastAPI experience.",
  "Has Abdul built MCP integrations for Claude?",
];
