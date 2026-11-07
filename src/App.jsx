import Header from "./components/layout/Header.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import VersionSelect from "./components/VersionSelect.jsx";
import {
  legacyPortfolio,
  orbitalPortfolio,
  revampPortfolio,
  versionOptions,
} from "./data/portfolio.js";
import { useTheme } from "./hooks/useTheme.js";
import { useVersion } from "./hooks/useVersion.js";
import LegacyPortfolio from "./versions/LegacyPortfolio.jsx";
import OrbitalPortfolio from "./versions/OrbitalPortfolio.jsx";
import RevampPortfolio from "./versions/RevampPortfolio.jsx";

function App() {
  const { theme, toggleLabel, toggleTheme } = useTheme();
  const { version, setVersion } = useVersion();
  const portfolioByVersion = {
    legacy: legacyPortfolio,
    revamp: revampPortfolio,
    orbital: orbitalPortfolio,
  };
  const activePortfolio = portfolioByVersion[version] || revampPortfolio;
  const contentByVersion = {
    legacy: <LegacyPortfolio data={legacyPortfolio} />,
    revamp: <RevampPortfolio data={revampPortfolio} />,
    orbital: <OrbitalPortfolio data={orbitalPortfolio} />,
  };
  const content = contentByVersion[version] || contentByVersion.revamp;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
      <Header
        name={activePortfolio.profile.name}
        navigation={activePortfolio.navigation}
        variant={version}
        controls={
          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
            <VersionSelect
              value={version}
              options={versionOptions}
              onChange={setVersion}
              variant={version}
            />
            <ThemeToggle
              theme={theme}
              toggleLabel={toggleLabel}
              onToggle={toggleTheme}
              variant={version}
            />
          </div>
        }
      />
      {content}
    </div>
  );
}

export default App;
