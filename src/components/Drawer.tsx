import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  useDisclosure,
  Button,
  DrawerCloseButton,
  Link,
  Flex,
  Img,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

import React, { LegacyRef } from 'react';
import { HamburgerIcon } from '@chakra-ui/icons';

export default function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef() as LegacyRef<HTMLButtonElement>;

  return (
    <>
      <Button
        w={12}
        h={12}
        m={2}
        ref={btnRef}
        colorScheme="telegram"
        onClick={onOpen}
      >
        <HamburgerIcon w={8} h={8} />
      </Button>
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="blue.300">
          <DrawerCloseButton />
          <DrawerHeader>
            <Link as={ReactRouterLink} to="/">
              <Img src={require('../assets/urla.png')} maxH="12"></Img>
            </Link>
          </DrawerHeader>

          <DrawerBody>
            <Flex direction="column">
              <Link
                as={ReactRouterLink}
                to="/lojas"
                fontSize="xl"
                color="white"
                p="2"
              >
                Lojas
              </Link>
              <Link
                as={ReactRouterLink}
                to="/produtos"
                fontSize="xl"
                color="white"
                p="2"
              >
                Produtos
              </Link>
              <Link
                as={ReactRouterLink}
                to="/fale-conosco"
                fontSize="xl"
                color="white"
                p="2"
              >
                Fale Conosco
              </Link>
              <Link
                as={ReactRouterLink}
                to="/trabalhe-conosco"
                fontSize="xl"
                color="white"
                p="2"
              >
                Trabalhe Conosco
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
