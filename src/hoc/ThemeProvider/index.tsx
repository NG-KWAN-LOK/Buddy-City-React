import React, { useState, createContext, useCallback } from "react";

const root = document.getElementsByTagName("html")[0];

export const ThemeContext = createContext({
  themeMode: "",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  if (localStorage.getItem("darkMode") === null) {
    localStorage.setItem("darkMode", "");
  }
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("darkMode") as string
  );
  const toggleTheme = useCallback(() => {
    setThemeMode((prevState: string) => {
      if (prevState === "") {
        localStorage.setItem("darkMode", "dark");
        return "dark";
      } else {
        localStorage.setItem("darkMode", "");
        return "";
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  return React.useContext(ThemeContext);
};

export default useTheme;
