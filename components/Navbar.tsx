"use client";

import { useEffect, useId, useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

function activeSection() {
  const ids = site.nav.map((item) => item.href.slice(1));
  const offset = 96;
  let current = ids[0] ?? "home";

  for (const id of ids) {
    const section = document.getElementById(id);
    if (!section) continue;
    if (section.getBoundingClientRect().top - offset <= 0) {
      current = id;
    }
  }

  const atBottom =
    window.innerHeight + window.scrollY >=
    document.documentElement.scrollHeight - 8;
  if (atBottom) current = "contact";

  return `#${current}`;
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      setActive(activeSection());
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors duration-300",
        scrolled || open
          ? "border-line bg-canvas/85 backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-[4.25rem] items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-3 text-ink"
          onClick={close}
        >
          <span className="inline-flex size-8 items-center justify-center rounded-md border border-line font-mono text-[11px] text-accent">
            AM
          </span>
          <span className="font-display text-sm tracking-tight">
            {site.name}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-7">
            {site.nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative pb-1 text-sm tracking-wide transition-colors",
                      isActive
                        ? "text-accent"
                        : "text-mute hover:text-ink",
                    )}
                  >
                    {item.label}
                    {isActive ? (
                      <span
                        className="absolute inset-x-0 -bottom-0.5 h-px bg-accent"
                        aria-hidden
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href="#contact"
            className="rounded-md border border-line px-3 py-1.5 text-sm text-ink transition-colors hover:border-accent/50 hover:bg-elevated"
          >
            Let&apos;s talk
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-md border border-line text-ink md:hidden"
          aria-expanded={open}
          aria-controls={menuId}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </Container>

      <div
        id={menuId}
        hidden={!open}
        className="border-t border-line bg-canvas md:hidden"
      >
        <nav aria-label="Mobile">
          <ul className="flex flex-col px-5 py-3">
            {site.nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block py-3 text-base",
                      isActive ? "text-accent" : "text-ink",
                    )}
                    onClick={close}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                className="block py-3 text-base text-accent"
                onClick={close}
              >
                Let&apos;s talk
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
