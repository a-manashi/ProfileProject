import { Cable, Code2, RefreshCw, Workflow } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

const cardIcons = [RefreshCw, Code2, Workflow, Cable] as const;

export function WhatIBuild() {
  return (
    <Section id="services" labelledBy="services-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            lede={services.lede}
            titleId="services-title"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {services.cards.map((card, index) => {
            const Icon = cardIcons[index];
            return (
              <Reveal key={card.title} delayMs={index * 50}>
                <Card className="flex h-full flex-col">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    Service {String(index + 1).padStart(2, "0")}
                  </p>
                  <div className="mt-4 mb-4 inline-flex size-9 items-center justify-center rounded-md border border-line text-accent">
                    <Icon size={16} strokeWidth={1.75} aria-hidden />
                  </div>
                  <h3 className="font-display text-lg text-ink">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">
                    {card.description}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {card.technologies.map((tech) => (
                      <li key={tech}>
                        <Badge>{tech}</Badge>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-mute md:text-base">
            {services.capability}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}
