import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import InputErrorMessage from "./InputErrorMessage";

const Input = styled.input`
  flex-shrink: 0;
  width: 1.25rem;
  height: 1.25rem;
  appearance: none;
  outline: none;
  border: 1px solid
    ${({ theme, errors }) =>
      errors ? theme.colors.errorRed : theme.colors.brightBlack};
  border-radius: 0.2rem;
  margin: 0.2rem;
  box-shadow: 0 0;
  transition: box-shadow 250ms;

  &:checked + span::before {
    opacity: 1;
    content: "\\2713";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.2rem;
    width: 1.25rem;
    height: 1.25rem;
    line-height: 1.25rem;
    text-align: center;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.green};
    pointer-events: none;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonOutline};
  }
`;

const Wrapper = styled.label`
  display: flex;
  position: relative;
  align-items: center;
  cursor: pointer;
`;

const Label = styled.span`
  font-weight: 600;
  margin-left: 0.5rem;
  user-select: none;
`;

export const Checkbox = ({ children, name, style, inputRef, errors }) => {
  return (
    <>
      <Wrapper style={style}>
        <Input type="checkbox" name={name} ref={inputRef} errors={errors} />
        <Label>{children}</Label>
      </Wrapper>
      {errors && <InputErrorMessage>{errors.message}</InputErrorMessage>}
    </>
  );
};

Checkbox.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

Checkbox.defaultProps = {
  children: "Checkbox",
};
