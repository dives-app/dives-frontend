import React, { useEffect } from 'react';
import { Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import useTranslation from 'next-translate/useTranslation';
import Modal from './base/Modal';
import { useCreateCategoryMutation } from '../../generated/graphql';
import Select from '../Select';
import { Icon } from '../../utils/icons';

interface CategoryModalProps {
  closeModal(): void;
}

interface CategoryFields {
  name: string;
  icon: Icon;
  color: string;
  type: 0 | 1;
}

const CategoryModal = ({ closeModal }: CategoryModalProps) => {
  const [createCategory] = useCreateCategoryMutation();
  const { t } = useTranslation();
  const schema = yup.object().shape({
    name: yup.string().required(t`app:nameRequired`),
    color: yup
      .string()
      .default('#13dd6f')
      .required(t`app:colorRequired`),
    type: yup.number().required(t`app:typeRequired`),
    icon: yup.string().required(t`app:iconRequired`),
  });
  const { register, handleSubmit, errors, setValue } = useForm<CategoryFields>({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    register('type');
    register('icon');
  }, [register]);
  const options = [{ name: 'food', icon: 'food' }] as Array<{ name: string; icon: Icon }>;

  const onSubmit: SubmitHandler<CategoryFields> = ({ name, color, type, icon }) => {
    createCategory({
      variables: {
        options: {
          name,
          icon,
          color,
          type,
        },
      },
    });
  };

  return (
    <Modal closeModal={closeModal}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Select
          options={options}
          onSelect={option => {
            setValue('icon', Number(option.name));
          }}
        />
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input name="name" ref={register} />
        </FormControl>
        <FormControl isInvalid={!!errors.color}>
          <FormLabel>Color</FormLabel>
          <Input name="color" type="color" ref={register} />
        </FormControl>
        <Select
          options={[
            { name: '1', icon: 'food' },
            { name: '2', icon: 'food' },
          ]}
          onSelect={option => {
            setValue('type', Number(option.name));
          }}
        />
        <Button variant="primary" type="submit">
          submit
        </Button>
      </form>
    </Modal>
  );
};

export default CategoryModal;
