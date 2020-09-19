import React from "react";
import getTheme from "../styles/themes";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={getTheme("light")}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
