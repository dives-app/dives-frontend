import { Box, Button, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useLogoutLazyQuery, useUserQuery } from '../src/generated/graphql';
import DashboardLayout from '../src/layouts/DashboardLayout';

export default function Dashboard() {
  const { data, error } = useUserQuery();
  const [logout, { data: logoutData }] = useLogoutLazyQuery();
  const router = useRouter();

  React.useEffect(() => {
    if (logoutData?.logout) {
      router.push('/');
    }
  }, [logoutData]);

  React.useEffect(() => {
    if (error) {
      router.push('/login');
    }
  }, [error]);

  const handleLogout = async () => {
    logout();
  };

  return (
    <>
      {data && (
        <DashboardLayout
          head={
            <Text>
              Jesteś zalogowany jako {data?.user.name} ({data?.user.email})
              <Button onClick={handleLogout}>Wyloguj</Button>
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
      )}
    </>
  );
}
