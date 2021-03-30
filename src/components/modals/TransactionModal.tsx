import React from 'react';
import { Button } from '@chakra-ui/react';
import Modal from './base/Modal';
import { useCreateTransactionMutation } from '../../generated/graphql';

interface TransactionModalProps {
  closeModal(): void;
}

const TransactionModal = ({ closeModal }: TransactionModalProps) => {
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
    </Modal>
  );
};

export default TransactionModal;
