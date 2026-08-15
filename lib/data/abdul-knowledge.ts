import "server-only";

export const abdulKnowledge = {
  identity: {
    name: "Abdul Manashi",
    titles: [
      "Senior Full-Stack Engineer",
      "Software Developer",
      "Programmer",
      "Problem Solver",
    ],
  },
  summary:
    "Abdul is a Full-Stack Software Developer with 10+ years of experience building scalable web applications, analytics systems, automation tools, e-commerce platforms, video streaming solutions, and cloud infrastructure. His current specialization is Python, Django, FastAPI, React.js, PostgreSQL, and modern cloud infrastructure. He also uses AI-assisted development tools to improve development speed, productivity, debugging, refactoring, exploration, documentation, and problem solving.",
  backend: [
    "Python",
    "Django",
    "FastAPI",
    "PHP",
    "Laravel",
    "Zend Framework 2",
    "CodeIgniter",
    "Yii",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  databases: ["PostgreSQL", "MySQL"],
  cloud: ["AWS", "Docker", "Nginx", "Linux", "Vercel", "DigitalOcean"],
  advertisingAnalytics: [
    "Google Ads spending analysis",
    "GA4 advertising data",
    "Campaign tracking",
    "Budget pacing",
    "Performance monitoring",
    "Reporting",
    "Data aggregation",
  ],
  rvSoftware: [
    "RV inventory",
    "RV sales tracking",
    "Inventory monitoring",
    "Business analytics",
    "Operational dashboards",
    "Scraping RV websites to track daily inventory and identify changes",
  ],
  scrapingAutomation: [
    "Website scraping",
    "Structured data collection",
    "Automated monitoring",
    "Daily inventory tracking",
    "Change detection",
    "Data processing",
    "Automation",
  ],
  videoStreaming: [
    "Video streaming architecture",
    "Subscription systems",
    "Customer lifecycle tracking",
    "Webhooks",
    "Subscription analytics",
    "Cloud infrastructure",
    "Event-driven systems",
  ],
  ecommerce: [
    "Products",
    "Customers",
    "Orders",
    "Payments",
    "APIs",
    "Backend systems",
    "Databases",
  ],
  educationPublishing: [
    "Online academies",
    "Writers",
    "Publishing-related businesses",
    "Content-driven websites",
  ],
  aiAssisted: [
    "Code generation",
    "Architecture exploration",
    "Debugging",
    "Refactoring",
    "Documentation",
    "SQL development",
    "API development",
    "Rapid prototyping",
    "Understanding unfamiliar code",
    "Problem solving",
    "Code review assistance",
  ],
  aiPhilosophy:
    "AI is an engineering multiplier, not a replacement for engineering judgment.",
  philosophy: [
    {
      title: "Understand the problem",
      body: "Understand the business problem before choosing technology.",
    },
    {
      title: "Build for production",
      body: "Consider maintainability, reliability, scalability, security, and operational simplicity.",
    },
    {
      title: "Solve problems, not just write code",
      body: "The goal is to build software that solves a real business problem.",
    },
    {
      title: "Think end-to-end",
      body: "Business problem → Architecture → Backend → Database → Frontend → Infrastructure → Analytics",
    },
  ],
  projectFit:
    "Abdul is particularly well suited to complex web applications, analytics platforms, automation systems, business management software, subscription systems, and full-stack products where backend architecture and business logic are important.",
  contact:
    "Visitors can email Abdul at abdul.manashi@hotmail.com or reach him on LinkedIn at https://www.linkedin.com/in/abdul-manashi-39b64522/. They can also use the Contact section of this portfolio. Do not invent a different email address or social URL.",
  unknownPolicy:
    "If information is not in this knowledge base, say: I don't have that information in Abdul's portfolio yet.",
} as const;

export function formatKnowledgeBase() {
  const k = abdulKnowledge;
  return [
    `Name: ${k.identity.name}`,
    `Titles: ${k.identity.titles.join(", ")}`,
    `Summary: ${k.summary}`,
    `Backend: ${k.backend.join(", ")}`,
    `Frontend: ${k.frontend.join(", ")}`,
    `Databases: ${k.databases.join(", ")}`,
    `Cloud / infrastructure: ${k.cloud.join(", ")}`,
    `Advertising / analytics: ${k.advertisingAnalytics.join(", ")}`,
    `RV software: ${k.rvSoftware.join(", ")}`,
    `Web scraping / automation: ${k.scrapingAutomation.join(", ")}`,
    `Video streaming: ${k.videoStreaming.join(", ")}`,
    `E-commerce: ${k.ecommerce.join(", ")}`,
    `Online academy / publishing: ${k.educationPublishing.join(", ")}`,
    `AI-assisted development: ${k.aiAssisted.join(", ")}`,
    `AI philosophy: ${k.aiPhilosophy}`,
    `Engineering philosophy:\n${k.philosophy.map((item) => `- ${item.title}: ${item.body}`).join("\n")}`,
    `Project fit: ${k.projectFit}`,
    `Contact: ${k.contact}`,
  ].join("\n");
}
