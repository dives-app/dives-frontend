import React from "react";
import AppThemeProvider from "../components/AppThemeProvider";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

export const decorators = [
  (Story) => (
    <AppThemeProvider>
      <Story />
    </AppThemeProvider>
  ),
];
