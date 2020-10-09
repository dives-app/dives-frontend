import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const buttonSizes = {
  sm: {
    borderRadius: "1rem",
    fontSize: "1.2rem",
    height: "2.1rem",
    padding: "0 1rem",
  },
  md: {
    borderRadius: "2.1rem",
    fontSize: "1.4rem",
    height: "3.3rem",
    padding: "0 1.2rem",
  },
  lg: {
    borderRadius: "2.1rem",
    fontSize: "1.8rem",
    height: "4.2rem",
    padding: "0 1.8rem",
  },
  xl: {
    borderRadius: "2.4rem",
    fontSize: "2rem",
    height: "4.4rem",
    padding: "0 1.8rem",
  },
};

const StyledButton = styled.button.attrs(({ appearance, theme, ...props }) => {
  const base = {
    boxShadow: `inset 0 0`,
  };
  const secondary = {
    backgroundColor: theme.colors.white,
    backgroundColorHover: theme.colors.lightGray,
    backgroundColorActive: theme.colors.darkGray,
    color: theme.colors.green,
  };
  const colors = {
    primary: {
      backgroundColor: theme.colors.green,
      backgroundColorHover: theme.colors.lightGreen,
      backgroundColorActive: theme.colors.darkGreen,
      color: theme.colors.white,
    },
    secondary,
    secondaryOutlined: {
      ...secondary,
      color: theme.colors.darkerGray,
      boxShadow: `inset 0 0 0 1px ${theme.colors.darkGray}`,
    },
  };
  return {
    ...base,
    ...colors[appearance],
    theme,
    ...props,
  };
})(
  ({ size, theme, fullWidth, ...props }) => css`
    outline: none;
    border: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${props.backgroundColor};
    color: ${props.color};
    box-shadow: ${props.boxShadow}, 0 0 transparent;
    transition: box-shadow 250ms ease, background-color 250ms ease;

    border-radius: ${buttonSizes[size].borderRadius};
    width: ${fullWidth ? "100%" : "auto"};
    height: ${buttonSizes[size].height};
    padding: ${buttonSizes[size].padding};

    font-family: ${theme.fonts.inter};
    font-size: ${buttonSizes[size].fontSize};
    line-height: 1;

    &:hover {
      background-color: ${props.backgroundColorHover};
    }
    &:active {
      background-color: ${props.backgroundColorActive};
    }
    &:focus {
      box-shadow: ${props.boxShadow}, 0 0 0 3px ${theme.colors.buttonOutline};
    }

    // icon margins
    & > img:first-child {
      margin-right: 0.4rem;
    }
    & > img:last-child {
      margin-left: 0.4rem;
    }
  `
);

export const Button = React.forwardRef(
  ({ children, as, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <StyledButton
        as={as}
        type={as === "button" ? "button" : undefined}
        ref={ref}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </StyledButton>
    );
  }
);

Button.propTypes = {
  /**
   * Appearance of a button
   */
  appearance: PropTypes.oneOf(["primary", "secondary", "secondaryOutlined"]),
  /**
   * If button is wrapped in a `Link`, this prop allows to make it an `a` element.
   */
  as: PropTypes.oneOf(["button", "a"]),
  /**
   * Label
   */
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  fullWidth: PropTypes.bool,
  /**
   * Passed icon element should be an `img` tag
   */
  leftIcon: PropTypes.element,
  /**
   * Passed icon element should be an `img` tag
   */
  rightIcon: PropTypes.element,
};

Button.defaultProps = {
  appearance: "secondary",
  as: "button",
  children: "Button",
  size: "md",
  fullWidth: false,
};
