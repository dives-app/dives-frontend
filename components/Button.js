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

const StyledButton = styled.button(
  ({ primary, size, theme }) => css`
    background-color: ${primary ? theme.colors.green : theme.colors.white};
    color: ${primary ? theme.colors.white : theme.colors.green};
    font-family: ${theme.fonts.inter};
    border: 0;
    border-radius: ${buttonSizes[size].borderRadius};
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-size: ${buttonSizes[size].fontSize};
    padding: ${buttonSizes[size].padding};
    transition: box-shadow 250ms ease, background-color 250ms ease;
    outline: none;
    &:hover {
      background-color: ${primary
        ? theme.colors.lightGreen
        : theme.colors.lightGray};
    }
    &:active {
      background-color: ${primary
        ? theme.colors.darkGreen
        : theme.colors.darkGray};
    }
    &:focus {
      box-shadow: 0 0 0 3px ${theme.colors.buttonOutline};
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
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};

Button.defaultProps = {
  size: "md",
};
