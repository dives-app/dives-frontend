import { Heading, List, Text } from '@chakra-ui/react';
import React from 'react';
import CardListItem, { CardListItemProps } from './CardListItem';

interface CardListProps {
  title?: string;
  items: Array<CardListItemProps & { id: string }>;
}

const CardList = ({ title, items }: CardListProps) => (
  <div>
    {title !== undefined ? (
      <Heading as="h3" fontSize="md" fontWeight="normal" mb={3}>
        {title}
      </Heading>
    ) : null}
    <List spacing={3} listStyleType="none">
      {items.map(({ id, icon, iconColor, title: listItemTitle, date }) => (
        <CardListItem key={id} icon={icon} iconColor={iconColor} title={listItemTitle} date={date}>
          <Text color="dives.red">- 20,00 zł</Text>
        </CardListItem>
      ))}
    </List>
  </div>
);

export default CardList;
