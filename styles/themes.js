const globals = {
  inter:
    '"Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  comfortaa:
    '"Comfortaa", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
};

const themes = {
  light: {
    name: "light",
    green: "#4bbf85",
    lightGreen: "#70cc9e",
    white: "#fff",
  },
};

const getTheme = (themeName) => {
  return { ...globals, ...themes[themeName] };
};

export default getTheme;
