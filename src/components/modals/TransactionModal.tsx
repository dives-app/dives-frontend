import React from 'react';
import { Button } from '@chakra-ui/react';
import Modal from './base/Modal';
import { useCreateTransactionMutation } from '../../generated/graphql';
import Select from '../Select';
import { Icon } from '../../utils/icons';

interface TransactionModalProps {
  closeModal(): void;
}

const TransactionModal = ({ closeModal }: TransactionModalProps) => {
  const [createTransaction] = useCreateTransactionMutation();
  const options = [
    { name: 'Name', icon: 'food' },
    { name: 'Name2', icon: 'food' },
  ] as Array<{ name: string; icon: Icon }>;
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
      <Select options={options} onSelect={() => {}} />
    </Modal>
  );
};

export default TransactionModal;
