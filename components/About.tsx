import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { about } from "@/lib/content";

export function About() {
  return (
    <Section
      id="about"
      labelledBy="about-title"
      className="flex min-h-[100dvh] items-center"
    >
      <Container className="w-full">
        <Reveal>
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            titleId="about-title"
          />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-mute">
            {about.paragraphs.map((paragraph) => (
              <p
                key={paragraph}
                className={
                  paragraph.includes("PHP") ? "font-medium text-accent" : undefined
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
