import React, { PropsWithChildren, useState } from 'react';
import { Flex, Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { Icon } from '../utils/icons';
import ItemIcon from './ItemIcon';

interface Option {
  icon?: Icon;
  color?: string;
  name: string;
  value?: any;
}

interface SelectItemProps {
  onClick?: () => void;
  item: Option;
}

function SelectItem({ item, onClick, children }: PropsWithChildren<SelectItemProps>) {
  return (
    <Flex
      as="button"
      onClick={onClick}
      justify="space-between"
      align="center"
      w="100%"
      px={3}
      py={2}
      _hover={{
        bg: 'dives.gray',
      }}
    >
      <Flex align="center">
        {item?.icon !== undefined && item?.color !== undefined ? (
          <ItemIcon icon={item.icon} color={item.color} />
        ) : null}
        <Text paddingLeft={2}>{item.name}</Text>
      </Flex>
      {children}
    </Flex>
  );
}

interface SelectProps {
  options: Array<Option>;
  defaultOption?: Option;

  onSelect?(selected: Option): void;
}

const Select = ({ options, onSelect, defaultOption }: SelectProps) => {
  const [activeOption, setActiveOption] = useState(defaultOption);
  const [selecting, setSelecting] = useState(false);
  return (
    <Box w="2xs" position="relative" zIndex={2}>
      <Box
        borderTopRadius="lg"
        borderBottomRadius={selecting ? undefined : 'lg'}
        bg="dives.lightGray"
        overflow="hidden"
      >
        <SelectItem
          onClick={() => setSelecting(prevState => !prevState)}
          item={activeOption ?? { name: 'None' }}
        >
          <Image src="/chevron.svg" width={20} height={10} />
        </SelectItem>
      </Box>
      {selecting ? (
        <Box
          borderBottomLeftRadius="lg"
          borderBottomRightRadius="lg"
          position="absolute"
          bg="dives.lightGray"
          width="100%"
          overflow="hidden"
        >
          {options.map(option => {
            const handler = () => {
              setActiveOption(option);
              setSelecting(false);
              if (onSelect) {
                onSelect(option);
              }
            };
            return <SelectItem onClick={handler} item={option} />;
          })}
        </Box>
      ) : null}
    </Box>
  );
};

export default Select;
