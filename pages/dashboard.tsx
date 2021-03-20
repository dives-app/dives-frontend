import React from 'react';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Card from '../src/components/cards/base/Card';
import LatestOperations from '../src/components/cards/LatestOperations';

export default function Dashboard() {
  return (
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
}
