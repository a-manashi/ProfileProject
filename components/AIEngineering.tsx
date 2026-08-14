import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aiEngineering } from "@/lib/content";

export function AIEngineering() {
  return (
    <Section labelledBy="ai-title">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow={aiEngineering.eyebrow}
              title={aiEngineering.title}
              titleId="ai-title"
            />
            <p className="mt-5 max-w-xl text-base leading-relaxed text-mute">
              {aiEngineering.statement}
            </p>
            <blockquote className="mt-8 border-l-2 border-accent pl-4 font-display text-xl text-ink md:text-2xl">
              {aiEngineering.quote}
            </blockquote>
          </Reveal>

          <Reveal delayMs={80}>
            <div className="rounded-xl border border-line bg-surface p-6">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                workflow
              </p>
              <ul className="flex flex-wrap gap-2">
                {aiEngineering.areas.map((area) => (
                  <li key={area}>
                    <Badge>{area}</Badge>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
