import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { VStack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Card from '../src/components/cards/base/Card';
import LatestOperations from '../src/components/cards/LatestOperations';
import { NextPageWithLayout } from '../src/types';

const Dashboard: NextPageWithLayout = () => {
  const { t } = useTranslation(`dashboard`);

  return (
    <>
      <Head>
        <title>{t`common:appName`}</title>
      </Head>
      <VStack>
        <LatestOperations />
        <Card h="400" title="Test" />
      </VStack>
      <VStack>
        <Card h="300" title="Test" />
        <Card h="400" title="test" />
      </VStack>
    </>
  );
};

Dashboard.layout = page => <DashboardLayout title="Home">{page}</DashboardLayout>;

// getStaticProps is needed on pages with Layout because of this bug:
// https://github.com/vinissimus/next-translate/issues/486
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default Dashboard;
