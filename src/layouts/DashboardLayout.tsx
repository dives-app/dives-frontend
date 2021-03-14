import NextLink from 'next/link';
import { Text, Flex, Grid, GridItem, Link } from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import ActiveLink from '../components/ActiveLink';

export const DivesLogo = () => (
  <Image width="55" height="64" src="/logo.svg" alt="Dives Logo" draggable={false} />
);

type NavigationElement = {
  name: string;
  icon: string;
  url: string;
};
type DashboardNavigationProps = {
  navigationElements: Array<NavigationElement>;
};

export const DashboardNavigation = ({ navigationElements }: DashboardNavigationProps) => (
  <Flex bg="dives.green" h="100%" p="4" direction="column" align="center">
    <NextLink href="/dashboard" passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link mb="3">
        <DivesLogo />
      </Link>
    </NextLink>
    {navigationElements.map(({ name, icon, url }) => (
      <ActiveLink
        href={url}
        passHref
        activeStyle={{
          bg: 'dives.lightGreen',
        }}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link
          color="white"
          w="16"
          h="16"
          mt="1"
          borderRadius="2xl"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          _hover={{
            bg: 'dives.lightGreen',
          }}
        >
          <Image width="26" height="21" src={icon} alt="" />
          <Text lineHeight="none" fontSize="sm" mt="1" textTransform="capitalize">
            {name}
          </Text>
        </Link>
      </ActiveLink>
    ))}
  </Flex>
);

const navigationElements: Array<NavigationElement> = [
  {
    name: 'home',
    icon: '/house.svg',
    url: '/dashboard',
  },
  {
    name: 'budget',
    icon: '/book.svg',
    url: '/budget',
  },
  {
    name: 'account',
    icon: '/bank.svg',
    url: '/account',
  },
  {
    name: 'stats',
    icon: '/stats.svg',
    url: '/stats',
  },
];

type DashboardLayoutProps = {
  leftColumn: JSX.Element;
  rightColumn: JSX.Element;
  head: JSX.Element;
};

const DashboardLayout = ({ leftColumn, rightColumn, head }: DashboardLayoutProps) => (
  <Grid templateColumns="100px 1fr" templateRows="50px minmax(0, 1fr)" pr="10" h="100vh">
    <GridItem rowSpan={2}>
      <DashboardNavigation navigationElements={navigationElements} />
    </GridItem>
    <div>{head}</div>
    <Grid overflow="auto" templateColumns="55fr 45fr" gap="4" px="8">
      {leftColumn}
      {rightColumn}
    </Grid>
  </Grid>
);

export default DashboardLayout;
