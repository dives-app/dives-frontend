import React from "react";
import ThemeProvider from "../components/AppThemeProvider";

const ThemeDecorator = (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
