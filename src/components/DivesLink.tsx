import NextLink from 'next/link';
import { LinkOverlay } from '@chakra-ui/react';
import React from 'react';

const DivesLink = ({ children, href }: React.PropsWithChildren<{ href: string }>) => (
  <NextLink href={href} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <LinkOverlay color="dives.green" fontWeight="semibold">
      {children}
    </LinkOverlay>
  </NextLink>
);

export default DivesLink;
