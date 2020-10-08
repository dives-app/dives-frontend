import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.inter};
  font-weight: 600;
`;

export const Checkbox = ({ label, style, ...props }) => {
  return (
    <div style={style}>
      <input type="checkbox" id="???" name="???" value="on" />
      <Label htmlFor="???">{label}</Label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
};

Checkbox.defaultProps = {
  label: "Checkbox",
};
