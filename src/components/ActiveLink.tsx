import React from 'react';
import { useRouter } from 'next/router';
import NextLink, { LinkProps } from 'next/link';
import { CSSObject } from '@chakra-ui/react';

interface ActiveLinkProps extends LinkProps {
  activeStyle?: CSSObject;
}

const ActiveLink = ({
  children,
  href,
  as,
  passHref,
  locale,
  prefetch,
  replace,
  scroll,
  shallow,
  activeStyle,
}: React.PropsWithChildren<ActiveLinkProps>) => {
  const { asPath } = useRouter();
  const child = React.Children.only(children) as React.ReactElement;
  const isActive = asPath === href || asPath === as;
  return (
    <NextLink
      href={href}
      as={as}
      passHref={passHref}
      locale={locale}
      prefetch={prefetch}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
    >
      {React.cloneElement(child, isActive ? activeStyle : undefined)}
    </NextLink>
  );
};

export default ActiveLink;
