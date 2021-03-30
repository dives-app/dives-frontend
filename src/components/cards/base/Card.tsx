import React, { PropsWithChildren } from 'react';
import { Box, chakra, Heading, Button, Flex } from '@chakra-ui/react';

interface Action {
  name: string;
  handler: React.MouseEventHandler<HTMLButtonElement>;
}

interface CardProps {
  title: string;
  action?: Action;
}

const Card = ({ children, title, action, ...rest }: PropsWithChildren<CardProps>) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Box bg="white" borderRadius="12px" w="100%" px={6} py={4} {...rest}>
    <Flex
      borderBottom="1px"
      borderColor="dives.gray"
      mb={4}
      pb={3}
      justify="space-between"
      align="center"
    >
      <Heading fontSize="lg" fontWeight="semibold">
        {title}
      </Heading>
      {action ? (
        <Button
          backgroundColor="dives.green"
          color="white"
          _hover={{
            bg: 'dives.lightGreen',
          }}
          onClick={action.handler}
        >
          {action.name}
        </Button>
      ) : null}
    </Flex>
    {children}
  </Box>
);

export default chakra(Card);
