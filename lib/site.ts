import type { NavItem, SocialLink } from "@/lib/types";

export const site = {
  name: "Abdul Manashi",
  role: "Senior Software Engineer",
  identities: [
    "Senior Software Engineer",
    "Software Developer",
    "Programmer",
    "Problem Solver",
  ],
  tagline: "Senior Software Engineer for Complex Web Applications",
  email: "abdul.manashi@hotmail.com",
  siteUrl: "https://abdulmanashi.com",
  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ] satisfies NavItem[],
  navCta: { label: "Discuss Your Project", href: "#contact" },
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
    title:
      "Abdul Manashi | Senior Software Engineer | Python, FastAPI, React & Legacy Modernization",
    description:
      "Senior software engineer with 20+ years of experience building and modernizing complex web applications with Python, Django, FastAPI, React, AWS, automation and AI integrations.",
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
