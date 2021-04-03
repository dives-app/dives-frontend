import React from 'react';
import { Flex, ListItem, Text } from '@chakra-ui/react';
import { Icon } from '../../../utils/icons';
import ItemIcon from '../../ItemIcon';

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
      <ItemIcon icon={icon} color={iconColor} />
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
