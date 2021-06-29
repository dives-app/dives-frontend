import React from 'react';
import { GetStaticProps } from 'next';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { VStack } from '@chakra-ui/react';
import { DashboardLayout } from '../src/layouts/DashboardLayout';
import { Card } from '../src/components/cards/base/Card';
import { NextPageWithLayout } from '../src/types';
import { Categories } from '../src/components/cards/Categories';

const Settings: NextPageWithLayout = () => {
  const { t } = useTranslation(`settings`);

  return (
    <>
      <NextSeo title={t`common:appName`} noindex nofollow />
      <VStack>
        <Categories />
        <Card h="400" title="Test" />
      </VStack>
      <VStack>
        <Card h="300" title="Test" />
        <Card h="400" title="test" />
      </VStack>
    </>
  );
};

Settings.layout = page => <DashboardLayout>{page}</DashboardLayout>;

// getStaticProps is needed on pages with Layout because of this bug:
// https://github.com/vinissimus/next-translate/issues/486
export const getStaticProps: GetStaticProps = async () => ({
  props: {},
});

export default Settings;
