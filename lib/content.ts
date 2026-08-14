import type {
  ArchitectureStep,
  BuildCard,
  ExperienceStage,
  Principle,
  Project,
  SkillCategory,
} from "@/lib/types";

export const hero = {
  eyebrow: "Senior Full-Stack Engineer",
  headline: "Abdul Manashi",
  tagline: "I build software that solves real business problems.",
  summary:
    "Full-stack software engineer with 10+ years of experience building scalable applications, analytics platforms, automation systems, e-commerce solutions, video streaming platforms, and cloud infrastructure.",
  focus: [
    "Python",
    "Django",
    "FastAPI",
    "React",
    "PostgreSQL",
    "AWS",
    "Docker",
    "AI-Assisted Development",
  ],
  primaryCta: { label: "View My Work", href: "#work" },
  secondaryCta: { label: "Let's Work Together", href: "#contact" },
};

export const about = {
  eyebrow: "01 / About",
  title: "About Me",
  paragraphs: [
    "With 10+ years of experience in software development, I have worked across backend engineering, frontend development, databases, cloud infrastructure, analytics, automation, advertising technology, video streaming, e-commerce, and web scraping.",
    "My current focus is Python-based backend development using Django and FastAPI, combined with React.js on the frontend. I also use AI-assisted development tools as part of my engineering workflow to accelerate development, explore solutions, refactor code, and solve complex technical problems.",
    "My background in PHP, cloud infrastructure, databases, and large production systems gives me a broad perspective when designing and building software.",
  ],
};

export const skills = {
  eyebrow: "02 / Capabilities",
  title: "Technical Skills",
  lede: "A production stack shaped by backend systems, data platforms, and the infrastructure that keeps them running.",
  categories: [
    {
      title: "Backend",
      skills: [
        "Python",
        "Django",
        "FastAPI",
        "PHP",
        "Laravel",
        "Zend Framework 2",
        "CodeIgniter",
        "Yii",
      ],
    },
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
      ],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Docker", "Nginx", "Linux", "Vercel", "DigitalOcean"],
    },
    {
      title: "Data / Analytics",
      skills: [
        "Google Ads",
        "GA4",
        "Advertising analytics",
        "Tracking systems",
        "Pacing systems",
        "Reporting dashboards",
        "Data pipelines",
      ],
    },
    {
      title: "Engineering / Automation",
      skills: [
        "Web scraping",
        "Automation",
        "API development",
        "REST APIs",
        "Data processing",
        "AI-assisted development",
      ],
    },
  ] satisfies SkillCategory[],
};

export const whatIBuild = {
  eyebrow: "03 / Domains",
  title: "What I Build",
  lede: "Systems for businesses that need more than a brochure site — platforms that collect data, run operations, and stay in production.",
  cards: [
    {
      title: "Analytics & Advertising Platforms",
      points: [
        "Google Ads spending",
        "GA4 advertising data",
        "Campaign tracking",
        "Budget pacing",
        "Performance monitoring",
        "Reporting",
        "Data aggregation",
      ],
    },
    {
      title: "Business Management Systems",
      points: [
        "RV inventory management",
        "RV sales tracking",
        "Inventory monitoring",
        "Business analytics",
        "Operational dashboards",
      ],
    },
    {
      title: "Web Scraping & Automation",
      points: [
        "Scraping RV websites",
        "Tracking daily inventory changes",
        "Detecting changes over time",
        "Automating data collection",
        "Processing and storing scraped data",
      ],
    },
    {
      title: "Video Streaming Platforms",
      points: [
        "Video streaming architecture",
        "Subscription systems",
        "Customer lifecycle tracking",
        "Webhooks",
        "Analytics",
        "Cloud infrastructure",
      ],
    },
    {
      title: "E-Commerce Platforms",
      points: [
        "Product management",
        "Orders",
        "Customers",
        "Payments",
        "Backend APIs",
        "Database architecture",
      ],
    },
    {
      title: "Online Education / Publishing",
      points: [
        "Content-driven websites",
        "Educational platforms",
        "Academy and writer-focused software",
      ],
    },
  ] satisfies BuildCard[],
};

