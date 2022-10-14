import { extendTheme } from '@chakra-ui/react' // Importe do chakra

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: "white",
        color: 'cyan.50',
        fonts: "Fredoka One"
      },
    }),
  },
})

export default theme