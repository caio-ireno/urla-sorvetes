import { Box, Grid, GridItem, IconButton, Img, Text } from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  return (
    <Grid
      templateColumns="150px 1fr"
      bg="blue.300"
      w="100%"
      h="100%"
      p="20px"
      alignItems="center"
    >
      <GridItem justifyContent="center" display="flex">
        <Img
          src={require('../assets/urla.png')}
          maxH={{ base: '50px', md: '50px', lg: '100px' }}
        ></Img>
      </GridItem>

      <GridItem
        justifyContent="end"
        display="grid"
        gridTemplateRows="1fr 1fr"
        gap="20px"
      >
        <Box display="flex" justifyContent="center">
          <IconButton
            bg="transparent"
            color="black"
            as="a"
            href="#"
            aria-label="LinkedIn"
            icon={<FaLinkedin fontSize="2rem" />}
          />
          <IconButton
            bg="transparent"
            color="black"
            as="a"
            href="#"
            aria-label="GitHub"
            icon={<FaInstagram fontSize="2rem" />}
          />
          <IconButton
            bg="transparent"
            color="black"
            as="a"
            href="#"
            aria-label="Twitter"
            icon={<FaFacebook fontSize="2rem" />}
          />
        </Box>

        <Text fontSize={{ md: 'md', lg: 'xl' }} color="black">
          &copy; {new Date().getFullYear()} Urla Sorvetes, Inc. All rights
          reserved.
        </Text>
      </GridItem>
    </Grid>
  );
}
