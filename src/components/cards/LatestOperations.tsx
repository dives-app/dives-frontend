import React from 'react';
import Card from './base/Card';
import CardList from './base/CardList';
import { useRecentTransactionsQuery } from '../../generated/graphql';
import { CardListItemProps } from './base/CardListItem';

const LatestOperations = () => {
  const { data } = useRecentTransactionsQuery();

  const transactions = new Map<string, Array<CardListItemProps & { id: string }>>();

  data?.user.transactions.forEach(({ id, name, time, category }) => {
    // TODO: Calculate relative time and use Intl to display it
    if (!transactions.has(time)) {
      transactions.set(time, [
        { id, title: name, date: time, icon: 'food', iconColor: category.color },
      ]);
    } else {
      transactions
        .get(time)!
        .push({ id, title: name, date: time, icon: 'food', iconColor: category.color });
    }
  });

  return (
    <Card title="Latest operations">
      {Array.from(transactions.entries()).map(([time, items]) => (
        <CardList key={time} title={time} items={items} />
      ))}
    </Card>
  );
};

export default LatestOperations;
