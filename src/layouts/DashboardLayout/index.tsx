import React from 'react';
import { useRouter } from 'next/router';
import { Text, Grid, GridItem } from '@chakra-ui/react';
import DashboardNavigation, { NavigationElement } from './DashboardNavigation';
import TitleBar from './TitleBar';
import { useUserQuery } from '../../generated/graphql';

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
    name: 'accounts',
    icon: '/bank.svg',
    url: '/accounts',
  },
  {
    name: 'stats',
    icon: '/stats.svg',
    url: '/stats',
  },
];

interface DashboardLayoutProps {
  leftColumn: JSX.Element;
  rightColumn: JSX.Element;
  title: string;
}

const DashboardLayout = ({ leftColumn, rightColumn, title }: DashboardLayoutProps) => {
  const router = useRouter();
  const { data } = useUserQuery({
    onError: () => router.push('/login'),
  });
  return data ? (
    <Grid
      templateColumns="100px 1fr"
      templateRows="80px minmax(0, 1fr)"
      h="100vh"
      backgroundColor="dives.lightGray"
    >
      <GridItem rowSpan={2}>
        <DashboardNavigation navigationElements={navigationElements} />
      </GridItem>
      <TitleBar title={title} />
      <Grid overflow="auto" templateColumns="55fr 45fr" gap="4" px="8">
        {leftColumn}
        {rightColumn}
      </Grid>
    </Grid>
  ) : (
    <Text>TODO: Loading skeleton here...</Text>
  );
};

export default DashboardLayout;
