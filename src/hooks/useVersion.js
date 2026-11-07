import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-version";
const VALID_VERSIONS = new Set(["legacy", "revamp", "orbital"]);

const getInitialVersion = () => {
  if (typeof window === "undefined") {
    return "revamp";
  }

  const versionParam = new URLSearchParams(window.location.search).get("version");
  if (VALID_VERSIONS.has(versionParam)) {
    return versionParam;
  }

  const storedVersion = window.localStorage.getItem(STORAGE_KEY);
  return VALID_VERSIONS.has(storedVersion) ? storedVersion : "revamp";
};

export const useVersion = () => {
  const [version, setVersionState] = useState(getInitialVersion);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, version);
  }, [version]);

  const setVersion = (nextVersion) => {
    if (!VALID_VERSIONS.has(nextVersion)) return;

    setVersionState(nextVersion);

    const url = new URL(window.location.href);
    url.searchParams.set("version", nextVersion);
    window.history.replaceState({}, "", url);
  };

  return { version, setVersion };
};
