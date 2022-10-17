import { Box, Img, Link, Grid, GridItem } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';
import '@fontsource/fredoka-one';

export default function DesktopMenu({
  children,
}: {
  children: JSX.Element | Array<JSX.Element>;
}) {
  return (
    <div>
      <Grid
        templateColumns="1fr 1fr  1fr  200px 1fr 1fr 1fr "
        zIndex="modal"
        position="sticky"
        top="0"
        px="5"
        py="2"
        bg="blue.300"
        h="20"
        gap="10px"
      >
        <GridItem w="100%" justifyContent="center" display="flex">
          <Box display="flex" w="100%" h="100%">
            <Link
              as={ReactRouterLink}
              to="/sobre-o-urla"
              fontSize={{ md: 'sm', lg: 'xl' }}
              w="100%"
              h="100%"
              textAlign="center"
              p="16px 0"
              _hover={{
                background: 'blue.200',
                color: 'black',
                fontSize: '2xl',
                p: '10px',
                borderRadius: 'xl',
                h: '20',
              }}
            >
              Sobre o Urla
            </Link>
          </Box>
        </GridItem>

        <GridItem w="100%" justifyContent="center" display="flex">
          <Box display="flex" w="100%" h="100%">
            <Link
              as={ReactRouterLink}
              to="/lojas"
              fontSize={{ md: 'sm', lg: 'xl' }}
              w="100%"
              h="100%"
              textAlign="center"
              p="16px 0"
              _hover={{
                background: 'blue.200',
                color: 'black',
                fontSize: '2xl',
                p: '10px',
                borderRadius: 'xl',
                h: '20',
              }}
            >
              Lojas
            </Link>
          </Box>
        </GridItem>

        <GridItem w="100%" justifyContent="center" display="flex">
          <Box display="flex" w="100%" h="100%">
            <Link
              as={ReactRouterLink}
              to="/produtos"
              fontSize={{ md: 'sm', lg: 'xl' }}
              w="100%"
              h="100%"
              p="16px"
              textAlign="center"
              _hover={{
                background: 'blue.200',
                color: 'black',
                fontSize: '2xl',
                p: '10px',
                borderRadius: 'xl',
                h: '20',
              }}
            >
              Produtos
            </Link>
          </Box>
        </GridItem>
        <GridItem w="100%" h="16" justifyContent="center" display="flex">
          <Img src={require('../../assets/urla.png')} maxH="28"></Img>
        </GridItem>

        <GridItem w="100%" justifyContent="center" display="flex">
          <Box display="flex" w="100%" h="100%">
            <Link
              as={ReactRouterLink}
              to="/fale-conosco"
              fontSize={{ md: 'sm', lg: 'xl' }}
              w="100%"
              h="100%"
              p="16px"
              textAlign="center"
              _hover={{
                background: 'blue.200',
                color: 'black',
                fontSize: '2xl',
                p: '10px',
                borderRadius: 'xl',
                h: '20',
              }}
            >
              Fale Conosco
            </Link>
          </Box>
        </GridItem>

        <GridItem w="100%" justifyContent="center" display="flex">
          <Box display="flex" w="100%" h="100%">
            <Link
              as={ReactRouterLink}
              to="/trabalhe-conosco"
              fontSize={{ md: 'sm', lg: 'xl' }}
              w="100%"
              h="100%"
              p="16px"
              textAlign="center"
              _hover={{
                background: 'blue.200',
                color: 'black',
                fontSize: '2xl',
                p: '10px',
                borderRadius: 'xl',
                h: '20',
              }}
            >
              Trabalhe Conosco
            </Link>
          </Box>
        </GridItem>

        <GridItem w="100%" justifyContent="center" display="flex">
          <Box display="flex" w="100%" h="100%">
            <Link
              as={ReactRouterLink}
              to="/trabalhe-conosco"
              fontSize={{ md: 'sm', lg: 'xl' }}
              w="100%"
              h="100%"
              p="16px"
              textAlign="center"
              _hover={{
                background: 'blue.200',
                color: 'black',
                fontSize: '2xl',
                p: '10px',
                borderRadius: 'xl',
                h: '20',
              }}
            >
              Dúvidas?
            </Link>
          </Box>
        </GridItem>
      </Grid>

      {children}
    </div>
  );
}
