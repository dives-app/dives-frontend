import React from 'react';
import { Heading, List, Text } from '@chakra-ui/react';
import { CardListItem, CardListItemProps } from './CardListItem';

interface CardListProps {
  title?: string;
  items: Array<CardListItemProps & { id: string; currency?: string; amount?: number }>;
}

export const CardList = ({ title, items }: CardListProps) => (
  <div>
    {title !== undefined ? (
      <Heading as="h3" fontSize="md" fontWeight="normal" mb={3}>
        {title}
      </Heading>
    ) : null}
    <List spacing={3} listStyleType="none">
      {items.map(({ id, icon, iconColor, title: listItemTitle, date, currency, amount }) => (
        <CardListItem key={id} icon={icon} iconColor={iconColor} title={listItemTitle} date={date}>
          {amount && currency ? (
            <Text color="dives.red">
              {amount} {currency}
            </Text>
          ) : null}
        </CardListItem>
      ))}
    </List>
  </div>
);
