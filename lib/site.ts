import type { NavItem, SocialLink } from "@/lib/types";

export const site = {
  name: "Abdul Manashi",
  role: "Senior Full-Stack Engineer",
  identities: [
    "Senior Full-Stack Engineer",
    "Software Developer",
    "Programmer",
    "Problem Solver",
  ],
  tagline: "I build software that solves real business problems.",
  email: "abdul.manashi@hotmail.com",
  siteUrl: "https://example.com",
  nav: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Work", href: "#work" },
    { label: "Engineering", href: "#engineering" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  socials: [
    {
      label: "GitHub",
      href: "https://github.com/a-manashi",
      icon: "github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abdul-manashi-39b64522/",
      icon: "linkedin",
    },
  ] satisfies SocialLink[],
  seo: {
    title: "Abdul Manashi | Senior Full-Stack Engineer",
    description:
      "Senior Full-Stack Engineer with 10+ years of experience in Python, Django, FastAPI, React, AWS, Docker, PostgreSQL, MySQL, AI-assisted development, analytics, automation, and scalable web applications.",
  },
} as const;

export function getSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (production) return `https://${production.replace(/\/$/, "")}`;

  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel.replace(/\/$/, "")}`;

  return "http://localhost:3000";
}
