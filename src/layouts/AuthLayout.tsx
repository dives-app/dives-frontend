import React from 'react';
import Image from 'next/image';
import { Grid, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import LanguageSwitcher from '../components/LanguageSwitcher';

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

export default function AuthLayout({ children }: React.PropsWithChildren<{}>) {
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
      >
        <Image
          src="/calc-and-calendar.svg"
          alt="Calc and calendar"
          width="500"
          height="500"
          draggable={false}
        />
      </Flex>
    </Grid>
  );
}
