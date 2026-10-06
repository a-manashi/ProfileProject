import type {
  ArchitectureStep,
  AudienceItem,
  Principle,
  ProcessNextStep,
  Project,
  Service,
  SkillCategory,
  WhyHireItem,
} from "@/lib/types";

export const hero = {
  eyebrow: "20+ years · Senior Software Engineer · Complex web applications",
  headline: "Abdul Manashi",
  tagline: "Senior Software Engineer for Complex Web Applications",
  summaryBefore: "I help businesses ",
  summaryEmphasis:
    "build, modernize, and scale production web applications",
  summaryAfter:
    " — from legacy systems that need a safe modernization path to new Python/React platforms, APIs, automation, and AI integrations.",
  experience:
    "20+ years of software engineering experience across backend systems, full-stack applications, cloud infrastructure, analytics, e-commerce, video platforms, business automation, and AI integrations.",
  focus: [
    "Python",
    "Django",
    "FastAPI",
    "React",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Legacy Modernization",
    "AI Integration",
  ],
  primaryCta: { label: "Discuss Your Project", href: "#contact" },
  secondaryCta: { label: "View My Work", href: "#work" },
};

export const whyHire = {
  eyebrow: "01 / Why work with me",
  title: "Why Businesses Hire Me",
  items: [
    {
      key: "experience",
      title: "20+ Years of Production Experience",
      body: "I bring long-term experience working with real production systems, not just prototypes and demos.",
    },
    {
      key: "legacy",
      title: "Legacy + Modern Technology",
      body: "I understand both legacy PHP systems and modern Python, React, API, and cloud architectures — making gradual modernization possible.",
    },
    {
      key: "fullstack",
      title: "Full-Stack Ownership",
      body: "From architecture and backend APIs to databases, frontend applications, deployment, and infrastructure.",
    },
    {
      key: "ai",
      title: "AI-Accelerated Engineering",
      body: "I use modern AI-assisted development tools to accelerate implementation, exploration, debugging, refactoring, and automation — while keeping engineering judgment and code quality in human hands.",
    },
  ] satisfies WhyHireItem[],
};

export const services = {
  eyebrow: "02 / Services",
  title: "How I Can Help",
  lede: "Practical engineering help for businesses that need production software — not a brochure site, and not a full rewrite unless that is actually the right move.",
  capability:
    "I understand both legacy systems and modern architectures, so modernization does not have to mean throwing away everything that already works.",
  cards: [
    {
      title: "Legacy Application Modernization",
      description:
        "Have an older PHP or web application that has become difficult to maintain? I help businesses modernize existing applications incrementally — improving architecture, APIs, databases, performance, security, and user experience without automatically requiring a complete rewrite.",
      technologies: [
        "PHP",
        "Laravel",
        "CodeIgniter",
        "Zend",
        "Python",
        "Django",
        "FastAPI",
        "React",
      ],
    },
    {
      title: "Custom Web Applications & APIs",
      description:
        "I design and build production-ready business applications, backend services, REST APIs, dashboards, and internal platforms. From architecture and database design through frontend development, deployment, and infrastructure.",
      technologies: [
        "Python",
        "Django",
        "FastAPI",
        "React",
        "Next.js",
        "PostgreSQL",
        "MySQL",
      ],
    },
    {
      title: "Automation, Data & Integrations",
      description:
        "I build systems that collect, process, synchronize, and analyze business data. This includes API integrations, web scraping, automated workflows, reporting systems, data pipelines, tracking platforms, and operational dashboards.",
      technologies: [
        "APIs",
        "Automation",
        "Data Processing",
        "Web Scraping",
        "Analytics",
        "AWS",
      ],
    },
    {
      title: "AI & Platform Integrations",
      description:
        "I help existing applications take advantage of modern AI capabilities without rebuilding the entire product. This can include AI-powered workflows, external platform integrations, MCP servers, AI-assisted features, and connections between business systems and AI platforms.",
      technologies: [
        "AI Integration",
        "MCP",
        "Claude",
        "APIs",
        "Automation",
      ],
    },
  ] satisfies Service[],
};

