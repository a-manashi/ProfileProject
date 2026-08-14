import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <Section labelledBy="experience-title" className="bg-surface/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={experience.eyebrow}
            title={experience.title}
            lede={experience.lede}
            titleId="experience-title"
          />
        </Reveal>

        <ol className="relative mt-12 max-w-2xl border-l border-line pl-8">
          {experience.stages.map((stage, index) => (
            <li key={stage.title} className="relative pb-10 last:pb-0">
              <span className="absolute -left-[37px] top-1.5 size-2.5 rounded-full border border-accent bg-accent/20" />
              <Reveal delayMs={index * 70}>
                <h3 className="font-display text-lg text-ink">{stage.title}</h3>
                <p className="mt-1 font-mono text-sm text-mute">{stage.detail}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
