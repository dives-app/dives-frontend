import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  appearance: none;
  outline: none;
  border: 1px solid ${({ theme }) => theme.colors.brightBlack};
  border-radius: 0.3rem;
  margin: 0.3rem;
  box-shadow: 0 0;
  transition: box-shadow 250ms;

  &:checked + span::before {
    opacity: 1;
    content: "\\2713";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0.3rem;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    text-align: center;
    font-size: 1.8rem;
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
  margin-left: 0.8rem;
  user-select: none;
`;

export const Checkbox = ({ children, id, style }) => {
  return (
    <Wrapper style={style}>
      <Input type="checkbox" id={id} value="on" />
      <Label>{children}</Label>
    </Wrapper>
  );
};

Checkbox.propTypes = {
  children: PropTypes.string,
};

Checkbox.defaultProps = {
  children: "Checkbox",
};
