export const THEME_STORAGE_KEY = "portfolio-theme";

export const themes = ["current", "forest"] as const;

export type Theme = (typeof themes)[number];

const listeners = new Set<() => void>();

export function isTheme(value: unknown): value is Theme {
  return value === "current" || value === "forest";
}

export function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "current";
  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  return isTheme(stored) ? stored : "current";
}

export function getThemeSnapshot(): Theme {
  if (typeof document === "undefined") return "current";
  const fromDom = document.documentElement.dataset.theme;
  if (isTheme(fromDom)) return fromDom;
  return getStoredTheme();
}

export function getServerThemeSnapshot(): Theme {
  return "current";
}

export function subscribeTheme(callback: () => void) {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function emitThemeChange() {
  listeners.forEach((listener) => listener());
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function setTheme(theme: Theme) {
  applyTheme(theme);
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  emitThemeChange();
}

export const themeInitScript = `(function(){try{var k=${JSON.stringify(THEME_STORAGE_KEY)};var t=localStorage.getItem(k);if(t==="current"||t==="forest"){document.documentElement.dataset.theme=t;}else{document.documentElement.dataset.theme="current";}}catch(e){document.documentElement.dataset.theme="current";}})();`;
