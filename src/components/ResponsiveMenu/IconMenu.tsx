import { Box, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

interface IconMenuProps {
  name: string;
  link: string;
}

export default function IconMenu(props: IconMenuProps) {
  return (
    <Box display="flex" w="100%" h="100%">
      <Link
        as={ReactRouterLink}
        to={props.link}
        fontSize={{ md: 'sm', lg: 'xl' }}
        w="100%"
        h="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        _hover={{
          background: 'blue.200',
          color: 'black',
          fontSize: '2xl',
          p: '10px',
          borderRadius: 'xl',
        }}
      >
        {props.name}
      </Link>
    </Box>
  );
}
