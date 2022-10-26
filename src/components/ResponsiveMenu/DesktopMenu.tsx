import { Img, Grid, GridItem, Link } from '@chakra-ui/react';
import '@fontsource/fredoka-one';
import { Link as ReactRouterLink } from 'react-router-dom';
import IconMenu from './IconMenu';

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
        <GridItem w="100%" display="flex">
          <IconMenu name="Sobre o Urla" link="/sobre-urla" />
        </GridItem>

        <GridItem w="100%" display="flex">
          <IconMenu name="Produtos" link="/produtos" />
        </GridItem>

        <GridItem w="100%" display="flex">
          <IconMenu name="Lojas" link="/lojas" />
        </GridItem>

        <GridItem w="100%" h="16" justifyContent="center" display="flex">
          <Link as={ReactRouterLink} to="/">
            <Img src={require('../../assets/urla.png')} maxH="16"></Img>
          </Link>
        </GridItem>

        <GridItem w="100%" display="flex">
          <IconMenu name="Fale Conosco" link="/fale-conosco" />
        </GridItem>

        <GridItem w="100%" display="flex">
          <IconMenu name="Trabalhe Conosco" link="/trabalhe-conosco" />
        </GridItem>

        <GridItem w="100%" display="flex">
          <IconMenu name="Duvidas" link="/duvidas" />
        </GridItem>
      </Grid>

      {children}
    </div>
  );
}
