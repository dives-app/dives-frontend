import React, { useEffect } from 'react';
import { Button, FormControl, FormErrorMessage, FormLabel, Input } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import useTranslation from 'next-translate/useTranslation';
import { Modal } from './base/Modal';
import { useCreateCategoryMutation } from '../../generated/graphql';
import { Select } from '../Select';
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

export const CategoryModal = ({ closeModal }: CategoryModalProps) => {
  const [createCategory] = useCreateCategoryMutation();
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<CategoryFields>({
    defaultValues: {
      color: '#13dd6f',
    },
  });

  useEffect(() => {
    register('icon', { required: t`app:iconRequired` });
    register('type', { required: t`app:typeRequired` });
  }, [register]);

  const options = [{ name: 'food', icon: 'food' }] as Array<{ name: string; icon: Icon }>;

  const onSubmit: SubmitHandler<CategoryFields> = ({ name, color, type, icon }) => {
    console.log('Submitted!', { name, color, type, icon });
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
        <FormControl>
          <FormLabel>Icon</FormLabel>
          <Select
            options={options}
            onSelect={option => {
              // TODO remove this @ts-ignore
              // @ts-ignore
              setValue('icon', option.icon);
            }}
          />
          <FormErrorMessage>{errors.icon?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.name}>
          <FormLabel>Name</FormLabel>
          <Input variant="flushed" {...register('name', { required: t`app:nameRequired` })} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.color}>
          <FormLabel>Color</FormLabel>
          <Input
            type="color"
            {...register('color', {
              required: t`app:colorRequired`,
            })}
          />
          <FormErrorMessage>{errors.color?.message}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Category type</FormLabel>
          <Select
            options={[
              { name: '1', icon: 'food', value: 1 },
              { name: '2', icon: 'food', value: 2 },
            ]}
            onSelect={option => {
              // TODO remove this @ts-ignore
              // @ts-ignore
              setValue('type', option.value);
            }}
          />
          <FormErrorMessage>{errors.type?.message}</FormErrorMessage>
        </FormControl>
        <Button variant="primary" type="submit">
          submit
        </Button>
      </form>
    </Modal>
  );
};
