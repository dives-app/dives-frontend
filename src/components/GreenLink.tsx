import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import React from "react";

export const GreenLink = ({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) => {
  return (
    <NextLink href={href} passHref>
      <Link color="green">{children}</Link>
    </NextLink>
  );
};
