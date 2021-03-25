import React from 'react';
import { NextPage } from 'next';
import TermsLayout from '../src/layouts/TermsLayout';
import LoremIpsum from '../src/components/LoremIpsum';

const Privacy: NextPage = () => (
  <TermsLayout>
    <LoremIpsum />
  </TermsLayout>
);

export default Privacy;
