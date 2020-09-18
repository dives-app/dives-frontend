import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ primary, theme }) =>
    primary ? theme.green : theme.white};
  color: ${({ primary, theme }) => (primary ? theme.white : theme.green)};
  font-family: ${({ theme }) => theme.inter};
  border: 0;
  border-radius: 1.25rem;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-size: 1.125rem;
  padding: 0.625rem 1.125rem 0.625rem 1.125rem;
  ${({ primary, theme }) =>
    primary &&
    css`
      &:hover {
        background-color: ${theme.lightGreen};
      }
    `}
`;

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
