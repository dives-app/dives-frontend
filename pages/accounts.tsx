import React from 'react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { VStack } from '@chakra-ui/react';
import { DashboardLayout } from '../src/layouts/DashboardLayout';
import { Card } from '../src/components/cards/base/Card';
import { NextPageWithLayout } from '../src/types';

const Accounts: NextPageWithLayout = () => {
  const { t } = useTranslation('accounts');

  return (
    <>
      <NextSeo title={`${t`common:appName`} - ${t`title`}`} noindex nofollow />
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
};

Accounts.layout = page => <DashboardLayout>{page}</DashboardLayout>;

// getStaticProps is needed on pages with Layout because of this bug:
// https://github.com/vinissimus/next-translate/issues/486
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default Accounts;
