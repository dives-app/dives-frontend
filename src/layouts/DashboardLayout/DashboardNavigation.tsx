import Image from 'next/image';
import { Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import { MenuItem } from './MenuItem';

export const DivesLogo = () => (
  <Image width="55" height="64" src="/logo.svg" alt="Dives Logo" draggable={false} />
);

export interface NavigationElement {
  i18nKey: string;
  icon: string;
  url: string;
}

interface DashboardNavigationProps {
  navigationElements: Array<NavigationElement>;
}

export const DashboardNavigation = ({ navigationElements }: DashboardNavigationProps) => (
  <Flex bg="dives.green" h="100%" p="4" direction="column" align="center" boxShadow="messenger">
    <NextLink href="/dashboard" passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link mb="3">
        <DivesLogo />
      </Link>
    </NextLink>
    <Flex direction="column" justify="space-between" h="100%">
      <div>
        {navigationElements.map(({ i18nKey, icon, url }) => (
          <MenuItem key={i18nKey} i18nKey={i18nKey} icon={icon} url={url} />
        ))}
      </div>
      <MenuItem i18nKey="settings" url="/settings" icon="/settings.svg" />
    </Flex>
  </Flex>
);
