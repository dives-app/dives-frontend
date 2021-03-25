import NextLink from 'next/link';
import { Link } from '@chakra-ui/react';
import React from 'react';

interface Props {
  href: string;
  openInNewTab?: boolean;
}

const DivesLink = ({ children, href, openInNewTab = false }: React.PropsWithChildren<Props>) => (
  <NextLink href={href} passHref>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <Link isExternal={openInNewTab} color="dives.green" fontWeight="semibold">
      {children}
    </Link>
  </NextLink>
);

export default DivesLink;
