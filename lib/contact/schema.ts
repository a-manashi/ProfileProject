import { budgets, projectTypes, timelines } from "@/lib/content";

export type InquiryFields = {
  name: string;
  email: string;
  help: string;
  company: string;
  technology: string;
  projectType: string;
  timeline: string;
  budget: string;
  website: string;
};

export type InquiryErrors = Partial<Record<keyof InquiryFields, string>>;

const LIMITS = {
  name: 100,
  email: 200,
  help: 4000,
  company: 120,
  technology: 200,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function emptyInquiry(): InquiryFields {
  return {
    name: "",
    email: "",
    help: "",
    company: "",
    technology: "",
    projectType: "",
    timeline: "",
    budget: "",
    website: "",
  };
}

function isAllowed(value: string, options: readonly string[]) {
  return value === "" || options.includes(value);
}

export function readInquiry(value: unknown): InquiryFields | null {
  if (!value || typeof value !== "object") return null;

  const raw = value as Record<string, unknown>;
  const text = (key: keyof InquiryFields) =>
    typeof raw[key] === "string" ? raw[key] : "";

  return {
    name: text("name"),
    email: text("email"),
    help: text("help"),
    company: text("company"),
    technology: text("technology"),
    projectType: text("projectType"),
    timeline: text("timeline"),
    budget: text("budget"),
    website: text("website"),
  };
}

export function validateInquiry(input: InquiryFields): {
  errors: InquiryErrors;
  isSpam: boolean;
} {
  if (input.website.trim()) {
    return { errors: {}, isSpam: true };
  }

  const errors: InquiryErrors = {};
  const name = input.name.trim();
  const email = input.email.trim();
  const help = input.help.trim();

  if (!name) errors.name = "Name is required.";
  else if (name.length > LIMITS.name) errors.name = "Name is too long.";

  if (!email) errors.email = "Email is required.";
  else if (email.length > LIMITS.email || !EMAIL_PATTERN.test(email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!help) errors.help = "Please describe what you need help with.";
  else if (help.length > LIMITS.help) {
    errors.help = "Please keep this under 4,000 characters.";
  }

  if (input.company.trim().length > LIMITS.company) {
    errors.company = "Company name is too long.";
  }

  if (input.technology.trim().length > LIMITS.technology) {
    errors.technology = "This field is too long.";
  }

  if (!isAllowed(input.projectType, projectTypes)) {
    errors.projectType = "Choose a valid project type.";
  }

  if (!isAllowed(input.timeline, timelines)) {
    errors.timeline = "Choose a valid timeline.";
  }

  if (!isAllowed(input.budget, budgets)) {
    errors.budget = "Choose a valid budget range.";
  }

  return { errors, isSpam: false };
}

export function formatInquiryEmail(input: InquiryFields) {
  const line = (label: string, value: string) =>
    `${label}: ${value.trim() || "Not provided"}`;

  return [
    line("Name", input.name),
    line("Email", input.email),
    line("Company", input.company),
    line("Project type", input.projectType),
    line("Timeline", input.timeline),
    line("Budget", input.budget),
    line("Current technology", input.technology),
    "",
    "What they need help with:",
    input.help.trim(),
  ].join("\n");
}

export function formatThankYouEmail(name: string) {
  const greeting = name.trim().split(/\s+/)[0] || "there";

  return [
    `Hi ${greeting},`,
    "",
    "Thanks for getting in touch. I received your project inquiry and will review it shortly.",
    "",
    "If it looks like a good fit, I'll follow up so we can discuss goals, scope, constraints, and possible approaches.",
    "",
    "You don't need to reply to this message unless you have more context to add.",
    "",
    "Abdul Manashi",
    "Senior Software Engineer",
  ].join("\n");
}
