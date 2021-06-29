import { UseToastOptions } from '@chakra-ui/react';

export const connectionErrorToast: UseToastOptions = {
  title: 'Błąd połączenia z serwerem.',
  description: 'Spróbuj ponownie za chwilę.',
  status: 'error',
  position: 'top',
  duration: 6000,
};
