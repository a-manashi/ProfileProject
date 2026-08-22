import { BrainCircuit, Database, Layers, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { credibility } from "@/lib/content";

const icons = {
  "10+ years": User,
  "Full-stack systems": Layers,
  "AI-assisted workflow": BrainCircuit,
  "Data and infrastructure": Database,
} as const;

export function CredibilityBar() {
  return (
    <section aria-label="Experience highlights" className="border-b border-line bg-surface/50">
      <Container className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:py-10">
        {credibility.map((item) => {
          const Icon = icons[item.title];
          return (
            <div
              key={item.title}
              className="flex gap-3 lg:border-l lg:border-line lg:px-6 first:lg:border-l-0 first:lg:pl-0 last:lg:pr-0"
            >
              <Icon
                className="mt-0.5 size-6 shrink-0 text-accent"
                strokeWidth={1.5}
                aria-hidden
              />
              <div>
                <h2 className="font-display text-base text-ink">{item.title}</h2>
                <p className="mt-1 text-sm text-mute">{item.detail}</p>
              </div>
            </div>
          );
        })}
      </Container>
    </section>
  );
}
