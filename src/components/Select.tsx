import { Flex, Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import Image from 'next/image';
import { Icon } from '../utils/icons';

interface Option {
  icon: Icon;
  name: string;
  value?: any;
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
    <Box borderRadius="lg" bg="dives.lightGray" w="2xs">
      <Flex
        onClick={() => setSelecting(prevState => !prevState)}
        justify="space-between"
        align="center"
        w="100%"
        px={3}
        py={2}
      >
        {activeOption ? activeOption.name : 'None'}
        <Image src="/chevron.svg" width={20} height={10} />
      </Flex>
      {selecting
        ? options.map(option => {
            const handler = () => {
              setActiveOption(option);
              setSelecting(false);
              if (onSelect) {
                onSelect(option);
              }
            };
            return (
              <Box
                as="button"
                display="block"
                px={4}
                py={2}
                w="100%"
                textAlign="start"
                onClick={handler}
                _hover={{
                  bg: 'dives.gray',
                }}
              >
                {option.name}
              </Box>
            );
          })
        : null}
    </Box>
  );
};

export default Select;
