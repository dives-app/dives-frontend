import Head from "next/head";
import { Flex, Button, VStack, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_API_ENDPOINT);
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
          <Image
            src="/logo.svg"
            draggable="false"
            alt="Dives Logo"
            width={100}
            height={128}
          />
          <Text fontSize="lg" color="white">
            work in progress
          </Text>
          <Flex>
            <NextLink href="/login" passHref>
              <Button as="a" variant="primary" mr="1rem" color="white">
                Log in
              </Button>
            </NextLink>
            <NextLink href="/signup" passHref>
              <Button as="a" variant="primary" color="white">
                Sign up
              </Button>
            </NextLink>
          </Flex>
          <Text>🚧 🚧 🚧</Text>
        </VStack>
      </Flex>
    </>
  );
}
