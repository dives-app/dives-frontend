import React from 'react';
import Head from 'next/head';
import { Box, VStack } from '@chakra-ui/react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Card from '../src/components/Card';
import CardList from '../src/components/CardList';

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
            <Card title="Latest operations">
              <CardList
                title="Today"
                items={[{ icon: '', iconColor: '', title: 'Test title', date: '03.02.2001' }]}
              />
              <Box h={4} />
              <CardList
                title="Yesterday"
                items={[
                  { icon: '', iconColor: '', title: 'Test title', date: '03.02.2001' },
                  { icon: '', iconColor: '', title: 'Test title', date: '03.02.2001' },
                  { icon: '', iconColor: '', title: 'Test title', date: '03.02.2001' },
                ]}
              />
            </Card>
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
