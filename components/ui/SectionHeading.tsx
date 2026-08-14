import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  titleId?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  lede,
  titleId,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? (
        <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="font-display text-3xl tracking-tight text-ink md:text-4xl"
      >
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 text-base leading-relaxed text-mute">{lede}</p>
      ) : null}
    </div>
  );
}
