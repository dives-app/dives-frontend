import React, { useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const FormGroup = styled.div`
  position: relative;
`;

const Label = styled.label(
  ({ theme, isFocused }) => css`
    position: absolute;
    left: 0;
    top: 10px;
    z-index: 10;
    transition: transform 150ms ease-out, font-size 150ms ease-out,
      color 150ms ease-out;
    font-family: ${theme.fonts.inter};

    ${isFocused
      ? css`
          transform: translateY(-125%);
          color: ${theme.colors.black};
          font-size: 0.75em;
        `
      : css`
          color: ${theme.colors.darkerGray};
        `}
  `
);

const StyledInput = styled.input`
  position: relative;
  padding: 12px 0 5px 0;
  width: 100%;
  outline: 0;
  border: 0;
  box-shadow: 0 1px 0 0 black;
  transition: box-shadow 150ms ease-out;
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
    <FormGroup>
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
    </FormGroup>
  );
};

Input.propTypes = {
  /**
   * It's passed to label's "for" attribute and input's "id" attribute.
   */
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};
