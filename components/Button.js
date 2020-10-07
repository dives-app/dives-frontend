import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const buttonSizes = {
  sm: {
    borderRadius: "1rem",
    fontSize: "1.2rem",
    padding: "0.3rem 1rem",
  },
  md: {
    borderRadius: "2.1rem",
    fontSize: "1.4rem",
    padding: "0.8rem 1.2rem",
  },
  lg: {
    borderRadius: "2.1rem",
    fontSize: "1.8rem",
    padding: "1rem 1.8rem",
  },
  xl: {
    borderRadius: "2.4rem",
    fontSize: "2rem",
    padding: "1rem 1.8rem",
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
  ({ size, theme, ...props }) => css`
    outline: none;
    border: 0;
    cursor: pointer;
    display: inline-block;

    background-color: ${props.backgroundColor};
    color: ${props.color};
    box-shadow: ${props.boxShadow}, 0 0;
    transition: box-shadow 250ms ease, background-color 250ms ease;

    border-radius: ${buttonSizes[size].borderRadius};
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
  `
);

export const Button = ({ label, ...props }) => {
  return (
    <StyledButton type="button" {...props}>
      {label}
    </StyledButton>
  );
};

Button.propTypes = {
  appearance: PropTypes.oneOf(["primary", "secondary", "secondaryOutlined"]),
  label: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  appearance: "secondary",
  label: "Button",
  size: "md",
  fullWidth: false,
};
