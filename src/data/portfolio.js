const assetPath = (fileName) => `${import.meta.env.BASE_URL}${fileName}`;

export const portfolio = {
  profile: {
    name: "Roger Wong Sie Yang",
    headline: ["Roger Wong", "Sie Yang"],
    subheadline: "Software engineer for AI-assisted compliance and production systems.",
    title: "Software Engineer · Athena Dynamics",
    location: "Singapore",
    intro:
      "I build full-stack AI-assisted applications for maritime compliance, connecting review workflows, backend services, LLM capabilities, and cloud infrastructure. My broader experience spans mobile, web, payments, digital banking, and operational systems where secure workflows and reliable delivery matter.",
    focus: [
      "AI-assisted document analysis and compliance review",
      "Agent-oriented workflows and LLM orchestration",
      "TypeScript, Next.js, Python, REST APIs, and PostgreSQL",
      "AWS delivery, secure data handling, and maintainable systems",
    ],
    metrics: [
      { value: "2+", label: "Years shipping production software" },
      { value: "22%", label: "Higher transaction completion from payment improvements" },
      { value: "10k+", label: "Users reached on shipped mobile products" },
    ],
    contact: {
      email: "rogerwong20011021@gmail.com",
      phone: "+65 8713 4620",
      linkedin: "https://www.linkedin.com/in/roger-wong-sie-yang-415a691ab/",
      github: "https://github.com/Roger-wsy",
      portfolio: "https://roger-wsy.github.io/simple-portfolio/",
      resume: assetPath("resume-roger-wong-2026.pdf"),
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
      title: "AI-assisted compliance workflows",
      description:
        "Building traceable document analysis, contextual question answering, and structured review workflows for maritime compliance teams.",
    },
    {
      title: "Full-stack integration ownership",
      description:
        "Connects Next.js interfaces, TypeScript and Python services, PostgreSQL data, LLM capabilities, and AWS-hosted infrastructure into production systems.",
    },
    {
      title: "Execution in production teams",
      description:
        "Comfortable operating across feature delivery, debugging, CI/CD, stakeholder alignment, and the practical tradeoffs needed to ship stable systems.",
    },
  ],
  experiences: [
    {
      role: "Software Engineer",
      company: "Athena Dynamics Pte Ltd",
      period: "Oct 2026 - Present",
      location: "Singapore",
      summary:
        "Building an AI-assisted maritime compliance platform spanning review workflows, backend services, LLM orchestration, data persistence, and cloud delivery.",
      achievements: [
        "Building an end-to-end enterprise compliance application that connects user-facing review workflows, backend services, and LLM capabilities.",
        "Developing agent-oriented workflows and orchestration harnesses for document analysis, contextual question answering, and structured compliance review.",
        "Designing reusable AI integration components for prompts, tool interactions, and human review with traceability and secure data handling built in.",
        "Developing full-stack services with TypeScript, Next.js, REST APIs, and PostgreSQL and supporting their deployment on AWS.",
      ],
      stack: [
        "TypeScript",
        "Next.js",
        "Python",
        "LLM Integration",
        "Agentic Workflows",
        "REST APIs",
        "PostgreSQL",
        "AWS",
      ],
    },
    {
      role: "IT Specialist (Full Stack Software Engineer)",
      company: "iFAST Global Hub AI",
      period: "Apr 2024 - Sep 2026",
      location: "Kuala Lumpur",
      summary:
        "Shipped mobile, web, and backend capabilities across the FSMOne investment platform and a UK SME digital banking platform.",
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
      links: [{ label: "Visit MEMOSA", href: "https://ctsb.my/memosa/" }],
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
      items: ["TypeScript", "Python", "Java Spring Boot", ".NET Core", "Golang", "RESTful APIs", "LLM Integration", "Agentic Workflows"],
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
