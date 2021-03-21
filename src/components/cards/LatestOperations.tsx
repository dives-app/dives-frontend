import React from 'react';
import { useRouter } from 'next/router';
import Card from './base/Card';
import CardList from './base/CardList';
import { useRecentTransactionsQuery } from '../../generated/graphql';
import { CardListItemProps } from './base/CardListItem';

const LatestOperations = () => {
  const { data } = useRecentTransactionsQuery();
  const { locale } = useRouter();
  // TODO: Abstract relative time into own function
  const relativeTimeFormatter = new Intl.RelativeTimeFormat(locale, { numeric: 'auto' });
  const dateFormatter = new Intl.DateTimeFormat(locale);
  const dateTimeFormatter = new Intl.DateTimeFormat(locale, {
    dateStyle: 'short',
    timeStyle: 'short',
  });
  const transactions = new Map<string, Array<CardListItemProps & { id: string }>>();

  data?.user.transactions.forEach(({ id, name, time, category }) => {
    const date =
      Number(new Date(new Date(Date.now()).toDateString())) -
      Number(new Date(new Date(Number(time)).toDateString()));
    const MS_IN_A_DAY = 86_400_000;
    let displayDate = '';
    if (date < 3 * MS_IN_A_DAY) {
      displayDate = relativeTimeFormatter.format(-date / MS_IN_A_DAY, 'day');
    } else {
      displayDate = dateFormatter.format(new Date(Number(time)));
    }
    if (!transactions.has(displayDate)) {
      transactions.set(displayDate, [
        {
          id,
          title: name,
          date: dateTimeFormatter.format(new Date(Number(time))),
          icon: 'food',
          iconColor: category.color,
        },
      ]);
    } else {
      transactions.get(displayDate)!.push({
        id,
        title: name,
        date: dateTimeFormatter.format(new Date(Number(time))),
        icon: 'food',
        iconColor: category.color,
      });
    }
  });

  return (
    <Card title="Latest operations">
      {Array.from(transactions.entries()).map(([relativeDate, items]) => (
        <CardList key={relativeDate} title={relativeDate} items={items} />
      ))}
    </Card>
  );
};

export default LatestOperations;
