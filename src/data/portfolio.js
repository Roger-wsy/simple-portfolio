export const profile = {
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
};

export const skills = [
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
];

export const projects = [
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
];

export const experiences = [
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
];

export const education = [
  {
    school: "University Malaya",
    degree: "Bachelor of Computer Science (Artificial Intelligence)",
    period: "Oct 2020 - Feb 2024",
    detail:
      "CGPA 3.92 (Honours) • Full Scholarship from Yayasan Sarawak (2022)",
    courses:
      "Data Structures & Algorithms, Databases, Machine Learning, Deep Learning, NLP, Operating Systems",
  },
];

export const navigation = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
