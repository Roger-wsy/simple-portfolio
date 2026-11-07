import Header from "./components/layout/Header.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";
import { portfolio } from "./data/portfolio.js";
import { useTheme } from "./hooks/useTheme.js";
import RevampPortfolio from "./versions/RevampPortfolio.jsx";

function App() {
  const { theme, toggleLabel, toggleTheme } = useTheme();

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Header
        name={portfolio.profile.name}
        navigation={portfolio.navigation}
        controls={<ThemeToggle theme={theme} toggleLabel={toggleLabel} onToggle={toggleTheme} />}
      />
      <RevampPortfolio data={portfolio} />
    </div>
  );
}

export default App;
