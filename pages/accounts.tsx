import React from 'react';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Card from '../src/components/Card';

export default function Accounts() {
  return (
    <>
      <Head>
        <title>Dives - konta</title>
      </Head>
      <DashboardLayout
        title="Accounts"
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
