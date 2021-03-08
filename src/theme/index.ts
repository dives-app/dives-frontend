import { extendTheme } from "@chakra-ui/react";
import global from "./global";
import fonts from "./fonts";
import components from "./components";

const colors = {
  dives: {
    lightGreen: "#70cc9e",
    green: "#4bbf85",
    darkGreen: "#3f9f70",
  },
  white: "#fff",
  // lightGray: "#F5F6F7",
  // gray: "#EDEDED",
  // darkGray: "#C4C4C4",
  // darkerGray: "#A6A6A6",
  brightBlack: "#383838",
  black: "#000",
  buttonOutline: "rgba(66, 153, 225, 0.6)",
  errorRed: "#ff3d00",
};

const theme = extendTheme({ fonts, colors, components, styles: { global } });

export default theme;
