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
        "inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium tracking-wide transition-colors",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        variant === "primary" &&
          "bg-accent text-canvas hover:bg-accent-hover",
        variant === "ghost" &&
          "border border-line bg-transparent text-ink hover:border-accent/50 hover:bg-elevated",
        className,
      )}
      {...props}
    />
  );
}
