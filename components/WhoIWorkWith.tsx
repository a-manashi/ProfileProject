import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { audience } from "@/lib/content";

export function WhoIWorkWith() {
  return (
    <Section labelledBy="audience-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={audience.eyebrow}
            title={audience.title}
            lede={audience.lede}
            titleId="audience-title"
          />
        </Reveal>

        <ul className="mt-12 grid gap-3 sm:grid-cols-2">
          {audience.items.map((item, index) => (
            <li key={item.title}>
              <Reveal delayMs={index * 40}>
                <Card className="h-full">
                  <p className="flex gap-3 text-sm leading-relaxed text-ink">
                    <span
                      className="mt-2 size-1.5 shrink-0 rounded-full bg-accent"
                      aria-hidden
                    />
                    <span>{item.title}</span>
                  </p>
                </Card>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
