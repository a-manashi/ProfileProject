import { cn } from "@/lib/cn";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-line bg-canvas px-2.5 py-1",
        "font-mono text-[11px] tracking-wide text-mute",
        "transition-colors duration-200 hover:border-accent/40 hover:text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
