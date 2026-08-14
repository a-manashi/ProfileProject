import { completeChat, ProviderError, type ChatTurn } from "@/lib/ai/provider";

const MAX_MESSAGE_LENGTH = 800;
const MAX_HISTORY = 12;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 15;

const hits = new Map<string, number[]>();

function clientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0]?.trim() || "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < RATE_LIMIT_WINDOW_MS);
  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function isTurn(value: unknown): value is ChatTurn {
  if (!value || typeof value !== "object") return false;
  const turn = value as ChatTurn;
  return (
    (turn.role === "user" || turn.role === "assistant") &&
    typeof turn.content === "string"
  );
}

export async function POST(request: Request) {
  if (isRateLimited(clientIp(request))) {
    return Response.json(
      { error: "Too many questions. Please try again in a few minutes." },
      { status: 429 },
    );
  }

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
        { error: "Ask Abdul AI is not configured yet. Add an AI_API_KEY to enable it." },
        { status: 503 },
      );
    }

    return Response.json(
      { error: "I couldn't reach the assistant just now. Please try again." },
      { status: 502 },
    );
  }
}
