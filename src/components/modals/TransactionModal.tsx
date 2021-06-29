import React from 'react';
import { Button, Input, FormControl, FormLabel, HStack } from '@chakra-ui/react';
import { Modal } from './base/Modal';
import { useTransactionOptionsQuery, useCreateTransactionMutation } from '../../generated/graphql';
import { Select } from '../Select';
import { Icon } from '../../utils/icons';
import { ItemIcon } from '../ItemIcon';

interface TransactionModalProps {
  closeModal(): void;
}

export const TransactionModal = ({ closeModal }: TransactionModalProps) => {
  const { data } = useTransactionOptionsQuery();
  const [createTransaction] = useCreateTransactionMutation();
  return (
    <Modal closeModal={closeModal}>
      <HStack spacing={4} mb={8}>
        <ItemIcon color="#aaa" icon="food" />
        <Input variant="flushed" />
      </HStack>
      <FormControl mb={4}>
        <FormLabel>Price</FormLabel>
        <Input variant="flushed" />
      </FormControl>
      <FormControl mb={4}>
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
      <FormControl mb={4}>
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
      <FormControl mb={4}>
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
      <FormControl mb={4}>
        <FormLabel>Date</FormLabel>
        <Input variant="flushed" />
      </FormControl>
      <FormControl mb={4}>
        <FormLabel>Description</FormLabel>
        <Input variant="flushed" />
      </FormControl>
      <FormControl mb={8}>
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
