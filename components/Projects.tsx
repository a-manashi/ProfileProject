import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/content";

export function Projects() {
  return (
    <Section labelledBy="projects-title" className="bg-surface/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={projects.eyebrow}
            title={projects.title}
            lede={projects.lede}
            titleId="projects-title"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {projects.items.map((project, index) => (
            <Reveal key={project.title} delayMs={index * 70}>
              <Card className="flex h-full flex-col">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-display text-xl text-ink">
                  {project.title}
                </h3>

                {project.summary ? (
                  <p className="mt-4 text-sm leading-relaxed text-mute">
                    {project.summary}
                  </p>
                ) : null}

                {project.problem ? (
                  <div className="mt-5">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink/80">
                      Problem
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-mute">
                      {project.problem}
                    </p>
                  </div>
                ) : null}

                {project.solution ? (
                  <div className="mt-4">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-ink/80">
                      Solution
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-mute">
                      {project.solution}
                    </p>
                  </div>
                ) : null}

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech}>
                      <Badge>{tech}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
