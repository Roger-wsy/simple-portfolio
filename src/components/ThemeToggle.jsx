export default function ThemeToggle({ theme, toggleLabel, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="theme-toggle"
      aria-label={toggleLabel}
      title={toggleLabel}
    >
      <span aria-hidden="true" className="theme-toggle__mark" />
      {theme === "dark" ? "Light mode" : "Dark mode"}
    </button>
  );
}
