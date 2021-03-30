import React from 'react';
import { Button } from '@chakra-ui/react';
import Modal from './base/Modal';
import { useCreateCategoryMutation } from '../../generated/graphql';
import Select from '../Select';
import { Icon } from '../../utils/icons';

interface CategoryModalProps {
  closeModal(): void;
}

const CategoryModal = ({ closeModal }: CategoryModalProps) => {
  const [createCategory] = useCreateCategoryMutation();
  const options = [
    { name: 'Name', icon: 'food' },
    { name: 'Name2', icon: 'food' },
  ] as Array<{ name: string; icon: Icon }>;
  return (
    <Modal closeModal={closeModal}>
      <Button
        variant="primary"
        onClick={() => {
          createCategory({
            variables: {
              options: {
                name: 'categoryName',
                icon: 'food',
                color: '#00FFFF',
                type: 0,
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

export default CategoryModal;
