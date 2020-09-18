import React from "react";
import { themes, globals } from "../styles/themes";
import { ThemeProvider } from "styled-components";

const AppThemeProvider = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...themes["light"], ...globals }}>
      {children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
