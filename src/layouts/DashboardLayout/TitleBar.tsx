import React from 'react';
import { useRouter } from 'next/router';
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next';
import { useLogoutLazyQuery, useUserQuery } from '../../generated/graphql';
import apolloClient from '../../apolloClient';

interface TitleBarProps {
  title: string;
}

const TitleBar = ({ title }: TitleBarProps) => {
  const router = useRouter();
  const { data } = useUserQuery();
  const [logout] = useLogoutLazyQuery({
    onCompleted: async () => {
      await apolloClient.clearStore();
      await router.push('/');
    },
  });
  const { t } = useTranslation('dashboard');

  return (
    <Flex px="8" alignItems="center">
      <Box>
        <Heading as="h1" fontFamily="comfortaa" size="lg">
          {title}
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />} variant="menu">
            <Flex alignItems="center">
              <Avatar name={data?.user.name} mr="2" borderRadius="21px" />
              {data?.user.name}
            </Flex>
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => logout()}>{t`logout`}</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};
export default TitleBar;
