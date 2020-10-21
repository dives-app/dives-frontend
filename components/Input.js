import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Label = styled.label(
  ({ theme, isFocused }) => css`
    position: absolute;
    left: 0;
    z-index: 10;
    transition: transform 150ms ease-out, font-size 150ms ease-out,
      color 150ms ease-out;
    cursor: text;

    color: ${theme.colors.darkerGray};
    font-size: 2.4rem;

    ${isFocused &&
    css`
      transform: translateY(-125%);
      color: ${theme.colors.black};
      font-size: 1.4rem;
    `}
  `
);

const StyledInput = styled.input`
  position: relative;
  padding: 0 0.2rem 0.6rem 0.2rem;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 0 0 black;
  transition: box-shadow 150ms ease-out;
  font-size: 2.4rem;
`;

const Input = ({ name, label, onChange, onBlur, onFocus, value, ...props }) => {
  const [localValue, setValue] = useState("");
  const [isFocused, setFocused] = useState(false);

  const handleChange = (e) => {
    onChange && onChange(e.target.value);
    setValue(e.target.value);
  };

  const handleFocus = () => {
    // onFocus && onFocus();
    setFocused(true);
  };

  const handleBlur = () => {
    onBlur && onBlur();
    if (localValue === "") {
      setFocused(false);
    }
  };

  return (
    <Wrapper>
      <Label htmlFor={name} isFocused={isFocused}>
        {label}
      </Label>
      <StyledInput
        id={name}
        name={name}
        value={localValue}
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
   * It's passed to label's "for" attribute and input's "id" and "name" attribute.
   */
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
