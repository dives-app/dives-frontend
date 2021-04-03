import React from 'react';
import { Button } from '@chakra-ui/react';
import Modal from './base/Modal';
import { useCategoriesQuery, useCreateTransactionMutation } from '../../generated/graphql';
import Select from '../Select';
import { Icon } from '../../utils/icons';

interface TransactionModalProps {
  closeModal(): void;
}

const TransactionModal = ({ closeModal }: TransactionModalProps) => {
  const { data } = useCategoriesQuery();
  const [createTransaction] = useCreateTransactionMutation();
  return (
    <Modal closeModal={closeModal}>
      <Button
        variant="primary"
        onClick={() => {
          createTransaction({
            variables: {
              options: {
                name: '',
                time: '',
                amount: 20,
                accountId: '',
                categoryId: '',
                description: '',
              },
            },
          });
        }}
      >
        First add component to show list of categories and add a new category
      </Button>
      {data === undefined ? (
        'Loading categories'
      ) : (
        <Select
          options={data?.user.categories.map(({ name, color, icon }) => ({
            name,
            color,
            icon: icon as Icon,
          }))}
          onSelect={() => {}}
        />
      )}
    </Modal>
  );
};

export default TransactionModal;
