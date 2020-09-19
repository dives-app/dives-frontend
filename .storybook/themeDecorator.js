import React from "react";
import ThemeProvider from "../components/ThemeProvider";

const ThemeDecorator = (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
