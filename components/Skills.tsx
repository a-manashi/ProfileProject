import {
  BarChart3,
  Cloud,
  Database,
  PanelsTopLeft,
  Server,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skills } from "@/lib/content";

const categoryIcons = {
  Backend: Server,
  Frontend: PanelsTopLeft,
  Databases: Database,
  "Cloud & Infrastructure": Cloud,
  "Data / Analytics": BarChart3,
  "Engineering / Automation": Workflow,
} as const;

export function Skills() {
  return (
    <Section id="skills" labelledBy="skills-title" className="bg-surface/40">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={skills.eyebrow}
            title={skills.title}
            lede={skills.lede}
            titleId="skills-title"
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category, index) => {
            const Icon =
              categoryIcons[category.title as keyof typeof categoryIcons];

            return (
              <Reveal key={category.title} delayMs={index * 60}>
                <Card className="h-full">
                  <div className="mb-4 flex items-center gap-3">
                    {Icon ? (
                      <span className="inline-flex size-9 items-center justify-center rounded-md border border-line text-accent">
                        <Icon size={16} strokeWidth={1.75} />
                      </span>
                    ) : null}
                    <h3 className="font-display text-lg text-ink">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <li key={skill}>
                        <Badge>{skill}</Badge>
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
