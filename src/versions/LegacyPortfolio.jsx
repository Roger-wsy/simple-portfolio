import Footer from "../components/layout/Footer.jsx";
import AboutSection from "../sections/AboutSection.jsx";
import ContactSection from "../sections/ContactSection.jsx";
import EducationSection from "../sections/EducationSection.jsx";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import ProjectsSection from "../sections/ProjectsSection.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";

export default function LegacyPortfolio({ data }) {
  const { education, experiences, profile, projects, skills } = data;

  return (
    <>
      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-20 pt-28">
        <AboutSection profile={profile} />
        <SkillsSection skills={skills} />
        <ProjectsSection projects={projects} />
        <ExperienceSection experiences={experiences} />
        <EducationSection education={education} />
        <ContactSection contact={profile.contact} />
      </main>
      <Footer name={profile.name} versionLabel="GPT-5.2 legacy edition" />
    </>
  );
}
