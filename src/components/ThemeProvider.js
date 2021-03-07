import React from "react";
import getTheme from "../theme/themes-old";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={getTheme("light")}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
