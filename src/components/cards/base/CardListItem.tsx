import { Flex, ListItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { getIconUrl, Icon } from '../../../utils/icons';

export interface CardListItemProps {
  icon: Icon;
  iconColor: string;
  title: string;
  date?: string;
}

const CardListItem = ({
  icon,
  iconColor,
  title,
  date,
  children,
}: React.PropsWithChildren<CardListItemProps>) => (
  <ListItem display="flex" alignItems="center" justifyContent="space-between">
    <Flex alignItems="center">
      <Flex
        borderRadius="xl"
        alignItems="center"
        justifyContent="center"
        bg={iconColor}
        w="8"
        h="8"
      >
        <Image src={getIconUrl(icon)} width={20} height={20} />
      </Flex>
      <Text ml="3" color="dives.brightBlack">
        {title}
      </Text>
      <Text ml="2" color="dives.darkGray">
        {date}
      </Text>
    </Flex>
    <div>{children}</div>
  </ListItem>
);

export default CardListItem;
