import { Box, Portal } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

interface ModalProps {
  closeModal(): void;
}

const Modal = ({ children, closeModal }: PropsWithChildren<ModalProps>) => (
  <Portal>
    <Box
      onClick={closeModal}
      position="fixed"
      inset="0"
      backgroundColor="dives.brightBlack"
      opacity="0.1"
    />
    <Box
      bg="white"
      p={8}
      position="fixed"
      top={0}
      right={0}
      bottom={0}
      borderTopLeftRadius="2xl"
      borderBottomLeftRadius="2xl"
      shadow="2xl"
      width="lg"
    >
      {children}
    </Box>
  </Portal>
);

export default Modal;
