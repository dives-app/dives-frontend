import Image from 'next/image';
import { Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';
import ActiveLink from '../../components/ActiveLink';

export const DivesLogo = () => (
  <Image width="55" height="64" src="/logo.svg" alt="Dives Logo" draggable={false} />
);

export type NavigationElement = {
  name: string;
  icon: string;
  url: string;
};
type DashboardNavigationProps = {
  navigationElements: Array<NavigationElement>;
};

const DashboardNavigation = ({ navigationElements }: DashboardNavigationProps) => (
  <Flex bg="dives.green" h="100%" p="4" direction="column" align="center" boxShadow="messenger">
    <NextLink href="/dashboard" passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link mb="3">
        <DivesLogo />
      </Link>
    </NextLink>
    {navigationElements.map(({ name, icon, url }) => (
      <ActiveLink
        key={name}
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

export default DashboardNavigation;
