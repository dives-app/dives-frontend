import React, { useState } from 'react';
import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import Card from './base/Card';
import CardList from './base/CardList';
import { useRecentTransactionsQuery } from '../../generated/graphql';
import { CardListItemProps } from './base/CardListItem';
import Modal from '../modals/base/Modal';

const LatestOperations = () => {
  const { t } = useTranslation('dashboard');
  const { data } = useRecentTransactionsQuery();
  const { locale } = useRouter();
  const [openModal, setOpenModal] = useState(false);

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
    <>
      <Card
        title={t`latestOperations`}
        action={{
          name: 'Add new',
          handler: () => {
            setOpenModal(true);
          },
        }}
      >
        {Array.from(transactions.entries()).map(([relativeDate, items]) => (
          <CardList key={relativeDate} title={relativeDate} items={items} />
        ))}
      </Card>
      {openModal ? <Modal closeModal={() => setOpenModal(false)}>Test modal</Modal> : null}
    </>
  );
};
export default LatestOperations;
