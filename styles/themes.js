const globals = {
  fonts: {
    inter:
      '"Inter", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
    comfortaa:
      '"Comfortaa", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif',
  },
};

const themes = {
  light: {
    name: "light",
    colors: {
      green: "#4bbf85",
      lightGreen: "#70cc9e",
      darkGreen: "#3f9f70",
      white: "#fff",
      gray: "#EDEDED",
      lightGray: "#F5F6F7",
      darkGray: "#C4C4C4",
      darkerGray: "#A6A6A6",
      black: "#000",
      buttonOutline: "rgba(66, 153, 225, 0.6)",
    },
  },
};

const getTheme = (themeName) => {
  return { ...globals, ...themes[themeName] };
};

export default getTheme;
