import React, { PropsWithChildren } from 'react';
import Head from 'next/head';
import { CloseButton, Container, Flex, Heading, Spacer, VStack, Text, Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const TermsLayout = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter();
  const { t } = useTranslation(router.pathname.substring(1));

  return (
    <Container maxW="container.md" py={4}>
      <Head>
        <title>
          {t`title`} - {t`common:appName`}
        </title>
      </Head>
      <Flex as="header" alignItems="center" mb={3}>
        <VStack alignItems="left" spacing={0}>
          <Heading as="h3" size="sm" color="dives.green">
            {t`common:appName`}
          </Heading>
          <Heading as="h1">{t`title`}</Heading>
        </VStack>
        <Spacer />
        <CloseButton size="lg" onClick={() => window.close()} />
      </Flex>
      {children}
      <Box as="footer" py={4} textAlign="center">
        <Text color="dives.darkerGray">&copy; Dives {new Date().getFullYear()}</Text>
      </Box>
    </Container>
  );
};

export default TermsLayout;
