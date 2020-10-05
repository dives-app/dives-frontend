import React from "react";
import ThemeProvider from "../components/ThemeProvider";
import GlobalStyle from "../styles/GlobalStyle";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <GlobalStyle />
      <div style={{ padding: "1.6rem" }}>
        <Story />
      </div>
    </ThemeProvider>
  ),
];
