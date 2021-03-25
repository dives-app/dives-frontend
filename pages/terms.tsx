import React from 'react';
import { NextPage } from 'next';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import TermsLayout from '../src/layouts/TermsLayout';
import LoremIpsum from '../src/components/LoremIpsum';

const defaultNs = 'terms';

const Terms: NextPage = () => {
  const { t } = useTranslation(defaultNs);

  return (
    <TermsLayout defaultNs={defaultNs}>
      <NextSeo title={`${t`title`} - ${t`common:appName`}`} noindex />
      <LoremIpsum />
    </TermsLayout>
  );
};

export default Terms;
