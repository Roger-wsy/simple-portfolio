import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import {
  education,
  experiences,
  navigation,
  profile,
  projects,
  skills,
} from "./data/portfolio.js";
import { useTheme } from "./hooks/useTheme.js";
import AboutSection from "./sections/AboutSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import ExperienceSection from "./sections/ExperienceSection.jsx";
import ProjectsSection from "./sections/ProjectsSection.jsx";
import SkillsSection from "./sections/SkillsSection.jsx";

function App() {
  const { theme, toggleLabel, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header
        name={profile.name}
        title={profile.title}
        navigation={navigation}
        themeToggle={
          <ThemeToggle
            theme={theme}
            toggleLabel={toggleLabel}
            onToggle={toggleTheme}
          />
        }
      />

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-20 pt-28">
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <EducationSection education={education} />
        <ContactSection contact={profile.contact} />
      </main>

      <Footer name={profile.name} />
    </div>
  );
}

export default App;
