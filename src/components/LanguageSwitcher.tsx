import React, { ChangeEvent } from 'react';
import { chakra, Select } from '@chakra-ui/react';
import { useRouter } from 'next/router';

interface Props {
  className?: string;
}

export const LanguageSwitcher = chakra(({ className }: Props) => {
  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };

  return (
    <Select
      className={className}
      variant="filled"
      defaultValue={router.locale}
      size="sm"
      width="80px"
      onChange={handleChange}
    >
      <option value="en">EN</option>
      <option value="pl">PL</option>
    </Select>
  );
});
