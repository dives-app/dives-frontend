import React from 'react';
import { Button, Input, FormControl, FormLabel } from '@chakra-ui/react';
import Modal from './base/Modal';
import { useTransactionOptionsQuery, useCreateTransactionMutation } from '../../generated/graphql';
import Select from '../Select';
import { Icon } from '../../utils/icons';
import ItemIcon from '../ItemIcon';

interface TransactionModalProps {
  closeModal(): void;
}

const TransactionModal = ({ closeModal }: TransactionModalProps) => {
  const { data } = useTransactionOptionsQuery();
  const [createTransaction] = useCreateTransactionMutation();
  return (
    <Modal closeModal={closeModal}>
      <ItemIcon color="#aaa" icon="food" />
      <Input variant="flushed" />
      <FormControl>
        <FormLabel>Price</FormLabel>
        <Input variant="flushed" />
      </FormControl>
      <FormControl>
        <FormLabel>Category</FormLabel>
        {data === undefined ? (
          'Loading categories'
        ) : (
          <Select
            options={data?.user.categories.map(({ name, color, icon }) => ({
              name,
              color,
              icon: icon as Icon,
            }))}
          />
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Account</FormLabel>
        {data === undefined ? (
          'Loading accounts'
        ) : (
          <Select
            options={data?.user.accounts.map(({ name, color, icon }) => ({
              name,
              color,
              icon: icon as Icon,
            }))}
          />
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Budget</FormLabel>
        {data === undefined ? (
          'Loading budget'
        ) : (
          <Select
            options={data?.user.budgetMembership
              .map(({ budget }) => budget)
              .map(({ name }) => ({
                name,
              }))}
          />
        )}
      </FormControl>
      <FormControl>
        <FormLabel>Date</FormLabel>
        <Input variant="flushed" />
      </FormControl>
      <FormControl>
        <FormLabel>Description</FormLabel>
        <Input variant="flushed" />
      </FormControl>
      <FormControl>
        <FormLabel>Merchant</FormLabel>
        {data === undefined ? (
          'Loading merchant'
        ) : (
          <Select
            options={data?.user.merchants.map(({ name }) => ({
              name,
            }))}
          />
        )}
      </FormControl>
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
        Create
      </Button>
    </Modal>
  );
};

export default TransactionModal;
