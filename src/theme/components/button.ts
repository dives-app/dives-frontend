export default {
  baseStyle: {
    fontWeight: "normal",
    borderRadius: "full",
  },
  defaultProps: {
    variant: "secondary",
  },
  sizes: {
    sm: {
      fontSize: "sm",
      h: "5",
      px: "2.5",
    },
    md: {
      fontSize: "md",
      h: "8",
      px: "4",
    },
    lg: {
      fontSize: "lg",
      h: "10",
      px: "5",
    },
    xl: {
      fontSize: "xl",
      h: "12",
      px: "6",
    },
  },
  variants: {
    primary: {
      bg: "dives.green",
      color: "white",
      _hover: {
        bg: "dives.lightGreen",
      },
      _active: {
        bg: "dives.darkGreen",
      },
    },
    secondary: {
      bg: "white",
      color: "dives.green",
      _hover: {
        bg: "lightGray",
      },
      _active: {
        bg: "darkGray",
      },
    },
    secondaryOutlined: {
      bg: "white",
      color: "darkerGray",
      _hover: {
        bg: "lightGray",
      },
      _active: {
        bg: "darkGray",
      },
      boxShadow: "xs",
    },
  },
};
