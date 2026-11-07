export const versionOptions = [
  {
    id: "legacy",
    value: "legacy",
    shortLabel: "5.2",
    label: "Version 5.2",
    description: "Legacy build",
  },
  {
    id: "revamp",
    value: "revamp",
    shortLabel: "5.4",
    label: "Version 5.4",
    description: "Current revamp",
  },
  {
    id: "orbital",
    value: "orbital",
    shortLabel: "5.5",
    label: "Version 5.5",
    description: "Minimal Journal",
  },
];

export const legacyPortfolio = {
  profile: {
    name: "Roger Wong Sie Yang",
    title: "IT Specialist • Full-Stack Software Developer",
    location: "Kuala Lumpur, Malaysia",
    summary: [
      "Full-stack mobile developer with a focus on fintech, trading, and digital banking platforms.",
      "Experienced in Flutter, Java Spring Boot, and cloud services to deliver secure, high-performing apps.",
      "Driven by clean architecture, thoughtful UX, and reliable release pipelines for production systems.",
    ],
    contact: {
      email: "rogerwong20011021@gmail.com",
      phone: "(+60)18-2103050",
      linkedin: "https://www.linkedin.com/in/roger-wong-sie-yang-415a691ab/",
      github: "https://github.com/Roger-wsy",
    },
  },
  skills: [
    {
      category: "Frontend",
      items: [
        "Flutter & Dart",
        "React",
        "Angular",
        "TypeScript",
        "JavaScript",
        "Swift",
        "Kotlin",
      ],
    },
    {
      category: "Backend",
      items: ["Java Spring Boot", "Next.js", "Golang", "Node.js"],
    },
    {
      category: "AI, Data & Cloud",
      items: ["Python", "AWS", "MySQL", "PostgreSQL", "MongoDB", "Firebase"],
    },
    {
      category: "Tools",
      items: ["Jenkins", "CI/CD Pipelines", "Postman", "Xcode", "Android Studio"],
    },
  ],
  projects: [
    {
      name: "RESPIRE",
      description:
        "Air quality forecasting app built with real-time environmental models for Klang, Malaysia. Delivered dynamic charts, maps, and scalable APIs.",
      tech: ["Flutter", "Golang", "Firebase", "MongoDB"],
      link: "https://cerc.co.uk/forecasting/air-quality/klang.html",
    },
    {
      name: "Advance Care Planning (ACP)",
      description:
        "Interactive healthcare planning experience guiding users through legally compliant medical directives and personalized modules.",
      tech: ["Flutter", "Next.js", "Firebase", "MongoDB"],
      link: "https://github.com/Roger-wsy",
    },
    {
      name: "OLa Care",
      description:
        "Blood thinner monitoring application launched to both the App Store and Google Play with guided dosing reminders.",
      tech: ["Flutter", "Firebase", "Xcode", "Android Studio"],
      link: "https://github.com/Roger-wsy",
    },
  ],
  experiences: [
    {
      role: "IT Specialist (Full Stack Software Developer)",
      company: "iFAST Corporation",
      period: "Apr 2024 - Present",
      location: "Kuala Lumpur, Malaysia",
      highlights: [
        "Developed and maintained core mobile features for FSMOne, a regulated trading platform supporting fund, bond, and equity transactions for retail investors using Flutter.",
        "Independently owned and delivered a UK-based Business Digital Banking system serving SME and NBFI clients,covering end-to-end mobile and web functionality.",
        "Designed and implemented critical banking features including domestic transfers, FX payments, debit card transactions, Visa integration, and Apple/Google Wallet provisioning across mobile and web channels.",
        "Built and maintained internal eKYC and compliance backoffice systems for operations teams, enabling client onboarding review, fraud checks, and regulatory verification in production environments.",
        "Built and integrated back-end services using Java Spring Boot with MySQL and PostgreSQL, supporting transaction processing, settlement, user event analytics, and data persistence.",
        "Developed internal dashboards and web modules using Angular and TypeScript, integrating them into GitLab CI/CD pipelines and Argo CD for automated builds and controlled deployments, while managing Flutter mobile distribution via Firebase App Distribution and TestFlight.",
      ],
    },
    {
      role: "Full Stack Software Engineer (Part Time)",
      company: "Seamless X Sdn. Bhd",
      period: "Jul 2023 - Oct 2023",
      location: "Kuala Lumpur, Malaysia",
      highlights: [
        "Designed, developed, and deployed an administrative dashboard for electrical supply clients, enabling management of two internal services in accordance with client and operational requirements.",
        "Maintained and enhanced a production web application using .NET MVC and jQuery, performing database operations with MySQL and validating APIs with Postman to ensure reliability and data integrity.",
      ],
    },
    {
      role: "Software Engineer Intern",
      company: "Fusionex Sdn. Bhd",
      period: "Jul 2022 - Dec 2022",
      location: "Petaling Jaya, Selangor, Malaysia",
      highlights: [
        "Developed and deployed a cross-platform Flutter e-commerce application using the BLoC architecture, achieving 10,000+ active users and a 4.5-star rating across iOS and Android platforms.",
        "Built an internal warehouse management system using Vue.js and .NET Core, designing MongoDB schemas with compound indexes to support efficient inventory tracking for 2,000+ stock items.",
      ],
    },
  ],
  education: [
    {
      school: "University Malaya",
      degree: "Bachelor of Computer Science (Artificial Intelligence)",
      period: "Oct 2020 - Feb 2024",
      detail:
        "CGPA 3.92 (Honours) • Full Scholarship from Yayasan Sarawak (2022)",
      courses:
        "Data Structures & Algorithms, Databases, Machine Learning, Deep Learning, NLP, Operating Systems",
    },
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
};

export const revampPortfolio = {
  profile: {
    name: "Roger Wong Sie Yang",
    headline: ["Roger Wong", "Sie Yang"],
    subheadline: "Software engineer for fintech, mobile, and production systems.",
    title: "Full-Stack Software Engineer",
    location: "Kuala Lumpur, Malaysia",
    intro:
      "I design and ship mobile, web, and backend systems across investment, digital banking, compliance, and internal operations. My core stack spans Flutter, Java Spring Boot, Angular, .NET, and cloud infrastructure, with a focus on reliable delivery in regulated environments.",
    focus: [
      "Flutter and cross-platform mobile delivery",
      "Java Spring Boot APIs and transaction services",
      "Fintech, eKYC, payments, and digital banking workflows",
      "CI/CD, release discipline, and maintainable production systems",
    ],
    metrics: [
      { value: "2+", label: "Years shipping production software" },
      { value: "22%", label: "Higher transaction completion from payment improvements" },
      { value: "10k+", label: "Users reached on shipped mobile products" },
    ],
    contact: {
      email: "rogerwong20011021@gmail.com",
      phone: "+60 18-210 3050",
      linkedin: "https://www.linkedin.com/in/roger-wong-sie-yang-415a691ab/",
      github: "https://github.com/Roger-wsy",
      portfolio: "https://roger-wsy.github.io/simple-portfolio/",
      resume: "/resume-roger-wong-2026.pdf",
    },
  },
  navigation: [
    { label: "Overview", href: "#overview" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  strengths: [
    {
      title: "Mobile products for regulated flows",
      description:
        "Delivered Flutter experiences for investing, payments, digital banking, and healthcare use cases where trust, clarity, and release quality matter.",
    },
    {
      title: "Backend and integration ownership",
      description:
        "Built and integrated Spring Boot, .NET, and cloud-backed services for payment rails, compliance workflows, analytics, and operational tooling.",
    },
    {
      title: "Execution in production teams",
      description:
        "Comfortable operating across feature delivery, debugging, CI/CD, stakeholder alignment, and the practical tradeoffs needed to ship stable systems.",
    },
  ],
  experiences: [
    {
      role: "IT Specialist (Full Stack Software Engineer)",
      company: "iFAST Global Hub AI",
      period: "Apr 2024 - Present",
      location: "Kuala Lumpur",
      summary:
        "Shipping mobile, web, and backend capabilities across the FSMOne investment platform and a UK SME digital banking platform.",
      achievements: [
        "Enhanced Flutter modules across investment and banking products, improving production workflows for trading, payments, and portfolio actions.",
        "Built secure domestic transfer and FX payment services through REST APIs and microservice-style integrations, increasing successful transaction completion by 22%.",
        "Redesigned eKYC and compliance backoffice workflows to remove manual verification bottlenecks and improve fraud review efficiency.",
        "Engineered Java Spring Boot services on PostgreSQL and MySQL to stabilize settlement processing and reduce downtime incidents.",
        "Delivered Angular analytics dashboards and improved release operations through GitLab CI/CD and Argo CD.",
      ],
      stack: [
        "Flutter",
        "Angular",
        "TypeScript",
        "Java Spring Boot",
        "PostgreSQL",
        "MySQL",
        "GitLab CI/CD",
        "Argo CD",
      ],
    },
    {
      role: "Full Stack Software Engineer (Part Time)",
      company: "Seamless X Sdn Bhd",
      period: "Jul 2023 - Oct 2023",
      location: "Kuala Lumpur",
      summary:
        "Delivered internal operational software for electrical supply clients with an emphasis on security, workflow efficiency, and stability.",
      achievements: [
        "Architected an administrative dashboard with .NET MVC and MySQL that improved workflow efficiency by 30%.",
        "Optimized backend queries and validated REST endpoints with Postman to reduce recurring technical issues.",
        "Implemented role-based access control and authentication across multiple internal service modules.",
      ],
      stack: [".NET MVC", "MySQL", "jQuery", "Postman"],
    },
    {
      role: "Software Engineer Intern",
      company: "Fusionex Sdn Bhd",
      period: "Jul 2022 - Dec 2022",
      location: "Petaling Jaya",
      summary:
        "Worked across mobile commerce and warehouse systems, covering app architecture, API integration, and data design.",
      achievements: [
        "Built a Flutter e-commerce application with BLoC architecture that reached 10,000+ active users and maintained a 4.5-star rating.",
        "Developed a warehouse management system with Vue.js and .NET Core plus optimized MongoDB indexing for 2,000+ tracked stock items.",
        "Integrated REST APIs to automate inventory synchronization and improve reliability before production rollout.",
      ],
      stack: ["Flutter", "Vue.js", ".NET Core", "MongoDB", "REST APIs"],
    },
  ],
  projects: [
    {
      title: "MEMOSA",
      summary:
        "Cloud migration and infrastructure delivery for a production system with stricter data residency and scalability requirements.",
      role: "Infrastructure and deployment engineering",
      impact:
        "Migrated workloads from AWS Singapore to AWS Malaysia and stood up a production-ready architecture for compliant regional deployment.",
      technologies: ["AWS", "VPC", "ECS Fargate", "API Gateway", "Aurora MySQL", "NLB"],
      links: [{ label: "Portfolio", href: "https://roger-wsy.github.io/simple-portfolio/" }],
    },
    {
      title: "RESPIRE",
      summary:
        "Cross-platform air quality forecasting application for Klang users with real-time environmental modeling and visualized pollutant trends.",
      role: "Full-stack mobile and backend development",
      impact:
        "Combined Flutter, Golang, Firebase, and MongoDB to surface PM2.5, NO2, and O3 forecasts in a form that was usable for public-facing monitoring.",
      technologies: ["Flutter", "Golang", "Firebase", "MongoDB"],
      links: [{ label: "Live project", href: "https://cerc.co.uk/forecasting/air-quality/klang.html" }],
    },
    {
      title: "Advance Care Planning (ACP)",
      summary:
        "Healthcare application that guides users through structured medical directives with interactive steps and secure data handling.",
      role: "Mobile and web application development",
      impact:
        "Improved the clarity of a legally sensitive workflow by turning it into an accessible guided digital experience.",
      technologies: ["Flutter", "Next.js", "Firebase", "MongoDB"],
      links: [{ label: "GitHub", href: "https://github.com/Roger-wsy" }],
    },
  ],
  skillGroups: [
    {
      title: "Frontend and mobile",
      items: ["Flutter", "Dart", "React", "Angular", "Next.js", "TypeScript", "JavaScript", "Vue.js", "Swift", "Kotlin"],
    },
    {
      title: "Backend and APIs",
      items: ["Java Spring Boot", ".NET Core", "Golang", "RESTful APIs", "Microservices", "Authentication Flows"],
    },
    {
      title: "Data and cloud",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "AWS", "Aurora MySQL"],
    },
    {
      title: "Delivery and tooling",
      items: ["GitLab CI/CD", "Argo CD", "Postman", "Firebase App Distribution", "TestFlight", "Agile Delivery"],
    },
  ],
  education: [
    {
      school: "Universiti Malaya",
      period: "2020 - 2024",
      degree: "Bachelor of Computer Science (Artificial Intelligence)",
      detail: "CGPA 3.92",
    },
    {
      school: "Kolej Matrikulasi Labuan",
      period: "2018 - 2020",
      degree: "Matriculation Programme",
      detail: "CGPA 4.00",
    },
  ],
  leadership: {
    title: "Director of Programming League National",
    org: "Universiti Malaya",
    period: "Jan 2022 - Jun 2022",
    description:
      "Led a national programming competition with 300+ participants and coordinated a 70-member organizing team through weekly planning and execution.",
  },
};

export const orbitalPortfolio = {
  ...revampPortfolio,
  profile: {
    ...revampPortfolio.profile,
    headline: ["Roger Wong"],
    subheadline:
      "Software engineer for fintech, digital banking, mobile platforms, and production-grade systems.",
    intro:
      "I build and stabilize mobile, web, backend, and cloud systems across investment, banking, compliance, and internal operations. My work sits where product quality, secure workflows, and reliable production delivery have to meet.",
  },
  navigation: [
    { label: "Front Page", href: "#overview" },
    { label: "Record", href: "#experience" },
    { label: "Cases", href: "#cases" },
    { label: "Builds", href: "#projects" },
    { label: "Stack", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ],
};
