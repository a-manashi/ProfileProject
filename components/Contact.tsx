import { InquiryForm } from "@/components/InquiryForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contact, nextSteps } from "@/lib/content";
import { site } from "@/lib/site";

function mailto() {
  return `mailto:${site.email}?subject=${encodeURIComponent("Project inquiry")}`;
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
              className="max-w-3xl"
            />
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-mute">
              {contact.supporting}
            </p>
            <div className="mt-8">
              <Button href={contact.primaryCta.href}>{contact.primaryCta.label}</Button>
            </div>
            <p className="mt-4 text-sm text-mute">{contact.availability}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
          <Reveal>
            <div className="rounded-2xl border border-line bg-surface px-6 py-8 md:px-8">
              <h3 className="font-display text-2xl tracking-tight text-ink">
                {contact.formTitle}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-mute md:text-base">
                {contact.formLede}
              </p>
              <div className="relative mt-8">
                <InquiryForm />
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div>
              <h3 className="font-display text-2xl tracking-tight text-ink">
                {nextSteps.title}
              </h3>
              <ol className="mt-6 space-y-3">
                {nextSteps.items.map((step, index) => (
                  <li
                    key={step.title}
                    className="relative overflow-hidden rounded-xl border border-line bg-canvas px-4 py-5"
                  >
                    <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
                    <p className="font-mono text-[11px] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-display text-ink">{step.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-mute">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-10">
            <Button href={mailto()} variant="ghost">
              {contact.fallbackLabel}
            </Button>
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
