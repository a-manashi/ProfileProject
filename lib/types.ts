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

export type BuildCard = {
  title: string;
  points: string[];
};

export type Project = {
  title: string;
  problem?: string;
  solution?: string;
  summary?: string;
  technologies: string[];
};

export type Principle = {
  title: string;
  body: string;
};

export type ExperienceStage = {
  title: string;
  detail: string;
};

export type ArchitectureStep = {
  title: string;
};
