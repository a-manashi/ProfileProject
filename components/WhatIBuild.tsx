import {
  BookOpen,
  LineChart,
  Radio,
  ScanSearch,
  ShoppingBag,
  Warehouse,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whatIBuild } from "@/lib/content";

const cardIcons = [
  LineChart,
  Warehouse,
  ScanSearch,
  Radio,
  ShoppingBag,
  BookOpen,
];

export function WhatIBuild() {
  return (
    <Section id="work" labelledBy="work-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={whatIBuild.eyebrow}
            title={whatIBuild.title}
            lede={whatIBuild.lede}
            titleId="work-title"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whatIBuild.cards.map((card, index) => {
            const Icon = cardIcons[index];
            return (
              <Reveal key={card.title} delayMs={index * 50}>
                <Card className="h-full">
                  <div className="mb-4 inline-flex size-9 items-center justify-center rounded-md border border-line text-accent">
                    <Icon size={16} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-display text-lg text-ink">{card.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-mute">
                    {card.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-accent/70" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
