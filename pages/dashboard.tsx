import React from 'react';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Card from '../src/components/Card';

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
            <Card h="500" />
            <Card h="400" />
          </VStack>
        }
        rightColumn={
          <VStack>
            <Card h="300" />
            <Card h="400" />
          </VStack>
        }
      />
    </>
  );
}
