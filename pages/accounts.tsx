import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Card from '../src/components/cards/base/Card';
import { NextPageWithLayout } from '../src/types';

const Accounts: NextPageWithLayout = () => (
  <>
    <Head>
      <title>Dives - konta</title>
    </Head>
    <VStack>
      <Card title="test" h="500" />
      <Card title="test" h="400" />
    </VStack>
    <VStack>
      <Card title="test" h="300" />
      <Card title="test" h="400" />
    </VStack>
  </>
);

Accounts.layout = page => <DashboardLayout title="Accounts">{page}</DashboardLayout>;

// getStaticProps is needed on pages with Layout because of this bug:
// https://github.com/vinissimus/next-translate/issues/486
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default Accounts;
