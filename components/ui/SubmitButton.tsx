import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type SubmitButtonProps = ComponentPropsWithoutRef<"button">;

export function SubmitButton({ className, disabled, ...props }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-lg px-6 py-2.5 text-sm font-medium tracking-wide transition-colors",
        "shadow-accent-glow bg-accent text-canvas hover:bg-accent-hover",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas",
        "disabled:cursor-not-allowed disabled:opacity-60",
        className,
      )}
      {...props}
    />
  );
}
