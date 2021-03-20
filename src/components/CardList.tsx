import { Heading, List, Text } from '@chakra-ui/react';
import React from 'react';
import CardListItem, { CardListItemProps } from './CardListItem';

type CardListProps = {
  title?: string;
  items: Array<CardListItemProps>;
};

const CardList = ({ title, items }: CardListProps) => (
  <div>
    {title !== undefined ? (
      <Heading as="h3" fontSize="md" fontWeight="normal" mb={3}>
        {title}
      </Heading>
    ) : null}
    <List spacing={3} listStyleType="none">
      {items.map(({ icon, iconColor, title: listItemTitle, date }) => (
        <CardListItem icon={icon} iconColor={iconColor} title={listItemTitle} date={date}>
          <Text color="dives.red">- 20,00 zł</Text>
        </CardListItem>
      ))}
    </List>
  </div>
);

export default CardList;
