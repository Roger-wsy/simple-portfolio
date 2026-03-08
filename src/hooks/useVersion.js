import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-version";

const getInitialVersion = () => {
  if (typeof window === "undefined") {
    return "revamp";
  }

  return window.localStorage.getItem(STORAGE_KEY) || "revamp";
};

export const useVersion = () => {
  const [version, setVersion] = useState(getInitialVersion);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, version);
  }, [version]);

  return { version, setVersion };
};