export const projects = {
  eyebrow: "03 / Selected work",
  title: "Selected Work",
  lede: "Technical project categories from production systems I have designed and built. Specific client names, URLs, and metrics are omitted.",
  items: [
    {
      title: "Advertising Analytics Platform",
      challenge:
        "Businesses need visibility into advertising spending, campaign performance, tracking, and pacing.",
      solution:
        "Built software to collect, process, monitor, and visualize advertising data from platforms such as Google Ads and GA4.",
      approach:
        "Python services and APIs with PostgreSQL storage and a React interface for reporting and monitoring.",
      businessValue:
        "The platform centralized advertising spending, campaign performance, tracking, and pacing in one place.",
      contribution: "Architecture · Backend · APIs · Database · Frontend",
      technologies: ["Python", "APIs", "Analytics", "PostgreSQL", "React"],
    },
    {
      title: "RV Inventory Intelligence",
      challenge:
        "RV businesses need to monitor inventory across websites and understand how inventory changes over time.",
      solution:
        "Built automated scraping and data-processing systems to collect RV inventory data and track daily changes.",
      approach:
        "Python scraping and automation pipelines that store structured inventory data in PostgreSQL and expose it through APIs.",
      businessValue:
        "The system made it possible to watch inventory movement across websites and see how listings change day to day.",
      contribution: "Architecture · Backend · Automation · APIs · Database",
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
      challenge:
        "Subscription businesses need to understand customer lifecycle, subscriptions, trials, renewals, cancellations, payments, and churn.",
      solution:
        "Designed event-driven data collection and analytics architecture around subscription events and customer lifecycle data.",
      approach:
        "Next.js and TypeScript application with PostgreSQL, Supabase, webhooks, and analytics around subscription events.",
      businessValue:
        "The platform organized subscription and customer-lifecycle events so the business could see trials, renewals, cancellations, payments, and churn in one system.",
      contribution: "Architecture · Backend · Frontend · APIs · Database",
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
      challenge:
        "Education and publishing businesses needed content-driven websites and software platforms.",
      solution:
        "Built websites and software platforms for online education and publishing-focused businesses.",
      approach:
        "PHP and Laravel backends with React, MySQL, and APIs.",
      businessValue:
        "Provided academy and writer-focused software for publishing and delivering educational content.",
      contribution: "Backend · Frontend · APIs · Database",
      technologies: ["PHP", "Laravel", "React", "MySQL", "APIs"],
    },
    {
      title: "Claude MCP Platform Connectors",
      challenge:
        "AI assistants need secure, structured access to external platforms instead of one-off, disconnected workflows.",
      solution:
        "Built MCP (Model Context Protocol) integrations that allow Claude to connect to Google and other platforms such as Facebook and Reddit.",
      approach:
        "Model Context Protocol servers and API connectors so Claude can work inside existing platform workflows.",
      businessValue:
        "Gave an AI assistant structured access to real tools and platforms rather than isolated, one-off integrations.",
      contribution: "Architecture · APIs · Integrations",
      technologies: ["MCP", "Claude", "APIs", "Google", "Facebook", "Reddit"],
    },
  ] satisfies Project[],
};

export const audience = {
  eyebrow: "04 / Fit",
  title: "Who I Work With",
  lede: "These are the kinds of teams and businesses I typically work with — not a list of named clients.",
  items: [
    { title: "Startups building or scaling technical products" },
    { title: "Small and medium businesses that need custom software" },
    { title: "Companies with legacy applications that need modernization" },
    { title: "Digital agencies that need an experienced engineering partner" },
    { title: "SaaS companies needing backend/API development" },
    { title: "Businesses looking to automate manual workflows" },
    {
      title:
        "Teams needing senior engineering support without hiring full-time",
    },
  ] satisfies AudienceItem[],
};

export const architecture = {
  eyebrow: "05 / Process",
  title: "How a Project Works",
  lede: "A typical path from the first conversation to production — or to the one stage you actually need.",
  note: "Need help with only one stage? That's fine too.",
  steps: [
    {
      title: "Understand",
      body: "Business requirements and existing system.",
    },
    {
      title: "Design",
      body: "Architecture, APIs, database and technical roadmap.",
    },
    {
      title: "Build",
      body: "Backend, frontend, integrations and automation.",
    },
    {
      title: "Deploy",
      body: "Cloud infrastructure, CI/CD and production deployment.",
    },
    {
      title: "Improve",
      body: "Monitoring, optimization and ongoing development.",
    },
  ] satisfies ArchitectureStep[],
};

export const about = {
  eyebrow: "06 / About",
  title: "About Me",
  paragraphs: [
    "I'm a senior software engineer with 20+ years of experience designing, building, modernizing, and maintaining production web applications.",
    "My current focus is Python, Django, FastAPI, React, PostgreSQL, cloud infrastructure, automation, and AI integration. That includes MCP (Model Context Protocol) integrations that allow Claude to connect to Google and other platforms such as Facebook and Reddit.",
    "One of my strongest areas is working with existing and complex systems. I don't believe every legacy application needs to be thrown away and rewritten from scratch. In many cases, the better approach is to understand what already works, identify the areas that are holding the business back, and modernize the system incrementally.",
    "My background spans PHP and modern Python ecosystems, full-stack development, APIs, databases, AWS infrastructure, analytics platforms, e-commerce, video streaming, web scraping, automation, and AI integrations.",
    "I also use AI-assisted development tools as an engineering multiplier — helping me explore solutions faster, understand unfamiliar codebases, refactor existing systems, build APIs, automate workflows, and solve difficult technical problems without replacing the engineering judgment required for production software.",
  ],
  approachLabel: "My approach",
  approach:
    "Understand the business problem → Design the right solution → Build incrementally → Deploy reliably → Improve continuously.",
};

