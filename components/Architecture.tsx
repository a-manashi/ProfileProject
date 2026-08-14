import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { architecture } from "@/lib/content";

export function Architecture() {
  return (
    <Section labelledBy="architecture-title" className="bg-surface/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={architecture.eyebrow}
            title={architecture.title}
            lede={architecture.lede}
            titleId="architecture-title"
          />
        </Reveal>

        <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {architecture.steps.map((step, index) => (
            <li key={step.title}>
              <Reveal delayMs={index * 50} className="h-full">
                <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-canvas px-4 py-5">
                  <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                  <p className="font-mono text-[11px] text-accent">
                    {String(index + 1).padStart(2, "0")}
                    {index < architecture.steps.length - 1 ? (
                      <span className="ml-2 text-mute">→</span>
                    ) : (
                      <span className="ml-2 text-terminal">done</span>
                    )}
                  </p>
                  <p className="mt-3 font-display text-ink">{step.title}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
