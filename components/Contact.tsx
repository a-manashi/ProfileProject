import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact } from "@/lib/content";
import { site } from "@/lib/site";

function mailto(subject?: string) {
  const encoded = subject ? `?subject=${encodeURIComponent(subject)}` : "";
  return `mailto:${site.email}${encoded}`;
}

export function Contact() {
  return (
    <Section id="contact" labelledBy="contact-title">
      <Container>
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface px-6 py-12 md:px-12 md:py-16">
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              lede={contact.lede}
              titleId="contact-title"
              className="max-w-2xl"
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={mailto(contact.primaryCta.subject)}>
                {contact.primaryCta.label}
              </Button>
              <Button href={mailto()} variant="ghost">
                {contact.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-6">
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-sm text-mute transition-colors hover:text-ink"
              >
                {site.email}
              </a>
            </p>
            <SocialLinks className="mt-6" />
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
