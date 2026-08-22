import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { TerminalVisual } from "@/components/ui/TerminalVisual";
import { hero } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="home"
      aria-labelledby="hero-name"
      className="relative overflow-hidden scroll-mt-24"
    >
      <div className="hero-grid pointer-events-none absolute inset-0" />
      <div className="hero-beam" />
      <Container className="relative grid items-center gap-12 pt-8 pb-16 md:pt-10 md:pb-20 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:pt-12 lg:pb-24">
        <div>
          <p className="hero-in inline-flex rounded-full border border-accent/40 px-3 py-1 font-mono text-[11px] text-accent">
            {hero.eyebrow}
          </p>
          <h1
            id="hero-name"
            className="hero-in hero-in-1 mt-5 font-display text-5xl tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Abdul <span className="text-accent">Manashi</span>
          </h1>
          <p className="hero-in hero-in-2 mt-5 font-display text-xl text-ink md:text-2xl">
            {hero.tagline}
          </p>
          <p className="hero-in hero-in-3 mt-5 max-w-xl text-base leading-relaxed text-mute">
            {hero.summary}
          </p>

          <ul className="hero-in hero-in-3 mt-7 flex flex-wrap gap-2">
            {hero.focus.map((item) => (
              <li
                key={item}
                className="rounded-md border border-line bg-surface px-2.5 py-1 font-mono text-[11px] text-mute"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="hero-in hero-in-4 mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
            <Button href={hero.secondaryCta.href} variant="ghost">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="hero-in hero-in-3">
          <TerminalVisual />
        </div>
      </Container>
    </section>
  );
}
