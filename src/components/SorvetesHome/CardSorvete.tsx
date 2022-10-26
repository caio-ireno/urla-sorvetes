import { Grid, GridItem, Img, Link } from '@chakra-ui/react';

interface CardSorveteProps {
  name: string;
  img: string | any;
}

export default function CardSorvete(props: CardSorveteProps) {
  return (
    <Grid
      templateRows="1fr 1fr 1fr"
      h="100%"
      justifyItems="center"
      color="black"
    >
      <GridItem
        h="100%"
        fontSize={{ xsm: '2xl', sm: '2xl', md: '3xl', lg: '2xl', xl: '3xl' }}
        display="flex"
        alignItems="center"
      >
        {props.name}
      </GridItem>
      <GridItem h="100%" display="flex" alignItems="center">
        <Img src={props.img} maxH="300px"></Img>
      </GridItem>
      <GridItem
        h="100%"
        fontSize="3xl"
        py="10px"
        display="flex"
        alignItems="end"
      >
        <Link
          fontSize={{ xsm: '2xl', sm: '2xl', md: '3xl', lg: '2xl', xl: '3xl' }}
          borderRadius="3xl"
        >
          Saiba mais
        </Link>
      </GridItem>
    </Grid>
  );
}
