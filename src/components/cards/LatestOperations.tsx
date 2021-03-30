import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Card from './base/Card';
import CardList from './base/CardList';
import { useRecentTransactionsQuery } from '../../generated/graphql';
import { CardListItemProps } from './base/CardListItem';
import Modal from '../modals/base/Modal';
import { useDateTimeFormatter, useRecentRelativeDateFormatter } from '../../utils/time';
import { Icon } from '../../utils/icons';

const LatestOperations = () => {
  const { t } = useTranslation('dashboard');
  const { data } = useRecentTransactionsQuery();
  const recentRelativeDateFormatter = useRecentRelativeDateFormatter();
  const dateTimeFormatter = useDateTimeFormatter();
  const [openModal, setOpenModal] = useState(false);

  const transactions = new Map<string, Array<CardListItemProps & { id: string }>>();

  data?.user.transactions.forEach(({ id, name, time, category }) => {
    const displayDate = recentRelativeDateFormatter.format(Number(time));
    const transaction = {
      id,
      title: name,
      date: dateTimeFormatter.format(Number(time)),
      icon: 'food' as Icon,
      iconColor: category.color,
    };
    if (transactions.has(displayDate)) {
      transactions.get(displayDate)!.push(transaction);
    } else {
      transactions.set(displayDate, [transaction]);
    }
  });

  return (
    <>
      <Card
        title={t`latestOperations`}
        action={{
          name: t`addNew`,
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
