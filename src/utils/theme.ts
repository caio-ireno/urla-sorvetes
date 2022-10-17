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

  fonts: {
      body: "Fredoka One",
      heading: 'Times New Roman, sans-serif',
      mono: 'Times New Roman, sans-serif', 
    }



})

export default theme