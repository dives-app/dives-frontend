import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
  margin-top: 0.75rem;
`;

const Label = styled.label(
  ({ theme, isFocused }) => css`
    position: absolute;
    left: 0;
    top: 0.75rem;
    z-index: 10;
    transition: transform 150ms ease-out, font-size 150ms ease-out,
      color 150ms ease-out;
    font-family: ${theme.fonts.inter};
    cursor: text;

    color: ${theme.colors.darkerGray};
    font-size: 1.5rem;

    ${isFocused &&
    css`
      transform: translateY(-125%);
      color: ${theme.colors.black};
      font-size: 0.875rem;
    `}
  `
);

const StyledInput = styled.input`
  position: relative;
  padding: 0.75rem 0 0.375rem 0;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 0 0 black;
  transition: box-shadow 150ms ease-out;
  font-family: ${({ theme }) => theme.fonts.inter};
  font-size: 1.5rem;
`;

export const Input = ({ id, label, ...props }) => {
  const [value, setValue] = useState("");
  const [isFocused, setFocused] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    if (value === "") {
      setFocused(false);
    }
  };

  return (
    <Wrapper>
      <Label htmlFor={id} isFocused={isFocused}>
        {label}
      </Label>
      <StyledInput
        id={id}
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </Wrapper>
  );
};

Input.propTypes = {
  /**
   * It's passed to label's "for" attribute and input's "id" attribute.
   */
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
