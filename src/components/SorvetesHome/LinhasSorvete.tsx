import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import CardSorvete from './CardSorvete';

import Img1 from '../../assets/linha-especial2.png';

export default function LinhasSorvete() {
  return (
    <Box py="100px">
      <Center
        h="100px"
        color="black"
        fontSize={{ xsm: 'xl', sm: '2xl', md: '3xl', lg: '5xl' }}
        display="flex"
        textAlign="center"
      >
        Conheça nossas linhas ESPECIAIS
      </Center>

      <Grid
        templateColumns={{ md: '1fr', lg: 'repeat(4, 1fr)' }}
        templateRows={{ md: '1fr', lg: '1fr' }}
        mt="50px"
        gap={4}
        mx="50px"
      >
        <GridItem
          bg="cyan.100"
          w="100%"
          h={{ sm: '350px', md: '350px', lg: '350px', '2xl': '400px' }}
          borderRadius="3xl"
        >
          <CardSorvete name="Açai" img={Img1} />
        </GridItem>

        <GridItem
          bg="yellow.100"
          w="100%"
          h={{ sm: '350px', md: '350px', lg: '350px', '2xl': '400px' }}
          borderRadius="3xl"
        >
          <CardSorvete name="Linha Gourmet" img={Img1} />
        </GridItem>

        <GridItem
          bg="purple.100"
          w="100%"
          h={{ sm: '350px', md: '350px', lg: '350px', '2xl': '400px' }}
          borderRadius="3xl"
        >
          <CardSorvete name="Linha Zero" img={Img1} />
        </GridItem>

        <GridItem
          bg="green.100"
          w="100%"
          h={{ sm: '350px', md: '350px', lg: '350px', '2xl': '400px' }}
          borderRadius="3xl"
        >
          <CardSorvete name="Picoles Premium" img={Img1} />
        </GridItem>
      </Grid>
    </Box>
  );
}
