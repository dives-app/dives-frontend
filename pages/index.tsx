import React from 'react';
import { NextPage } from 'next';
import NextLink from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { Flex, Button, VStack, Text } from '@chakra-ui/react';
import { LanguageSwitcher } from '../src/components/LanguageSwitcher';

const Home: NextPage = () => {
  const { t } = useTranslation('index');

  return (
    <>
      <NextSeo title={`🚧 ${t`common:appName`}`} />
      <Flex
        backgroundColor="dives.green"
        direction="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <VStack>
          <Image
            src="/logo.svg"
            draggable={false}
            alt={`${t('common:appName')} Logo`}
            width={100}
            height={128}
          />
          <Text fontSize="lg" color="white">
            {t`wip`}
          </Text>
          <LanguageSwitcher />
          <Flex>
            <NextLink href="/login" passHref>
              <Button as="a" variant="primary" mr="1rem" color="white">
                {t`common:login`}
              </Button>
            </NextLink>
            <NextLink href="/signup" passHref>
              <Button as="a" variant="primary" color="white">
                {t`common:signup`}
              </Button>
            </NextLink>
          </Flex>
          <Text>🚧 🚧 🚧</Text>
        </VStack>
      </Flex>
    </>
  );
};

export default Home;
