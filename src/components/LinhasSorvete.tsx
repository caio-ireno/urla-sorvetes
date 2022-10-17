import { Box, Center, Grid, GridItem, Img, Link } from '@chakra-ui/react';

export default function LinhasSorvete() {
  return (
    <Box bg="teal.100" py="100px">
      <Center
        h="100px"
        color="black"
        fontSize="5xl"
        display="flex"
        textAlign="center"
      >
        Conheça nossas linhas especiais
      </Center>

      <Grid
        templateColumns={{ md: '1fr', lg: 'repeat(4, 1fr)' }}
        templateRows={{ md: '1fr', lg: '1fr' }}
        mt="50px"
        gap={4}
        mx="50px"
      >
        <GridItem bg="cyan.300" w="100%" h="400px" borderRadius="3xl">
          <Grid
            templateRows="1fr 1fr 1fr"
            h="100%"
            justifyItems="center"
            color="black"
          >
            <GridItem
              h="100%"
              fontSize="3xl"
              py="10px"
              display="flex"
              alignItems="center"
            >
              Linha Especial
            </GridItem>
            <GridItem h="100%">
              <Img
                src={require('../assets/linha-especial2.png')}
                maxH="300px"
              ></Img>
            </GridItem>
            <GridItem
              h="100%"
              fontSize="3xl"
              py="10px"
              display="flex"
              alignItems="end"
            >
              <Link bg="cyan.400" p="10px" borderRadius="3xl">
                Saiba mais
              </Link>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem bg="yellow.300" w="100%" h="400px" borderRadius="3xl">
          <Grid
            templateRows="1fr 1fr 1fr"
            h="100%"
            justifyItems="center"
            color="black"
          >
            <GridItem
              h="100%"
              fontSize="3xl"
              py="10px"
              display="flex"
              alignItems="center"
            >
              Linha Standard
            </GridItem>
            <GridItem h="100%">
              <Img
                src={require('../assets/linha-especial2.png')}
                maxH="300px"
              ></Img>
            </GridItem>
            <GridItem
              h="100%"
              fontSize="3xl"
              py="10px"
              display="flex"
              alignItems="end"
            >
              <Link bg="yellow.400" p="10px" borderRadius="3xl">
                Saiba mais
              </Link>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem bg="purple.300" w="100%" h="400px" borderRadius="3xl">
          <Grid
            templateRows="1fr 1fr 1fr"
            h="100%"
            justifyItems="center"
            color="black"
          >
            <GridItem
              h="100%"
              fontSize="3xl"
              py="10px"
              display="flex"
              alignItems="center"
            >
              Linha Zero Açucar
            </GridItem>
            <GridItem h="100%">
              <Img
                src={require('../assets/linha-especial2.png')}
                maxH="300px"
              ></Img>
            </GridItem>
            <GridItem
              h="100%"
              fontSize="3xl"
              py="10px"
              display="flex"
              alignItems="end"
            >
              <Link bg="purple.400" p="10px" borderRadius="3xl">
                Saiba mais
              </Link>
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem bg="green.300" w="100%" h="400px" borderRadius="3xl">
          <Grid
            templateRows="1fr 1fr 1fr"
            h="100%"
            justifyItems="center"
            color="black"
          >
            <GridItem
              h="100%"
              fontSize="3xl"
              py="10px"
              display="flex"
              alignItems="center"
            >
              Linha Gourmet
            </GridItem>
            <GridItem h="100%">
              <Img
                src={require('../assets/linha-especial2.png')}
                maxH="300px"
              ></Img>
            </GridItem>
            <GridItem
              h="100%"
              fontSize="3xl"
              py="10px"
              display="flex"
              alignItems="end"
            >
              <Link bg="green.400" p="10px" borderRadius="3xl">
                Saiba mais
              </Link>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}
