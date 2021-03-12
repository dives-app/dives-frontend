import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import React from 'react';

const GreenLink = ({ children, href }: React.PropsWithChildren<{ href: string }>) => (
  <NextLink href={href} passHref>
    <Link color="dives.green" fontWeight="semibold">
      {children}
    </Link>
  </NextLink>
);

export default GreenLink;
