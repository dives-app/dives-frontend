export default {
  baseStyle: {
    fontWeight: "normal",
  },
  defaultProps: {
    variant: "secondary",
  },
  sizes: {
    sm: {
      borderRadius: "1rem",
      fontSize: "1.2rem",
      h: "2.1rem",
      px: "1rem",
    },
    md: {
      borderRadius: "2.1rem",
      fontSize: "1.4rem",
      h: "3.3rem",
      px: "1.2rem",
    },
    lg: {
      borderRadius: "2.1rem",
      fontSize: "1.8rem",
      h: "4.2rem",
      px: "1.8rem",
    },
    xl: {
      borderRadius: "1rem",
      fontSize: "2rem",
      h: "4.4rem",
      px: "1.8rem",
    },
  },
  variants: {
    primary: {
      bg: "green",
      color: "white",
      _hover: {
        bg: "lightGreen",
      },
      _active: {
        bg: "darkGreen",
      },
    },
    secondary: {
      bg: "white",
      color: "green",
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
