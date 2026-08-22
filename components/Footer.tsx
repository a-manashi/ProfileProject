import { SocialLinks } from "@/components/SocialLinks";
import { Container } from "@/components/ui/Container";
import { footer } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40">
      <Container className="py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-md border border-line font-mono text-[11px] text-accent">
              AM
            </span>
            <div>
              <p className="font-display text-ink">{site.name}</p>
              <p className="mt-1 text-sm text-mute">{footer.identity}</p>
            </div>
          </div>

          <SocialLinks />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-mute">{footer.copyright}</p>
          <a
            href="#home"
            className="font-mono text-[11px] tracking-wide text-mute uppercase transition-colors hover:text-accent"
          >
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  );
}
