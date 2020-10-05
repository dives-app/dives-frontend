import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled.button(
  ({ primary, theme }) => css`
    background-color: ${primary ? theme.colors.green : theme.colors.white};
    color: ${primary ? theme.colors.white : theme.colors.green};
    font-family: ${theme.fonts.inter};
    border: 0;
    border-radius: 2.1rem;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-size: 1.8rem;
    padding: 1rem 1.8rem 1rem 1.8rem;
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
};
