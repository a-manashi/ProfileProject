import { BrainCircuit, Layers, RefreshCw, User } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyHire } from "@/lib/content";

const icons = {
  experience: User,
  legacy: RefreshCw,
  fullstack: Layers,
  ai: BrainCircuit,
} as const;

export function CredibilityBar() {
  return (
    <Section
      id="why-hire"
      labelledBy="why-hire-title"
      className="border-b border-line bg-surface/50 py-16 md:py-20"
    >
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={whyHire.eyebrow}
            title={whyHire.title}
            titleId="why-hire-title"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {whyHire.items.map((item, index) => {
            const Icon = icons[item.key];
            return (
              <Reveal key={item.key} delayMs={index * 50}>
                <Card className="h-full">
                  <div className="mb-4 inline-flex size-9 items-center justify-center rounded-md border border-line text-accent">
                    <Icon size={16} strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="font-display text-lg text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mute">
                    {item.body}
                  </p>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
