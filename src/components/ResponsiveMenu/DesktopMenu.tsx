import { Box, Flex, Img, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

export default function DesktopMenu({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  return (
    <div style={{ height: '200vh' }}>
      <Flex
        position="sticky"
        top="0"
        justifyContent="space-around"
        px="10"
        py="5"
        bg="blue.300"
      >
        <Box display="flex" alignItems="center">
          <Link as={ReactRouterLink} to="/lojas" fontSize="xl">
            Lojas
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Link as={ReactRouterLink} to="/produtos" fontSize="xl">
            Produtos
          </Link>
        </Box>
        <Img src={require('../../assets/urla.png')} maxH="20"></Img>
        <Box display="flex" alignItems="center">
          <Link as={ReactRouterLink} to="/fale-conosco" fontSize="xl">
            Fale Conosco
          </Link>
        </Box>
        <Box display="flex" alignItems="center">
          <Link as={ReactRouterLink} to="/trabalhe-conosco" fontSize="xl">
            Trabalhe Conosco
          </Link>
        </Box>
      </Flex>

      {children}
    </div>
  );
}
