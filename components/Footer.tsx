import { SocialLinks } from "@/components/SocialLinks";
import { Container } from "@/components/ui/Container";
import { footer } from "@/lib/content";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-ink">{site.name}</p>
          <p className="mt-1 text-sm text-mute">{footer.identity}</p>
          <p className="mt-3 text-xs text-mute">{footer.copyright}</p>
        </div>
        <SocialLinks />
      </Container>
    </footer>
  );
}
