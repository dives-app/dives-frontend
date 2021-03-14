import React from 'react';
import Head from 'next/head';
import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useLogoutLazyQuery, useUserQuery } from '../src/generated/graphql';
import DashboardLayout from '../src/layouts/DashboardLayout';
import apolloClient from '../src/apolloClient';

export default function Dashboard() {
  const router = useRouter();
  const { data } = useUserQuery({
    onError: () => router.push('/login'),
  });
  const [logout] = useLogoutLazyQuery({
    onCompleted: async () => {
      await apolloClient.cache.reset();
      await router.push('/');
    },
  });

  return (
    <>
      <Head>
        <title>Dives</title>
      </Head>
      {data ? (
        <DashboardLayout
          head={
            <Text>
              Jesteś zalogowany jako {data.user.name} ({data.user.email})
              <Button onClick={() => logout()}>Wyloguj</Button>
            </Text>
          }
          leftColumn={
            <VStack>
              <Box w="100%" h="500" bg="lightGray" />
              <Box w="100%" h="400" bg="lightGray" />
            </VStack>
          }
          rightColumn={
            <VStack>
              <Box w="100%" h="300" bg="lightGray" />
              <Box w="100%" h="400" bg="lightGray" />
            </VStack>
          }
        />
      ) : (
        <Text>TODO: Loading skeleton here...</Text>
      )}
    </>
  );
}
