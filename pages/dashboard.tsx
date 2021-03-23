import React from 'react';
import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Card from '../src/components/cards/base/Card';
import LatestOperations from '../src/components/cards/LatestOperations';

const Dashboard: NextPage = () => (
  <>
    <Head>
      <title>Dives</title>
    </Head>
    <DashboardLayout
      title="Home"
      leftColumn={
        <VStack>
          <LatestOperations />
          <Card h="400" title="Test" />
        </VStack>
      }
      rightColumn={
        <VStack>
          <Card h="300" title="Test" />
          <Card h="400" title="test" />
        </VStack>
      }
    />
  </>
);

export default Dashboard;