export const skills = {
  eyebrow: "07 / Stack",
  title: "Technology Stack",
  lede: "A production stack shaped by backend systems, data platforms, and the infrastructure that keeps them running.",
  categories: [
    {
      title: "Backend",
      skills: ["Python", "Django", "FastAPI", "PHP", "Laravel"],
    },
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "JavaScript"],
    },
    {
      title: "Data & Infrastructure",
      skills: [
        "PostgreSQL",
        "MySQL",
        "AWS",
        "Docker",
        "Nginx",
        "Linux",
      ],
    },
    {
      title: "AI & Automation",
      skills: [
        "AI-assisted development",
        "MCP",
        "AI integrations",
        "API integrations",
        "Web scraping",
        "Automation",
        "Data pipelines",
      ],
    },
    {
      title: "Additional Experience",
      skills: [
        "Zend Framework 2",
        "CodeIgniter",
        "Yii",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Vercel",
        "DigitalOcean",
        "Google Ads",
        "GA4",
        "Advertising analytics",
        "Tracking systems",
        "Pacing systems",
        "Reporting dashboards",
        "REST APIs",
        "Claude integrations",
      ],
    },
  ] satisfies SkillCategory[],
};

export const philosophy = {
  eyebrow: "08 / Approach",
  title: "Engineering Principles",
  principles: [
    {
      title: "Business First",
      body: "Understand the problem before choosing the technology.",
    },
    {
      title: "Production Ready",
      body: "Reliability, security, maintainability and operational simplicity matter.",
    },
    {
      title: "Incremental Modernization",
      body: "Improve existing systems without unnecessary rewrites.",
    },
    {
      title: "AI as a Multiplier",
      body: "Use AI to accelerate engineering without replacing engineering judgment.",
    },
  ] satisfies Principle[],
};

export const contact = {
  eyebrow: "09 / Contact",
  title: "Have a Technical Problem to Solve?",
  lede: "Building a new product? Modernizing a legacy application? Need help with a difficult backend, API, automation, or AI integration problem? Let's discuss what you're trying to accomplish.",
  supporting:
    "You don't need to have the technical solution figured out before contacting me. Tell me what you're trying to build, fix, or improve, and we can start from there.",
  availability:
    "Available for freelance projects, consulting, technical architecture, development, and ongoing engineering support.",
  primaryCta: { label: "Discuss Your Project", href: "#inquiry" },
  formTitle: "Let's Discuss Your Project",
  formLede:
    "Tell me a little about what you're building, what isn't working, or what you'd like to improve. I'll review the details and get back to you.",
  submitLabel: "Send Project Inquiry",
  success:
    "Thanks — your project inquiry is on its way. I'll review it and get back to you.",
  error:
    "The inquiry could not be sent. Please try again or email me directly.",
  unavailable:
    "Project inquiries are temporarily unavailable. Please email me directly.",
  fallbackLabel: "Email Me",
};

export const nextSteps = {
  title: "What Happens Next?",
  items: [
    {
      title: "You tell me about the project",
      body: "Send the problem, existing system, requirements, or idea.",
    },
    {
      title: "I review it",
      body: "I'll look at the technical context and determine whether I can help.",
    },
    {
      title: "We have a short discussion",
      body: "We discuss goals, scope, constraints, timeline and possible approaches.",
    },
    {
      title: "You receive a proposal",
      body: "If there's a good fit, I'll outline the recommended approach, scope and next steps.",
    },
  ] satisfies ProcessNextStep[],
};

export const projectTypes = [
  "New application",
  "Existing application",
  "Legacy modernization",
  "API / integration",
  "Automation",
  "AI integration",
  "Architecture / consulting",
  "Other",
] as const;

export const timelines = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "Flexible",
] as const;

export const budgets = [
  "Under $1,000",
  "$1,000–$3,000",
  "$3,000–$10,000",
  "$10,000+",
] as const;

export const footer = {
  identity: "Senior Software Engineer · Complex web applications",
  copyright: "© 2026 Abdul Manashi",
};
