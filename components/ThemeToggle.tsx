"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import {
  applyTheme,
  getStoredTheme,
  setTheme,
  type Theme,
} from "@/lib/theme";

type ThemeToggleProps = {
  className?: string;
};

const options: Array<{ id: Theme; label: string; swatch: string }> = [
  { id: "current", label: "Current", swatch: "#22d3ee" },
  { id: "forest", label: "Forest", swatch: "#83d65c" },
];

export function ThemeToggle({ className }: ThemeToggleProps) {
  const [theme, setThemeState] = useState<Theme>("current");

  useEffect(() => {
    const stored = getStoredTheme();
    setThemeState(stored);
    applyTheme(stored);
  }, []);

  function select(next: Theme) {
    setThemeState(next);
    setTheme(next);
  }

  return (
    <div
      role="group"
      aria-label="Color theme"
      className={cn(
        "inline-flex items-center gap-1 rounded-md border border-line bg-canvas/60 p-1",
        className,
      )}
    >
      {options.map((option) => {
        const selected = theme === option.id;
        return (
          <button
            key={option.id}
            type="button"
            aria-pressed={selected}
            onClick={() => select(option.id)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded px-2 py-1 font-mono text-[10px] tracking-[0.12em] uppercase transition-colors",
              selected
                ? "bg-elevated text-ink"
                : "text-mute hover:text-ink",
            )}
          >
            <span
              className="size-2 rounded-full"
              style={{ backgroundColor: option.swatch }}
              aria-hidden
            />
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
