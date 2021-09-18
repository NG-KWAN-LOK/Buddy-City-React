import React from "react";
import useTheme from "../../hoc/ThemeProvider";

import logo from "../../image/logo.png";
import logoLight from "../../image/logo_light.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const { themeMode } = useTheme();
  return (
    <img src={themeMode === "" ? logo : logoLight} className={className} />
  );
};

export default Logo;
