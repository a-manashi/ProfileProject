import "server-only";

import { buildSystemPrompt } from "@/lib/ai/portfolio-context";

export type ChatTurn = {
  role: "user" | "assistant";
  content: string;
};

export class ProviderError extends Error {
  constructor(
    public readonly code: "not_configured" | "upstream" | "empty",
    message: string,
  ) {
    super(message);
    this.name = "ProviderError";
  }
}

type CompletionOptions = {
  messages: ChatTurn[];
  voice?: boolean;
};

export async function completeChat({ messages, voice = false }: CompletionOptions) {
  const apiKey = process.env.AI_API_KEY;
  if (!apiKey) {
    throw new ProviderError(
      "not_configured",
      "The assistant is not configured yet.",
    );
  }

  const baseUrl = (process.env.AI_BASE_URL ?? "https://api.openai.com/v1").replace(
    /\/$/,
    "",
  );
  const model = process.env.AI_MODEL ?? "gpt-5.6-luna";

  let response: Response;
  try {
    response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        temperature: 0.4,
        max_tokens: voice ? 220 : 380,
        messages: [
          { role: "system", content: buildSystemPrompt(voice) },
          ...messages,
        ],
      }),
      signal: AbortSignal.timeout(12_000),
      cache: "no-store",
    });
  } catch {
    throw new ProviderError("upstream", "The assistant could not complete that request.");
  }

  if (!response.ok) {
    throw new ProviderError("upstream", "The assistant could not complete that request.");
  }

  const data = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = data.choices?.[0]?.message?.content?.trim();
  if (!content) {
    throw new ProviderError("empty", "The assistant returned an empty response.");
  }

  return content;
}
