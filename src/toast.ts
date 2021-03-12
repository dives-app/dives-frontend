import { UseToastOptions } from '@chakra-ui/toast';

const connectionErrorToast: UseToastOptions = {
  title: 'Błąd połączenia z serwerem.',
  description: 'Spróbuj ponownie za chwilę.',
  status: 'error',
  position: 'top',
  duration: 6000,
};

export default connectionErrorToast;
