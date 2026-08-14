"use client";

import dynamic from "next/dynamic";

const AskAbdulAI = dynamic(
  () => import("@/components/chatbot/AskAbdulAI").then((mod) => mod.AskAbdulAI),
  { ssr: false },
);

export function AskAbdulAIMount() {
  return <AskAbdulAI />;
}
