import { Globe, Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";
import type { SocialLink } from "@/lib/types";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.833.091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.56 9.56 0 0 1 2.504.337c1.909-1.294 2.748-1.025 2.748-1.025.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12c0-5.523-4.477-10-10-10Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="size-4 fill-current">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SocialIcon({ icon }: { icon: SocialLink["icon"] }) {
  if (icon === "github") return <GitHubIcon />;
  if (icon === "linkedin") return <LinkedInIcon />;
  return <Globe size={16} strokeWidth={1.75} />;
}

type SocialLinksProps = {
  className?: string;
  includeEmail?: boolean;
};

export function SocialLinks({ className, includeEmail = true }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-3", className)}>
      {site.socials.map((item) => (
        <li key={item.label}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="inline-flex size-9 items-center justify-center rounded-md border border-line text-mute transition-colors hover:border-accent/40 hover:text-ink"
          >
            <SocialIcon icon={item.icon} />
          </a>
        </li>
      ))}
      {includeEmail ? (
        <li>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="inline-flex size-9 items-center justify-center rounded-md border border-line text-mute transition-colors hover:border-accent/40 hover:text-ink"
          >
            <Mail size={16} strokeWidth={1.75} />
          </a>
        </li>
      ) : null}
    </ul>
  );
}
