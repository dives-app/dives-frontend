import React from 'react';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Card from '../src/components/cards/base/Card';

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
            <Card title="test" h="500" />
            <Card title="test" h="400" />
          </VStack>
        }
        rightColumn={
          <VStack>
            <Card title="test" h="300" />
            <Card title="test" h="400" />
          </VStack>
        }
      />
    </>
  );
}
