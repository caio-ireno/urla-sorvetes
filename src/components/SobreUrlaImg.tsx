import { Divider, Grid, GridItem, Img, Text } from '@chakra-ui/react';
import ImgUrla from '../assets/fabrica.jpg';

export default function SobreUrlaImg() {
  return (
    <div>
      <Grid
        templateColumns={{
          base: '1fr 1fr',
          xsm: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr',
          '2xl': '1fr 500px',
        }}
        gap={6}
        m="50px"
      >
        <GridItem w="100%" bg="gray.50">
          <Text
            fontFamily="sans-serif"
            fontSize="4xl"
            color="black"
            mt="10px"
            mb="10px"
            ml="20px"
          >
            Nossos Fundadores
          </Text>
          <Divider borderColor="black" />

          <Text
            color="black"
            mt="10px"
            fontFamily="sans-serif"
            fontSize="lg"
            ml="20px"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            sunt vel maiores incidunt et mollitia minus, ducimus dolorum,
            consequatur fugiat nesciunt consectetur ex dicta esse. Ipsa
            similique reiciendis voluptatibus iusto. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veritatis sunt vel maiores incidunt et
            mollitia minus, ducimus dolorum, consequatur fugiat nesciunt
            consectetur ex dicta esse. Ipsa similique reiciendis voluptatibus
            iusto.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Veritatis sunt vel maiores incidunt et mollitia minus, ducimus
            dolorum, consequatur fugiat nesciunt consectetur ex dicta esse. Ipsa
            similique reiciendis voluptatibus iusto.Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veritatis sunt vel maiores incidunt et
            mollitia minus, ducimus dolorum, consequatur fugiat nesciunt
            consectetur ex dicta esse. Ipsa similique reiciendis voluptatibus
            iusto.
          </Text>
        </GridItem>
        <GridItem display="flex " w="100%" justifyContent="center">
          <Img src={ImgUrla} maxH="400px"></Img>
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{
          base: '1fr 1fr',
          xsm: '1fr',
          md: '1fr 1fr',
          lg: '1fr 1fr',
          '2xl': '500px 1fr',
        }}
        gap={6}
        mb="50px"
        mr="50px"
        ml="50px"
      >
        <GridItem display="flex " w="100%" justifyContent="center">
          <Img
            src={ImgUrla}
            display={{ sm: 'none', md: 'flex' }}
            maxH="400px"
          ></Img>
        </GridItem>
        <GridItem w="100%" bg="gray.50">
          <Text
            fontFamily="sans-serif"
            fontSize="4xl"
            color="black"
            mt="10px"
            mb="10px"
            ml="20px"
          >
            Nossos Fundadores
          </Text>
          <Divider borderColor="black" />
          <Text
            color="black"
            mt="10px"
            fontFamily="sans-serif"
            fontSize="lg"
            ml="20px"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
            sunt vel maiores incidunt et mollitia minus, ducimus dolorum,
            consequatur fugiat nesciunt consectetur ex dicta esse. Ipsa
            similique reiciendis voluptatibus iusto. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veritatis sunt vel maiores incidunt et
            mollitia minus, ducimus dolorum, consequatur fugiat nesciunt
            consectetur ex dicta esse. Ipsa similique reiciendis voluptatibus
            iusto.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Veritatis sunt vel maiores incidunt et mollitia minus, ducimus
            dolorum, consequatur fugiat nesciunt consectetur ex dicta esse. Ipsa
            similique reiciendis voluptatibus iusto.Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Veritatis sunt vel maiores incidunt et
            mollitia minus, ducimus dolorum, consequatur fugiat nesciunt
            consectetur ex dicta esse. Ipsa similique reiciendis voluptatibus
            iusto.
          </Text>
        </GridItem>
      </Grid>
    </div>
  );
}
