import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { philosophy } from "@/lib/content";

export function EngineeringPhilosophy() {
  return (
    <Section id="engineering" labelledBy="philosophy-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={philosophy.eyebrow}
            title={philosophy.title}
            titleId="philosophy-title"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {philosophy.principles.map((principle, index) => (
            <Reveal key={principle.title} delayMs={index * 50}>
              <Card className="h-full">
                <p className="font-mono text-[11px] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-lg text-ink">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  {principle.body}
                </p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
