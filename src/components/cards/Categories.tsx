import React, { useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Card from './base/Card';
import CardList from './base/CardList';
import { useCategoriesQuery } from '../../generated/graphql';
import { Icon } from '../../utils/icons';
import CategoryModal from '../modals/CategoryModal';

const Categories = () => {
  const { t } = useTranslation('settings');
  const { data } = useCategoriesQuery();
  const [openModal, setOpenModal] = useState(false);

  const categories = data?.user.categories.map(({ id, name, icon, color }) => ({
    id,
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
        {categories ? <CardList items={categories} /> : null}
      </Card>
      {openModal ? <CategoryModal closeModal={() => setOpenModal(false)} /> : null}
    </>
  );
};

export default Categories;
