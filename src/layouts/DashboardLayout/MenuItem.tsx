import React from 'react';
import { Link, Text } from '@chakra-ui/react';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation';
import { ActiveLink } from '../../components/ActiveLink';

interface MenuItemProps {
  i18nKey: string;
  url: string;
  icon: string;
}

export const MenuItem = ({ url, icon, i18nKey }: MenuItemProps) => {
  const { t } = useTranslation('app');
  return (
    <ActiveLink
      href={url}
      passHref
      activeStyle={{
        bg: 'dives.lightGreen',
      }}
    >
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <Link
        color="white"
        w="16"
        h="16"
        mt="1"
        borderRadius="2xl"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        _hover={{
          bg: 'dives.lightGreen',
        }}
      >
        <Image width="22" height="22" src={icon} alt="" />
        <Text lineHeight="none" fontSize="sm" mt="1" textTransform="capitalize">
          {t(i18nKey)}
        </Text>
      </Link>
    </ActiveLink>
  );
};
