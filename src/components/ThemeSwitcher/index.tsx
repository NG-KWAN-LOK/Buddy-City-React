import React from "react";
import useTheme from "../../hoc/ThemeProvider";
import styles from "./style.module.scss";

const ThemeSwitcher = () => {
  const { themeMode, toggleTheme } = useTheme();
  return (
    <label className={styles.switch}>
      <input
        type='checkbox'
        onClick={toggleTheme}
        defaultChecked={themeMode === "" ? false : true}
      />
      <span className={`${styles["slider"]} ${styles["round"]}`}></span>
    </label>
  );
};

export default ThemeSwitcher;
