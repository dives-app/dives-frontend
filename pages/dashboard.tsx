import React from 'react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { VStack } from '@chakra-ui/react';
import DashboardLayout from '../src/layouts/DashboardLayout';
import Card from '../src/components/cards/base/Card';
import LatestOperations from '../src/components/cards/LatestOperations';
import { NextPageWithLayout } from '../src/types';

const Dashboard: NextPageWithLayout = () => {
  const { t } = useTranslation(`dashboard`);

  return (
    <>
      <NextSeo title={t`common:appName`} noindex nofollow />
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

Dashboard.layout = page => <DashboardLayout>{page}</DashboardLayout>;

// getStaticProps is needed on pages with Layout because of this bug:
// https://github.com/vinissimus/next-translate/issues/486
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default Dashboard;
