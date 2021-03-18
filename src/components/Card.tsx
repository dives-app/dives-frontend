import React, { PropsWithChildren } from 'react';
import { Box, chakra } from '@chakra-ui/react';

interface Props {}

const Card = ({ children, ...rest }: PropsWithChildren<Props>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Box bg="white" borderRadius="12px" w="100%" {...rest}>
    {children}
  </Box>
);

export default chakra(Card);
