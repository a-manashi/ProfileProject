import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl border border-line bg-surface p-6 transition-colors duration-300",
        "hover:border-accent/35 hover:bg-elevated",
        className,
      )}
    >
      {children}
    </div>
  );
}
