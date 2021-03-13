import { Box, Grid, GridItem } from '@chakra-ui/react';
import React from 'react';

export const DashboardNavigation = () => (
  <Box bg="dives.green" h="100%">
    nawigacja
  </Box>
);

type DashboardLayoutProps = {
  leftColumn: JSX.Element;
  rightColumn: JSX.Element;
  head: JSX.Element;
};

const DashboardLayout = ({ leftColumn, rightColumn, head }: DashboardLayoutProps) => (
  <Grid templateColumns="100px 1fr" templateRows="50px minmax(0, 1fr)" pr="10" h="100vh">
    <GridItem rowSpan={2}>
      <DashboardNavigation />
    </GridItem>
    <div>{head}</div>
    <Grid overflow="auto" templateColumns="55fr 45fr" gap="4" px="8">
      {leftColumn}
      {rightColumn}
    </Grid>
  </Grid>
);

export default DashboardLayout;
