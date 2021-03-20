import Head from 'next/head';
import { Flex, Button, VStack, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const ns = ['index', 'common'];

export default function Home() {
  const { t } = useTranslation(ns);

  return (
    <>
      <Head>
        <title>🚧 Dives</title>
      </Head>
      <Flex
        backgroundColor="dives.green"
        direction="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <VStack>
          <Image src="/logo.svg" draggable={false} alt="Dives Logo" width={100} height={128} />
          <Text fontSize="lg" color="white">
            {t`wip`}
          </Text>
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
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ns)),
  },
});
