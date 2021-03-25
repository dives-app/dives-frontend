import React, { PropsWithChildren } from 'react';
import { CloseButton, Container, Flex, Heading, Spacer, VStack, Text, Box } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';

interface Props {
  defaultNs: string;
}

const TermsLayout = ({ children, defaultNs }: PropsWithChildren<Props>) => {
  const { t } = useTranslation(defaultNs);

  return (
    <Container maxW="container.md" py={4}>
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
