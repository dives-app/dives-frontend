import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import React from 'react';

const DivesLink = ({ children, href }: React.PropsWithChildren<{ href: string }>) => (
  <NextLink href={href} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <Link color="dives.green" fontWeight="semibold">
      {children}
    </Link>
  </NextLink>
);

export default DivesLink;
