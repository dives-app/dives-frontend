import React from 'react';
import Image from 'next/image';
import { Center } from '@chakra-ui/react';
import { getIconUrl, Icon } from '../utils/icons';

interface ItemIconProps {
  icon: Icon;
  color: string;
}

const ItemIcon = ({ icon, color }: ItemIconProps) => (
  <Center width={9} height={9} bgColor={color} borderRadius="xl">
    <Image width={20} height={20} src={getIconUrl(icon)} />
  </Center>
);

export default ItemIcon;
