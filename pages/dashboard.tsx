import { Button, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React from 'react';
import { useLogoutMutation, useUserQuery } from '../src/generated/graphql';

export default function Dashboard() {
  const { data } = useUserQuery();
  const [logout] = useLogoutMutation();
  const router = useRouter();

  const handleLogout = async () => {
    const response = await logout();
    if (response.data?.revokeToken) {
      router.push('/');
    }
  };

  return (
    <>
      {data && (
        <Text>
          Jesteś zalogowany jako {data?.user.name} ({data?.user.email})
          <Button onClick={handleLogout}>Wyloguj</Button>
        </Text>
      )}
    </>
  );
}
