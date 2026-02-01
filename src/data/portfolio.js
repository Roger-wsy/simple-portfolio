export const profile = {
  name: 'Roger Wong Sie Yang',
  title: 'IT Specialist • Full-Stack Mobile Developer',
  location: 'Kuala Lumpur, Malaysia',
  summary: [
    'Full-stack mobile developer with a focus on fintech, trading, and digital banking platforms.',
    'Experienced in Flutter, Java Spring Boot, and cloud services to deliver secure, high-performing apps.',
    'Driven by clean architecture, thoughtful UX, and reliable release pipelines for production systems.',
  ],
  contact: {
    email: 'rogerwong20011021@gmail.com',
    phone: '(+60)18-2103050',
    linkedin: 'https://www.linkedin.com/in/roger-wong-sie-yang-415a691ab/',
    github: 'https://github.com/Roger-wsy',
  },
}

export const skills = [
  {
    category: 'Frontend',
    items: ['Flutter & Dart', 'React', 'Angular', 'TypeScript', 'JavaScript', 'Swift'],
  },
  {
    category: 'Backend',
    items: ['Java Spring Boot', '.NET MVC', 'Golang', 'Node.js', 'REST APIs'],
  },
  {
    category: 'Data & Cloud',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Firebase'],
  },
  {
    category: 'Tools',
    items: ['Jenkins', 'CI/CD Pipelines', 'Postman', 'Xcode', 'Android Studio'],
  },
]

export const projects = [
  {
    name: 'RESPIRE',
    description:
      'Air quality forecasting app built with real-time environmental models for Klang, Malaysia. Delivered dynamic charts, maps, and scalable APIs.',
    tech: ['Flutter', 'Golang', 'Firebase', 'MongoDB'],
    link: 'https://cerc.co.uk/forecasting/air-quality/klang.html',
  },
  {
    name: 'Advance Care Planning (ACP)',
    description:
      'Interactive healthcare planning experience guiding users through legally compliant medical directives and personalized modules.',
    tech: ['Flutter', 'Next.js', 'Firebase', 'MongoDB'],
    link: 'https://github.com/Roger-wsy',
  },
  {
    name: 'OLa Care',
    description:
      'Blood thinner monitoring application launched to both the App Store and Google Play with guided dosing reminders.',
    tech: ['Flutter', 'Firebase', 'Xcode', 'Android Studio'],
    link: 'https://github.com/Roger-wsy',
  },
]

export const experiences = [
  {
    role: 'IT Specialist (Full Stack Mobile Developer)',
    company: 'iFAST Corporation',
    period: 'Apr 2024 - Present',
    location: 'Kuala Lumpur, Malaysia',
    highlights: [
      'Built cross-platform mobile apps for FSMOne trading and iFAST Global Bank, covering funds, bonds, equities, and wealth management flows.',
      'Implemented secure features including eKYC verification, wallet integrations, and 2FA aligned with financial compliance.',
      'Designed payment flows for domestic, FX, debit card, and Visa integrations with scalable backend APIs in Java Spring Boot.',
      'Collaborated with CI/CD pipelines (Jenkins, Firebase App Distribution) to deliver reliable release cycles.',
    ],
  },
  {
    role: 'Full Stack Software Engineer (Part Time)',
    company: 'Seamless X Sdn. Bhd',
    period: 'Jul 2023 - Oct 2023',
    location: 'Kuala Lumpur, Malaysia',
    highlights: [
      'Delivered an administrative dashboard for electrical supply clients with production deployment and client-aligned UX.',
      'Maintained a .NET MVC backend with jQuery front-end to streamline internal services and API access.',
      'Executed MySQL scripts and validated APIs through Postman for stable data workflows.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Fusionex Sdn. Bhd',
    period: 'Jul 2022 - Dec 2022',
    location: 'Petaling Jaya, Selangor, Malaysia',
    highlights: [
      'Shipped a Flutter e-commerce app with BLoC state management reaching 10k+ active users and a 4.5-star rating.',
      'Built a Vue.js + .NET Core warehouse dashboard to monitor 2,000+ inventory items.',
      'Optimized MongoDB schemas with compound indexing for faster CRUD operations.',
    ],
  },
]

export const education = [
  {
    school: 'University Malaya',
    degree: 'Bachelor of Computer Science (Artificial Intelligence)',
    period: 'Oct 2020 - Feb 2024',
    detail: 'CGPA 3.92 (Honours) • Full Scholarship from Yayasan Sarawak (2022)',
    courses:
      'Data Structures & Algorithms, Databases, Machine Learning, Deep Learning, NLP, Operating Systems',
  },
]

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

