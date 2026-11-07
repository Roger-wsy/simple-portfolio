export default function GravityMark({ className = "" }) {
  return (
    <svg
      className={`gravity-mark ${className}`.trim()}
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <path
        className="gravity-mark__path gravity-mark__path--ink"
        d="M29.5 9.5A13.5 13.5 0 1 0 31.2 23.2"
      />
      <path
        className="gravity-mark__path gravity-mark__path--signal"
        d="M4.4 21.8C7.8 12.5 19.5 5.9 28.4 8.7C35.3 10.9 33.4 18.2 27.2 24.7C20.6 31.7 9.6 34.2 5 29.2C3.1 27.2 3.1 24.8 4.4 21.8"
      />
      <circle className="gravity-mark__node" cx="29.5" cy="9.5" r="2.2" />
      <path className="gravity-mark__focus" d="M18 14.5L21.5 18L18 21.5L14.5 18Z" />
    </svg>
  );
}