export const projects = {
  eyebrow: "04 / Selected Work",
  title: "Selected Engineering Work",
  lede: "Technical project categories from production systems I have designed and built. Specific client names and URLs are omitted.",
  items: [
    {
      title: "Advertising Analytics Platform",
      problem:
        "Businesses need visibility into advertising spending, campaign performance, tracking, and pacing.",
      solution:
        "Built software to collect, process, monitor, and visualize advertising data from platforms such as Google Ads and GA4.",
      technologies: ["Python", "APIs", "Analytics", "PostgreSQL", "React"],
    },
    {
      title: "RV Inventory Intelligence",
      problem:
        "RV businesses need to monitor inventory across websites and understand how inventory changes over time.",
      solution:
        "Built automated scraping and data-processing systems to collect RV inventory data and track daily changes.",
      technologies: [
        "Python",
        "Web Scraping",
        "Automation",
        "PostgreSQL",
        "APIs",
      ],
    },
    {
      title: "Video Subscription Analytics",
      problem:
        "Subscription businesses need to understand customer lifecycle, subscriptions, trials, renewals, cancellations, payments, and churn.",
      solution:
        "Designed event-driven data collection and analytics architecture around subscription events and customer lifecycle data.",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Supabase",
        "Webhooks",
        "Analytics",
      ],
    },
    {
      title: "Online Academy / Writer Platform",
      summary:
        "Built websites and software platforms for online education and publishing-focused businesses.",
      technologies: ["PHP", "Laravel", "React", "MySQL", "APIs"],
    },
  ] satisfies Project[],
};

export const philosophy = {
  eyebrow: "05 / Approach",
  title: "How I Approach Engineering",
  principles: [
    {
      title: "Understand the Problem",
      body: "I focus on understanding the business problem before choosing the technology.",
    },
    {
      title: "Build for Production",
      body: "I care about reliability, maintainability, scalability, security, and operational simplicity.",
    },
    {
      title: "Solve Problems, Not Just Write Code",
      body: "The goal isn't simply to produce code. The goal is to build software that solves a real problem.",
    },
    {
      title: "Use AI as an Engineering Multiplier",
      body: "I actively use AI-assisted development tools to accelerate exploration, implementation, debugging, refactoring, documentation, and problem solving.",
    },
    {
      title: "Keep Learning",
      body: "Technology changes quickly. I continuously learn and adapt while relying on strong software engineering fundamentals.",
    },
  ] satisfies Principle[],
};

export const experience = {
  eyebrow: "06 / Trajectory",
  title: "Experience",
  lede: "A compact view of how the work has evolved — not a fabricated employment history.",
  stages: [
    {
      title: "10+ Years",
      detail: "Software Engineering",
    },
    {
      title: "Backend Engineering",
      detail: "PHP → Python → Django → FastAPI",
    },
    {
      title: "Full-Stack Development",
      detail: "React → Next.js → APIs → Databases",
    },
    {
      title: "Cloud & Infrastructure",
      detail: "AWS → Docker → Nginx → Linux",
    },
    {
      title: "Data & Analytics",
      detail: "Advertising → Tracking → Reporting → Automation",
    },
    {
      title: "AI-Assisted Engineering",
      detail: "AI-powered development workflows",
    },
  ] satisfies ExperienceStage[],
};

export const aiEngineering = {
  eyebrow: "07 / Workflow",
  title: "Engineering with AI",
  statement:
    "AI is part of my modern engineering workflow — used to move faster without skipping the judgment that production software requires.",
  quote: "AI doesn't replace engineering judgment. It amplifies it.",
  areas: [
    "Code generation",
    "Architecture exploration",
    "Debugging",
    "Refactoring",
    "Documentation",
    "SQL generation and optimization",
    "API development",
    "Rapid prototyping",
    "Code review assistance",
    "Understanding unfamiliar codebases",
    "Automation",
  ],
};

export const architecture = {
  eyebrow: "08 / Systems",
  title: "From Problem to Production",
  lede: "A typical end-to-end path: understand the business, design the system, then ship and observe it.",
  steps: [
    { title: "Business Problem" },
    { title: "Requirements & Data" },
    { title: "Architecture" },
    { title: "Backend / APIs" },
    { title: "Database" },
    { title: "Frontend" },
    { title: "Cloud Infrastructure" },
    { title: "Analytics / Monitoring" },
  ] satisfies ArchitectureStep[],
};

export const contact = {
  eyebrow: "09 / Contact",
  title: "Have a difficult problem to solve?",
  lede: "If you are building a product, modernizing an existing system, or trying to solve a complicated technical problem, let's talk.",
  primaryCta: { label: "Contact Me", subject: "Project inquiry" },
  secondaryCta: { label: "Email Me" },
};

export const footer = {
  identity:
    "Senior Full-Stack Engineer · Software Developer · Problem Solver",
  copyright: "© 2026 Abdul Manashi",
};
