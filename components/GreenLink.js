import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Link from "next/link";

const A = styled.a`
  color: ${({theme}) => theme.colors.green};
`

export const GreenLink = ({ children, href }) => {
  return (
    <Link href={href} passHref>
      <A>{children}</A>
    </Link>
  );
};

GreenLink.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string.isRequired,
};

GreenLink.defaultProps = {
  children: "GreenLink",
  href: "/",
};
