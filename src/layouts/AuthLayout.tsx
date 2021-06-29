import React from 'react';
import Image from 'next/image';
import { Grid, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import random from 'lodash/random';
import { LanguageSwitcher } from '../components/LanguageSwitcher';

const images = [
  { src: '/auth/calc-and-calendar.svg', alt: 'Calculator and calendar' },
  { src: '/auth/wallet-and-people.svg', alt: 'Wallet and people' },
  { src: '/auth/stonks.svg', alt: 'Man pointing at chart' },
];

export const DivesHomeButtonLogo = () => (
  <Link href="/" passHref>
    <Flex justifyContent={{ base: 'center', sm: 'left' }} mb="8">
      <Image
        width="169"
        height="77"
        src="/logo-horizontal.svg"
        alt="Dives Logo"
        draggable={false}
      />
    </Flex>
  </Link>
);

export const QuestionBottom = ({ children }: React.PropsWithChildren<{}>) => (
  <Text align="center" my="3" fontSize="sm">
    {children}
  </Text>
);

export const AuthLayout = ({ children }: React.PropsWithChildren<{}>) => {
  const randomImage = images[random(images.length - 1)];

  return (
    <Grid
      templateColumns={{
        base: 'auto',
        md: 'minmax(500px, min-content) auto',
      }}
      width="100vw"
      height="100vh"
      boxSizing="border-box"
    >
      <Flex
        as="main"
        direction="column"
        boxSizing="border-box"
        overflow="auto"
        p={['40px 35px', '55px 70px']}
        boxShadow="messengerLighter"
        position="relative" // without it boxShadow doesn't show up
      >
        <DivesHomeButtonLogo />
        {children}
        <LanguageSwitcher />
      </Flex>
      <Flex
        justifyContent="center"
        alignContent="center"
        overflow="hidden"
        bg="linear-gradient(90deg, #93d9b6 0%, #70cc9e 100%), #ffffff"
        display={{ base: 'none', md: 'flex' }}
        p={4}
      >
        <Image
          src={randomImage.src}
          alt={randomImage.alt}
          width="500"
          height="500"
          draggable={false}
        />
      </Flex>
    </Grid>
  );
};
