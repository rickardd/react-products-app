import { useEffect, useState } from "react";

export const DarModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = isDarkMode ? "dark-mode" : "light-mode";
  }, [isDarkMode]);

  return <button onClick={toggleTheme}>Switch to {isDarkMode ? "Light" : "Dark"} Mode</button>;
};
