export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "globe";
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export type Service = {
  title: string;
  description: string;
  technologies: string[];
};

export type Project = {
  title: string;
  challenge?: string;
  solution?: string;
  approach?: string;
  businessValue?: string;
  contribution?: string;
  summary?: string;
  technologies: string[];
};

export type Principle = {
  title: string;
  body: string;
};

export type WhyHireItem = {
  key: "experience" | "legacy" | "fullstack" | "ai";
  title: string;
  body: string;
};

export type AudienceItem = {
  title: string;
};

export type ArchitectureStep = {
  title: string;
  body?: string;
};

export type ProcessNextStep = {
  title: string;
  body: string;
};
