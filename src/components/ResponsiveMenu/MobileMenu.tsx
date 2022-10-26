import { Flex, Img } from '@chakra-ui/react';
import PlacementExample from './Drawer';

export default function MobileMenu({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  return (
    <div>
      <Flex
        zIndex="modal"
        position="sticky"
        top="0"
        justifyContent="space-between"
        px="10"
        py="5"
        alignItems="center"
        bg="blue.300"
      >
        <Img src={require('../../assets/urla.png')} maxH="12"></Img>
        <PlacementExample />
      </Flex>
      {children}
    </div>
  );
}
