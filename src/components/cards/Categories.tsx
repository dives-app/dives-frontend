import React, { useState } from 'react';
import { Stack } from '@chakra-ui/react';
import useTranslation from 'next-translate/useTranslation';
import { Card } from './base/Card';
import { CardList } from './base/CardList';
import { useCategoriesQuery } from '../../generated/graphql';
import { Icon } from '../../utils/icons';
import { CategoryModal } from '../modals/CategoryModal';

export const Categories = () => {
  const { t } = useTranslation('settings');
  const { data } = useCategoriesQuery();
  const [openModal, setOpenModal] = useState(false);

  const categories = data?.user.categories.map(({ id, name, icon, color, type }) => ({
    id,
    type,
    icon: icon as Icon,
    iconColor: color,
    title: name,
  }));

  return (
    <>
      <Card
        title={t`manageCategories`}
        action={{
          name: t`addNew`,
          handler: () => {
            setOpenModal(true);
          },
        }}
      >
        {categories ? (
          <Stack spacing={4}>
            <CardList title="Expense categories" items={categories.filter(cat => cat.type === 1)} />
            <CardList title="Income categories" items={categories.filter(cat => cat.type === 2)} />
          </Stack>
        ) : null}
      </Card>
      {openModal ? <CategoryModal closeModal={() => setOpenModal(false)} /> : null}
    </>
  );
};
