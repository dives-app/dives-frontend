const bg = (normal: string, hover: string, active: string) => ({
  bg: normal,
  _hover: {
    bg: hover,
    _disabled: {
      bg: normal,
    },
  },
  _active: {
    bg: active,
  },
});

export default {
  baseStyle: {
    fontWeight: 'normal',
    borderRadius: 'full',
  },
  defaultProps: {
    variant: 'secondary',
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      h: '5',
      px: '2.5',
    },
    md: {
      fontSize: 'md',
      h: '8',
      px: '4',
    },
    lg: {
      fontSize: 'lg',
      h: '10',
      px: '5',
    },
    xl: {
      fontSize: 'xl',
      h: '12',
      px: '6',
    },
  },
  variants: {
    primary: {
      ...bg('dives.green', 'dives.lightGreen', 'dives.darkGreen'),
      color: 'white',
    },
    secondary: {
      ...bg('white', 'dives.lightGray', 'dives.darkGray'),
      color: 'dives.green',
    },
    secondaryOutlined: {
      ...bg('white', 'dives.lightGray', 'dives.darkGray'),
      color: 'darkerGray',
      boxShadow: 'xs',
    },
    menu: {
      ...bg('transparent', 'dives.gray', 'dives.darkGray'),
      fontFamily: 'Comfortaa',
      borderRadius: '10',
      h: '14',
    },
  },
};
