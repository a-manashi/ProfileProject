import { completeChat, ProviderError, type ChatTurn } from "@/lib/ai/provider";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 15;

const MAX_MESSAGE_LENGTH = 800;
const MAX_HISTORY = 12;

function isTurn(value: unknown): value is ChatTurn {
  if (!value || typeof value !== "object") return false;
  const turn = value as ChatTurn;
  return (
    (turn.role === "user" || turn.role === "assistant") &&
    typeof turn.content === "string"
  );
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const payload = body as { messages?: unknown; voice?: unknown };
  if (!Array.isArray(payload.messages) || payload.messages.length === 0) {
    return Response.json({ error: "A question is required." }, { status: 400 });
  }

  const messages = payload.messages.filter(isTurn).slice(-MAX_HISTORY);
  if (messages.length === 0) {
    return Response.json({ error: "A question is required." }, { status: 400 });
  }

  const last = messages[messages.length - 1];
  if (!last || last.role !== "user" || !last.content.trim()) {
    return Response.json({ error: "A question is required." }, { status: 400 });
  }

  if (last.content.length > MAX_MESSAGE_LENGTH) {
    return Response.json(
      { error: "Please keep questions under 800 characters." },
      { status: 400 },
    );
  }

  const sanitized = messages.map((turn) => ({
    role: turn.role,
    content: turn.content.slice(0, MAX_MESSAGE_LENGTH).trim(),
  }));

  try {
    const reply = await completeChat({
      messages: sanitized,
      voice: payload.voice === true,
    });
    return Response.json({ reply });
  } catch (error) {
    if (error instanceof ProviderError && error.code === "not_configured") {
      return Response.json(
        { error: "The assistant is temporarily unavailable." },
        { status: 503 },
      );
    }

    return Response.json(
      { error: "I couldn't reach the assistant just now. Please try again." },
      { status: 502 },
    );
  }
}
