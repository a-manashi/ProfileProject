import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/lib/content";

export function About() {
  return (
    <Section id="about" labelledBy="about-title">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            titleId="about-title"
          />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mute">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
