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
