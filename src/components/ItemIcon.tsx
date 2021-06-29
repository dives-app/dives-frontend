import React from 'react';
import Image from 'next/image';
import { Center } from '@chakra-ui/react';
import { getIconUrl, Icon } from '../utils/icons';

interface ItemIconProps {
  icon: Icon;
  color: string;
}

export const ItemIcon = ({ icon, color }: ItemIconProps) => (
  <Center width={9} height={9} bgColor={color} borderRadius="xl" flexShrink={0}>
    <Image width={20} height={20} src={getIconUrl(icon)} />
  </Center>
);
