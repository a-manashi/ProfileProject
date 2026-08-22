import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ComponentPropsWithoutRef<"a"> & {
  variant?: "primary" | "ghost";
};

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium tracking-wide transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        variant === "primary" &&
          "bg-accent text-canvas shadow-[0_0_24px_rgba(34,211,238,0.18)] hover:bg-accent-hover",
        variant === "ghost" &&
          "border border-line bg-transparent text-ink hover:border-accent/60 hover:bg-elevated",
        className,
      )}
      {...props}
    />
  );
}
