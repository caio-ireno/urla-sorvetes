import { extendTheme } from '@chakra-ui/react' // Importe do chakra

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "blue.400",
        color: 'cyan.50',
      },
    }),
  },
})

export default theme