import React, { PropsWithChildren } from 'react';
import { Box, chakra, Heading } from '@chakra-ui/react';

interface CardProps {
  title: string;
}

const Card = ({ children, title, ...rest }: PropsWithChildren<CardProps>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Box bg="white" borderRadius="12px" w="100%" px={6} py={4} {...rest}>
    <Heading
      fontSize="lg"
      fontWeight="semibold"
      pb={3}
      mb={4}
      borderBottom="1px"
      borderColor="dives.gray"
    >
      {title}
    </Heading>
    {children}
  </Box>
);

export default chakra(Card);
