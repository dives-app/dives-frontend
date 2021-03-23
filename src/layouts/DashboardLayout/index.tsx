import React, { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { Text, Grid, GridItem } from '@chakra-ui/react';
import DashboardNavigation, { NavigationElement } from './DashboardNavigation';
import TitleBar from './TitleBar';
import { useUserQuery } from '../../generated/graphql';

const navigationElements: Array<NavigationElement> = [
  {
    i18nKey: 'home',
    icon: '/house.svg',
    url: '/dashboard',
  },
  {
    i18nKey: 'budget',
    icon: '/book.svg',
    url: '/budget',
  },
  {
    i18nKey: 'accounts',
    icon: '/bank.svg',
    url: '/accounts',
  },
  {
    i18nKey: 'stats',
    icon: '/stats.svg',
    url: '/stats',
  },
];

interface DashboardLayoutProps {
  title: string;
}

const DashboardLayout = ({ children, title }: PropsWithChildren<DashboardLayoutProps>) => {
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
        {children}
      </Grid>
    </Grid>
  ) : (
    <Text>TODO: Loading skeleton here...</Text>
  );
};

export default DashboardLayout;
