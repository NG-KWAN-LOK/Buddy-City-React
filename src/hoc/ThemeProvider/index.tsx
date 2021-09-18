import React, { useState, createContext, useCallback } from "react";

const root = document.getElementsByTagName("html")[0];

export const ThemeContext = createContext({
  themeMode: "",
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState("");
  const toggleTheme = useCallback(() => {
    setThemeMode((prevState: string) => {
      if (prevState === "") {
        return "dark";
      } else {
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
